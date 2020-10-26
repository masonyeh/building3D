import * as THREE from 'three';
import Floor from './Floor';

export default class Building{
  ui:THREE.Group = new THREE.Group(); 

  constructor(){
    this.draw();
  }

  getUI(){
    return this.ui;
  }

  draw(){
      const floor = new Floor();
      const floorUI = floor.getUI();
      this.ui.add(floorUI);
  }


  


}