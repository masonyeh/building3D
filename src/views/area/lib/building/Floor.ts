import * as THREE from 'three';
import { Wall,Map } from '..';

export default class Floor extends THREE.Group{
  /**
   * 构造函数
   */
  constructor(){
    super();
    this.draw();
  }

  /**
   * 绘画
   */
  draw(){
    // let geometry = new THREE.BoxBufferGeometry(10, 10, 44, 4)

    // let material = new THREE.MeshBasicMaterial( {color: 0x00ff00})
    // let ground = new THREE.Mesh(geometry, material)
    // ground.rotation.x = - Math.PI / 2
    // this.add(ground)
    const map = new Map();
    const wall = new Wall();
    this.add(map);
    this.add(wall);
  }

}