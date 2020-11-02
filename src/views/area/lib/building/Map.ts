import * as THREE from 'three';
// import groundImg from '../../images/ground.jpg'


export default class Map extends THREE.Group{

  private mapUrl:string   = '';
  private mapId :number   = -1;
  public  width:number    = 0;
  public  height:number   = 0;


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
   * 绘画
   */
  draw(){ 
    const textureLoader = new THREE.TextureLoader()
                .load(this.mapUrl,(context)=>{ 
                      //图片加载成功后，添加地面
                      const {width,height} = context.image;
                      this.addGround(width*50,height*50);
                      console.log(`${this.mapId}F`,width,height)
                      let geometry = new THREE.PlaneGeometry(width*50, height*50, 4, 4)
                      let material = new THREE.MeshBasicMaterial({
                        map: textureLoader,
                        //添加大小网格
                        // color: THREE.FaceColors, 
                        // wireframe:true 
                        // transparent:true,opacity:0  //透明
                      })
                      let ground = new THREE.Mesh(geometry, material)
                      ground.position.z = 100;
                      ground.position.x = 0;
                      ground.position.y = 0;
                      // ground.rotation.x =  -Math.PI / 2
                      this.add(ground)

                    
                },undefined,(event)=>{
                  console.error(`ooops,loading mapid ${this.mapId} was fail,please check about ${this.mapUrl} is correct?`,event);
                }); 
  }

  addGround(width:number,height:number){
    const material = new THREE.MeshBasicMaterial({
        color: 0xeeeeee,
        side: THREE.FrontSide
    });
    // 墙面1
    var cubeGeometry = new THREE.BoxGeometry(width+1000, height+1000, 50);
    // 合成立方体
    var cube1 = new THREE.Mesh( cubeGeometry, material );
    // 设置墙面位置
    cube1.position.x = 0;
    cube1.position.y = 0;
    cube1.position.z = 0;
    // 在场景中添加墙面
    this.add(cube1);
  }
}