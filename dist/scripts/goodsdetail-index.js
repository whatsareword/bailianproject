require(["scripts/config.js"],function(){
	require(["jquery","biglist","hotwords","underhotwords","Search","goodsMagnify"],function($,bigList,hots,underhots,search,goodsmagnify){
		$(".left-biglist-show .menu_floor ").find("a").attr("href","goodslist.html");
							
		//鼠标滑过li时让left-biglist-show>li的display:block
		let ali = $(".banner-itemleft").find('li');
		let listali = $(".left-biglist-show").find('li');
		let list_show = $(".left-biglist-show");
		$(ali).on("mouseenter",function(){
			let index=$(this).index();
			$(this)
			.css({
				background : '#888'
			})
			.siblings().css({
				background : "none"
			})
			bigList.init(listali,list_show,index);
		})
		$(".show-nav").on("mouseleave",function(){
			$(list_show).css({display :"none"})
			$(ali).css({
				background : 'none'
			})
		})
		//搜索框里的热词
		let hots_input = $(".header-search-in").find("input");
		hots.init(hots_input);
		underhots.init($(".hotword"));
		//盲搜
		search.init();
		//  放大镜功能
		goodsmagnify.init();
		

		






	})
})