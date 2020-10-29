import * as THREE from 'three';
import Floor from './Floor';

export default class Building extends THREE.Group{

  constructor(){
    super();
    this.draw();
  }

  draw(){
    [1,2,3,4,5].forEach((data,index)=>{
      const floor = new Floor();
      console.log('index * 100',index,index * 100)
      floor.position.y = index * 80;
      floor.position.z = 50* index;
      this.add(floor);
    }) 
  }


  


}