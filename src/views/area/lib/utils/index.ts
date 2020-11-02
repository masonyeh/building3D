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
 * @param props.width  对象宽 (可选)
 * @param props.height 对象高 (可选)
 * @param props.depth  对象深度 (可选)
 * 
 * @returns 转换后的坐标系 
 * Object{
 *  x : x坐标,
 *  y : y坐标
 * } 
 * 
 * 注：(1).3d坐标系转2d坐标系，高以+z轴上升，x为正数不变， y正数转负数；
 *    (2).设置几何对象参数width,height,depth一起转坐标系时，将对象的中心点转为2d左上角为0,0,0
 */
export const coordinateTo2D=(props:CHANGE_PROPS):XY=>{
  const {width=0,height=0,depth =0,x,y} = props;
  let cx      = x,
      cy      = -y, 
      cz      = depth | 0,
      cWidth  = width | 0,
      cHeight = height,
      cDepth  = depth;

  //支持将3D对象中心点坐标 => 2D左上角起始点
  if(cWidth || cHeight || cDepth){
    // const twoD = centerPositionTo2D(cWidth,cHeight,cDepth);
    // cx += twoD.x;
    // cy += twoD.y;
    // cz  = twoD.z;
  }
  
  return {
    x : cx,
    y : cy,
    z : cz
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