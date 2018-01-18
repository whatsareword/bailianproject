require(["scripts/config.js"],function(){
	require(["jquery","biglist","hotwords","underhotwords","supperBanner"],function($,bigList,hots,underhots,supperbanner){
		
		$(".left-biglist-show .menu_floor ").find("a").attr("href","goodslist.html");
							
		//鼠标滑过li时让left-biglist-show>li的display:block
		let ali = $(".banner-itemleft").find('li');
		let listali = $(".left-biglist-show").find('li')
		let list_show = $(".left-biglist-show")

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
		var hots_input = $(".header-search-in").find("input");
		hots.init(hots_input);


		
		//console.log(underhots)
		underhots.init($(".hotword"));


		
		










		//广告栏
		// $("#ad-top").find("a").on("click",function(){
		// 	$("#ad-top").remove();
		// })

		// twinav.init();
		var url="http://dc2.bl.com/js/mdata/banner.html?callback=?&_=1515850451286";
			$.getJSON(url,function(res){
				console.log(res)
				console.log(res.message);
				$(".rollbanner").html(res.message);
			});
			
		$("rollbanner").supperBanner({
			

			src:[
				"http://img23.iblimg.com/market-2/images/activity/130997198.jpg",
				"http://img22.iblimg.com/market-2/images/activity/210989.jpg",
				"http://img22.iblimg.com/market-2/images/activity/2125325259.jpg",
				"http://img22.iblimg.com/market-2/images/activity/1731242947.jpg",
				"http://img23.iblimg.com/market-2/images/activity/1478079274.jpg",
				"http://img22.iblimg.com/market-2/images/activity/1299840990.jpg",
				"http://img23.iblimg.com/market-2/images/activity/791573555.jpg",
				"http://img23.iblimg.com/market-2/images/activity/1368295486.jpg",
				"http://img22.iblimg.com/market-2/images/activity/1745120953.jpg"
				],
			create_btn:true,
			movement_mode:"fade",
			autoplay:false

		})
		// //登录框
		// $("#login").on("click",function(){
		// 	pop.init();
		
		// 	//console.log(pop)
		// })
		// //图片加载

		// loadli.init($(".goodslist li"));
		// //购物车
		// var $shop_btn = $("<button>加入购物车</button>");
		// $(".goodslist").find("p").after($shop_btn);
		// var $shop_btn = $(".goodslist").find("button")
		// $shop_btn.on("click",function(){
		// 	shopcar.init($shop_btn);
		// })
		
		
	})

})