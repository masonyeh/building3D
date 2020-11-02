//===================接口=======================
/**
 * 墙体
 */
export interface Wall{
  list:Array<object>
}

/**
 * 地图
 */
export interface Map{
  id:number,
  url:string
}


export interface IFloorSize{
  length:number,  //长
  width:number,   //宽
  height:number,  //高
  acreage:number   //面积
}
/**
 * 楼层数据
 */
export interface IFloorData{
  wall:Wall | null,
  map:Map | null
}

/**
 * 坐标位置
 */
export interface IPostion {
  x:number,
  y:number,
  z:number
}


//===================枚举=======================

/**
 * 加载状态枚举
 */
export enum ELoad{
  UNLOAD,       // 未加载
  LOADDING,     // 加载中
  LOADED,       // 已加载
  LOADED_FAIL   // 加载失败
}