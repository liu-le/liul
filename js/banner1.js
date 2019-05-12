   // 调用方式（使用说明）
    
   $(".banner2").banner({
    items:$(".banner2").children(".imgbox").children("a")      //必选
})

$(".banner2").banner({
    items:$(".banner2").children(".imgbox").children("a"),      //必选
    // 可选，左右按钮，不传，默认没有功能
    left:$(".banner2").find("#left"),
    right:$(".banner2").find("#right"),
    // // 可选，下标按钮，默认为true，false为不生成
    list:true,
    // // 可选，自动播放，默认为true，false为不自动播放
    autoPlay:true,
    // // 可选，每张的延迟时间，默认为2000
    delayTime:3000,
    // // 可选，每张图片的移动耗时，默认为200
    moveTime:1000
})