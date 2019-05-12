$.ajax({
    url:'../ctrl/liebiao.php',
    success:function(res){
        // console.log(res)
        var res = JSON.parse(res);
        var str = '';
        // console.log(res.length)
        for(let i=0;i<res.length;i++){
            
          str= `<li><a href="#"><i><img src="${res[i].src}" alt=""></i><h3>${res[i].title}</h3><p>${res[i].href}</p><span>${res[i].pic}</span></a></li>
          `;
          console.log(str)
          $('.bottom .clear').append(str);
        }
       
    }
})