import * as THREE from 'three';
import Floor from './Floor';

export default class Building extends THREE.Group{

  constructor(){
    super();
    this.draw();
  }

  draw(){
      const floor = new Floor();
      this.add(floor);
  }


  


}