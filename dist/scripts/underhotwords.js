define(["jquery"],function($){
	function UnderHotwords(){

	}
	UnderHotwords.prototype={
		constructor:UnderHotwords,
		init:function(dom){
			
			this.dom=dom;
			var _this=this;
			var url="http://coupon.bl.com/commonHead/searchHotKeyWord.html?pageType=index&cateId=&num=10&term=&callback=?&_=1515850450927";
			$.getJSON(url,function(res){
				var html = "";
				res.forEach(function(item,index){
					//console.log(item.keyword)
					html += '<a href="#javascript">'+item.keyword+'</a><span>|</span>'
					_this.dom.html(html);
				})
				
			})

				
		}

	}
	return new UnderHotwords();

	



})