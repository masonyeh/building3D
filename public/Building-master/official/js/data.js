var msjstation;
function S4() {
    return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
}
function guid() {
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}
var INFO_DATA_CONFIG = {

    buildingHeight: 50, // 楼层高度

}
function threeStart(el) {
    el = document.getElementById(el)
    var initOption = {
        antialias: true,
        showHelpGrid: false,
        clearCoolr: 0xf2f2f2,
        divHeight:el.offsetHeight,
        divWidth:el.offsetWidth
    };
    msjstation = new msj3D();
    var selectedObj = null
    // 地面
    var floor = {
        show: true,                 // 是否显示
        uuid: "",                   // 每个mesh的唯一识别码
        name: 'floor',              // name
        objType: 'floor',           // mesh的类型
        length: 3000,                // 长
        width: 3000,                  // 宽
        height: 10,                   // 高 或者 厚度
        rotation: [{ direction: 'x', degree: 0 }], // 旋转 表示x方向0度  arb表示任意参数值[x,y,z,angle]
        x: 0,                           // position 左右的偏移位置(相对初始化的视角)   位置
        y: 0,                           // position 高度的偏移位置(相对初始化的视角)   位置
        z: 0,                           // position 前后的偏移位置(相对初始化的视角)   位置
        style: {
            skinColor: 0x8ac9e2,      // 六个面的默认颜色
            skin: {
                skin_up: {            // obj 上方的材质 以及样式
                    skinColor: 0x98750f,
                    imgurl: "images/floor_04.png",
                    repeatx: true,
                    repeaty: true,
                    width: 128,
                    height: 128
                },
                skin_down: {        // 下方
                    skinColor: 0xffffff,
                },
                skin_fore: {        // 前方
                    skinColor: 0xffffff,
                }
            }
        }
    }
    // 楼房
    var building = {
        show: true,
        uuid: '',
        name: 'building',
        objType: 'building',
        length: 2000,
        width: 3000,
        plies: 20,          // 层数
        height: 100,
        rotation: [{ direction: 'x', degree: 0 }],
        x: 0,
        y: 0,
        z: 0,
        style: {
            skinColor: 0x6a7072      // 六个面的默认颜色
        }
    }
    // 烟雾报警器
    var smokeAlarm = {
        show: true,
        uuid: '',
        name: 'smokeAlarm',
        objType: 'smokeAlarm',
        length: 4,
        width: 4,
        height: 2,
        rotation: [{ direction: 'x', degree: 0 }],
        x: 20,
        y: 20,
        z: 5,
        style: {
            skinColor: 0xffffff
        }
    }
    if (!localStorage.getItem(Aobjects)){
        var Aobjects = {
            objects: [floor, building, smokeAlarm],
            events: {
                dbclick: [
                    {
                        obj_name: "doorRight",
                        obj_uuid: "",
                        obj_event: function (_obj) {
                            openRightDoor(_obj, function () { });
                        }
                    },
                    {
                        obj_name: "doorLeft",
                        obj_uuid: "",
                        obj_event: function (_obj) {
                            var doorstate = "close";
                            var tempobj = null;
                            if (_obj.doorState != null && typeof (_obj.doorState) != 'undefined') {
                                doorstate = _obj.doorState;
                                tempobj = _obj.parent;
                            } else {
                                var _objparent = _obj.parent;
                                tempobj = new THREE.Object3D();
                                tempobj.position.set(_obj.position.x + _obj.geometry.parameters.width / 2, _obj.position.y, _obj.position.z);
                                _obj.position.set(-_obj.geometry.parameters.width / 2, 0, 0);
                                tempobj.add(_obj);
                                _objparent.add(tempobj);
                            }
                            _obj.doorState = (doorstate == "close" ? "open" : "close");
                            new createjs.Tween(tempobj.rotation).to({
                                y: (doorstate == "close" ? -0.25 * 2 * Math.PI : 0 * 2 * Math.PI)
                            }, 10000, createjs.Ease.elasticOut);
                        }
                    },
                    {
                        obj_name: "cabinetdoor3_1",
                        obj_uuid: "",
                        obj_event: function (_obj) {
                            opcabinetdoor(_obj);
                        }
                    },
                    {
                        findObject:function(_objname){//查找某一类符合名称的对象
                            if (_objname.indexOf("cabinet") >= 0 && _objname.indexOf("door") >= 0) {
                                return true;
                            } else {
                                return false;
                            }
                        },
                        obj_uuid: "",
                        obj_event: function (_obj) {
                            opcabinetdoor(_obj);
                        }
                    },
                    {
                        findObject: function (_objname) {//查找某一类符合名称的对象
                            if (_objname.indexOf("equipment") >= 0 && _objname.indexOf("card") >= 0) {
                                return true;
                            } else {
                                return false;
                            }
                        },
                        obj_uuid: "",
                        obj_event: function (_obj) {
                            var cardstate = "in";
                            if (_obj.cardstate != null && typeof (_obj.cardstate) != 'undefined') {
                                cardstate = _obj.cardstate;
                            } else {
                                _obj.cardstate = "out";
                            }
                            new createjs.Tween(_obj.position).to({
                                x: (cardstate == "in" ? _obj.position.x - 50 : _obj.position.x + 50),
                            }, 1000,createjs.Ease.linear).call(function () { _obj.cardstate = cardstate == "in" ? "out" : "in"; });
                        }
                    },
                    {
                        findObject: function (_objname) {//查找某一类符合名称的对象
                            if (~_objname.indexOf("wall")) {
                                return true;
                            } else {
                                return false;
                            }
                        },
                        obj_uuid: "",
                        obj_event: function (_obj) {
                            if (selectedObj) {
                                alert('请先清空选中')
                                return
                            }
                            selectedObj = Object.assign({},_obj)
                            if (_obj.material.length > 0) {
                                _obj.material.forEach (function(v1, i1) {
                                    v1.color.set( 0xff0000 )
                                })
                            }
                        },
                    }
                ],
                mouseDown: {
                },
                mouseUp: {
                },
                mouseMove: {
                }
            },
            btns: [
                {
                    btnid: "btn_reset",
                    btnTitle: "场景复位",
                    btnimg: "images/reset.png",
                    event: function () {
                        // $('#').empty();
                        document.getElementById('canvas-frame').innerHTML = ''
                        msjstation = null; msj3DObj = null;
                        msjstation = new msj3D();
                        msjstation.initmsj3D('canvas-frame', initOption, Aobjects);
                        msjstation.start();
                        // var mainCamera = msj3DObj.commonFunc.findObject("mainCamera");//主摄像机
                        // new createjs.Tween(mainCamera.position).to({
                        //    x: 0, y: 1000, z: -1800,
                        // }, 1000,createjs.Ease.linear);
                        // mainCamera.lookAt({ x: 0, y: 0, z: 0 });
                    }
                },
                // {
                //     btnid: "btn_connection",
                //     btnTitle: "走线管理",
                //     btnimg: "images/connection.png",
                //     event: function () {
                //     }
                // },
                {
                    btnid: "btn_connection",
                    btnTitle: "新增墙体",
                    btnimg: "images/alarm.png",
                    event: function () {
                        for (var i = 0; i < Aobjects.objects.length; i++) {
                            if (Aobjects.objects[i].name == 'wall') {
                                var privatelyWall = {
                                    uuid: "",
                                    name:'wall',
                                    length: Aobjects.objects[1].length,
                                    skinColor: Aobjects.objects[1].skinColor,
                                    thick: 20,
                                    height: 240,
                                    skin: {
                                        skin_up: {
                                            skinColor: 0xdddddd,
                                        },
                                        skin_down: {
                                            skinColor: 0xdddddd,
                                        },
                                        skin_fore: {
                                            skinColor: 0xb0cee0,
                                        },
                                        skin_behind: {
                                            skinColor: 0xdeeeee,
                                        },
                                        skin_left: {
                                            skinColor: 0xb0cee0,
                                        },
                                        skin_right: {
                                            skinColor: 0xb0cee0,
                                        }
                                    },
                                    startDot: {
                                        x: 1600,
                                        y: 120,
                                        z: -750
                                    },
                                    endDot: {
                                        x: 1600,
                                        y: 120,
                                        z: 750
                                    }
                                }
                                privatelyWall.name = `wall${guid()}`
                                Aobjects.objects[i].wallData.push(privatelyWall)
                                msjstation.AddWall(msjstation, privatelyWall)
                                return
                            }
                        }
                    }
                },
                {
                    btnid: "btn_usage",
                    btnTitle: "旋转30°",
                    btnimg: "images/alarm.png",
                    event: function () {
                        if (!selectedObj) {
                            alert('请选中一个模型')
                            return
                        }
                        var oldObj
                        for (var i = 0; i < Aobjects.objects.length; i++) {
                            if (Aobjects.objects[i].name == 'wall') {
                                Aobjects.objects[i].wallData.forEach(function (v, i) {
                                    if (v.name == selectedObj.name || v.name + '-doorhole-windowHole' == selectedObj.name) {
                                        oldObj = v
                                    }
                                })
                            }
                        }
                        var newObj = Object.assign({},oldObj)
                        var deg = 0
                        if (newObj.rotation) {
                            deg = newObj.rotation[0]? newObj.rotation[0].degree : 0
                        }
                        newObj.rotation = [{direction: 'y',degree: deg + 3.14/6}]
                        // newObj.name = `wall${guid()}`
                        // for (var i = 0; i < Aobjects.objects.length; i++) {
                        //     if (Aobjects.objects[i].name == 'wall') {
                        //         Aobjects.objects[i].wallData.push(newObj)
                        //     }
                        // }
                        // msjstation.upDateWall(msjstation, oldObj, newObj)
                        // selectedObj = null
                        selectedObj.rotation.set(selectedObj.rotation.x, selectedObj.rotation._y + 3.14/6, selectedObj.rotation._z)
                    }
                },
                {
                    btnid: "btn_edit1",
                    btnTitle: "变长",
                    btnimg: "images/alarm.png",
                    event: function () {
                        if (!selectedObj) {
                            alert('请选中一个模型')
                            return
                        }
                        var oldObj
                        for (var i = 0; i < Aobjects.objects.length; i++) {
                            if (Aobjects.objects[i].name == 'wall') {
                                Aobjects.objects[i].wallData.forEach(function (v, i) {
                                    if (v.name == selectedObj.name || v.name + '-doorhole-windowHole' == selectedObj.name) {
                                        oldObj = v
                                    }
                                })
                            }
                        }
                        // var newObj = Object.assign({},oldObj)
                        var snz,enz
                        if (oldObj.startDot && oldObj.endDot && oldObj.startDot.z < 0 && oldObj.endDot.z > 0) {
                            snz = oldObj.startDot.z - 50
                            enz = oldObj.endDot.z + 50
                        }
                        oldObj.startDot.z = snz
                        oldObj.endDot.z = enz
                        // newObj.name = `wall${guid()}`
                        // for (var i = 0; i < Aobjects.objects.length; i++) {
                        //     if (Aobjects.objects[i].name == 'wall') {
                        //         Aobjects.objects[i].wallData.push(newObj)
                        //     }
                        // }
                        // msjstation.upDateWall(msjstation, oldObj, newObj)
                        // console.log(selectedObj)
                        // selectedObj = null
                        selectedObj.scale.set(selectedObj.scale.x, selectedObj.scale.y , selectedObj.scale.z+ 100/1500)
                    }
                },
                {
                    btnid: "btn_edit2",
                    btnTitle: "变短",
                    btnimg: "images/alarm.png",
                    event: function () {
                        if (!selectedObj) {
                            alert('请选中一个模型')
                            return
                        }
                        var oldObj
                        for (var i = 0; i < Aobjects.objects.length; i++) {
                            if (Aobjects.objects[i].name == 'wall') {
                                Aobjects.objects[i].wallData.forEach(function (v, i) {
                                    if (v.name == selectedObj.name || v.name + '-doorhole-windowHole' == selectedObj.name) {
                                        oldObj = v
                                    }
                                })
                            }
                        }
                        var newObj = Object.assign({},oldObj)
                        var snz,enz
                        if (newObj.startDot && newObj.endDot && newObj.startDot.z < 0 && newObj.endDot.z > 0) {
                            snz = newObj.startDot.z - 50
                            enz = newObj.endDot.z + 50
                        }
                        newObj.startDot.z = snz
                        newObj.endDot.z = enz
                        // newObj.name = `wall${guid()}`
                        // for (var i = 0; i < Aobjects.objects.length; i++) {
                        //     if (Aobjects.objects[i].name == 'wall') {
                        //         Aobjects.objects[i].wallData.push(newObj)
                        //     }
                        // }
                        // msjstation.upDateWall(msjstation, oldObj, newObj)
                        // console.log(selectedObj)
                        // selectedObj = null
                        selectedObj.scale.set(selectedObj.scale.x, selectedObj.scale.y , selectedObj.scale.z - 100/1500)
                    }
                },
                /*        {
                            btnid: "btn_alarm",
                            btnTitle: "告警巡航",
                            btnimg: "images/alarm.png",
                            event: function () {
                                var mainCamera = msj3DObj.commonFunc.findObject("mainCamera");//主摄像机
                                var doorRight = msj3DObj.commonFunc.findObject("doorRight");
                                mainCamera.lookAt(doorRight.position);
                                new createjs.Tween(mainCamera.position).to({
                                    x:-300, y:200, z:-700,
                                }, 5000,createjs.Ease.linear).call(function () {
                                    openRightDoor(msj3DObj.commonFunc.findObject("doorRight"), function () {
                                        var cabinet3_1 = msj3DObj.commonFunc.findObject("cabinet3_1");
                                        mainCamera.lookAt(cabinet3_1.position);
                                        new createjs.Tween(mainCamera.position).to({
                                            x: -300, y: 150, z: -200,
                                        }, 5000,createjs.Ease.linear).call(function () {
                                            mainCamera.lookAt(cabinet3_1.position);
                                        });
                                    });
                                });
                            }
                        },*/
                {
                    btnid: "btn_alarm",
                    btnTitle: "Z正移",
                    btnimg: "images/alarm.png",
                    event: function () {
                        if (!selectedObj) {
                            alert('请选中一个模型')
                            return
                        }
                        var oldObj
                        for (var i = 0; i < Aobjects.objects.length; i++) {
                            if (Aobjects.objects[i].name == 'wall') {
                                Aobjects.objects[i].wallData.forEach(function (v, i) {
                                    if (v.name == selectedObj.name || v.name + '-doorhole-windowHole' == selectedObj.name) {
                                        oldObj = v
                                    }
                                })
                            }
                        }
                        var newObj = Object.assign({},oldObj)
                        var snz,enz
                        if (newObj.startDot && newObj.endDot) {
                            snz = newObj.startDot.z + 100
                            enz = newObj.endDot.z + 100
                        }
                        newObj.startDot.z = snz
                        newObj.endDot.z = enz
                        // newObj.name = `wall${guid()}`
                        // for (var i = 0; i < Aobjects.objects.length; i++) {
                        //     if (Aobjects.objects[i].name == 'wall') {
                        //         Aobjects.objects[i].wallData.push(newObj)
                        //     }
                        // }
                        // msjstation.upDateWall(msjstation, oldObj, newObj)
                        // selectedObj = null
                        selectedObj.position.set(selectedObj.position.x, selectedObj.position.y, selectedObj.position.z + 100)
                    }
                },
                {
                    btnid: "btn_alarm2",
                    btnTitle: "Z负移",
                    btnimg: "images/alarm.png",
                    event: function () {
                        if (!selectedObj) {
                            alert('请选中一个模型')
                            return
                        }
                        var oldObj
                        for (var i = 0; i < Aobjects.objects.length; i++) {
                            if (Aobjects.objects[i].name == 'wall') {
                                Aobjects.objects[i].wallData.forEach(function (v, i) {
                                    if (v.name == selectedObj.name || v.name + '-doorhole-windowHole' == selectedObj.name) {
                                        oldObj = v
                                    }
                                })
                            }
                        }
                        var newObj = Object.assign({},oldObj)
                        var snz,enz
                        if (newObj.startDot && newObj.endDot) {
                            snz = newObj.startDot.z - 100
                            enz = newObj.endDot.z - 100
                        }
                        newObj.startDot.z = snz
                        newObj.endDot.z = enz
                        // newObj.name = `wall${guid()}`
                        // for (var i = 0; i < Aobjects.objects.length; i++) {
                        //     if (Aobjects.objects[i].name == 'wall') {
                        //         Aobjects.objects[i].wallData.push(newObj)
                        //     }
                        // }
                        selectedObj.position.set(selectedObj.position.x, selectedObj.position.y, selectedObj.position.z - 100)
                        // msjstation.upDateWall(msjstation, oldObj, newObj)
                        // selectedObj = null
                    }
                },
                {
                    btnid: "btn_alarm4",
                    btnTitle: "X正移",
                    btnimg: "images/alarm.png",
                    event: function () {
                        if (!selectedObj) {
                            alert('请选中一个模型')
                            return
                        }
                        var oldObj
                        for (var i = 0; i < Aobjects.objects.length; i++) {
                            if (Aobjects.objects[i].name == 'wall') {
                                Aobjects.objects[i].wallData.forEach(function (v, i) {
                                    if (v.name == selectedObj.name || v.name + '-doorhole-windowHole' == selectedObj.name) {
                                        oldObj = v
                                    }
                                })
                            }
                        }
                        var newObj = Object.assign({},oldObj)
                        var snx,enx
                        if (newObj.startDot && newObj.endDot) {
                            snx = newObj.startDot.x + 100
                            enx = newObj.endDot.x + 100
                        }
                        newObj.startDot.x = snx
                        newObj.endDot.x = enx
                        // newObj.name = `wall${guid()}`
                        // for (var i = 0; i < Aobjects.objects.length; i++) {
                        //     if (Aobjects.objects[i].name == 'wall') {
                        //         Aobjects.objects[i].wallData.push(newObj)
                        //     }
                        // }
                        // msjstation.upDateWall(msjstation, oldObj, newObj)
                        // selectedObj = null
                        selectedObj.position.set(selectedObj.position.x + 100, selectedObj.position.y, selectedObj.position.z)
                    }
                },
                {
                    btnid: "btn_alarm5",
                    btnTitle: "X负移",
                    btnimg: "images/alarm.png",
                    event: function () {
                        if (!selectedObj) {
                            alert('请选中一个模型')
                            return
                        }
                        var oldObj
                        for (var i = 0; i < Aobjects.objects.length; i++) {
                            if (Aobjects.objects[i].name == 'wall') {
                                Aobjects.objects[i].wallData.forEach(function (v, i) {
                                    if (v.name == selectedObj.name || v.name + '-doorhole-windowHole' == selectedObj.name) {
                                        oldObj = v
                                    }
                                })
                            }
                        }
                        var newObj = Object.assign({},oldObj)
                        var snx,enx
                        if (newObj.startDot && newObj.endDot) {
                            snx = newObj.startDot.x - 100
                            enx = newObj.endDot.x - 100
                        }
                        newObj.startDot.x = snx
                        newObj.endDot.x = enx
                        // newObj.name = `wall${guid()}`
                        // for (var i = 0; i < Aobjects.objects.length; i++) {
                        //     if (Aobjects.objects[i].name == 'wall') {
                        //         Aobjects.objects[i].wallData.push(newObj)
                        //     }
                        // }
                        // msjstation.upDateWall(msjstation, oldObj, newObj)
                        // selectedObj = null
                        selectedObj.position.set(selectedObj.position.x - 100, selectedObj.position.y, selectedObj.position.z)
                    }
                },
                {
                    btnid: "btn_alarm7",
                    btnTitle: "清空选中",
                    btnimg: "images/alarm.png",
                    event: function () {
                        if (selectedObj && selectedObj.material && selectedObj.material.length > 0) {
                            selectedObj.material.forEach (function(v1, i1) {
                                v1.color.set(0x8ac9e2)
                            })
                        }
                        selectedObj = null
                    }
                },
                {
                    btnid: "btn_alarm3",
                    btnTitle: "保存",
                    btnimg: "images/alarm.png",
                    event: function () {
                        console.log(Aobjects.objects[1].wallData)
                        console.log(Aobjects)
                        localStorage.setItem('Aobjects', Aobjects)
                    }
                }
            ]
        }
    }
    var newWall = {
        uuid: "",
        name:'wall',
        length: Aobjects.objects[1].length,
        skinColor: Aobjects.objects[1].skinColor,
        thick: 20,
        height: 240,
        skin: {
            skin_up: {
                skinColor: 0xdddddd,
            },
            skin_down: {
                skinColor: 0xdddddd,
            },
            skin_fore: {
                skinColor: 0xb0cee0,
            },
            skin_behind: {
                skinColor: 0xdeeeee,
            },
            skin_left: {
                skinColor: 0xb0cee0,
            },
            skin_right: {
                skinColor: 0xb0cee0,
            }
        },
        startDot: {
            x: 1500,
            y: 120,
            z: -750
        },
        endDot: {
            x: 1500,
            y: 120,
            z: 750
        },
    }
    //复制机柜
    // for (var i = 1; i <=3;i++){
    //     for (var j = 1; j <=6; j++) {
    //         if (i != 1 || j != 1) {
    //             Aobjects.objects.push({
    //                 show: true,
    //                 copyfrom: 'cabinet1_1',
    //                 name: 'cabinet'+i+'_'+j,
    //                 childrenname: ['cabinet' + i + '_' + j + '_shell', 'cabinet' + i + '_' + j + '_door_01'],
    //                 uuid: '',
    //                 objType: 'cloneObj',
    //                 position: { x:-(i-1)*200, y:0 , z:(j-1)*100 },
    //                 scale: { x: 1, y: 1, z: 1 }
    //             });
    //         }
    //     }
    // }
    msjstation.initmsj3D('canvas-frame', initOption, Aobjects);
    msjstation.start();
}
function opcabinetdoor(_obj) {
    var doorstate = "close";
    var tempobj = null;
    if (_obj.doorState != null && typeof (_obj.doorState) != 'undefined') {
        doorstate = _obj.doorState;
        tempobj = _obj.parent;
    } else {
        var _objparent = _obj.parent;
        tempobj = new THREE.Object3D();
        tempobj.position.set(_obj.position.x, _obj.position.y, _obj.position.z + _obj.geometry.parameters.depth / 2);
        _obj.position.set(0, 0, -_obj.geometry.parameters.depth / 2);
        tempobj.add(_obj);
        _objparent.add(tempobj);
    }
    _obj.doorState = (doorstate == "close" ? "open" : "close");
    new createjs.Tween(tempobj.rotation).to({
        y: (doorstate == "close" ? 0.25 * 2 * Math.PI : 0 * 2 * Math.PI)
    }, 1000, createjs.Ease.linear);
}
function openRightDoor(_obj,func) {
    var doorstate = "close";
    var tempobj = null;
    if (_obj.doorState != null && typeof (_obj.doorState) != 'undefined') {
        doorstate = _obj.doorState;
        tempobj = _obj.parent;
    } else {
        var _objparent = _obj.parent;
        tempobj = new THREE.Object3D();
        tempobj.position.set(_obj.position.x - _obj.geometry.parameters.width / 2, _obj.position.y, _obj.position.z);
        _obj.position.set(_obj.geometry.parameters.width / 2, 0, 0);
        tempobj.add(_obj);
        _objparent.add(tempobj);
    }
    _obj.doorState = (doorstate == "close" ? "open" : "close");
    new createjs.Tween(tempobj.rotation).to({
        y: (doorstate == "close" ? 0.25 * 2 * Math.PI : 0 * 2 * Math.PI)
    }, 10000, createjs.Ease.elasticOut);
}
