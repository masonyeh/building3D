import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import {Ground,Building} from './lib';
import {OrbitControls} from './lib/utils/OrbitControls';
import mockData from './mock/data';
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
    const camera = global.camera = new THREE.PerspectiveCamera(-60, width / height, 1, 1000000)
    camera.position.set( 100*50, 100*50, -1000*50 );

    // 创建一个 WebGL 渲染器，Three.js 还提供 <canvas>, <svg>, CSS3D 渲染器。
    const renderer = global.renderer =  new THREE.WebGLRenderer({ antialias: true } )
    renderer.setPixelRatio( window.devicePixelRatio );
    // 设置渲染器的清除颜色（即背景色）和尺寸。
    // 若想用 body 作为背景，则可以不设置 clearColor，然后在创建渲染器时设置 alpha: true，即 new THREE.WebGLRenderer({ alpha: true })
    renderer.setClearColor(0xffffff)
    renderer.setSize(width, height)

    let axes = new THREE.AxesHelper(100000);
    // const cameraHelper = new THREE.CameraHelper(camera);
    // scene.add(cameraHelper);
    scene.add(axes);
    
    //加载区域
    loadArea();

    scene.add(global.group);

    // 将渲染器的输出（此处是 canvas 元素）插入到 body 中
    container?.appendChild(renderer.domElement)
    
    const controls = global.controls = new OrbitControls( camera, renderer.domElement );
    controls.enableDamping      = true; // an animation loop is required when either damping or auto-rotation are enabled
    controls.screenSpacePanning = false;
    controls.minDistance        = 10;
    controls.dampingFactor      = 0.05;
    controls.maxDistance        = 1000000;
    // controls.maxPolarAngle   = Math.PI / 2;

    loadDemo();
    animate();
  }

  /**
   * 加载区域
   */
  function loadArea(){
    const global   = globalRef.current;
    const ground    = new Ground();
    const building = new Building();

    const buildData = mockData.build[0];
    console.log('buildData',buildData);
    building.setData(buildData);
    building.draw();

      //机器人
      const robotGeometry = new THREE.BoxGeometry( 10*50, 20*50, 10*50 );
      const robotMaterial = new THREE.MeshBasicMaterial( {color: 0xFF0000} );
      const cube = new THREE.Mesh( robotGeometry, robotMaterial );

      // cube.position.x = 25723;cube.position.y = 47099;
      cube.position.x = 100*50;cube.position.y = 1000;

      global.group.add( cube ); 
      // global.group.position.x = -(Math.PI /2)*2;

      // global.group.rotation.y = (Math.PI /2)*4;
      // global.group.rotation.x = -Math.PI/2;
    // const box = new THREE.Box3().setFromObject( building );
    // const {max,min} = box;

    // const x = Math.max(max.x,min.x);
    // const z = Math.max(max.z,min.z);
    // global.group.position.x = 100;
    // global.group.position.z = z;
    // console.log('box 大小',x,z,box,Math.PI)
    // var box = new THREE.Box3();
    // console.log('building大小',box.expandByObject(building))

    // building.position.z = 0;
    // building.rotation.x =  (Math.PI / 2)*3
    // building.rotation.z =  -Math.PI/2
    // console.log('building',global.renderer.getSize(building));
    // floor.position.z = 50 * index;
    // floor.rotation.x =  -Math.PI / 2

    // building.rotation.z =  0
    // building.rotation.y =  Math.PI
    // building.rotation.y =  (Math.PI/2)*3
    // global.group.position.y =3;
    global.group.add(ground);
    global.group.add(building);
    
  
  }

  /**
   * 动画渲染
   */
  function animate() {
    let {controls} = globalRef.current;
    requestAnimationFrame( animate );

    controls.update(); // only required if controls.enableDamping = true, or if controls.autoRotate = true
    render();
  }

  /**
   * 加载demo数据
   */
  function loadDemo(){
    // const global = globalRef.current; 
    // const geometry = new THREE.BoxGeometry( 1, 1, 0 );
    // const material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
    // const cube = new THREE.Mesh( geometry, material );
    // global.scene.add( cube ); 

    
  }

  function render() {
    let {scene,camera,renderer} = globalRef.current;

    renderer.render( scene, camera );
  }

  return (
      <div ref={webGLRef}></div>
  )
}