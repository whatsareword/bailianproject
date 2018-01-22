define(["jquery"],function($){
	function logoList(){

	}
	logoList.prototype={
		constructor:logoList,
		init:function(){
			this.$ul = $(".logolist").find("ul")
			$.ajax({
				url:"scripts/goodslogo.txt",
				success:$.proxy(this.logoarr,this)
			})
		},
		logoarr:function(res){
			res = JSON.parse(res);
			res.forEach(this.logoErgodic.bind(this))
		},
		logoErgodic:function(item){
			console.log(item);
			this.$a = $('<a href="javascript:;"></a>');
			this.$li = $("<li></li>");
			this.$span = $("<span></span>");
			this.$img = $('<img src ="'+item.src+'"/>');
			this.$i = $("<i>"+item.title+"</i>");
			this.$span.append(this.$img);
			this.$li.append(this.$span);
			this.$li.append(this.$i);
			this.$a.append(this.$li);
			this.$ul.append(this.$a);
		}
	}
	return new logoList();
})