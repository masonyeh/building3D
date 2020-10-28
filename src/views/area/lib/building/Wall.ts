
import * as THREE from 'three';

export default class Wall extends THREE.Group{

  constructor(){
    super()
    this.draw();
  }

  draw(){
    const material = new THREE.MeshBasicMaterial({
                                                    color: 0xccffcc,
                                                    side: THREE.DoubleSide
                                                });

    const geometryLateral = new THREE.BoxGeometry(0.2, 10, 5);
    const  wall1 = new THREE.Mesh(geometryLateral, material);
    this.add(wall1);
    wall1.position.x=-1;
    var wall2 = new THREE.Mesh(geometryLateral, material);
    this.add(wall2);
    wall2.position.x=11;
  }
}