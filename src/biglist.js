define(["jquery"],function($){
	function bigList(){

	}
	bigList.prototype={
		constructor:bigList,
		init:function(ele,dom,index){
			this.dom = dom;
			this.ele=ele;
			this.index=index;
			this.indexli();


		},
		indexli:function(){
			$(this.dom).css({
				display:"block",
				zIndex :"99999"
			})
			
			
			$(this.ele).eq(this.index)
			.css({
				display:"block",
				zIndex :"99999"
			})
			.siblings().css({
				display:"none"
			})
		},

	}
	
	return new bigList();

})