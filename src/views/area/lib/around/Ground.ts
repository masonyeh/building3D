import * as THREE from 'three';
import groundImg from '../../images/ground.jpg'

/**
 * 地面类
 */
export default class Ground {
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
    this.ui.add(ground)
  }


}