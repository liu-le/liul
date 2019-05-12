
    // 注册：存储用户名和密码
    // 多个用户
    // 一条
    // user = [{name:"admin",pass:"123"},{name:"root",pass:"456"},{"name":"liyang",pass:789}]


    class Register{
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
                that.setData();
            }
        }
        getData(){
            this.abc = localStorage.getItem("abc");
            // 读取localStorage，如果有就解析成数组，如果没有就给一个空数组。方便操作
            if(this.abc == null){
                this.abc = [];
            }else{
                this.abc = JSON.parse(this.abc);
            }
        }
        setData(){
            if(this.abc.length == 0){
                console.log(1)
               
                this.abc.push({
                    user:this.user.value,
                    pass:this.pass.value,
                    onoff:0
                })
                this.em.innerHTML = "注册成功";
                console.log(4)
                localStorage.setItem("abc",JSON.stringify(this.abc))
               
                // location.href = "http://localhost:81/liule/index/denglu.html";
                
            }else{
                
                // 不是第一次注册，如果不是第一次注册，需要判断这次注册的和之前注册的是否重名，如果重名，不执行
                for(var i=0;i<this.abc.length;i++){
                    console.log(1)
                    if(this.abc[i].user === this.user.value){
                        this.em.innerHTML = "重名了";
                        return;
                    }
                }
                // 如果执行了，表示没重名，那就再增加一个
                this.abc.push({
                    user:this.user.value,
                    pass:this.pass.value,
                    onoff:0
                })
                this.em.innerHTML = "注册成功22";             
                // console.log(1)
                localStorage.setItem("abc",JSON.stringify(this.abc))
                console.log(1)
                // location.href = "http://localhost:81/liule/index/denglu.html";
                console.log(1)
            }
        } 
    }

    new Register;
