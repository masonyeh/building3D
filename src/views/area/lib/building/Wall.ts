
import * as THREE from 'three';

export default class Wall extends THREE.Group{

  private list:Array<object> | null = [];

  /**
   * 构造函数
   * @param list 墙数据
   */
  constructor(list:Array<object> | null){
    super()
    this.list = list;
  }

  /**
   * 设置墙数据
   * @param list 
   */
  setData(list:Array<object> | null){
    this.list = list;
  }

  /**
   * 绘画
   */
  draw(){  
      // const material = new THREE.MeshBasicMaterial({
      //                                               color: 0xb5bdc3,
      //                                               side: THREE.FrontSide
      //                                           });
      //       // 墙面1
      //       var cubeGeometry = new THREE.BoxGeometry(1, 50, 80);
      //       // 合成立方体
      //       var cube1 = new THREE.Mesh( cubeGeometry, material );
      //       // 设置墙面位置
      //       cube1.position.x = 0;
      //       cube1.position.y = 25;
      //       cube1.position.z = 30;
      //       cube1.rotation.y += 0.5*Math.PI;
      //       // 在场景中添加墙面
      //       this.add(cube1);
 
      //       // 墙面2
      //       var cubeGeometry = new THREE.BoxGeometry(1, 50, 60);
      //       // 合成立方体
      //       var cube = new THREE.Mesh( cubeGeometry, material );
      //       // 设置墙面位置
      //       cube.position.x =40;
      //       cube.position.y = 25;
      //       cube.position.z = 0;
      //       // 在场景中添加墙面
      //       this.add(cube);
 
      //       // 墙面3
      //       var cubeGeometry = new THREE.BoxGeometry(1, 50, 80);
      //       // 合成立方体
      //       //var cube = new THREE.Mesh( cubeGeometry, faceMaterial );
 
      //       var cube3 = new THREE.Mesh( cubeGeometry,material );            // 设置墙面位置
      //       cube3.position.x = 0;
      //       cube3.position.y = 25;
      //       cube3.position.z = -30;
      //       cube3.rotation.y += 0.5*Math.PI;
      //       // 在场景中添加墙面
      //      this.add(cube3);

      //      // 墙面3
      //      var cubeGeometry = new THREE.BoxGeometry(1, 50, 20);
      //      // 合成立方体
      //      //var cube = new THREE.Mesh( cubeGeometry, faceMaterial );

      //      var cube4 = new THREE.Mesh( cubeGeometry,material );            // 设置墙面位置
      //      cube4.position.x = -40;
      //      cube4.position.y = 25;
      //      cube4.position.z = -20;
      //      // 在场景中添加墙面
      //     this.add(cube4);

      //      // 墙面3
      //      var cubeGeometry = new THREE.BoxGeometry(1, 50, 20);
      //      // 合成立方体
      //      //var cube = new THREE.Mesh( cubeGeometry, faceMaterial );

      //      var cube4 = new THREE.Mesh( cubeGeometry,material );            // 设置墙面位置
      //      cube4.position.x = -40;
      //      cube4.position.y = 25;
      //      cube4.position.z = 20;
      //      // 在场景中添加墙面
      //     this.add(cube4);
  }
             
}