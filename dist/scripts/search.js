define(["jquery"],function($){
	function blindSearch(){
	}
	blindSearch.prototype={
		constructor:blindSearch,
		init:function(){
			this.input = $(".search-input");
			this.$dl = $(".header-input-show1").find("dl")
			//点击事件
			this.input.on("click",$.proxy(this.inpclick,this))
			//获取焦点事件
			this.input.on("input",$.proxy(this.inpfocus,this))
			this.input.on("blur",$.proxy(this.outfocus,this))
		},
		inpclick:function(){
			$(".header-input-show").css({
					display:"block"
			})
			
		},
		outfocus:function(){
			$(".header-input-show1").css({
					display:"none"
			})
			$(".header-input-show").css({
					display:"none"
			})
		},
		inpfocus:function(){
			this.val = this.input.val();
				if(this.hotsarr==null){
					$(".header-input-show1").css({
					display:"none"
				})
			}
			//console.log(this.val)
			let url="http://search.bl.com/autoComputele.html?callback=?&kw="+this.val+"&count=11&channel=3&_=1516513005546";
			$.getJSON(url,$.proxy(this.getblindword,this))
			
			$(".header-input-show1").css({
				display:"block"
			})
		},
		getblindword:function(res){
			this.$dl.html("");
			if(!res.result.resultInfo){
				$(".header-input-show1").css({
					display:"none"
				})
				return 0;
			}
			this.hotsarr = res.result.resultInfo.showKeywords;
			$.each(this.hotsarr,$.proxy(this.hotsergodic,this));
		},
		hotsergodic:function(index,item){
			this.$dd = $("<dd></dd>");
			this.$a = $('<a href="javascript:;"></a>');
			this.$span = $('<span class="fl">'+item.showKeyWord+'</span>');
			this.$i = $('<i>约'+item.rowCount+'个结果</i>');
			this.$a.append(this.$span);
			this.$a.append(this.$i);
			this.$dd.append(this.$a);
			this.$dl.append(this.$dd);
		}
	}
	return new blindSearch()
})	