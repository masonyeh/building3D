var msjstation;
function threeStart(el) {
    el = document.getElementById(el)
    var initOption = {
        antialias: true,
        showHelpGrid: false,
        clearCoolr: 0xffffff,
        divHeight:el.clientHeight,
        divWidth:el.clientWidth
    };
    msjstation = new msj3D();
    for(var storey=0;storey<5;storey++){

    }
    var Aobjects = {
        visible:true,
        objects: [
            //地板
            {
                show: true,
                uuid: "",
                name: 'floor',
                objType: 'floor',
                length: 3000,
                width: 3000,
                height: 30,
                rotation: [{ direction: 'x', degree: 0 }],//旋转 表示x方向0度  arb表示任意参数值[x,y,z,angle]
                x: 0,
                y: 0,
                z: 0,
                style: {
                    skinColor: 0x8ac9e2,
                    skin: {
                        skin_up: {
                            skinColor: 0x98750f,
                            imgurl: "images/floorB.jpg",
                            repeatx: true,
                            repeaty: true,
                            width: 128,
                            height: 128
                        },
                        skin_down: {
                            skinColor: 0x8ac9e2,
                        },
                        skin_fore: {
                            skinColor: 0x8ac9e2,
                        }
                    }
                }
            },
            // 抱枕1
            {
                show: true,
                uuid: "",
                name: 'bolster',
                objType: 'cube',
                rotation: [{ direction: 'y', degree: 0 }],//旋转 表示x方向0度  arb表示任意参数值[x,y,z,angle]
                x: 160,
                y: 120,
                z: 400,
                length: 80,
                width: 20,
                height: 60,
                transparent: true,
                opacity: 1,
                rotation: [{ direction: 'x', degree: 120 }],//旋转 表示x方向0度  arb表示任意参数值[x,y,z,angle]
                style: {
                    skinColor: 0x8ac9e2,
                    skin: {
                        skin_left: {
                            imgurl: "images/bz.jpg"
                        },
                        skin_fore: {
                            skinColor: 0xC0C0C0,
                        },
                        skin_behind: {
                            skinColor: 0xC0C0C0
                        },
                        skin_up: {
                            skinColor: 0xC0C0C0
                        },
                        skin_down: {
                            skinColor: 0xC0C0C0
                        },
                    }
                }
            },
            // 抱枕2
            {
                show: true,
                uuid: "",
                name: 'bolster',
                objType: 'cube',
                rotation: [{ direction: 'y', degree: 0 }],//旋转 表示x方向0度  arb表示任意参数值[x,y,z,angle]
                x: 30,
                y: 120,
                z: 400,
                length: 80,
                width: 20,
                height: 60,
                transparent: true,
                opacity: 1,
                rotation: [{ direction: 'x', degree: 120 }],//旋转 表示x方向0度  arb表示任意参数值[x,y,z,angle]
                style: {
                    skinColor: 0x8ac9e2,
                    skin: {
                        skin_left: {
                            imgurl: "images/bz.jpg"
                        },
                        skin_fore: {
                            skinColor: 0xC0C0C0,
                        },
                        skin_behind: {
                            skinColor: 0xC0C0C0
                        },
                        skin_up: {
                            skinColor: 0xC0C0C0
                        },
                        skin_down: {
                            skinColor: 0xC0C0C0
                        },
                    }
                }
            },
           // 床
            {
                show: true,
                uuid: "",
                name: 'Bed',
                objType: 'cube',
                rotation: [{ direction: 'y', degree: 0 }],//旋转 表示x方向0度  arb表示任意参数值[x,y,z,angle]
                x: 100,
                y: 80,
                z: 270,
                length: 300,
                width: 360,
                height: 50,
                transparent: true,
                opacity: 1,
                style: {
                    skinColor: 0x8ac9e2,
                    skin: {
                        skin_up: {
                            imgurl: "images/bedtop2.jpg",
                        },
                        skin_fore: {
                            imgurl: "images/bedRight.jpg",
                        },
                        skin_left: {
                            imgurl: "images/bedRight.jpg"
                        },
                        skin_behind: {
                            imgurl: "images/bedRight.jpg"
                        }
                    }
                }
            },
            // 床头
            {
                show: true,
                name: 'messagePanel',
                uuid: "",
                objType: 'plane',
                width: 300,
                height: 120,
                pic: "images/bedhead2.jpg",
                transparent: true,
                opacity: 1,
                position: { x:100, y: 150, z: 439 },
                rotation: { x: 0, y: Math.PI, z: 0 },
                blending: false,
            },
          //   // 烟感器
          // {
          //   show: true,
          //   uuid: "",
          //   name: 'smokeDetector',
          //   objType: 'smokeDetector',
          //   url:'./obj/yangan_c4d2.fbx',
          //   rotation: [{ direction: 'x', degree: 0 }],//旋转 表示x方向0度  arb表示任意参数值[x,y,z,angle]
          //   x: 0,
          //   y: 240,
          //   z: 240
          // },
            //墙体
            {
                show: true,
                uuid: "",
                name: 'wall',
                objType: 'wall',
                thick: 20,
                length: 100,
                height: 240,
                wallData: [
                     {//wall1
                         uuid: "",
                         name: 'wall1',
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
                                 skinColor: 0xb0cee0,
                             },
                             skin_left: {
                                 skinColor: 0xdeeeee,
                             },
                             skin_right: {
                                 skinColor: 0xb0cee0,
                             }
                         },
                         startDot: {
                             x: -500,
                             y: 120,
                             z: -350
                         },
                         endDot: {
                             x: 500,
                             y: 120,
                             z: -350
                         },
                         rotation: [{ direction: 'x', degree: 0 }],// 旋转 表示x方向0度  arb表示任意参数值[x,y,z,angle]
                         childrens: [
                              {
                                  op: '-',
                                  show: true,
                                  uuid: "",
                                  name: 'doorhole',
                                  objType: 'doorhole',
                                  thick: 20,
                                  height: 220,
                                  startDot: {
                                      x: -410,
                                      y: 110,
                                      z: -350
                                  },
                                  endDot: {
                                      x: -190,
                                      y: 110,
                                      z: -350
                                  },
                                  skin: {
                                      skin_up: {
                                          skinColor: 0xffdddd,
                                      },
                                      skin_down: {
                                          skinColor: 0xdddddd,
                                      },
                                      skin_fore: {
                                          skinColor: 0xffdddd,
                                      },
                                      skin_behind: {
                                          skinColor: 0xffdddd,
                                      },
                                      skin_left: {
                                          skinColor: 0xffdddd,
                                      },
                                      skin_right: {
                                          skinColor: 0xffdddd,
                                      }
                                  },
                              },
                                 {
                                     op: '-',
                                     show: true,
                                     uuid: "",
                                     name: 'windowHole',
                                     objType: 'windowHole',
                                     thick: 20,
                                     height: 160,
                                     startDot: {
                                         x: -50,
                                         y: 130,
                                         z: -350
                                     },
                                     endDot: {
                                         x: 450,
                                         y: 130,
                                         z: -350
                                     }
                                 },
                                {
                                    show: true,
                                    name: 'windowCaseBottom',
                                    uuid: "",
                                    objType: 'cube',
                                    thick: 30,
                                    height: 10,
                                    startDot: {
                                        x: -50,
                                        y: 50,
                                        z: -350
                                    },
                                    endDot: {
                                        x: 450,
                                        y: 50,
                                        z: -350
                                    },
                                    skin: {
                                        skin_up: {
                                            skinColor: 0xc0dee0,
                                        },
                                        skin_down: {
                                            skinColor: 0xc0dee0,
                                        },
                                        skin_fore: {
                                            skinColor: 0xc0dee0,
                                        },
                                        skin_behind: {
                                            skinColor: 0xc0dee0,
                                        },
                                        skin_left: {
                                            skinColor: 0xd0eef0,
                                        },
                                        skin_right: {
                                            skinColor: 0xd0eef0,
                                        }
                                    },
                                },

                              {
                                  show: true,
                                  uuid: "",
                                  name: 'doorCaseRight',
                                  objType: 'cube',
                                  thick: 24,
                                  height: 220,
                                  startDot: {
                                      x: -410,
                                      y: 110,
                                      z: -350
                                  },
                                  endDot: {
                                      x: -405,
                                      y: 110,
                                      z: -350
                                  },
                                  skin: {
                                      skin_up: {
                                          skinColor: 0xc0dee0,
                                      },
                                      skin_down: {
                                          skinColor: 0xc0dee0,
                                      },
                                      skin_fore: {
                                          skinColor: 0xc0dee0,
                                      },
                                      skin_behind: {
                                          skinColor: 0xc0dee0,
                                      },
                                      skin_left: {
                                          skinColor: 0xd0eef0,
                                      },
                                      skin_right: {
                                          skinColor: 0xd0eef0,
                                      }
                                  },
                              },
                              {
                                  show: true,
                                  name: 'doorCaseLeft',
                                  uuid: "",
                                  objType: 'cube',
                                  thick: 24,
                                  height: 220,
                                  startDot: {
                                      x: -190,
                                      y: 110,
                                      z: -350
                                  },
                                  endDot: {
                                      x: -195,
                                      y: 110,
                                      z: -350
                                  },
                                  skin: {
                                      skin_up: {
                                          skinColor: 0xc0dee0,
                                      },
                                      skin_down: {
                                          skinColor: 0xc0dee0,
                                      },
                                      skin_fore: {
                                          skinColor: 0xc0dee0,
                                      },
                                      skin_behind: {
                                          skinColor: 0xc0dee0,
                                      },
                                      skin_left: {
                                          skinColor: 0xd0eef0,
                                      },
                                      skin_right: {
                                          skinColor: 0xd0eef0,
                                      }
                                  },
                              },
                              {
                                  show: true,
                                  name: 'doorCaseTop',
                                  uuid: "",
                                  objType: 'cube',
                                  thick: 24,
                                  height: 5,
                                  startDot: {
                                      x: -190,
                                      y: 220,
                                      z: -350
                                  },
                                  endDot: {
                                      x: -410,
                                      y: 220,
                                      z: -350
                                  },
                                  skin: {
                                      skin_up: {
                                          skinColor: 0xc0dee0,
                                      },
                                      skin_down: {
                                          skinColor: 0xc0dee0,
                                      },
                                      skin_fore: {
                                          skinColor: 0xc0dee0,
                                      },
                                      skin_behind: {
                                          skinColor: 0xc0dee0,
                                      },
                                      skin_left: {
                                          skinColor: 0xd0eef0,
                                      },
                                      skin_right: {
                                          skinColor: 0xd0eef0,
                                      }
                                  },
                              },
                              {
                                  show: true,
                                  name: 'doorCaseBottom',
                                  uuid: "",
                                  objType: 'cube',
                                  thick: 24,
                                  height: 5,
                                  startDot: {
                                      x: -190,
                                      y: 5,
                                      z: -350
                                  },
                                  endDot: {
                                      x: -410,
                                      y: 5,
                                      z: -350
                                  },
                                  skin: {
                                      skin_up: {
                                          skinColor: 0xc0dee0,
                                      },
                                      skin_down: {
                                          skinColor: 0xc0dee0,
                                      },
                                      skin_fore: {
                                          skinColor: 0xc0dee0,
                                      },
                                      skin_behind: {
                                          skinColor: 0xc0dee0,
                                      },
                                      skin_left: {
                                          skinColor: 0xd0eef0,
                                      },
                                      skin_right: {
                                          skinColor: 0xd0eef0,
                                      }
                                  },
                              },
                              {
                                  show: true,
                                  name: 'doorLeft',
                                  uuid: "",
                                  objType: 'cube',
                                  thick: 4,
                                  height: 210,
                                  startDot: {
                                      x: -196,
                                      y: 112,
                                      z: -350
                                  },
                                  endDot: {
                                      x: -300,
                                      y: 112,
                                      z: -350
                                  },
                                  skin: {
                                      opacity: 0.1,
                                      skin_up: {
                                          skinColor: 0x51443e,
                                      },
                                      skin_down: {
                                          skinColor: 0x51443e,
                                      },
                                      skin_fore: {
                                          skinColor: 0x51443e,
                                      },
                                      skin_behind: {
                                          skinColor: 0x51443e,
                                      },
                                      skin_left: {
                                          skinColor: 0x51443e,
                                          imgurl: "images/door_left.png",
                                      },
                                      skin_right: {
                                          skinColor: 0x51443e,
                                          imgurl: "images/door_right.png",
                                      }
                                  },
                              },
                              {
                                  show: true,
                                  name: 'doorRight',
                                  uuid: "",
                                  objType: 'cube',
                                  thick: 4,
                                  height: 210,
                                  startDot: {
                                      x: -300,
                                      y: 112,
                                      z: -350
                                  },
                                  endDot: {
                                      x: -404,
                                      y: 112,
                                      z: -350
                                  },
                                  skin: {
                                      opacity: 0.1,
                                      skin_up: {
                                          skinColor: 0x51443e,
                                      },
                                      skin_down: {
                                          skinColor: 0x51443e,
                                      },
                                      skin_fore: {
                                          skinColor: 0x51443e,
                                      },
                                      skin_behind: {
                                          skinColor: 0x51443e,
                                      },
                                      skin_left: {
                                          skinColor: 0x51443e,
                                          imgurl: "images/door_right.png",
                                      },
                                      skin_right: {
                                          skinColor: 0x51443e,
                                          imgurl: "images/door_left.png",
                                      }
                                  },
                              },
                               {
                                   show: true,
                                   name: 'doorControl',
                                   uuid: "",
                                   objType: 'cube',
                                   thick: 10,
                                   height: 40,
                                   startDot: {
                                       x: -120,
                                       y: 160,
                                       z: -365
                                   },
                                   endDot: {
                                       x: -160,
                                       y: 160,
                                       z: -365
                                   },
                                   skin: {
                                       opacity: 0.1,
                                       skin_up: {
                                           skinColor: 0x333333,
                                       },
                                       skin_down: {
                                           skinColor: 0x333333,
                                       },
                                       skin_fore: {
                                           skinColor: 0x333333,
                                       },
                                       skin_behind: {
                                           skinColor: 0x333333,
                                       },
                                       skin_left: {
                                           skinColor: 0x333333,
                                           imgurl: "images/doorControl.jpg",
                                       },
                                       skin_right: {
                                           skinColor: 0x333333,
                                       }
                                   },
                               },
                         ]
                     },
                     {//wall2
                         uuid: "",
                         name: 'wall2',
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
                                 skinColor: 0xb0cee0,
                             },
                             skin_left: {
                                 skinColor: 0xb0cee0,
                             },
                             skin_right: {
                                 skinColor: 0xdeeeee,
                             }
                         },
                         startDot: {
                             x: -500,
                             y: 120,
                             z: 450
                         },
                         endDot: {
                             x: 500,
                             y: 120,
                             z: 450
                         },
                     },
                     {//wall3
                         uuid: "",
                         name: 'wall3',
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
                             x: 490,
                             y: 120,
                             z: -355
                         },
                         endDot: {
                             x: 490,
                             y: 120,
                             z: 455
                         },
                     },
                     {//wall4
                         uuid: "",
                         name: 'wall4',
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
                                 skinColor: 0xdeeeee,
                             },
                             skin_behind: {
                                 skinColor: 0xb0cee0,
                             },
                             skin_left: {
                                 skinColor: 0xb0cee0,
                             },
                             skin_right: {
                                 skinColor: 0xb0cee0,
                             }
                         },
                         startDot: {
                             x: -490,
                             y: 120,
                             z: -355
                         },
                         endDot: {
                             x: -490,
                             y: 120,
                             z: 455
                         },
                     },
                    {
                        uuid: "",
                        name: 'wall7',
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
                                skinColor: 0xdeeeee,
                            },
                            skin_behind: {
                                skinColor: 0xb0cee0,
                            },
                            skin_left: {
                                skinColor: 0xb0cee0,
                            },
                            skin_right: {
                                skinColor: 0xb0cee0,
                            }
                        },
                        startDot: {
                            x: -1489,
                            y: 120,
                            z: -355
                        },
                        endDot: {
                            x: -1489,
                            y: 120,
                            z: 450
                        },
                    },
                    {
                        uuid: "",
                        name: 'wall8',
                        thick: 20,
                        height: 240,
                        skin: {
                            skin_up: {
                                skinColor: 0xdddddd,
                                imgUrl: 'images/wall.jpg'
                            },
                            skin_down: {
                                skinColor: 0xdddddd,
                            },
                            skin_fore: {
                                skinColor: 0xdeeeee,
                            },
                            skin_behind: {
                                skinColor: 0xb0cee0,
                            },
                            skin_left: {
                                skinColor: 0xb0cee0,
                            },
                            skin_right: {
                                skinColor: 0xb0cee0,
                            }
                        },
                        startDot: {
                            x: -500,
                            y: 120,
                            z: 450
                        },
                        endDot: {
                            x: -1489,
                            y: 120,
                            z: 450
                        },
                    },
                    {
                        uuid: "",
                        name: 'wall9',
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
                                skinColor: 0xdeeeee,
                            },
                            skin_behind: {
                                skinColor: 0xb0cee0,
                            },
                            skin_left: {
                                skinColor: 0xb0cee0,
                            },
                            skin_right: {
                                skinColor: 0xb0cee0,
                            }
                        },
                        startDot: {
                            x: -1489,
                            y: 120,
                            z: 0
                        },
                        endDot: {
                            x: -1489,
                            y: 120,
                            z: 1489
                        },
                    },
                    {
                        uuid: "",
                        name: 'wall10',
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
                                skinColor: 0xdeeeee,
                            },
                            skin_behind: {
                                skinColor: 0xb0cee0,
                            },
                            skin_left: {
                                skinColor: 0xb0cee0,
                            },
                            skin_right: {
                                skinColor: 0xb0cee0,
                            }
                        },
                        startDot: {
                            x: 500,
                            y: 120,
                            z: 1489
                        },
                        endDot: {
                            x: -1489,
                            y: 120,
                            z: 1489
                        },
                    },
                    {
                        uuid: "",
                        name: 'wall11',
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
                                skinColor: 0xdeeeee,
                            },
                            skin_behind: {
                                skinColor: 0xb0cee0,
                            },
                            skin_left: {
                                skinColor: 0xb0cee0,
                            },
                            skin_right: {
                                skinColor: 0xb0cee0,
                            }
                        },
                        startDot: {
                            x: 490,
                            y: 120,
                            z: 450
                        },
                        endDot: {
                            x: 490,
                            y: 120,
                            z: 1489
                        },
                    },
                    {
                        uuid: '',
                        name: 'wall5',
                        thick: 20, // 厚度
                        length: 100, // 长度
                        height: 240,  // 高度
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
                                skinColor: 0xb0cee0,
                            },
                            skin_left: {
                                skinColor: 0xdeeeee,
                            },
                            skin_right: {
                                skinColor: 0xb0cee0,
                            }
                        },
                        startDot: {
                            x: -1489,
                            y: 120,
                            z: -350
                        },
                        endDot: {
                            x: -500,
                            y: 120,
                            z: -350
                        },
                        childrens: [
                            {
                                op: '-',
                                show: true,
                                uuid: "",
                                name: 'doorhole',
                                objType: 'doorhole',
                                thick: 20,
                                height: 220,
                                startDot: {
                                    x: -1410,
                                    y: 110,
                                    z: -350
                                },
                                endDot: {
                                    x: -1190,
                                    y: 110,
                                    z: -350
                                },
                                skin: {
                                    skin_up: {
                                        skinColor: 0xffdddd,
                                    },
                                    skin_down: {
                                        skinColor: 0xdddddd,
                                    },
                                    skin_fore: {
                                        skinColor: 0xffdddd,
                                    },
                                    skin_behind: {
                                        skinColor: 0xffdddd,
                                    },
                                    skin_left: {
                                        skinColor: 0xffdddd,
                                    },
                                    skin_right: {
                                        skinColor: 0xffdddd,
                                    }
                                },
                            },
                            {
                                op: '-',
                                show: true,
                                uuid: "",
                                name: 'windowHole',
                                objType: 'windowHole',
                                thick: 20,
                                height: 160,
                                startDot: {
                                    x: -1050,
                                    y: 130,
                                    z: -350
                                },
                                endDot: {
                                    x: -650,
                                    y: 130,
                                    z: -350
                                }
                            },
                            {
                                show: true,
                                name: 'windowCaseBottom',
                                uuid: "",
                                objType: 'cube',
                                thick: 30,
                                height: 10,
                                startDot: {
                                    x: -1050,
                                    y: 50,
                                    z: -350
                                },
                                endDot: {
                                    x: -650,
                                    y: 50,
                                    z: -350
                                },
                                skin: {
                                    skin_up: {
                                        skinColor: 0xc0dee0,
                                    },
                                    skin_down: {
                                        skinColor: 0xc0dee0,
                                    },
                                    skin_fore: {
                                        skinColor: 0xc0dee0,
                                    },
                                    skin_behind: {
                                        skinColor: 0xc0dee0,
                                    },
                                    skin_left: {
                                        skinColor: 0xd0eef0,
                                    },
                                    skin_right: {
                                        skinColor: 0xd0eef0,
                                    }
                                },
                            },

                            {
                                show: true,
                                uuid: "",
                                name: 'doorCaseRight',
                                objType: 'cube',
                                thick: 24,
                                height: 220,
                                startDot: {
                                    x: -1410,
                                    y: 110,
                                    z: -350
                                },
                                endDot: {
                                    x: -1405,
                                    y: 110,
                                    z: -350
                                },
                                skin: {
                                    skin_up: {
                                        skinColor: 0xc0dee0,
                                    },
                                    skin_down: {
                                        skinColor: 0xc0dee0,
                                    },
                                    skin_fore: {
                                        skinColor: 0xc0dee0,
                                    },
                                    skin_behind: {
                                        skinColor: 0xc0dee0,
                                    },
                                    skin_left: {
                                        skinColor: 0xd0eef0,
                                    },
                                    skin_right: {
                                        skinColor: 0xd0eef0,
                                    }
                                },
                            },
                            {
                                show: true,
                                name: 'doorCaseLeft',
                                uuid: "",
                                objType: 'cube',
                                thick: 24,
                                height: 220,
                                startDot: {
                                    x: -1190,
                                    y: 110,
                                    z: -350
                                },
                                endDot: {
                                    x: -1195,
                                    y: 110,
                                    z: -350
                                },
                                skin: {
                                    skin_up: {
                                        skinColor: 0xc0dee0,
                                    },
                                    skin_down: {
                                        skinColor: 0xc0dee0,
                                    },
                                    skin_fore: {
                                        skinColor: 0xc0dee0,
                                    },
                                    skin_behind: {
                                        skinColor: 0xc0dee0,
                                    },
                                    skin_left: {
                                        skinColor: 0xd0eef0,
                                    },
                                    skin_right: {
                                        skinColor: 0xd0eef0,
                                    }
                                },
                            },
                            {
                                show: true,
                                name: 'doorCaseTop',
                                uuid: "",
                                objType: 'cube',
                                thick: 24,
                                height: 5,
                                startDot: {
                                    x: -1190,
                                    y: 220,
                                    z: -350
                                },
                                endDot: {
                                    x: -1410,
                                    y: 220,
                                    z: -350
                                },
                                skin: {
                                    skin_up: {
                                        skinColor: 0xc0dee0,
                                    },
                                    skin_down: {
                                        skinColor: 0xc0dee0,
                                    },
                                    skin_fore: {
                                        skinColor: 0xc0dee0,
                                    },
                                    skin_behind: {
                                        skinColor: 0xc0dee0,
                                    },
                                    skin_left: {
                                        skinColor: 0xd0eef0,
                                    },
                                    skin_right: {
                                        skinColor: 0xd0eef0,
                                    }
                                },
                            },
                            {
                                show: true,
                                name: 'doorCaseBottom',
                                uuid: "",
                                objType: 'cube',
                                thick: 24,
                                height: 5,
                                startDot: {
                                    x: -1190,
                                    y: 5,
                                    z: -350
                                },
                                endDot: {
                                    x: -1410,
                                    y: 5,
                                    z: -350
                                },
                                skin: {
                                    skin_up: {
                                        skinColor: 0xc0dee0,
                                    },
                                    skin_down: {
                                        skinColor: 0xc0dee0,
                                    },
                                    skin_fore: {
                                        skinColor: 0xc0dee0,
                                    },
                                    skin_behind: {
                                        skinColor: 0xc0dee0,
                                    },
                                    skin_left: {
                                        skinColor: 0xd0eef0,
                                    },
                                    skin_right: {
                                        skinColor: 0xd0eef0,
                                    }
                                },
                            },
                            {
                                show: true,
                                name: 'doorLeft',
                                uuid: "",
                                objType: 'cube',
                                thick: 4,
                                height: 210,
                                startDot: {
                                    x: -1196,
                                    y: 112,
                                    z: -350
                                },
                                endDot: {
                                    x: -1300,
                                    y: 112,
                                    z: -350
                                },
                                skin: {
                                    opacity: 0.1,
                                    skin_up: {
                                        skinColor: 0x51443e,
                                    },
                                    skin_down: {
                                        skinColor: 0x51443e,
                                    },
                                    skin_fore: {
                                        skinColor: 0x51443e,
                                    },
                                    skin_behind: {
                                        skinColor: 0x51443e,
                                    },
                                    skin_left: {
                                        skinColor: 0x51443e,
                                        imgurl: "images/door_left.png",
                                    },
                                    skin_right: {
                                        skinColor: 0x51443e,
                                        imgurl: "images/door_right.png",
                                    }
                                },
                            },
                            {
                                show: true,
                                name: 'doorRight',
                                uuid: "",
                                objType: 'cube',
                                thick: 4,
                                height: 210,
                                startDot: {
                                    x: -1300,
                                    y: 112,
                                    z: -350
                                },
                                endDot: {
                                    x: -1404,
                                    y: 112,
                                    z: -350
                                },
                                skin: {
                                    opacity: 0.1,
                                    skin_up: {
                                        skinColor: 0x51443e,
                                    },
                                    skin_down: {
                                        skinColor: 0x51443e,
                                    },
                                    skin_fore: {
                                        skinColor: 0x51443e,
                                    },
                                    skin_behind: {
                                        skinColor: 0x51443e,
                                    },
                                    skin_left: {
                                        skinColor: 0x51443e,
                                        imgurl: "images/door_right.png",
                                    },
                                    skin_right: {
                                        skinColor: 0x51443e,
                                        imgurl: "images/door_left.png",
                                    }
                                },
                            },
                            {
                                show: true,
                                name: 'doorControl',
                                uuid: "",
                                objType: 'cube',
                                thick: 10,
                                height: 40,
                                startDot: {
                                    x: -1120,
                                    y: 160,
                                    z: -365
                                },
                                endDot: {
                                    x: -1160,
                                    y: 160,
                                    z: -365
                                },
                                skin: {
                                    opacity: 0.1,
                                    skin_up: {
                                        skinColor: 0x333333,
                                    },
                                    skin_down: {
                                        skinColor: 0x333333,
                                    },
                                    skin_fore: {
                                        skinColor: 0x333333,
                                    },
                                    skin_behind: {
                                        skinColor: 0x333333,
                                    },
                                    skin_left: {
                                        skinColor: 0x333333,
                                        imgurl: "images/doorControl.jpg",
                                    },
                                    skin_right: {
                                        skinColor: 0x333333,
                                    }
                                },
                            },
                        ]
                    },
                    {//wall3
                        uuid: "",
                        name: 'wall6',
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
                            x: -490,
                            y: 120,
                            z: 450
                        },
                        endDot: {
                            x: -490,
                            y: 120,
                            z: 1480
                        },
                    },
                ],
                style: {
                    skinColor: 0x8ac9e2
                }
            },
            //玻璃
            {
                show: true,
                name: 'windowGlass1',
                uuid: "",
                objType: 'glasses',
                width: 500,
                height: 160,
                pic: "images/glass.png",
                transparent: true,
                opacity: 0.1,
                position: { x: 200, y: 130, z: -350 },
                rotation: { x: 0, y: 0 * Math.PI, z: 0 },
                blending: false,
            },
            //贴海报
            {
                show: true,
                name: 'messagePanel',
                uuid: "",
                objType: 'plane',
                width: 100,
                height: 160,
                pic: "images/message.jpg",
                transparent: true,
                opacity: 1,
                position: { x:-250, y: 150, z: 439 },
                rotation: { x: 0, y: Math.PI, z: 0 },
                blending: false,
            },
            //空调
             {
                 show: true,
                 uuid: "",
                 name: 'aircondition',
                 objType: 'cube',
                 length: 60,
                 width: 80,
                 height: 220,
                 rotation: [{ direction: 'y', degree: 0.3*Math.PI}],//旋转 表示x方向0度  arb表示任意参数值[x,y,z,angle]
                 x: -420,
                 y: 110,
                 z: 370,
                 style: {
                     skinColor: 0xfefefe,
                     skin: {
                         skin_fore: {
                             imgurl: "images/aircondition.jpg",
                         }
                     }
                 }
             },
             //电视机
             {
                 show: true,
                 uuid: "",
                 name: 'television',
                 objType: 'cube',
                 length: 10,
                 width: 180,
                 height: 120,
                 rotation: [{ direction: 'x', degree:0}],//旋转 表示x方向0度  arb表示任意参数值[x,y,z,angle]
                 x: -480,
                 y: 150,
                 z: 0,
                 style: {
                     skinColor: 0x555555,
                     skin: {
                         skin_fore: {
                             imgurl: "images/tv.jpg",
                         },
                     }
                 }
             },
            //机柜1-1 --原型
            {
                show:true,
                name: 'cabinet1_1',
                shellname:'cabinet1_1_shell',
                uuid: '',
               // rotation: [{ direction: 'y', degree: 0.25*Math.PI}],//旋转     uuid:'',
                objType: 'emptyCabinet',
                transparent:true,
                size:{length:66,width:70,height:200, thick:2},
                position: { x:300, y: 105, z: -180 },
                doors: {
                    doorType:'lr',// ud上下门 lr左右门 单门可以缺省
                    doorSize: [1],
                    doorname: ['cabinet1_1_door_01'],
                    skins:[ {
                        skinColor: 0x333333,
                        skin_fore: {
                            imgurl: "images/rack_door_back.jpg",
                        },
                        skin_behind: {
                            imgurl: "images/rack_front_door.jpg",
                        }
                    }]
                },
                skin:{
                    skinColor: 0xff0000,
                    skin_up: {
                        skin:{
                            skinColor: 0xff0000,
                            skin_up: { imgurl: "images/rack_door_back.jpg" },
                            skin_down: { imgurl: "images/rack_door_back.jpg" },
                            skin_fore: {
                                skinColor: 0xff0000,
                                imgurl: "images/rack_door_back.jpg"
                            },
                            skin_behind: {
                                skinColor: 0xff0000,
                                imgurl: "images/rack_door_back.jpg"
                            },
                            skin_left: { imgurl: "images/rack_door_back.jpg" },
                            skin_right: { imgurl: "images/rack_door_back.jpg" },
                        }
                    },
                    skin_down: {
                        skin: {
                            skinColor: 0x333333,
                        }
                    },
                    skin_left: {
                        skin: {
                            skinColor: 0x333333,
                        }
                    },
                    skin_right: {
                        skin: {
                            skinColor: 0x333333,
                        }
                    },
                    skin_behind: {
                        skin: {
                            skinColor: 0x333333,
                        }
                    }
                }
            },
            //主机1
              {
                  show: true,
                  uuid: "",
                  name: 'equipment_card_1',
                  objType: 'cube',
                  length: 60,
                  width: 65,
                  height: 10,
                  x: -600,
                  y: 105,
                  z: 380,
                  style: {
                      skinColor: 0xff0000,
                      skin: {
                          skin_up: {
                              skinColor: 0xff0000,
                              imgurl: "images/rack_inside.jpg",
                          },
                          skin_down: {
                              skinColor: 0xff0000,
                              imgurl: "images/rack_inside.jpg",
                          },
                          skin_fore: {
                              skinColor: 0xff0000,
                              imgurl: "images/rack_inside.jpg",
                          },
                          skin_behind: {
                              skinColor: 0xff0000,
                              imgurl: "images/server2.jpg",
                          },
                          skin_left: {
                              skinColor: 0xff0000,
                              imgurl: "images/rack_inside.jpg",
                          },
                          skin_right: {
                              skinColor: 0xff0000,
                              imgurl: "images/rack_inside.jpg",
                          }
                      }
                  }
              },
        ],
        events: {
            dbclick: [
                {
                    obj_name: "doorRight",
                    obj_uuid: "",
                    obj_event: function (_obj) {
                        alert(_obj)
                        openRightDoor(_obj, function () { });
                        console.dir(_obj)
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
                            console.log("add parent");
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
                      if (_objname.indexOf("smokeDetector") >= 0) {
                        return true;
                      } else {
                        return false;
                      }
                    },
                    obj_uuid: "",
                    obj_event: function (_obj) {
                        alert("选中烟感")
                      console.log(_obj);
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
            {
                btnid: "btn_connection",
                btnTitle: "走线管理",
                btnimg: "images/connection.png",
                event: function () {
                }
            },
            {
                btnid: "btn_usage",
                btnTitle: "机柜利用率",
                btnimg: "images/usage.png",
                event: function () {
                }
            },
            {
                btnid: "btn_edit",
                btnTitle: "拖拽机柜",
                btnimg: "images/edit.png",
                event: function () {
                }
            },
            {
                btnid: "btn_alarm",
                btnTitle: "告警巡航",
                btnimg: "images/alarm.png",
                event: function () {
                    var mainCamera = msj3DObj.commonFunc.findObject("mainCamera");//主摄像机
                    var doorRight = msj3DObj.commonFunc.findObject("doorRight");
                    mainCamera.lookAt(doorRight.position);
                    console.log(createjs)
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
            },
        ]
    }
    //复制楼层
    var sheight = 240
    var thick = 20
    for(var s = 1;s <= 5;s++){
      // if(s !== 1){
      //   Aobjects.objects.push(
      //     // 地面
      //     {
      //       show: true,
      //       uuid: "",
      //       name: 'floor',
      //       objType: 'floor',
      //       length: 3000,
      //       width: 3000,
      //       height: 10,
      //       rotation: [{ direction: 'x', degree: 0 }],//旋转 表示x方向0度  arb表示任意参数值[x,y,z,angle]
      //       x: 0,
      //       y: sheight*(s-1),
      //       z: 0,
      //       style: {
      //         skinColor: 0x8ac9e2,
      //         skin: {
      //           opacity:0.1,
      //           skin_up: {
      //             skinColor: 0x98750f,
      //             imgurl: "images/floor4.png",
      //             repeatx: true,
      //             repeaty: true,
      //             width: 128,
      //             height: 128
      //           },
      //           skin_down: {
      //             skinColor: 0x8ac9e2,
      //           },
      //           skin_fore: {
      //             skinColor: 0x8ac9e2,
      //           }
      //         }
      //       }
      //     },
      //     //墙体
      //     {
      //       show: true,
      //       uuid: "",
      //       name: 'wall',
      //       objType: 'wall',
      //       thick: thick,
      //       length: 100,
      //       height:  sheight*(s-1),
      //       wallData: [
      //         {//wall1
      //           uuid: "",
      //           name: 'wall1',
      //           thick: thick,
      //           height:  sheight*(s-1),
      //           skin: {
      //             skin_up: {
      //               skinColor: 0xdddddd,
      //             },
      //             skin_down: {
      //               skinColor: 0xdddddd,
      //             },
      //             skin_fore: {
      //               skinColor: 0xb0cee0,
      //             },
      //             skin_behind: {
      //               skinColor: 0xb0cee0,
      //             },
      //             skin_left: {
      //               skinColor: 0xdeeeee,
      //             },
      //             skin_right: {
      //               skinColor: 0xb0cee0,
      //             }
      //           },
      //           startDot: {
      //             x: -500,
      //             y:  sheight*(s-1.5),
      //             z: -350
      //           },
      //           endDot: {
      //             x: 500,
      //             y: sheight*(s-1.5),
      //             z: -350
      //           },
      //           rotation: [{ direction: 'x', degree: 0 }],// 旋转 表示x方向0度  arb表示任意参数值[x,y,z,angle]
      //           childrens: [
      //             {
      //               op: '-',
      //               show: true,
      //               uuid: "",
      //               name: 'doorhole',
      //               objType: 'doorhole',
      //               thick: 20,
      //               height:sheight*(s-1)-thick,
      //               startDot: {
      //                 x: -410,
      //                 y: (sheight*(s-1)-thick)/2,
      //                 z: -350
      //               },
      //               endDot: {
      //                 x: -190,
      //                 y: (sheight*(s-1)-thick)/2,
      //                 z: -350
      //               },
      //               skin: {
      //                 skin_up: {
      //                   skinColor: 0xffdddd,
      //                 },
      //                 skin_down: {
      //                   skinColor: 0xdddddd,
      //                 },
      //                 skin_fore: {
      //                   skinColor: 0xffdddd,
      //                 },
      //                 skin_behind: {
      //                   skinColor: 0xffdddd,
      //                 },
      //                 skin_left: {
      //                   skinColor: 0xffdddd,
      //                 },
      //                 skin_right: {
      //                   skinColor: 0xffdddd,
      //                 }
      //               },
      //             },
      //             {
      //               op: '-',
      //               show: true,
      //               uuid: "",
      //               name: 'windowHole',
      //               objType: 'windowHole',
      //               thick: thick,
      //               height: sheight*(s-1)+160,
      //               startDot: {
      //                 x: -50,
      //                 y:  sheight*(s-1)+130,
      //                 z: -350
      //               },
      //               endDot: {
      //                 x: 450,
      //                 y: sheight*(s-1)+130,   //130
      //                 z: -350
      //               }
      //             },
      //             {
      //               show: true,
      //               name: 'windowCaseBottom',
      //               uuid: "",
      //               objType: 'cube',
      //               thick: 1.5*thick,  // 30
      //               height: 10,
      //               startDot: {
      //                 x: -50,
      //                 y: sheight*(s-1)+sheight/5,
      //                 z: -350
      //               },
      //               endDot: {
      //                 x: 450,
      //                 y: sheight*(s-1)+sheight/5,
      //                 z: -350
      //               },
      //               skin: {
      //                 skin_up: {
      //                   skinColor: 0xc0dee0,
      //                 },
      //                 skin_down: {
      //                   skinColor: 0xc0dee0,
      //                 },
      //                 skin_fore: {
      //                   skinColor: 0xc0dee0,
      //                 },
      //                 skin_behind: {
      //                   skinColor: 0xc0dee0,
      //                 },
      //                 skin_left: {
      //                   skinColor: 0xd0eef0,
      //                 },
      //                 skin_right: {
      //                   skinColor: 0xd0eef0,
      //                 }
      //               },
      //             },
      //
      //             {
      //               show: true,
      //               uuid: "",
      //               name: 'doorCaseRight',
      //               objType: 'cube',
      //               thick: 24,
      //               height: sheight*(s-1)-thick,
      //               startDot: {
      //                 x: -410,
      //                 y: (sheight*(s-1)-thick)/2,
      //                 z: -350
      //               },
      //               endDot: {
      //                 x: -405,
      //                 y: (sheight*(s-1)-thick)/2,
      //                 z: -350
      //               },
      //               skin: {
      //                 skin_up: {
      //                   skinColor: 0xc0dee0,
      //                 },
      //                 skin_down: {
      //                   skinColor: 0xc0dee0,
      //                 },
      //                 skin_fore: {
      //                   skinColor: 0xc0dee0,
      //                 },
      //                 skin_behind: {
      //                   skinColor: 0xc0dee0,
      //                 },
      //                 skin_left: {
      //                   skinColor: 0xd0eef0,
      //                 },
      //                 skin_right: {
      //                   skinColor: 0xd0eef0,
      //                 }
      //               },
      //             },
      //             {
      //               show: true,
      //               name: 'doorCaseLeft',
      //               uuid: "",
      //               objType: 'cube',
      //               thick: 24,
      //               height: sheight*(s-1)-thick,
      //               startDot: {
      //                 x: -190,
      //                 y: (sheight*(s-1)-thick)/2,
      //                 z: -350
      //               },
      //               endDot: {
      //                 x: -195,
      //                 y: (sheight*(s-1)-thick)/2,
      //                 z: -350
      //               },
      //               skin: {
      //                 skin_up: {
      //                   skinColor: 0xc0dee0,
      //                 },
      //                 skin_down: {
      //                   skinColor: 0xc0dee0,
      //                 },
      //                 skin_fore: {
      //                   skinColor: 0xc0dee0,
      //                 },
      //                 skin_behind: {
      //                   skinColor: 0xc0dee0,
      //                 },
      //                 skin_left: {
      //                   skinColor: 0xd0eef0,
      //                 },
      //                 skin_right: {
      //                   skinColor: 0xd0eef0,
      //                 }
      //               },
      //             },
      //             {
      //               show: true,
      //               name: 'doorCaseTop',
      //               uuid: "",
      //               objType: 'cube',
      //               thick: 24,
      //               height: 5,
      //               startDot: {
      //                 x: -190,
      //                 y: sheight*(s-1)-thick,
      //                 z: -350
      //               },
      //               endDot: {
      //                 x: -410,
      //                 y: sheight*(s-1)-thick,
      //                 z: -350
      //               },
      //               skin: {
      //                 skin_up: {
      //                   skinColor: 0xc0dee0,
      //                 },
      //                 skin_down: {
      //                   skinColor: 0xc0dee0,
      //                 },
      //                 skin_fore: {
      //                   skinColor: 0xc0dee0,
      //                 },
      //                 skin_behind: {
      //                   skinColor: 0xc0dee0,
      //                 },
      //                 skin_left: {
      //                   skinColor: 0xd0eef0,
      //                 },
      //                 skin_right: {
      //                   skinColor: 0xd0eef0,
      //                 }
      //               },
      //             },
      //             {
      //               show: true,
      //               name: 'doorCaseBottom',
      //               uuid: "",
      //               objType: 'cube',
      //               thick: 24,
      //               height: 5,
      //               startDot: {
      //                 x: -190,
      //                 y: sheight*(s-1)+5,
      //                 z: -350
      //               },
      //               endDot: {
      //                 x: -410,
      //                 y: sheight*(s-1)+5,
      //                 z: -350
      //               },
      //               skin: {
      //                 skin_up: {
      //                   skinColor: 0xc0dee0,
      //                 },
      //                 skin_down: {
      //                   skinColor: 0xc0dee0,
      //                 },
      //                 skin_fore: {
      //                   skinColor: 0xc0dee0,
      //                 },
      //                 skin_behind: {
      //                   skinColor: 0xc0dee0,
      //                 },
      //                 skin_left: {
      //                   skinColor: 0xd0eef0,
      //                 },
      //                 skin_right: {
      //                   skinColor: 0xd0eef0,
      //                 }
      //               },
      //             },
      //             {
      //               show: true,
      //               name: 'doorLeft',
      //               uuid: "",
      //               objType: 'cube',
      //               thick: 4,
      //               height: 210,
      //               startDot: {
      //                 x: -196,
      //                 y: sheight*(s-1)+112,
      //                 z: -350
      //               },
      //               endDot: {
      //                 x: -300,
      //                 y: sheight*(s-1)+112,
      //                 z: -350
      //               },
      //               skin: {
      //                 opacity: 0.1,
      //                 skin_up: {
      //                   skinColor: 0x51443e,
      //                 },
      //                 skin_down: {
      //                   skinColor: 0x51443e,
      //                 },
      //                 skin_fore: {
      //                   skinColor: 0x51443e,
      //                 },
      //                 skin_behind: {
      //                   skinColor: 0x51443e,
      //                 },
      //                 skin_left: {
      //                   skinColor: 0x51443e,
      //                   imgurl: "images/door_left.png",
      //                 },
      //                 skin_right: {
      //                   skinColor: 0x51443e,
      //                   imgurl: "images/door_right.png",
      //                 }
      //               },
      //             },
      //             {
      //               show: true,
      //               name: 'doorRight',
      //               uuid: "",
      //               objType: 'cube',
      //               thick: 4,
      //               height: 210,
      //               startDot: {
      //                 x: -300,
      //                 y: sheight*(s-1)+112,
      //                 z: -350
      //               },
      //               endDot: {
      //                 x: -404,
      //                 y: sheight*(s-1)+112,
      //                 z: -350
      //               },
      //               skin: {
      //                 opacity: 0.1,
      //                 skin_up: {
      //                   skinColor: 0x51443e,
      //                 },
      //                 skin_down: {
      //                   skinColor: 0x51443e,
      //                 },
      //                 skin_fore: {
      //                   skinColor: 0x51443e,
      //                 },
      //                 skin_behind: {
      //                   skinColor: 0x51443e,
      //                 },
      //                 skin_left: {
      //                   skinColor: 0x51443e,
      //                   imgurl: "images/door_right.png",
      //                 },
      //                 skin_right: {
      //                   skinColor: 0x51443e,
      //                   imgurl: "images/door_left.png",
      //                 }
      //               },
      //             },
      //             {
      //               show: true,
      //               name: 'doorControl',
      //               uuid: "",
      //               objType: 'cube',
      //               thick: 10,
      //               height: 40,
      //               startDot: {
      //                 x: -120,
      //                 y: sheight*(s-1)+160,
      //                 z: -365
      //               },
      //               endDot: {
      //                 x: -160,
      //                 y: sheight*(s-1)+160,
      //                 z: -365
      //               },
      //               skin: {
      //                 opacity: 0.1,
      //                 skin_up: {
      //                   skinColor: 0x333333,
      //                 },
      //                 skin_down: {
      //                   skinColor: 0x333333,
      //                 },
      //                 skin_fore: {
      //                   skinColor: 0x333333,
      //                 },
      //                 skin_behind: {
      //                   skinColor: 0x333333,
      //                 },
      //                 skin_left: {
      //                   skinColor: 0x333333,
      //                   imgurl: "images/doorControl.jpg",
      //                 },
      //                 skin_right: {
      //                   skinColor: 0x333333,
      //                 }
      //               },
      //             },
      //           ]
      //         },
      //         {//wall2
      //           uuid: "",
      //           name: 'wall2',
      //           thick: thick,
      //           height: sheight,
      //           skin: {
      //             skin_up: {
      //               skinColor: 0xdddddd,
      //             },
      //             skin_down: {
      //               skinColor: 0xdddddd,
      //             },
      //             skin_fore: {
      //               skinColor: 0xb0cee0,
      //             },
      //             skin_behind: {
      //               skinColor: 0xb0cee0,
      //             },
      //             skin_left: {
      //               skinColor: 0xb0cee0,
      //             },
      //             skin_right: {
      //               skinColor: 0xdeeeee,
      //             }
      //           },
      //           startDot: {
      //             x: -500,
      //             y: sheight*(s-1.5),
      //             z: 450
      //           },
      //           endDot: {
      //             x: 500,
      //             y: sheight*(s-1.5),
      //             z: 450
      //           },
      //         },
      //         {//wall3
      //           uuid: "",
      //           name: 'wall3',
      //           thick: thick,
      //           height: sheight,
      //           skin: {
      //             skin_up: {
      //               skinColor: 0xdddddd,
      //             },
      //             skin_down: {
      //               skinColor: 0xdddddd,
      //             },
      //             skin_fore: {
      //               skinColor: 0xb0cee0,
      //             },
      //             skin_behind: {
      //               skinColor: 0xdeeeee,
      //             },
      //             skin_left: {
      //               skinColor: 0xb0cee0,
      //             },
      //             skin_right: {
      //               skinColor: 0xb0cee0,
      //             }
      //           },
      //           startDot: {
      //             x: 490,
      //             y: sheight*(s-1.5),
      //             z: -355
      //           },
      //           endDot: {
      //             x: 490,
      //             y: sheight*(s-1.5),
      //             z: 455
      //           },
      //         },
      //         {//wall4
      //           uuid: "",
      //           name: 'wall4',
      //           thick: thick,
      //           height: sheight,
      //           skin: {
      //             skin_up: {
      //               skinColor: 0xdddddd,
      //             },
      //             skin_down: {
      //               skinColor: 0xdddddd,
      //             },
      //             skin_fore: {
      //               skinColor: 0xdeeeee,
      //             },
      //             skin_behind: {
      //               skinColor: 0xb0cee0,
      //             },
      //             skin_left: {
      //               skinColor: 0xb0cee0,
      //             },
      //             skin_right: {
      //               skinColor: 0xb0cee0,
      //             }
      //           },
      //           startDot: {
      //             x: -490,
      //             y: sheight*(s-1.5),
      //             z: -355
      //           },
      //           endDot: {
      //             x: -490,
      //             y: sheight*(s-1.5),
      //             z: 455
      //           },
      //         },
      //         {
      //           uuid: '',
      //           name: 'wall5',
      //           thick: thick, // 厚度
      //           length: 100, // 长度
      //           height: sheight,  // 高度
      //           skin: {
      //             skin_up: {
      //               skinColor: 0xdddddd,
      //             },
      //             skin_down: {
      //               skinColor: 0xdddddd,
      //             },
      //             skin_fore: {
      //               skinColor: 0xb0cee0,
      //             },
      //             skin_behind: {
      //               skinColor: 0xb0cee0,
      //             },
      //             skin_left: {
      //               skinColor: 0xdeeeee,
      //             },
      //             skin_right: {
      //               skinColor: 0xb0cee0,
      //             }
      //           },
      //           startDot: {
      //             x: -1500,
      //             y: sheight*(s-1.5),
      //             z: -350
      //           },
      //           endDot: {
      //             x: -500,
      //             y: sheight*(s-1.5),
      //             z: -350
      //           },
      //           childrens: [
      //             {
      //               op: '-',
      //               show: true,
      //               uuid: "",
      //               name: 'doorhole',
      //               objType: 'doorhole',
      //               thick: thick,
      //               height: sheight*(s-1)-thick,
      //               startDot: {
      //                 x: -1410,
      //                 y: (sheight*(s-1)-thick)/2,
      //                 z: -350
      //               },
      //               endDot: {
      //                 x: -1190,
      //                 y: (sheight*(s-1)-thick)/2,
      //                 z: -350
      //               },
      //               skin: {
      //                 skin_up: {
      //                   skinColor: 0xffdddd,
      //                 },
      //                 skin_down: {
      //                   skinColor: 0xdddddd,
      //                 },
      //                 skin_fore: {
      //                   skinColor: 0xffdddd,
      //                 },
      //                 skin_behind: {
      //                   skinColor: 0xffdddd,
      //                 },
      //                 skin_left: {
      //                   skinColor: 0xffdddd,
      //                 },
      //                 skin_right: {
      //                   skinColor: 0xffdddd,
      //                 }
      //               },
      //             },
      //             {
      //               op: '-',
      //               show: true,
      //               uuid: "",
      //               name: 'windowHole',
      //               objType: 'windowHole',
      //               thick: thick,
      //               height: sheight*(s-1)+160,
      //               startDot: {
      //                 x: -1050,
      //                 y: sheight*(s-1)+130,
      //                 z: -350
      //               },
      //               endDot: {
      //                 x: -650,
      //                 y: sheight*(s-1)+130,
      //                 z: -350
      //               }
      //             },
      //             {
      //               show: true,
      //               name: 'windowCaseBottom',
      //               uuid: "",
      //               objType: 'cube',
      //               thick: 30,
      //               height: 10,
      //               startDot: {
      //                 x: -1050,
      //                 y: 50,
      //                 z: -350
      //               },
      //               endDot: {
      //                 x: -650,
      //                 y: 50,
      //                 z: -350
      //               },
      //               skin: {
      //                 skin_up: {
      //                   skinColor: 0xc0dee0,
      //                 },
      //                 skin_down: {
      //                   skinColor: 0xc0dee0,
      //                 },
      //                 skin_fore: {
      //                   skinColor: 0xc0dee0,
      //                 },
      //                 skin_behind: {
      //                   skinColor: 0xc0dee0,
      //                 },
      //                 skin_left: {
      //                   skinColor: 0xd0eef0,
      //                 },
      //                 skin_right: {
      //                   skinColor: 0xd0eef0,
      //                 }
      //               },
      //             },
      //
      //             {
      //               show: true,
      //               uuid: "",
      //               name: 'doorCaseRight',
      //               objType: 'cube',
      //               thick: 24,
      //               height: 220,
      //               startDot: {
      //                 x: -1410,
      //                 y: 110,
      //                 z: -350
      //               },
      //               endDot: {
      //                 x: -1405,
      //                 y: 110,
      //                 z: -350
      //               },
      //               skin: {
      //                 skin_up: {
      //                   skinColor: 0xc0dee0,
      //                 },
      //                 skin_down: {
      //                   skinColor: 0xc0dee0,
      //                 },
      //                 skin_fore: {
      //                   skinColor: 0xc0dee0,
      //                 },
      //                 skin_behind: {
      //                   skinColor: 0xc0dee0,
      //                 },
      //                 skin_left: {
      //                   skinColor: 0xd0eef0,
      //                 },
      //                 skin_right: {
      //                   skinColor: 0xd0eef0,
      //                 }
      //               },
      //             },
      //             {
      //               show: true,
      //               name: 'doorCaseLeft',
      //               uuid: "",
      //               objType: 'cube',
      //               thick: 24,
      //               height: 220,
      //               startDot: {
      //                 x: -1190,
      //                 y: 110,
      //                 z: -350
      //               },
      //               endDot: {
      //                 x: -1195,
      //                 y: 110,
      //                 z: -350
      //               },
      //               skin: {
      //                 skin_up: {
      //                   skinColor: 0xc0dee0,
      //                 },
      //                 skin_down: {
      //                   skinColor: 0xc0dee0,
      //                 },
      //                 skin_fore: {
      //                   skinColor: 0xc0dee0,
      //                 },
      //                 skin_behind: {
      //                   skinColor: 0xc0dee0,
      //                 },
      //                 skin_left: {
      //                   skinColor: 0xd0eef0,
      //                 },
      //                 skin_right: {
      //                   skinColor: 0xd0eef0,
      //                 }
      //               },
      //             },
      //             {
      //               show: true,
      //               name: 'doorCaseTop',
      //               uuid: "",
      //               objType: 'cube',
      //               thick: 24,
      //               height: 5,
      //               startDot: {
      //                 x: -1190,
      //                 y: 220,
      //                 z: -350
      //               },
      //               endDot: {
      //                 x: -1410,
      //                 y: 220,
      //                 z: -350
      //               },
      //               skin: {
      //                 skin_up: {
      //                   skinColor: 0xc0dee0,
      //                 },
      //                 skin_down: {
      //                   skinColor: 0xc0dee0,
      //                 },
      //                 skin_fore: {
      //                   skinColor: 0xc0dee0,
      //                 },
      //                 skin_behind: {
      //                   skinColor: 0xc0dee0,
      //                 },
      //                 skin_left: {
      //                   skinColor: 0xd0eef0,
      //                 },
      //                 skin_right: {
      //                   skinColor: 0xd0eef0,
      //                 }
      //               },
      //             },
      //             {
      //               show: true,
      //               name: 'doorCaseBottom',
      //               uuid: "",
      //               objType: 'cube',
      //               thick: 24,
      //               height: 5,
      //               startDot: {
      //                 x: -1190,
      //                 y: 5,
      //                 z: -350
      //               },
      //               endDot: {
      //                 x: -1410,
      //                 y: 5,
      //                 z: -350
      //               },
      //               skin: {
      //                 skin_up: {
      //                   skinColor: 0xc0dee0,
      //                 },
      //                 skin_down: {
      //                   skinColor: 0xc0dee0,
      //                 },
      //                 skin_fore: {
      //                   skinColor: 0xc0dee0,
      //                 },
      //                 skin_behind: {
      //                   skinColor: 0xc0dee0,
      //                 },
      //                 skin_left: {
      //                   skinColor: 0xd0eef0,
      //                 },
      //                 skin_right: {
      //                   skinColor: 0xd0eef0,
      //                 }
      //               },
      //             },
      //             {
      //               show: true,
      //               name: 'doorLeft',
      //               uuid: "",
      //               objType: 'cube',
      //               thick: 4,
      //               height: 210,
      //               startDot: {
      //                 x: -1196,
      //                 y: 112,
      //                 z: -350
      //               },
      //               endDot: {
      //                 x: -1300,
      //                 y: 112,
      //                 z: -350
      //               },
      //               skin: {
      //                 opacity: 0.1,
      //                 skin_up: {
      //                   skinColor: 0x51443e,
      //                 },
      //                 skin_down: {
      //                   skinColor: 0x51443e,
      //                 },
      //                 skin_fore: {
      //                   skinColor: 0x51443e,
      //                 },
      //                 skin_behind: {
      //                   skinColor: 0x51443e,
      //                 },
      //                 skin_left: {
      //                   skinColor: 0x51443e,
      //                   imgurl: "images/door_left.png",
      //                 },
      //                 skin_right: {
      //                   skinColor: 0x51443e,
      //                   imgurl: "images/door_right.png",
      //                 }
      //               },
      //             },
      //             {
      //               show: true,
      //               name: 'doorRight',
      //               uuid: "",
      //               objType: 'cube',
      //               thick: 4,
      //               height: 210,
      //               startDot: {
      //                 x: -1300,
      //                 y: 112,
      //                 z: -350
      //               },
      //               endDot: {
      //                 x: -1404,
      //                 y: 112,
      //                 z: -350
      //               },
      //               skin: {
      //                 opacity: 0.1,
      //                 skin_up: {
      //                   skinColor: 0x51443e,
      //                 },
      //                 skin_down: {
      //                   skinColor: 0x51443e,
      //                 },
      //                 skin_fore: {
      //                   skinColor: 0x51443e,
      //                 },
      //                 skin_behind: {
      //                   skinColor: 0x51443e,
      //                 },
      //                 skin_left: {
      //                   skinColor: 0x51443e,
      //                   imgurl: "images/door_right.png",
      //                 },
      //                 skin_right: {
      //                   skinColor: 0x51443e,
      //                   imgurl: "images/door_left.png",
      //                 }
      //               },
      //             },
      //             {
      //               show: true,
      //               name: 'doorControl',
      //               uuid: "",
      //               objType: 'cube',
      //               thick: 10,
      //               height: 40,
      //               startDot: {
      //                 x: -1120,
      //                 y: 160,
      //                 z: -365
      //               },
      //               endDot: {
      //                 x: -1160,
      //                 y: 160,
      //                 z: -365
      //               },
      //               skin: {
      //                 opacity: 0.1,
      //                 skin_up: {
      //                   skinColor: 0x333333,
      //                 },
      //                 skin_down: {
      //                   skinColor: 0x333333,
      //                 },
      //                 skin_fore: {
      //                   skinColor: 0x333333,
      //                 },
      //                 skin_behind: {
      //                   skinColor: 0x333333,
      //                 },
      //                 skin_left: {
      //                   skinColor: 0x333333,
      //                   imgurl: "images/doorControl.jpg",
      //                 },
      //                 skin_right: {
      //                   skinColor: 0x333333,
      //                 }
      //               },
      //             },
      //           ]
      //         },
      //         {//wall3
      //           uuid: "",
      //           name: 'wall6',
      //           thick: 20,
      //           height: 240,
      //           skin: {
      //             skin_up: {
      //               skinColor: 0xdddddd,
      //             },
      //             skin_down: {
      //               skinColor: 0xdddddd,
      //             },
      //             skin_fore: {
      //               skinColor: 0xb0cee0,
      //             },
      //             skin_behind: {
      //               skinColor: 0xdeeeee,
      //             },
      //             skin_left: {
      //               skinColor: 0xb0cee0,
      //             },
      //             skin_right: {
      //               skinColor: 0xb0cee0,
      //             }
      //           },
      //           startDot: {
      //             x: -490,
      //             y: 120,
      //             z: 355
      //           },
      //           endDot: {
      //             x: -490,
      //             y: 120,
      //             z: 1480
      //           },
      //         },
      //       ],
      //       style: {
      //         skinColor: 0x8ac9e2
      //       }
      //     },
      //     //玻璃
      //     {
      //       show: true,
      //       name: 'windowGlass1',
      //       uuid: "",
      //       objType: 'glasses',
      //       width: 500,
      //       height: 160,
      //       pic: "images/glass.png",
      //       transparent: true,
      //       opacity: 0.1,
      //       position: { x: 200, y: 130, z: -350 },
      //       rotation: { x: 0, y: 0 * Math.PI, z: 0 },
      //       blending: false,
      //     },
      //     //贴海报
      //     {
      //       show: true,
      //       name: 'messagePanel',
      //       uuid: "",
      //       objType: 'plane',
      //       width: 100,
      //       height: 160,
      //       pic: "images/message.jpg",
      //       transparent: true,
      //       opacity: 1,
      //       position: { x:-250, y: 150, z: 439 },
      //       rotation: { x: 0, y: Math.PI, z: 0 },
      //       blending: false,
      //     },
      //     //空调
      //     {
      //       show: true,
      //       uuid: "",
      //       name: 'aircondition',
      //       objType: 'cube',
      //       length: 60,
      //       width: 80,
      //       height: 220,
      //       rotation: [{ direction: 'y', degree: 0.3*Math.PI}],//旋转 表示x方向0度  arb表示任意参数值[x,y,z,angle]
      //       x: -420,
      //       y: 110,
      //       z: 370,
      //       style: {
      //         skinColor: 0xfefefe,
      //         skin: {
      //           skin_fore: {
      //             imgurl: "images/aircondition.jpg",
      //           },
      //         }
      //       }
      //     },
      //     //电视机
      //     {
      //       show: true,
      //       uuid: "",
      //       name: 'television',
      //       objType: 'cube',
      //       length: 10,
      //       width: 180,
      //       height: 120,
      //       rotation: [{ direction: 'x', degree:0}],//旋转 表示x方向0度  arb表示任意参数值[x,y,z,angle]
      //       x: -480,
      //       y: 150,
      //       z: 0,
      //       style: {
      //         skinColor: 0x555555,
      //         skin: {
      //           skin_fore: {
      //             imgurl: "images/tv.jpg",
      //           },
      //         }
      //       }
      //     },
      //     //机柜1-1 --原型
      //     {
      //       show:true,
      //       name: 'cabinet1_1',
      //       shellname:'cabinet1_1_shell',
      //       uuid: '',
      //       // rotation: [{ direction: 'y', degree: 0.25*Math.PI}],//旋转     uuid:'',
      //       objType: 'emptyCabinet',
      //       transparent:true,
      //       size:{length:66,width:70,height:200, thick:2},
      //       position: { x:300, y: 105, z: -180 },
      //       doors: {
      //         doorType:'lr',// ud上下门 lr左右门 单门可以缺省
      //         doorSize: [1],
      //         doorname: ['cabinet1_1_door_01'],
      //         skins:[ {
      //           skinColor: 0x333333,
      //           skin_fore: {
      //             imgurl: "images/rack_door_back.jpg",
      //           },
      //           skin_behind: {
      //             imgurl: "images/rack_front_door.jpg",
      //           }
      //         }]
      //       },
      //       skin:{
      //         skinColor: 0xff0000,
      //         skin_up: {
      //           skin:{
      //             skinColor: 0xff0000,
      //             skin_up: { imgurl: "images/rack_door_back.jpg" },
      //             skin_down: { imgurl: "images/rack_door_back.jpg" },
      //             skin_fore: {
      //               skinColor: 0xff0000,
      //               imgurl: "images/rack_door_back.jpg"
      //             },
      //             skin_behind: {
      //               skinColor: 0xff0000,
      //               imgurl: "images/rack_door_back.jpg"
      //             },
      //             skin_left: { imgurl: "images/rack_door_back.jpg" },
      //             skin_right: { imgurl: "images/rack_door_back.jpg" },
      //           }
      //         },
      //         skin_down: {
      //           skin: {
      //             skinColor: 0x333333,
      //           }
      //         },
      //         skin_left: {
      //           skin: {
      //             skinColor: 0x333333,
      //           }
      //         },
      //         skin_right: {
      //           skin: {
      //             skinColor: 0x333333,
      //           }
      //         },
      //         skin_behind: {
      //           skin: {
      //             skinColor: 0x333333,
      //           }
      //         }
      //       }
      //     },
      //     //主机1
      //     {
      //       show: true,
      //       uuid: "",
      //       name: 'equipment_card_1',
      //       objType: 'cube',
      //       length: 60,
      //       width: 65,
      //       height: 10,
      //       x: -100,
      //       y: 105,
      //       z: -180,
      //       style: {
      //         skinColor: 0xff0000,
      //         skin: {
      //           skin_up: {
      //             skinColor: 0xff0000,
      //             imgurl: "images/rack_inside.jpg",
      //           },
      //           skin_down: {
      //             skinColor: 0xff0000,
      //             imgurl: "images/rack_inside.jpg",
      //           },
      //           skin_fore: {
      //             skinColor: 0xff0000,
      //             imgurl: "images/rack_inside.jpg",
      //           },
      //           skin_behind: {
      //             skinColor: 0xff0000,
      //             imgurl: "images/server2.jpg",
      //           },
      //           skin_left: {
      //             skinColor: 0xff0000,
      //             imgurl: "images/rack_inside.jpg",
      //           },
      //           skin_right: {
      //             skinColor: 0xff0000,
      //             imgurl: "images/rack_inside.jpg",
      //           }
      //         }
      //       }
      //     },
      //     //主机2
      //     {
      //       show: true,
      //       uuid: "",
      //       name: 'equipment_card_2',
      //       objType: 'cube',
      //       length: 60,
      //       width: 65,
      //       height: 20,
      //       x: -100,
      //       y: 120,
      //       z: -180,
      //       style: {
      //         skinColor: 0x92630b,
      //         skin: {
      //           skin_up: {
      //             skinColor: 0x92630b,
      //             imgurl: "images/rack_inside.jpg",
      //           },
      //           skin_down: {
      //             skinColor: 0x92630b,
      //             imgurl: "images/rack_inside.jpg",
      //           },
      //           skin_fore: {
      //             skinColor: 0x92630b,
      //             imgurl: "images/rack_inside.jpg",
      //           },
      //           skin_behind: {
      //             skinColor: 0x92630b,
      //             imgurl: "images/server2.jpg",
      //           },
      //           skin_left: {
      //             skinColor: 0x92630b,
      //             imgurl: "images/rack_inside.jpg",
      //           },
      //           skin_right: {
      //             skinColor: 0x92630b,
      //             imgurl: "images/rack_inside.jpg",
      //           }
      //         }
      //       }
      //     },
      //     //主机3
      //     {
      //       show: true,
      //       uuid: "",
      //       name: 'equipment_card_3',
      //       objType: 'cube',
      //       length: 60,
      //       width: 65,
      //       height: 30,
      //       x: -100,
      //       y: 145,
      //       z: -180,
      //       style: {
      //         skinColor: 0x92630b,
      //         skin: {
      //           skin_up: {
      //             skinColor: 0x92630b,
      //             imgurl: "images/rack_inside.jpg",
      //           },
      //           skin_down: {
      //             skinColor: 0x92630b,
      //             imgurl: "images/rack_inside.jpg",
      //           },
      //           skin_fore: {
      //             skinColor: 0x92630b,
      //             imgurl: "images/rack_inside.jpg",
      //           },
      //           skin_behind: {
      //             skinColor: 0x92630b,
      //             imgurl: "images/server3.jpg",
      //           },
      //           skin_left: {
      //             skinColor: 0x92630b,
      //             imgurl: "images/rack_inside.jpg",
      //           },
      //           skin_right: {
      //             skinColor: 0x92630b,
      //             imgurl: "images/rack_inside.jpg",
      //           }
      //         }
      //       }
      //     }
      //   )
      // }
    }
    //复制机柜
    // for (var i = 1; i <=3;i++){
    //     for (var j = 1; j <=6; j++) {
    //         if (i != 1 || j != 1) {
    //         Aobjects.objects.push({
    //             show: true,
    //             copyfrom: 'cabinet1_1',
    //             name: 'cabinet'+i+'_'+j,
    //             childrenname: ['cabinet' + i + '_' + j + '_shell', 'cabinet' + i + '_' + j + '_door_01'],
    //             uuid: '',
    //             objType: 'cloneObj',
    //             position: { x:-(i-1)*200, y:0 , z:(j-1)*100 },
    //             scale: { x: 1, y: 1, z: 1 }
    //         });
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