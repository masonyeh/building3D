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
                      console.log(`${this.mapId}F`,width,height)
                      let geometry = new THREE.PlaneGeometry(width*50, height*50, 4, 4)
                      let material = new THREE.MeshBasicMaterial({
                        map: textureLoader,
                        //添加大小网格
                        color: THREE.FaceColors, 
                        wireframe:true 
                        // transparent:true,opacity:0  //透明
                      })
                      let ground = new THREE.Mesh(geometry, material)
                      // ground.rotation.x =  -Math.PI / 2
                      this.add(ground)

                      //机器人
                    const robotGeometry = new THREE.BoxGeometry( 10*50, 20*50, 10*50 );
                    const robotMaterial = new THREE.MeshBasicMaterial( {color: 0xFF0000} );
                    const cube = new THREE.Mesh( robotGeometry, robotMaterial );

                    // cube.position.x = 25723;cube.position.y = 47099;
                    cube.position.x = 100*50;cube.position.y = 20*50;

                    this.add( cube ); 
                },undefined,(event)=>{
                  console.error(`ooops,loading mapid ${this.mapId} was fail,please check about ${this.mapUrl} is correct?`,event);
                }); 
  }
}