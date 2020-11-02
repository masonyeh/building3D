import * as THREE from 'three';
import {ELoad,IPostion} from '../types';
import {px2mm,centerPositionTo2D} from '../utils/index';
// import groundImg from '../../images/ground.jpg'

export default class Map extends THREE.Group{

  private mapUrl:string   = '';   //地图地址
  private mapId :number   = -1;   //地图id
  public  width :number   = 0;    //宽
  public  height:number   = 0;    //高
  public  load :ELoad     = ELoad.UNLOAD;//加载状态

  /**
   * 构造函数
   */
  constructor(id:number,url:string){
    super();

    this.mapId  = id;
    this.mapUrl = url;
    this.draw();
  }

  /**
   * 获取地图大小
   */
  getSize():{width:number,height:number}{
    return {
      width:this.width,
      height:this.height
    }
  }

  /**
   * 绘画
   * @param cb      完成回调 （可选）
   * @param errorCb 绘画失败 （可选）
   */
  draw(cb ?: () => void , errorCb ?: (event : any) => void):void{

    const textureLoader = new THREE.TextureLoader()
    .load(this.mapUrl,(context)=>{ 
          
          this.load = ELoad.LOADED;
         
          //图片加载成功后，添加地面
          let {width,height} = context.image;
          this.width  = px2mm(width);
          this.height = px2mm(height); 
          
          //转坐标
          const {x,y,z} = centerPositionTo2D(this.width,this.height);

          //添加地图厚度
          this.addGround(this.width,this.height,{x,y,z});
          cb && cb();

          //地图贴纸
          let geometry = new THREE.PlaneGeometry(this.width, this.height, 4, 4)
          let material = new THREE.MeshBasicMaterial({
            map: textureLoader,
            // color: THREE.FaceColors, wireframe:true, //网格
            // transparent:true,opacity:0               //透明
          })
          let ground = new THREE.Mesh(geometry, material)
          ground.position.z = z;
          ground.position.x = x;
          ground.position.y = y;
          this.add(ground)
    },undefined,(event)=>{
      errorCb && errorCb(event);
      this.load = ELoad.LOADED_FAIL;
      console.error(`ooops,loading mapid ${this.mapId} was fail,please check about ${this.mapUrl} is correct?`,event);
    }); 
  }


  /**
   * 异步绘画
   * 
   * 成功后
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
   * 添加地面
   * @param width     高
   * @param height    高
   * @param position  坐标
   */
  addGround(width:number,height:number,position?:IPostion):void{

    const {x,y,z} = position || {x:0,y:0,z:0};
    const material = new THREE.MeshBasicMaterial({
        color: 0x696969,
        side: THREE.FrontSide
    });
    // 墙面1
    var cubeGeometry = new THREE.BoxGeometry(width+1000, height+1000, -1000);
    // 合成立方体
    var cube1 = new THREE.Mesh( cubeGeometry, material );
    // 设置墙面位置
    cube1.position.x = x;
    cube1.position.y = y;
    cube1.position.z = z;
    // 在场景中添加墙面
    this.add(cube1);
  }
}