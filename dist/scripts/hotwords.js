define(["jquery"],function($){
	function hotWards(){

	}
	hotWards.prototype={
		constructor:hotWards,
		init:function(ele){
			this.ele=ele;
			var _this = this;
			$.getJSON("http://www.bl.com/queryCommonYuSheword.html?callback=?&_=1515850450918", function(res){
				//console.log(res);  
				var hotword = res.obj[0].deployName;
				$(_this.ele).attr("placeholder",hotword)
				  
			})
		}

	}
	return new hotWards();

	



})