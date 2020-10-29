/* *
* * * author:xiongfei
* * * creativeTime: 2018/09/04
* * * versions: 0.0.1
* * * el为canvas在哪个dom容器元素上生成(必填)
* * * option 为楼房与楼层的参数 (必填)
* * * meshList (非必填，如果有就渲染出来)
* */
var myThree = function (el, option, meshList) {
    // 鼠标二维坐标投射光线 判断是否实物
    var raycaster = new THREE.Raycaster();
    var mouse = new THREE.Vector2();


    // 获取容器的dom
    var el = document.getElementById(el)
    // 楼房的长宽高
    var buildingX = option.buildingX || 0,
        buildingY = option.buildingY || 0,
        buildingZ = option.buildingZ || 0,
        pliesTotal = option.pliesTotal || 0,
        rendererBackground = option.rendererBackground || 0xffffff, // 渲染器背景颜色
        buildingColor = option.buildingColor || 0x0066ff,   // 楼房颜色
        groundColor = option.groundColor || 0x00ff66,   // 地面颜色
        roomGroundColor = option.roomGroundColor || 0xa0adaf, // 房间地面颜色
        elevation = option.elevation || 0,              // 楼房所处的海拔
        wallHeight = option.wallHeight || 0,            // 墙壁的高度
        wallWidth = option.wallWidth || 0,               // 墙壁的宽度
        wallColor = option.wallColor || 0xff6666      // 墙壁的颜色
    // 创建渲染器
    const renderer = new THREE.WebGLRenderer({antialias: true})
    // 修改渲染器颜色
    renderer.setClearColor(0xffffff, 1)
    // 修改渲染器大小 修改成容器一般大小
    renderer.setSize(el.offsetWidth, el.offsetHeight);
    // 将渲染器添加到容器中
    console.dir(el)
    el.appendChild(renderer.domElement)

    // 创建远景摄影机  参数 （相机视锥体垂直视角,相机视锥体宽高比,相机视锥体近裁剪面,相机视锥体远裁剪面）
    const camera = new THREE.PerspectiveCamera(45, el.offsetWidth / el.offsetHeight, 0.5, 10000);
    // 改变相机的位置
    camera.position.set(0, 0, 300)
    // 给该相机添加 OrbitControls.js的方法
    var controls = new THREE.OrbitControls( camera, renderer.domElement )

    // 创建场景
    const scene = new THREE.Scene();
    // 所有光 Light （其他光会继承）
    // 点光源 PointLight
    // 创建环境光  AmbientLight
    // 天空投射下来的光 HemisphereLight
    // 平面光源 如窗户射进房间的光 RectAreaLight
    // 聚光灯 SpotLight
    const keyLight = new THREE.AmbientLight(0xffffff, 0.5)
    // 场景中添环境光
    scene.add(keyLight);
    // 平行光  DirectionalLight
    const DirectionalLight = new THREE.DirectionalLight(0xffffff, 0.5)
    // 改变平行光源的位置
    DirectionalLight.position.set(1000, 1000, 1000)
    // 添加平行光源
    scene.add(DirectionalLight);

    // 创建地面 ground
    const groundGeometry = new THREE.BoxGeometry(1000,1,1000)
    const groundMaterial = new THREE.MeshLambertMaterial({
        color: groundColor,
        transparent : false, //是否使用透明
        opacity :0.5, // 如果模型的transparent设置为true时，模型的透明度（0~1）
        wireframe: false //是否渲染线而非面
    })
    const ground = new THREE.Mesh(groundGeometry, groundMaterial)
    // 地面的高度
    ground.position.set(0,  - buildingY/2, 0)
    // 往场景中添加地面
    scene.add(ground)
    var mtlLoader = new THREE.MTLLoader();
    mtlLoader.setPath('./mtl/');
    mtlLoader.load('conditioner.mtl', function(mtl){
        mtl.preload()
        console.log(mtl)
        var objLoader = new THREE.OBJLoader();
        objLoader.setMaterials(mtl)
        objLoader.setPath('./obj/');
        objLoader.load('conditioner.obj', function(obj) {
            console.log(obj)
            scene.add(obj);
        });
    })

    // 添加楼层的方法
    function addRoom (n) {
        const roomGeometry = new THREE.BoxGeometry(buildingX,buildingY,buildingZ)
        const roomMaterial = new THREE.MeshLambertMaterial({
            color: roomGroundColor,
            transparent : true, //是否使用透明
            opacity :0.4, // 如果模型的transparent设置为true时，模型的透明度（0~1）
            wireframe: false //是否渲染线而非面
        })
        const room = new THREE.Mesh(roomGeometry, roomMaterial)
        room.position.set(0, n * (buildingY + 20), 0)
        scene.add(room)
        // var particleMaterial = new THREE.SpriteCanvasMaterial( {
        //     color: 0x000000,
        //     program: function ( context ) {
        //         context.beginPath();
        //         context.font="bold 20px Arial";
        //         context.fillStyle="#058";
        //         context.transform(-1,0,0,1,0,0);
        //         context.rotate(Math.PI);
        //         context.fillText( `${n+1}层`, 0, 0 );
        //     }
        // } );
        // var particle = new THREE.Sprite( particleMaterial );
        // particle.position.copy( room );
        // particle.rotation.x = Math.PI/2;
        // scene.add( particle );
    }
    // 创建楼房（楼房由多个楼层组成）
    // for (var i = 0;i < pliesTotal; i++) {
    //     addRoom(i)
    // }
    // 点击事件
    function onDocumentClick (e) {
        e.preventDefault()
        mouse.x = (e.clientX / el.offsetWidth) * 2 - 1;
        mouse.y = -(e.clientY / el.offsetHeight) * 2 + 1;
        var vector = new THREE.Vector3(mouse.x, mouse.y,0.5).unproject(camera);
        var raycaster = new THREE.Raycaster(camera.position, vector.sub(camera.position).normalize());
        var intersects = raycaster.intersectObjects(scene.children);
        if (intersects.length > 0 && intersects[0].point.y > 0) {
            intersects[0].object.material.color.set( 0xff0000 );
            el.style.opacity = 0
            setTimeout(function(){
                removeScene()
                createNewScene()
                el.style.opacity = 1
            },1000)
        }
    }

    // 删除场景中的某个mseh对象
    function removeMseh(object){
        scene.remove(object.name);
    }
    // 清除场景
    function removeScene () {
        while(scene.children.length > 0){
            scene.remove(scene.children[0]);
        }
    }
    function createNewScene () {
        const cubeGeometry = new THREE.BoxGeometry(1000, 1, 1000) //maybe CubeGeometry
        const cubeMaterial = new THREE.MeshLambertMaterial(
            {
                color: roomGroundColor,
                shininess: 10,
                specular: 0x111111,
                transparent : true, //是否使用透明
                opacity :0.5, // 如果模型的transparent设置为true时，模型的透明度（0~1）
                wireframe: false //是否渲染线而非面

            });
        const floor = new THREE.Mesh(cubeGeometry, cubeMaterial)
        // 地面
        floor.position.set(0, 0, 0)
        scene.add(floor)
        var wall001Geometry = new THREE.BoxGeometry(400, wallHeight,10)
        var wall001Material = new THREE.MeshLambertMaterial(
            {
                color: wallColor,
                transparent : true, //是否使用透明
                opacity :0.5, // 如果模型的transparent设置为true时，模型的透明度（0~1）
                wireframe: false //是否渲染线而非面

            });
        const wall001 = new THREE.Mesh(wall001Geometry, wall001Material)
        wall001.position.set(0, wallHeight/2, 50)
        scene.add(wall001)
        var wall002Geometry = new THREE.BoxGeometry(400, wallHeight,10)
        var wall002Material = new THREE.MeshLambertMaterial(
            {
                color: wallColor,
                transparent : true, // 是否使用透明
                opacity :0.5, // 如果模型的transparent设置为true时，模型的透明度（0~1）
                wireframe: false //是否渲染线而非面
            });
        const wall002 = new THREE.Mesh(wall001Geometry, wall001Material)
        wall002.position.set(0, wallHeight/2, -50)
        scene.add(wall002)
    }
    document.addEventListener('click', onDocumentClick)
    // document.addEventListener('mousemove', onDocumentMousemove)
    return function render(){
        // scene.rotation.y += 0.01;
        // scene.rotation.x += 0.01;
        renderer.render(scene, camera);
        requestAnimationFrame(render);
    }
}
