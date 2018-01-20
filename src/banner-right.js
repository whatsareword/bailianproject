define(["jquery"],function($){
	
	function BannerRight(){

	}
	BannerRight.prototype={
		constructor:BannerRight,
		init:function(liarr, arr){
			this.liarr = liarr;
			this.arr = arr;
			this.arr.forEach($.proxy(this.arrindex,this))
			$.each(this.liarr,$.proxy(this.liarrindex,this));
			$(".ban_cov_x").on("click",this.deleatcov)

		},
		arrindex:function(item){

			this.item = item;
			$("."+this.item).css({
				background : "url(../images/icon/"+this.item+".png) no-repeat 0 0"
			})
		},
		liarrindex:function(index,liitem){
			
			this.liitem = $(liitem);
			this.liitem.css("position","relative") ;
			this.liitem.index = index ;
			var $div = $("<div></div>").css({
				width:"100%",
				height:"100%",
				position : 'absolute',
				zIndex : '999',
				left:0,
				top:0

			})
			$div.appendTo(this.liitem);
			
			$(this.liitem).on("mouseenter",$.proxy(this.lihover,this)) ;
			$(this.liitem).on("mouseleave",this.leavehover);
			
		},
		lihover:function(e){
			var e = e || window.e
			var target = $(e.target);
			
			this.index = target.parent().index();
			target.parent().find(".life_i").css({
				backgroundPosition : "0 -28px"
			})
			if(this.index < 3){
				this.tabli(target.parent());
			}
		},
		leavehover:function(){

			$(this).find("div").css({
				backgroundPosition : "0 0"
			})
		},
		tabli:function(){
		
			$(".ban_tit2_cov").css({
				display:"block",
				zIndex:'9999'
			})
			var classname='ban_tit2_btn'+(this.index+1);
			$("."+classname).css({
				display:"block",
				zIndex :'9999'
			})
			if(this.index == 0){
				$("."+classname).next().css({
					display:"none"
				})
			}else if(this.index == 2){
				$("."+classname).prev().css({
					display:"none"
				})
			}else{
				$("."+classname).next().css({
					display:"none"
				})
				$("."+classname).prev().css({
					display:"none"
				})
			}
		},
		deleatcov:function(){

			$(".ban_tit2_cov").css({
				display:"none"
			})
			$(".life_i").css({
				backgroundPosition : "0 0"
			})

		}
	}
	return new BannerRight();
})