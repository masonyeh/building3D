import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import {Ground,Building} from './lib';
import {OrbitControls} from './lib/utils/OrbitControls';

/**
 * 内部全局对象
 */
interface IGlobal {
  camera  : any,
  scene   : any,
  renderer: any,
  mesh    : any,
  group   : any,
  controls: any,
  fov     : number,
  near    : number,
  far     : number
} 

/**
 * 区域UI层
 */
export default function Index(){

  const globalRef = useRef<IGlobal>({
                                      camera  : null,
                                      scene   : null,
                                      renderer: null,
                                      mesh    : null,
                                      group   : new THREE.Group(),
                                      controls: null,
                                      fov     : 0,
                                      near    : 0,
                                      far     : 0
                                    });
  const webGLRef  = React.createRef<HTMLInputElement>();

  useEffect(init,[webGLRef]); 
  /**
   * 初始化
   */
  function init(){
    const global = globalRef.current;
    const container = webGLRef.current;
    
    // 获取浏览器窗口的宽高，后续会用
    const {innerWidth:width,innerHeight:height} = window;
    
    // 创建一个场景
    const scene = global.scene =  new THREE.Scene()
    // 创建一个具有透视效果的摄像机
    const camera = global.camera = new THREE.PerspectiveCamera(60, width / height, 1, 10000)
    camera.position.set( 0, 0, 200 );

    // 创建一个 WebGL 渲染器，Three.js 还提供 <canvas>, <svg>, CSS3D 渲染器。
    const renderer = global.renderer =  new THREE.WebGLRenderer({ antialias: true } )
    renderer.setPixelRatio( window.devicePixelRatio );
    // 设置渲染器的清除颜色（即背景色）和尺寸。
    // 若想用 body 作为背景，则可以不设置 clearColor，然后在创建渲染器时设置 alpha: true，即 new THREE.WebGLRenderer({ alpha: true })
    renderer.setClearColor(0xffffff)
    renderer.setSize(width, height)

    let axes = new THREE.AxesHelper(100);
    const cameraHelper = new THREE.CameraHelper(camera);
    scene.add(cameraHelper);
    scene.add(axes);
    
    //加载区域
    loadArea();

    scene.add(global.group);

    // 将渲染器的输出（此处是 canvas 元素）插入到 body 中
    container?.appendChild(renderer.domElement)
    
    const controls = global.controls =  new OrbitControls( camera, renderer.domElement );

    controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
    controls.dampingFactor = 0.05;

    controls.screenSpacePanning = false;

    controls.minDistance = 10;
    controls.maxDistance = 5000;

    controls.maxPolarAngle = Math.PI / 2;

    loadDemo();
    animate();
  }

  /**
   * 加载demo数据
   */
  function loadDemo(){
    const {scene} = globalRef.current;
    var geometry = new THREE.CylinderBufferGeometry( 0, 10, 30, 4, 1 );
    var material = new THREE.MeshPhongMaterial( { color: 0xffffff, flatShading: false } );

    for ( var i = 0; i < 500; i ++ ) {

      var mesh = new THREE.Mesh( geometry, material );
      mesh.position.x = Math.random() * 1600 - 800;
      mesh.position.y = 0;
      mesh.position.z = Math.random() * 1600 - 800;
      mesh.updateMatrix();
      mesh.matrixAutoUpdate = false;
      scene.add( mesh );
    }

    // lights
    var light = new THREE.DirectionalLight( 0xffffff );
    light.position.set( 1, 1, 1 );
    scene.add( light );

    var light1 = new THREE.DirectionalLight( 0x002288 );
    light.position.set( - 1, - 1, - 1 );
    scene.add( light1 );

    var light2 = new THREE.AmbientLight( 0x222222 );
    scene.add( light2 );

    let heartShape = new THREE.Shape();
    heartShape.moveTo( 0, 0 );
    heartShape.lineTo(100,100);
    heartShape.bezierCurveTo( 25, 25, 20, 0, 0, 0 );
    heartShape.bezierCurveTo( 30, 0, 30, 35,30,35 );
    heartShape.bezierCurveTo( 30, 55, 10, 77, 25, 95 );
    heartShape.bezierCurveTo( 60, 77, 80, 55, 80, 35 );
    heartShape.bezierCurveTo( 80, 35, 80, 0, 50, 0 );
    heartShape.bezierCurveTo( 35, 0, 25, 25, 25, 25 );

    let extrudeSettings = { amount: 8, bevelEnabled: true, bevelSegments: 2, steps: 2, bevelSize: 1, bevelThickness: 1 };

    let geometry2 = new THREE.ExtrudeGeometry( heartShape, extrudeSettings );
    let mesh2     = new THREE.Mesh( geometry2, new THREE.MeshPhongMaterial() );
    scene.add(mesh2);

  }


  /**
   * 加载区域
   */
  function loadArea(){
    const global   = globalRef.current;
    const ground    = new Ground();
    const building = new Building();
    global.group.add(ground);
    // global.group.add(building);
  }

  function animate() {
    let {controls} = globalRef.current;
    requestAnimationFrame( animate );

    controls.update(); // only required if controls.enableDamping = true, or if controls.autoRotate = true
    render();
  }

  function render() {
    let {scene,camera,renderer} = globalRef.current;

    renderer.render( scene, camera );
  }

  return (
      <div ref={webGLRef}></div>
  )
}