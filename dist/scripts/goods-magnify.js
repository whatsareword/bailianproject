define(["jquery"],function($){
	function goodsMagnify(){

	}
	goodsMagnify.prototype={
		constructor:goodsMagnify,
		init:function(lieles){
			this.$lieles =lieles;

			$.each($(this.$lieles),$.proxy(this.liErgodic,this))
			this.$preview = $(".spec-preview");
			this.$video = $(".load-video")
			this.$right = $("<div></div>");
			this.$preview.width()
			this.$right.css({
				display : 'none',
				width: "448px",
			    height: "448px",
			    zIndex : '99',
			    overflow: "hidden",
			    position : 'absolute',
			    top:this.$preview.offset().top+"px",
			    left:this.$preview.offset().left+this.$preview.width()+10+"px",
			    border: "1px solid #eee"
			})
			this.$cloneimgpre = this.$preview.find("img").clone(true);
			
			
			this.$right.append($(this.$cloneimgpre));
			this.$cloneimg=this.$right.find("img")
			this.$cloneimg.css({
				position : 'absolute',
				left:0,
				top:0
			})
			this.$preview.parent().append($(this.$right));
			
			this.$preview.on("mouseenter",$.proxy(this.mouesenterEvt,this));
			this.$preview.on("mouseleave",$.proxy(this.mouesleaveEvt,this));
			this.$preview.on("mousemove",$.proxy(this.mouesmoveEvt,this));
		},
		liErgodic:function(index,item){
			$(item).on("mouseenter",$.proxy(this.lichange,this))
		},
		lichange:function(e){
			var e = e || window.e;
			var target = e.currentTarget;
			this.$src = $($(target).find("img")).attr("src")
			$(this.$preview.find("img")).attr("src",this.$src );
			$(this.$cloneimg).attr("src",this.$src );

			this.$preview.on("mouseenter",$.proxy(this.mouesenterEvt,this));
			this.$preview.on("mouseleave",$.proxy(this.mouesleaveEvt,this));
			this.$preview.on("mousemove",$.proxy(this.mouesmoveEvt,this));

		},
		mouesenterEvt:function(){
			$(this.$video).css({
				display : 'block'
			})
			$(this.$right).css({
				display : 'block'
			})
			//计算比例
			this.propX = Math.round(this.$right.width() / this.$video.width()); 
			this.propY = Math.round(this.$right.height() / this.$video.height());
			//等比例缩放大图;
			this.$cloneimg.css({
				width:this.$right.width() * this.propX + "px",
				height:this.$right.height() * this.propY + "px"
			})
		},
		mouesleaveEvt:function(){
			$(this.$video).css({
				display : 'none'
			})
			$(this.$right).css({
				display : 'none'
			})
		},
		mouesmoveEvt: function(event){
			var e = event || window.event;

			var left = e.offsetX;
			var sTop =  e.offsetY;

			/*边界检测 -start*/
			left = left <= (this.$video.width())/2 ? (this.$video.width())/2 : left;
			sTop = sTop <= (this.$video.width())/2 ? (this.$video.width())/2 : sTop;

			var maxLeft = this.$preview.width() - (this.$video.width())/2;
			var maxTop = this.$preview.height() - (this.$video.height())/2;

			left = left >= maxLeft ? maxLeft : left;
			sTop = sTop >= maxTop ? maxTop : sTop;
			/*边界检测 -end*/

			
			$(this.$video).css({
				left:-375+left + "px",
				top:-375+sTop + "px"
			})

			//大图运动;

			if(!this.propX || !this.propY){
				return 0;
			}

			var bigLeft = (-75+left) * this.propX ;
			var bigTop = (-75+sTop) * this.propY ;

			//console.log(left, this.propX)

			this.$cloneimg.css({
				left:-bigLeft + "px",
				top:-bigTop + "px"
			})

			/*small_focus 框背景定位*/
			$(this.$video).css({
				backgroundPosition :-left + "px "+ -sTop +"px"
			})
		}
	} 
	return new goodsMagnify()

})

