require(["scripts/config.js"],function(){
	require(["jquery","biglist","hotwords","underhotwords","supperBanner"],function($,bigList,hots,underhots,supperbanner){

		
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


		//广告栏
		// $("#ad-top").find("a").on("click",function(){
		// 	$("#ad-top").remove();
		// })

		// twinav.init();
		let url1="http://dc2.bl.com/js/mdata/banner.html?callback=?&_=1515850451286";
			$.getJSON(url1,function(res){
				
				$(".rollbanner").html(res.message);
				$(".rollbanner li").find("a").attr("href","#javascript");
				
					
				supperbanner.init($(".rollbanner").find('li'))
				
			
			
		});

		// 超值团	
		var url2="http://dc2.bl.com/js/mdata/group.html?callback=?&_=1515850988758";
			$.getJSON(url2,function(res){
				//console.log(res.message)
				$(".valuegroup").html(res.message);
				$(".valuegroup").find("a").attr("href","#javascript");
			})
		//详见恨晚
			let url3="http://dc2.bl.com/js/mdata/featuredChannel.html?callback=?&_=1515851077642";
			$.getJSON(url3,function(res){
				//console.log(res.message)
				$(".meetlater").html(res.message);
				$(".meetlater").find("a").attr("href","#javascript");
			})

		//floor
			let urlres=["http://dc2.bl.com/js/mdata/floor1.html?callback=?&_=1515851188127","http://dc2.bl.com/js/mdata/floor2.html?callback=?&_=1515851386147","http://dc2.bl.com/js/mdata/floor3.html?callback=?&_=1515851439708","http://dc2.bl.com/js/mdata/floor4.html?callback=?&_=1515851492687","http://dc2.bl.com/js/mdata/floor5.html?callback=?&_=1515851684043","http://dc2.bl.com/js/mdata/floor6.html?callback=?&_=1515851875582","http://dc2.bl.com/js/mdata/floor7.html?callback=?&_=1515851997646","http://dc2.bl.com/js/mdata/floor8.html?callback=?&_=1515852052792"];
			$.each(urlres,function(index,item){
				$.getJSON(item,function(res){
					++index;
					var floor_name = "#floor"+index;
					
					$(floor_name).html(res.message);
					$(floor_name).find("a").attr("href","#javascript");
				})
			})

		//悬浮楼梯
		let url4="http://dc2.bl.com/js/mdata/navigation.html?callback=?";
			$.getJSON(url4,function(res){
				//console.log(res.message)
				 $("#stairs").html(res.message);
				 
			})




		//猜你喜欢
		let url5="http://dc2.bl.com/js/mdata/olikes.html?callback=?&_=1515853310723";
			$.getJSON(url5,function(res){
				//console.log(res.message)
				 $("#gausslike").html(res.message);
				 $("#gausslike").find("a").attr("href","#javascript");
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