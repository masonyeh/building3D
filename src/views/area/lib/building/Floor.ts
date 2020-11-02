import * as THREE from 'three';
import { Wall,Map } from '..';
import {IFloorData} from '../types';


export default class Floor extends THREE.Group{
  
  private data:IFloorData = {
                          wall  : null,
                          map   : null
                       }
  /**
   * 构造函数
   */
  constructor(){
    super();
  }

  /**
   * 设置数据
   * @param data 
   */
  setData(data:IFloorData){
    this.data = data;
  }

  /**
   * 获取楼层数据
   */
  getData(){
    return this.data;
  }

  /**
   * 绘画
   */
  draw(){ 
    const {wall,map} = this.data;

    //墙
    if(wall){
      const wallObj = new Wall(wall.list);
      wallObj.draw();
      this.add(wallObj);
    }
    
    //地图
    if(map){
      const mapObj = new Map(map.id,map.url);
      mapObj.draw();
      this.add(mapObj);
    }


    const material = new THREE.MeshBasicMaterial({
          color: 0xDC143C,
          side: THREE.FrontSide
      });
    // 墙面1
    var cubeGeometry = new THREE.BoxGeometry(80, 10000, 80);
    // 合成立方体
    var cube1 = new THREE.Mesh( cubeGeometry, material );
    // 设置墙面位置
    cube1.position.x = 0;
    cube1.position.y = 0;
    cube1.position.z = 0;
    // 在场景中添加墙面
    this.add(cube1);


    const materialy = new THREE.MeshBasicMaterial({
          color: 0x00FFFF,
          side: THREE.FrontSide
      });
    // 墙面1
    var cubeGeometryy = new THREE.BoxGeometry(10000, 80, 80);
    // 合成立方体
    var cubey = new THREE.Mesh( cubeGeometryy, materialy );
    // 设置墙面位置
    cubey.position.x = 0;
    cubey.position.y = 0;
    cubey.position.z = 0;
    // 在场景中添加墙面
    this.add(cubey);

    const materialz = new THREE.MeshBasicMaterial({
            color: 0x0000FF,
            side: THREE.FrontSide
        });
      // 墙面1
      var cubeGeometryz = new THREE.BoxGeometry(80, 80, 10000);
      // 合成立方体
      var cubez = new THREE.Mesh( cubeGeometryz, materialz );
      // 设置墙面位置
      cubez.position.x = 0;
      cubez.position.y = 0;
      cubez.position.z = 0;
      // 在场景中添加墙面
      this.add(cubez);
  }
}