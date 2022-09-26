$(document).mousemove(function(mouse){
    $("#cat").stop().animate({left:mouse.pageX, top:mouse.pageY});
});

