
export interface Wall{
  list:Array<object>
}

export interface Map{
  id:number,
  url:string
}

export interface IFloorData{
  wall:Wall | null,
  map:Map | null
}