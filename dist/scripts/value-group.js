define(["jquery"],function($){
	function valueGroup(){

	}
// 特效：当点击.new_czt_next时  让ul向左移动965px 且按钮隐藏 .new_czt_prev显示
// 特效：当点击.new_czt_prev时  让ul向右移动965px 且按钮隐藏 .new_czt_next显示
	valueGroup.prototype={
		constructor: valueGroup,
		init:function(elename){
			this.elename = elename;
			
			$(elename).on("click",$.proxy(this.nextczt,this))
			$(elename).prev().on("click",$.proxy(this.prevczt,this))
		},
		nextczt:function(){
			
			$(this.elename).parent().find("ul")
			.stop(true)
			.animate({
				left:-965
			},1000)
			$(this.elename).prev().css({
				display:"block"
			})
			$(this.elename).css({
				display:"none"
			})
		},
		prevczt:function(){
			$(this.elename).parent().find("ul")
			.stop(true)
			.animate({
				left:0
			},1000)
			$(this.elename).prev().css({
				display:"none"
			})
			$(this.elename).css({
				display:"block"
			})
		}	
	
	}
	return new valueGroup();
})