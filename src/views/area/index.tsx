import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import {Ground,Building} from './lib';
import {OrbitControls} from './lib/utils/OrbitControls';
import mockData from './mock/data';
import {px2mm,coordinateTo2D} from './lib/utils/index'
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

  useEffect(init,[webGLRef,animate]); 
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
    const camera = global.camera = new THREE.PerspectiveCamera(90, width / height, 1, 1000000)
    camera.position.set( 5000, -100000, 100000 );

    // 创建一个 WebGL 渲染器，Three.js 还提供 <canvas>, <svg>, CSS3D 渲染器。
    const renderer = global.renderer =  new THREE.WebGLRenderer({ antialias: true } )
    renderer.setPixelRatio( window.devicePixelRatio );
    // 设置渲染器的清除颜色（即背景色）和尺寸。
    // 若想用 body 作为背景，则可以不设置 clearColor，然后在创建渲染器时设置 alpha: true，即 new THREE.WebGLRenderer({ alpha: true })
    renderer.setClearColor(0xffffff)
    renderer.setSize(width, height)

    let axes = new THREE.AxesHelper(100000);
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
    // controls.maxPolarAngle   = -Math.PI ;
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
    building.setData(buildData);
    building.asyncDraw()
            .then((size)=>{
                if(size){
                  const sx = size.width/2,sy = size.length/2;
                  global.controls.target = new THREE.Vector3(sx,-sy,0);
                  const value = px2mm(10);
                  const {x,y,z} = coordinateTo2D({width:value,height:value,depth:value,x:sx,y:sy});
                  //旋转点位
                  const centerGeometry = new THREE.BoxGeometry( value,value,300000 );
                  const centerMaterial = new THREE.MeshBasicMaterial( {color: 0xFFBB00} );
                  const cube = new THREE.Mesh( centerGeometry, centerMaterial );
                  cube.position.x = x;
                  cube.position.y = y;
                  cube.position.z = z;
              
                  global.group.add( cube );  

                  
                  const [f1,f2,f3] = building.children.map((data:any)=>data).sort((a,b)=>a.mapId-b.mapId);
                  create1FRobot(f1);
                  create2FRobot(f2);
                  create3FRobot(f3);
                }
            });

  
    global.group.add(ground);
    global.group.add(building);
  }


  function create1FRobot(group:THREE.Object3D){
    const value = px2mm(10);
    //机器人
    const robotGeometry = new THREE.BoxGeometry( value,value,value );
    const robotMaterial = new THREE.MeshBasicMaterial( {color: 0xFF0000} );
    const cube = new THREE.Mesh( robotGeometry, robotMaterial );

    cube.position.x = 25686;
    cube.position.y = -47062;

    group.add( cube );  
  }


  function create2FRobot(group:THREE.Object3D){
    const value = px2mm(10);
    //机器人
    const robotGeometry = new THREE.BoxGeometry( value,value,value );
    const robotMaterial = new THREE.MeshBasicMaterial( {color: 0xFF0000} );
    const cube = new THREE.Mesh( robotGeometry, robotMaterial );

    cube.position.x = 10728;
    cube.position.y = -12876;
    group.add( cube );  
  }

  function create3FRobot(group:THREE.Object3D){
    const value = px2mm(10);
    //机器人
    const robotGeometry = new THREE.BoxGeometry( value,value,value );
    const robotMaterial = new THREE.MeshBasicMaterial( {color: 0xFF0000} );
    const cube = new THREE.Mesh( robotGeometry, robotMaterial );

    cube.position.x = 33408;
    cube.position.y = -39612;
    group.add( cube );  
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
 

  function render() {
    let {scene,camera,renderer} = globalRef.current;

    renderer.render( scene, camera );
  }

  return (
      <div ref={webGLRef}></div>
  )
}