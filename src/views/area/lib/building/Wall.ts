
import * as THREE from 'three';

export default class Wall extends THREE.Group{

  constructor(){
    super()
    this.draw();
  }

  draw(){
    const material = new THREE.MeshBasicMaterial({
                                                    color: 0xccffcc,
                                                    side: THREE.FrontSide
                                                });

    const geometryLateral = new THREE.BoxGeometry(10, 10, 5);
    const  wall1 = new THREE.Mesh(geometryLateral, material);
    wall1.position.x=0;
    wall1.position.y=5;
    this.add(wall1);
    
    var wall2 = new THREE.Mesh(geometryLateral, material);
    wall2.position.x=51;
    wall2.position.y=5;
    this.add(wall2);


   
    
  }
}