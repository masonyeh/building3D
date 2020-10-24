import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * 内部全局对象
 */
interface IGlobal {
  camera  : any,
  scene   : any,
  renderer: any,
  mesh    : any,
  group   : any,
  fov     : number,
  near    : number,
  far     : number
} 

export default function Index(){

  const globalRef = useRef<IGlobal>({
                                      camera  : null,
                                      scene   : null,
                                      renderer: null,
                                      mesh    : null,
                                      group   : null,
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
    let {scene,camera,renderer} = globalRef.current;
    const container = webGLRef.current;
    
    // 获取浏览器窗口的宽高，后续会用
    const {innerWidth:width,innerHeight:height} = window;
    
    // 创建一个场景
    scene = new THREE.Scene()
    // 创建一个具有透视效果的摄像机
    camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 800)
    // 设置摄像机位置，并将其朝向场景中心
    camera.position.x = 100
    camera.position.y = -100
    camera.position.z = 100
    camera.lookAt(scene.position)

    // 创建一个 WebGL 渲染器，Three.js 还提供 <canvas>, <svg>, CSS3D 渲染器。
    renderer = new THREE.WebGLRenderer()
    // 设置渲染器的清除颜色（即背景色）和尺寸。
    // 若想用 body 作为背景，则可以不设置 clearColor，然后在创建渲染器时设置 alpha: true，即 new THREE.WebGLRenderer({ alpha: true })
    renderer.setClearColor(0xffffff)
    renderer.setSize(width, height)

    let axes = new THREE.AxesHelper(20);
    scene.add(axes);
    
    // 将渲染器的输出（此处是 canvas 元素）插入到 body 中
    container?.appendChild(renderer.domElement)
    // 渲染，即摄像机拍下此刻的场景
    renderer.render(scene, camera)
  }

  return (
      <div ref={webGLRef}></div>
  )
}