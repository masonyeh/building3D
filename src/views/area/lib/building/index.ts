import * as THREE from 'three';
import Floor from './Floor';
import {IFloorData,IFloorSize} from '../types';

interface IData {
  id      : number,
  name    : string,
  floors? : Array<any> 
}
export default class Building extends THREE.Group{
  private floorSizeList:Array<IFloorSize> = [];
  private data:IData = {
      id:-1,
      name:'',
      floors:[]
  }
 
  /**
   * 设置数据
   * @param data 
   */
  public setData(data:IData):void{
    this.data = data;
  }

  /**
   * 获取数据
   */
  public getData():IData{
    return this.data;
  }

  /**
   * 获取面积最大的楼层
   */
  getMaxFloor():IFloorSize | null{
    let floors = this.getFloorSizeList();

    floors = floors.sort((a,b)=>b.acreage-a.acreage);
    if(floors.length){
     return  floors[0] || null;
    }
    return null;
  }

  /**
   * 获取所有楼层面积
   */
  getFloorSizeList():Array<IFloorSize>{
    return this.floorSizeList;
  }

  /**
   * 是否渲染完毕
   */
  private isDrawDone():boolean{
    const {floors} = this.data;
    return this.floorSizeList.length === floors?.length ? true : false;
  }
  
  /**
   * 绘画
   */
  public draw(cb ?: () => void):void{

    const {floors} = this.data;
    console.log('floors',floors);

    floors?.map((data:IFloorData,index)=>{
      const floor = new Floor();
      floor.setData(data);
      floor.asyncDraw()
           .then(()=>{
              //楼层叠加
              floor.position.z = index * Floor.height;
              floor.position.x = 10000; //==========偏移量测试各层之类的位置 
              this.add(floor);
              this.floorSizeList.push(floor.getSize());

              if(this.isDrawDone()){
                cb && cb();
              }
            })
            .catch((error)=>{
              const size = {
                length:0,
                width :0,
                height:0,
                acreage:0
              }
              this.floorSizeList.push(size);

              if(this.isDrawDone()){
                cb && cb();
              }
              console.log('draw floor was fail:',error);
            });
            return data;
    })
  }


  /**
   * 异步绘画
   */
  asyncDraw():Promise<IFloorSize | null>{ 
    return new Promise((resove)=>{
        this.draw(()=>{
          resove(this.getMaxFloor());
        });
    })
   
  }
  


}