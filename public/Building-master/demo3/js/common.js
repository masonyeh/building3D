var comm = function () {
   return {
       getDistance:function (v1 ,v2) {
           var distance
           if (v1 > 0) {
               if(v2 > 0) {
                   distance = Math.abs(Math.abs(v1) - Math.abs(v2))
               } else {
                   distance = Math.abs(v1) + Math.abs(v2)
               }
           } else {
               if(v2 > 0) {
                   distance = Math.abs(v2) + Math.abs(v1)
               } else {
                   distance = Math.abs(Math.abs(v1) - Math.abs(v2))
               }
           }
           return distance
       },
       getDisplacement:function (v1, v2, v3) {
           var displacement
           if (v1 > 0) {
               if(v2 > 0) {
                   displacement = v3/2 + Math.abs(v1) > Math.abs(v2) ? Math.abs(v2) : Math.abs(v1)
               } else {
                   displacement =  Math.abs(v1) - v3/2
               }
           } else {
               if(v2 > 0) {
                   displacement = Math.abs(v2) - v3/2
               } else {
                   displacement = v3/2 + Math.abs(v1) < Math.abs(v2) ? Math.abs(v2) : Math.abs(v1)
               }
           }
           return displacement
       }
   }
}()