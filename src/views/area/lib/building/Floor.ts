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
  }
}