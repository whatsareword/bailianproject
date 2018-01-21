define(["jquery"],function($){
	function picMagnify(){

	}
	picMagnify.prototype={
		constructor:picMagnify,
		init:function(pic){
			
			this.pic = pic;
			this.pic.parent().css({
				position : 'relative',
				overflow : 'hidden'
			})
			this.pic.css({
				position : 'absolute',
				left:0,
				top:0
			})
			

			$.each(this.pic,$.proxy(this.ergodic,this))
			
		},
		ergodic:function(index,item){
			
			item.index = index;
			//console.log(item.index);
			$(item).hover($.proxy(this.intopic,this),$.proxy(this.outpic,this));
			//console.log(1);
		},
		intopic:function(e){
			var e = e || window.e;
			var target = e.currentTarget;
			this.$w = $(target).width();
			this.$h = $(target).height();
			this.$w2 = this.$w + 10;
			this.$h2 = this.$h + 10;
			//console.log(target.index)
			$(this.pic).eq(target.index).stop(true).animate({
				height:this.$h2,
				width:this.$w2,
				left:"-5px",
				top:"-5px"
			},500);
		},
		outpic:function(e){
			var e = e || window.e;
			var target = e.currentTarget;
			$(this.pic).eq(target.index).stop(true).animate({
				height:this.$h,
				width:this.$w,
				left:"0px",
				top:"0px"
			},100);
		}
	}
	return new picMagnify();
})