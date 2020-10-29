var msjstation;

function threeStart() {
    var initOption = {
        antialias: true,
        showHelpGrid: false,
        clearCoolr: 0x112233
    };
    msjstation = new ();
    var Aobjects = {
        function () {
        }
);
}
},
{
    obj_name: "doorLeft",
        obj_uuid
:
    "",
        obj_event
:

    function (_obj) {
        var doorstate = "close";
        var tempobj = null;
        if (_obj.doorState != null && typeof (_obj.doorState) != 'undefined') {
            doorstate = _obj.doorState;

        }
        _obj.doorState = (doorstate == "close" ? "open" : "close");
        new TWEEN.Tween(tempobj.rotation).to({
            y: (doorstate == "close" ? -0.25 * 2 * Math.PI : 0 * 2 * Math.PI)
        }, 10000).easing(TWEEN.Easing.Elastic.Out).start();
    }
}
,
{
    obj_name: "cabinetdoor3_1",
        obj_uuid
:
    "",
        obj_event
:

    function (_obj) {
        opcabinetdoor(_obj);
    }
}
,
{
    findObject:function (_objname) {//查找某一类符合名称的对象
        if (_objname.indexOf("cabinet") >= 0 && _objname.indexOf("door") >= 0) {
            return true;
        } else {
            return false;
        }
    }
,
    obj_uuid: "",
        obj_event
:

    function (_obj) {
        opcabinetdoor(_obj);
    }
}
,
{
    findObject: function (_objname) {//查找某一类符合名称的对象
        if (_objname.indexOf("equipment") >= 0 && _objname.indexOf("card") >= 0) {
            return true;
        } else {
            return false;
        }
    }
,
    obj_uuid: "",
        obj_event
:

    function (_obj) {
        var cardstate = "in";
        if (_obj.cardstate != null && typeof (_obj.cardstate) != 'undefined') {
            cardstate = _obj.cardstate;
        } else {
            _obj.cardstate = "out";
        }
        new TWEEN.Tween(_obj.position).to({
            x: (cardstate == "in" ? _obj.position.x - 50 : _obj.position.x + 50),
        }, 1000).onComplete(function () {
            _obj.cardstate = cardstate == "in" ? "out" : "in";
        }).start();
    }
}
],
mouseDown: {
}
,
mouseUp: {
}
,
mouseMove: {
}
},
btns: [

    btnimg
:
"../datacenterdemo/res/usage.png",
    event
:

function () {
}
},
{
    btnid: "btn_edit",
        btnTitle
:
    "拖拽机柜",
        btnimg
:
    "../datacenterdemo/res/edit.png",
        event
:

    function () {
    }
}
,
{
    btnid: "btn_alarm",
        btnTitle
:
    "告警巡航",
        btnimg
:
    "../datacenterdemo/res/alarm.png",
        event
:

    function () {
        var mainCamera = Obj.commonFunc.findObject("mainCamera");//主摄像机
        var doorRight = Obj.commonFunc.findObject("doorRight");
        mainCamera.lookAt(doorRight.position);
        new TWEEN.Tween(mainCamera.position).to({
            x: -300, y: 200, z: -700,
        }, 5000).onComplete(function () {

            openRightDoor(Obj.commonFunc.findObject("doorRight"), function () {
                var cabinet3_1 = Obj.commonFunc.findObject("cabinet3_1");
                mainCamera.lookAt(cabinet3_1.position);
                new TWEEN.Tween(mainCamera.position).to({
                    x: -300, y: 150, z: -200,
                }, 5000).onComplete(function () {

                    mainCamera.lookAt(cabinet3_1.position);
                }).start();
            });
        }).start();


    }
}
,
]
}


function opcabinetdoor(_obj) {
    var doorstate = "close";
    var tempobj = null;
    if (_obj.doorState != null && typeof (_obj.doorState) != 'undefined') {
        doorstate = _obj.doorState;
        tempobj = _obj.parent;
    } else {
        console.log("add parent");
        var _objparent = _obj.parent;
        tempobj = new THREE.Object3D();
        tempobj.position.set(_obj.position.x, _obj.position.y, _obj.position.z + _obj.geometry.parameters.depth / 2);
        _obj.position.set(0, 0, -_obj.geometry.parameters.depth / 2);
        tempobj.add(_obj);
        _objparent.add(tempobj);
    }
    _obj.doorState = (doorstate == "close" ? "open" : "close");
    new TWEEN.Tween(tempobj.rotation).to({
        y: (doorstate == "close" ? 0.25 * 2 * Math.PI : 0 * 2 * Math.PI)
    }, 1000).start();
}

function openRightDoor(_obj, func) {
    var doorstate = "close";
    var tempobj = null;
    if (_obj.doorState != null && typeof (_obj.doorState) != 'undefined') {
        doorstate = _obj.doorState;
        tempobj = _obj.parent;
    } else {
        console.log("add parent");
        var _objparent = _obj.parent;
        tempobj = new THREE.Object3D();
        tempobj.position.set(_obj.position.x - _obj.geometry.parameters.width / 2, _obj.position.y, _obj.position.z);
        _obj.position.set(_obj.geometry.parameters.width / 2, 0, 0);
        tempobj.add(_obj);
        _objparent.add(tempobj);
    }
    _obj.doorState = (doorstate == "close" ? "open" : "close");
    new TWEEN.Tween(tempobj.rotation).to({
        y: (doorstate == "close" ? 0.25 * 2 * Math.PI : 0 * 2 * Math.PI)
    }, 10000).easing(TWEEN.Easing.Elastic.Out).onComplete(func()).start();
}