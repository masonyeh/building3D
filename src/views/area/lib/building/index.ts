import * as THREE from 'three';
import Floor from './Floor';
import {IFloorData} from '../types';

interface IData {
  id      : number,
  name    : string,
  floors? : Array<any> 
}
export default class Building extends THREE.Group{
  private data:IData = {
      id:-1,
      name:'',
      floors:[]
  }

  constructor(){
    super();
  }


  /**
   * 设置数据
   * @param data 
   */
  public setData(data:IData){
    this.data = data;
  }

  /**
   * 获取数据
   */
  public getData(){
    return this.data;
  }

  /**
   * 绘画
   */
  public draw(){

    const {floors} = this.data;
    console.log('floors',floors);
    floors?.map((data:IFloorData,index)=>{
      const floor = new Floor();
      floor.setData(data);
      floor.draw();
      
      // floor.rotation.x = -Math.PI / 2
      console.log('index * 200',index * 200*50)
      floor.position.y = index * 200*50;
      
      this.add(floor);
    })
  }


  


}