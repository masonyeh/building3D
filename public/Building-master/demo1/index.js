var parametersBuilding = {
    buildingHeight: null,
    buildingWidth: null,
    roomHeight:null,
    roomWidth: null,
    elevation: 0, // 楼房一楼的海拔
}
//////
window.addEventListener('DOMContentLoaded', () =>{
  //创建渲染器
  const renderer = new THREE.WebGLRenderer({antialias: true})
    //渲染器背景颜色
    renderer.setClearColor(0x000000, 1)
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.domElement.style.zIndex = 5;
    document.body.appendChild(renderer.domElement);

  //CAMERA
  const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 5000);
    camera.position.set(0, 0, 300)

  controls = new THREE.OrbitControls( camera, renderer.domElement )

  // 创建场景
  const scene = new THREE.Scene();

  //LIGHT1
  const keyLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(keyLight);

  //LIGHT2
  const pointLight = new THREE.PointLight(0xffffff, 0.5)
    pointLight.position.set(0, 0, 1000)
    scene.add(pointLight);

  // 创建一个实物
  const cubeGeometry = new THREE.BoxGeometry(500, 100, 500) //maybe CubeGeometry
  const cubeMaterial = new THREE.MeshLambertMaterial({color: "#9eb8e2"});
  const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial)
        // 楼房距离地面的高度
      cubeMesh.position.set(0, parametersBuilding.elevation, 0)
      scene.add(cubeMesh)

  //GALLERY OBJECT
  // const galleryGeometry = new THREE.BoxGeometry(750, 750, 750)
  // const galleryMaterial = new THREE.MeshLambertMaterial({color: "#9eb8e2"})
  // const galleryMesh = new THREE.Mesh(galleryGeometry, galleryMaterial)
  //   galleryMesh.position.set(0, 0, 0)
  //   scene.add(galleryMesh)

  //FOR USER DIMS
  const dimX = 500
  const dimY = 1000
  const dimZ = 1000

  // Floor
  const theFloor = new THREE.Mesh( new THREE.PlaneGeometry( dimX, dimY), new THREE.MeshBasicMaterial({color: "#fff" }) );
      theFloor.position.y = 0;
      theFloor.rotation.x = - Math.PI / 2;
      //theFloor.side = THREE.DoubleSide;
      scene.add( theFloor );

  const wallMaterial = new THREE.MeshLambertMaterial({color: "#fff" })

  var degra = (degree) => {
    return degree*(Math.PI/180);
  }


  //LEFT WALL
  const leftWall = new THREE.Mesh( new THREE.PlaneGeometry( dimY, dimZ ), wallMaterial );
         leftWall.side = THREE.DoubleSide;
         leftWall.position.y =  (dimZ/2);
         leftWall.position.x = -(dimX/2);
         leftWall.rotation.y = degra(90);
         scene.add( leftWall );

   //RIGHT WALL
   const rightWall = new THREE.Mesh( new THREE.PlaneGeometry( dimY, dimZ), wallMaterial );
       rightWall.side = THREE.DoubleSide;
       rightWall.position.y =  (dimZ/2);
       rightWall.position.x =  (dimX/2);
       rightWall.rotation.y =  - Math.PI / 2;
       scene.add( rightWall );

    //FAR WALL
    const farWall = new THREE.Mesh( new THREE.PlaneGeometry( dimX, dimZ ), wallMaterial );
         farWall.side = THREE.DoubleSide;
         farWall.position.y =   (dimZ/2);
         farWall.position.x =   0;
         farWall.position.z =  -(dimY/2);
         farWall.rotation.x = - degra(0);
         scene.add( farWall );

    //NEAR WALL
    // const nearWall = new THREE.Mesh( new THREE.PlaneGeometry( dimX, dimZ), wallMaterial );
    //      nearWall.side = THREE.DoubleSide;
    //      nearWall.position.y =   (dimZ/2);
    //      nearWall.position.x =   0;
    //      nearWall.position.z =   (dimY/2);
    //      nearWall.rotation.x = - degra(0);
    //      scene.add( nearWall );


  //SKYBOX!!!!!!
      // THREE.ImageUtils.crossOrigin = "";

      // const urls = [
      //   './images/right.jpg',
      //   './images/left.jpg',
      //   './images/top.jpg',
      //   './images/bottom.jpg',
      //   './images/front.jpg',
      //   './images/back.jpg'
      // ]
      //
      // const cubeMap = THREE.ImageUtils.loadTextureCube(urls)
      // cubeMap.format = THREE.RGBFormat

      // scene.background = new THREE.CubeTextureLoader()
      //   .setCrossOrigin("")
	    //   .setPath( './images/' )
	    //   .load( [
      // 		'right.jpg',
      // 		'left.jpg',
      // 		'top.jpg',
      // 		'bottom.jpg',
      // 		'front.jpg',
      // 		'back.jpg'
      // 	] );


      // const shader = THREE.ShaderLib[ "cube" ]
      // shader.uniforms[ "tCube" ].value = cubeMap
      //
      // const cubeMapMaterial = new THREE.ShaderMaterial({
      //   fragmentShader: shader.fragmentShader,
      //   vertexShader: shader.vertexShader,
      //   uniforms: shader.uniforms,
      //   depthWrite: false,
      //   side: THREE.DoubleSide
      // })
      //
      // const skyBox = new THREE.Mesh(new THREE.BoxGeometry(1000, 1000, 1000), cubeMapMaterial)
      // scene.add(skyBox)

  //RENDER LOOP
  requestAnimationFrame(render);
  function render(){
    // cubeMesh.rotation.y += 0.01;
    // cubeMesh.rotation.x += 0.01;
    renderer.render(scene, camera);
    requestAnimationFrame(render);
    }
})
