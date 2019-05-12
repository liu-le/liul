function Meun(){
    this.odl = document.querySelector(".margin dl");
    this.add = document.querySelectorAll(".margin dl dd");
    this.aul = document.querySelectorAll(".margin dl ul");
 
    this.init();
    }
    Meun.prototype.init = function () {
        for(i=0;i<this.add.length;i++){
            this.dis();
           
        }
       }
       Meun.prototype.dis = function () {
        var that =this;
        this.add[i].onmouseover = function () {
         var cun=i;
         return function(){
                that.aul[cun].style. display="block";
                // console.log(cun)
             }
        }();
        this.add[i].onmouseout = function (){
            var cun=i;
            return function(){
                     that.aul[cun].style. display="none";
                }
        }();
    }
    
    new Meun;