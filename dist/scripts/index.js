require(["scripts/config.js"],function(){
	require(["jquery","biglist","hotwords","underhotwords","bannerRight","valueGroup","picMagnify","Search","suspensBar","supperBanner"],function($,bigList,hots,underhots,bannerright,vagroup,picmagnify,search,suspensbar,supper){


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
		let hots_input = $(".search-input");
		hots.init(hots_input);
		underhots.init($(".hotword"));
		//盲搜
		search.init()
		//  当滚轮划过搜索框时，悬浮栏显示
		suspensbar.init()



		//广告栏
		$("#advertisement").find("i").on("click",function(){
			$("#advertisement").remove();
		})

		//轮播图
				var a = new supper()
				a.init({
					src:[
						["http://img22.iblimg.com/market-2/images/activity/2005112880.jpg","#fa7c6a"],
						["http://img22.iblimg.com/market-2/images/activity/210989.jpg","#e8e8e9"],
						["http://img23.iblimg.com/market-2/images/activity/945600542.jpg","#f7b857"],
						["http://img22.iblimg.com/market-2/images/activity/81045408.jpg","#fd819e"],
						["http://img23.iblimg.com/market-2/images/activity/1820331676.jpg","#f798df"],
						["http://img22.iblimg.com/market-2/images/activity/431191657.jpg","#ff89bb"],
						["http://img22.iblimg.com/market-2/images/activity/1604534225.jpg","#d8a26d"],
						["http://img23.iblimg.com/market-2/images/activity/1182393089.jpg","#ff9aa8"]
					],
					create_btn:true,
					movement_mode:"fade",
					autoplay:true
				},$("#banner .banner-center"));






		// 超值团	
		var urlczt=["http://dc2.bl.com/js/mdata/group.html?callback=?&_=1515850988758","http://dc2.bl.com/js/mdata/featuredChannel.html?callback=?&_=1515851077642"]
			$.each(urlczt,function(index,item){
				$.getJSON(item,function(res){
					++index;
					var czt_name = ".czt"+index;
					
					$(czt_name).html(res.message);
					$(czt_name).find("a").attr("href","#javascript");



					vagroup.init($(".new_czt_next"));
					picmagnify.init($(".czt").find("img"));
				})
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
				  var aSection = $(".floor");
    
    
    			
    




				 
			})




		//猜你喜欢
		let url5="http://dc2.bl.com/js/mdata/olikes.html?callback=?&_=1515853310723";
			$.getJSON(url5,function(res){
				//console.log(res.message)
				 $("#gausslike").html(res.message);
				 $("#gausslike").find("a").attr("href","#javascript");
			})

		//banner右边
		
		let $ali = $(".ban_life").find('li')
		let lifenameArr =[];
		for(var i = 1; i < $ali.length+1 ;i++){
			let lifeName ="life_i" + i;
			lifenameArr.push(lifeName);

		}
		bannerright.init($ali,lifenameArr);


		//regist

		
		
		



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