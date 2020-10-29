function onDocumentMousemove (e) {
    e.preventDefault()
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    var vector = new THREE.Vector3(mouse.x, mouse.y,0.5).unproject(camera);
    var raycaster = new THREE.Raycaster(camera.position, vector.sub(camera.position).normalize());
    var intersects = raycaster.intersectObjects(scene.children);
    console.log(vector)
}
var isClick = true
var x1,x2,y1,y2,z1,z2
function onDocumentClick (e) {
    e.preventDefault()
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    var vector = new THREE.Vector3(mouse.x, mouse.y,1).unproject(camera);
    var raycaster = new THREE.Raycaster(camera.position, vector.sub(camera.position).normalize());
    var intersects = raycaster.intersectObjects(scene.children);
    console.log('imtersrcts=' + intersects)
    if (intersects.length > 0) {
        // console.log( vector.sub(camera.position).normalize())
        //选中第一个射线相交的物体
        var selected = intersects[0]
        SELECTED = intersects[0].object;
        var intersected = intersects[0].object;
        // console.log(`x:${selected.point.x},y:${selected.point.y},z:${selected.point.z}`)
        if (selected.point.y * 1000000000000000000 == 0.5 * 1000000000000000000) {
            if (isClick) {
                x1 = selected.point.x
                y1 = selected.point.y
                z1 = selected.point.z
                isClick = false
            } else {
                x2 = selected.point.x
                y2 = selected.point.y
                z2 = selected.point.z
                if(getDistance(x1, x2) > getDistance(z1, z2)){
                    var wallGeometry = new THREE.BoxGeometry(getDistance(x1, x2), parametersBuilding.roomHeight,10)
                } else {
                    var wallGeometry = new THREE.BoxGeometry(10, parametersBuilding.roomHeight,getDistance(z1, z2))
                }
                console.log(getDistance(x1, x2), getDistance(z1, z2))
                var wallMaterial = new THREE.MeshLambertMaterial(
                    {
                        color: 0xff6666,
                        shininess: 10,
                        specular: 0x111111,
                        transparent : true, //是否使用透明
                        opacity :0.5, // 如果模型的transparent设置为true时，模型的透明度（0~1）
                        wireframe: false //是否渲染线而非面
                    });
                const wall = new THREE.Mesh(wallGeometry, wallMaterial)
                if(getDistance(x1, x2) > getDistance(z1, z2)){
                    wall.position.set(getDisplacement(x1, x2, getDistance(x1, x2)), parametersBuilding.roomHeight/2, z1)
                } else {
                    wall.position.set(x1, parametersBuilding.roomHeight/2, getDisplacement(z1, z2, getDistance(z1, z2)))
                }
                scene.add(wall)
                isClick = true
            }
        }
    }
}