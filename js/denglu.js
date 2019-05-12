class Login{
    constructor(){
        this.user = document.getElementById("user");
        this.pass = document.getElementById("pass");
        this.btn = document.getElementById("btn");
        this.em = document.querySelector("em");

        this.init();
        this.getData();
    }
    init(){
        var that = this;
        this.btn.onclick = function(){
            that.yanzheng();
           
        }
    }
    getData(){
        this.abc = localStorage.getItem("abc");
        // 读取localStorage，如果有就解析成数组，如果没有就给一个空数组，方便操作
        if(this.abc == null){
            this.abc = [];
        }else{
            this.abc = JSON.parse(this.abc)
        }
    }
    
    yanzheng(){
        for(var i=0;i<this.abc.length;i++){
           
            if(this.abc[i].user == this.user.value && this.abc[i].pass == this.pass.value&&this.user.value!="" && this.pass.value !=""){
          
                this.em.innerHTML = "登录成功,1秒后跳转";

                this.abc[i].onoff = 1;

                localStorage.setItem("abc",JSON.stringify(this.abc))

                setTimeout(()=>{
                    location.href = "http://localhost:81/liule/index/homep.html";
                    // http://localhost:81/liule/index/homep.html
                },1000)
                return;
            }
        }
        this.em.innerHTML = "用户名密码不符";
    }
}


new Login();