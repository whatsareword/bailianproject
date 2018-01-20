define(["jquery"],function($){
	/*.life_i1 {
    	background: url(../images/icon/life_i1.png) no-repeat 0 0;
    		}
		相同的class名对应相同的图片名  
		鼠标划过时 上下+-28px*/
	function BannerRight(){

	}
	BannerRight.prototype={
		constructor:BannerRight,
		init:function(arr){
			console.log(arr);
			this.arr = arr;
			this.arr.forEach($.proxy(this.arrindex,this))
		},
		arrindex:function(item,index){
			$("."+item).css({
				background : "url(../images/icon/"+item+".png) no-repeat 0 0"
			})
		}

	}
	return new BannerRight();
})