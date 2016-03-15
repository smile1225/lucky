$(".list>li").hover(function(){
	$(this).find(".sub").stop().slideDown();
},function(){
	$(this).find(".sub").stop().slideUp();
})
$(".abc li").click(function(){
	var ind = $(this).index()  //把.abc li的索引值定义个变量为ind
	// alert(ind)
	var src = ind * -960       
	$(".box").animate({"margin-left":src},500)
	$(this).css("background-color","red").siblings().css("background-color","#E2DEDE")
})
$(".photo").mouseenter(function(){
	var a = $(this).attr("src");
	// alert(a)
	var b = "<img class='tu' src='" + a + "'>"
	$(".footer").append(b)
}).mouseleave(function(){
	$(".tu").remove()
}).mousemove(function(event){
	$(".tu")
		.css({
			"top" : (event.pageY+10) + "px",
			"left" : (event.pageX+20) + "px"
		})
})