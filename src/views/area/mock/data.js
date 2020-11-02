export default  {
    build:[
      {
        id:1,
        name:'宏慧',
        floors:[
          {
            map:{
              id:1,
              url:require('./images/1.png').default,
            },
            wall:[
              {x:0,y:25,z:30,width:80,height:50,depth:0},
              {x:40,y:25,z:0,width:80,height:50,depth:0},
              {x:0,y:25,z:-30,width:80,height:50,depth:0},
              {x:0,y:25,z:-20,width:80,height:50,depth:0},
            ]
          },
          // {
          //   map:{
          //     id:2,
          //     url:require('./images/2.png').default,
          //   },
          //   wall:[
          //     {x:0,y:25,z:30,width:80,height:50,depth:0},
          //     {x:40,y:25,z:0,width:80,height:50,depth:0},
          //     {x:0,y:25,z:-30,width:80,height:50,depth:0},
          //     {x:0,y:25,z:-20,width:80,height:50,depth:0},
          //   ]
          // },
          // {
          //   map:{
          //     id:2,
          //     url:require('./images/3.png').default,
          //   },
          //   wall:[
          //     {x:0,y:25,z:30,width:80,height:50,depth:0},
          //     {x:40,y:25,z:0,width:80,height:50,depth:0},
          //     {x:0,y:25,z:-30,width:80,height:50,depth:0},
          //     {x:0,y:25,z:-20,width:80,height:50,depth:0},
          //   ]
          // }
        ]
      }
    ]
}