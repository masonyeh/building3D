interface CHANGE_PROPS {
  width?:number,
  height?:number,
  depth?:number,
  x:number,
  y:number
}

interface XY{
  x:number,
  y:number,
  z:number
}
/**
 * @param props.x x坐标
 * @param props.y y坐标
 * @param props.depth  对象深度 (可选)
 * 
 * @returns 转换后的坐标系 
 * Object{
 *  x : x坐标,
 *  y : y坐标
 * } 
 * 
 * 注：3d坐标系转2d坐标系，高以+z轴上升，x为正数不变， y正数转负数；
 */
export const coordinateTo2D=(props:CHANGE_PROPS):XY=>{
  const {depth =0,x,y} = props; 
  
  return {
    x : x,
    y : -y,
    z : depth
  }
}

/**
 * 对象中心点坐标转2D对象左上角0,0,0为起始点
 * @param width   宽
 * @param height  高
 * @param depth   深
 */
export const centerPositionTo2D =(width:number,height:number,depth?:number)=>{
  const x = width / 2,
        y =-height / 2,
        z = depth ? depth / 2 : 0;
  return {x,y,z}
}

/**
 * 像素转毫米
 * @param value  像素值
 * 
 * @returns value 毫米值
 * 
 * 注：乘50 代表： 1像素等于5厘米，厘米转毫米  等于 (x * 5) * 10
 */
export const px2mm = (value:number):number=>{
  return value * 50;
}