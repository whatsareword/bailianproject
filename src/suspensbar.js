define(["jquery"],function($){
	//  当滚轮划过搜索框时，悬浮栏显示


	function suspensBar(){

	}
	suspensBar.prototype={
		constructor:suspensBar,
		init:function(){
			this.topval = $(".header-search-top").offset().top+$(".header-search-top").height()
			var clone =$(".header-search-top").clone(true)
			$(".bar-search").append(clone);
			$(window).scroll($.proxy(this.scrollval,this))
		},
		scrollval:function(){
			var scrolltopval =$("html,body").scrollTop()
			if(scrolltopval>=this.topval){
				$("#suspensionbar").css({
					display:"block"
				})
			}else{
				$("#suspensionbar").css({
					display:"none"
				})
			}
		}


	}
	return new suspensBar();
})


