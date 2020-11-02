import * as THREE from 'three';
import { Wall,Map } from '..';
import {IFloorData, IFloorSize} from '../types';


export default class Floor extends THREE.Group{
  public  mapId : number = 0;
  private length: number = 0; //长
  private width : number = 0; //宽
  public static height: number = 5 * 10 * 500; //高 （1像素=5厘米 1厘米=10毫米 500像素）
  private data:IFloorData = {
                          wall  : null,
                          map   : null
                       } 
 

  /**
   * 设置数据
   * @param data 
   */
  setData(data:IFloorData):void{
    this.data = data;
  }
  
  /**
   * 获取楼层
   */
  getSize():IFloorSize{
    return {
      length:this.length,
      width :this.width,
      height:Floor.height,
      acreage:this.width * this.length
    }
  }

  /**
   * 获取楼层数据
   */
  getData():IFloorData{
    return this.data;
  }

  /**
   * 
   * 绘画
   * @param cb      完成回调 （可选）
   * @param errorCb 绘画失败 （可选）
   */
  draw(cb ?: () => void , errorCb ?: (event : any) => void):void{ 
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
      mapObj.asyncDraw()
            .then(()=>{
              const {width,height} = mapObj.getSize();
              // this.width  = Math.min(width,height); //宽
              // this.length = Math.max(width,height); //长
              this.mapId = map.id;
              this.width  = width; //宽
              this.length = height; //长

              this.add(mapObj);
              cb && cb();
            }).catch((error)=>{
              errorCb && errorCb(error);
            });
    }
    this.createAxes();
  }

 
  /**
   * 异步绘画
   */
  asyncDraw():Promise<any>{ 
    return new Promise((resove,reject)=>{
        this.draw(()=>{
          resove(true);
        },(event)=>{
          reject(event);
        });
    })
   
  }

  /**
   * 创建楼层坐标辅助线
   */
  createAxes():void{
    //X轴
    const materialX     = new THREE.MeshBasicMaterial({color: 0xDC143C, side: THREE.FrontSide});
    const cubeGeometryX = new THREE.BoxGeometry(80, 10000, 80);
    const cubeX         = new THREE.Mesh( cubeGeometryX, materialX );
    cubeX.position.x = 0;
    cubeX.position.y = 0;
    cubeX.position.z = 0;
    this.add(cubeX);

    //Y轴
    const materialY     = new THREE.MeshBasicMaterial({color: 0x00FFFF,side: THREE.FrontSide});
    const cubeGeometryY = new THREE.BoxGeometry(10000, 80, 80);
    const cubeY         = new THREE.Mesh( cubeGeometryY, materialY );
    cubeY.position.x = 0;
    cubeY.position.y = 0;
    cubeY.position.z = 0;
    this.add(cubeY);

    //Z轴
    const materialZ     = new THREE.MeshBasicMaterial({ color: 0x0000FF, side: THREE.FrontSide});
    const cubeGeometryZ = new THREE.BoxGeometry(80, 80, 10000);
    const cubeZ = new THREE.Mesh( cubeGeometryZ, materialZ );
    cubeZ.position.x = 0;
    cubeZ.position.y = 0;
    cubeZ.position.z = 0;
    this.add(cubeZ);
  }
}