define(["jquery"],function($){
	function goodsMagnify(){

	}
	goodsMagnify.prototype={
		constructor:goodsMagnify,
		init:function(){
			this.$preview = $(".spec-preview");
			this.$video = $(".load-video")
			this.$right = $("<div></div>");
			this.$preview.width()
			this.$right.css({
				display : 'none',
				width: "448px",
			    height: "448px",
			    overflow: "hidden",
			    position : 'absolute',
			    top:this.$preview.offset().top+"px",
			    left:this.$preview.offset().left+this.$preview.width()+10+"px",
			    border: "1px solid #eee"
			})
			this.$cloneimg = this.$preview.find("img").clone(true);
			
			this.$right.append($(this.$cloneimg));
			this.$preview.parent().append($(this.$right));

			this.$preview.on("mouseenter",$.proxy(this.mouesenterEvt,this));
		},
		mouesenterEvt:function(){
			this.$video.style.display = status;
			this.$right.style.display = status;

			//计算比例
			this.propX = this.$right.width() / this.$video.width();
			this.propY = this.$right.height() / this.$video.height();
			//等比例缩放大图;
			this.$cloneimg.css({
				width:this.$right.width() * this.propX + "px",
				height:this.$right.height() * this.propY + "px"
			})

			//鼠标移入移除效果;

			if(status == "block"){
				this.small_img.style.opacity = 0.3;
			}
		}
	} 
	return new goodsMagnify()

})


	// //1. 显示;
	// //2. 跟随;
	// function Magnifier(){
	// 	this.init();
	// }

	// Magnifier.prototype = {
	// 	constructor:Magnifier,
	// 	init : function(){
	// 		var $ = document.querySelectorAll.bind(document)
	// 		this.big = $(".big")[0];
	// 		this.small = $(".small")[0];
	// 		this.big_img = $(".big_img")[0];
	// 		this.small_focus = $(".grayBox")[0];
	// 		this.small_img = $(".small_img")[0];
				
	// 		this.small.onmouseover = this.showhide.bind(this,"block");
	// 		this.small.onmouseout = this.showhide.bind(this,"none");
	// 		this.small.onmousemove = this.move_focus.bind(this);
	// 	},
	// 	showhide : function(status){
	// 		this.small_focus.style.display = status;
	// 		this.big.style.display = status;

	// 		//计算比例
	// 		this.propX = this.big.offsetWidth / this.small_focus.offsetWidth;
	// 		this.propY = this.big.offsetHeight / this.small_focus.offsetHeight;
	// 		//等比例缩放大图;
	// 		this.big_img.style.width = this.small_img.offsetWidth * this.propX + "px";
	// 		this.big_img.style.height = this.small_img.offsetHeight * this.propY + "px";

	// 		//鼠标移入移除效果;

	// 		if(status == "block"){
	// 			this.small_img.style.opacity = 0.3;
	// 		}

	// 	},
	// 	move_focus : function(event){
	// 		var e = event || window.event;

	// 		var left = e.offsetX - this.small_focus.offsetWidth / 2;
	// 		var sTop =  e.offsetY - this.small_focus.offsetHeight / 2 ;

	// 		/*边界检测 -start*/
	// 		left = left <= 0 ? 0 : left;
	// 		sTop = sTop <= 0 ? 0 : sTop;

	// 		var maxLeft = this.small.offsetWidth - this.small_focus.offsetWidth;
	// 		var maxTop = this.small.offsetHeight - this.small_focus.offsetHeight;

	// 		left = left >= maxLeft ? maxLeft : left;
	// 		sTop = sTop >= maxTop ? maxTop : sTop;
	// 		/*边界检测 -end*/
	// 		this.small_focus.style.left = left + "px";
	// 		this.small_focus.style.top = sTop + "px";

	// 		//大图运动;

	// 		if(!this.propX || !this.propY){
	// 			return 0;
	// 		}

	// 		var bigLeft = left * this.propX;
	// 		var bigTop = sTop * this.propY;

	// 		//console.log(left, this.propX)

	// 		this.big_img.style.left = -bigLeft + "px";
	// 		this.big_img.style.top = -bigTop + "px";

	// 		/*small_focus 框背景定位*/
	// 		this.small_focus.style.backgroundPosition = -left + "px "+ -sTop +"px";
	// 	}
		

	// }
	// new Magnifier();