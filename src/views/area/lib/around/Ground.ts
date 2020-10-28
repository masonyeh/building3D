import * as THREE from 'three';
import groundImg from '../../images/ground.jpg'

/**
 * 地面类
 */
export default class Ground extends THREE.Group{

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
    let geometry = new THREE.PlaneGeometry(50, 50, 4, 4)
    const textureLoader = new THREE.TextureLoader()
                                   .load(groundImg,
                                         function(texture){
                                            console.log('load:',texture);
                                        },
                                        function(event){
                                            console.log('event:',event);
                                        },
                                        function(error){
                                          console.error('error:',error)
                                        }
                                        );

    let material = new THREE.MeshBasicMaterial({
      map: textureLoader
    })
    let ground = new THREE.Mesh(geometry, material)
    ground.rotation.x = - Math.PI / 2
    this.add(ground)
  }


}