import * as THREE from 'three';

export default class Floor{
  ui:THREE.Group = new THREE.Group(); 

  /**
   * 构造函数
   */
  constructor(){
    this.draw();
  }

  /**
   * 获取ui绘画部分
   */
  getUI(){
    return this.ui;
  }

  /**
   * 绘画
   */
  draw(){
    let geometry = new THREE.BoxBufferGeometry(10, 10, 44, 4)

    let material = new THREE.MeshBasicMaterial( {color: 0x00ff00})
    let ground = new THREE.Mesh(geometry, material)
    ground.rotation.x = - Math.PI / 2
    this.ui.add(ground)
  }

}