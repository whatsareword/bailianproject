define(["jquery"],function($){
	function Prolist(){

	}
	Prolist.prototype={
		constructor:Prolist,
		init:function(btnele){
			this.$btnele = btnele;
			this.$ul=$(".pro-class");
			$.each(this.$btnele,$.proxy(this.btnergodic,this))
			$.ajax({
				url:"scripts/picture.txt",
				success:$.proxy(this.picarr,this)
			})
		},
		btnergodic:function(index,item){
			
			$(item).on("click",$.proxy(this.clickEvt,this));
		},
		clickEvt:function(e){
			var e=e||window.e;
			this.target = e.currentTarget;
			$(".a1").css({
				background: "#eee",
				color: "#333",
				border: "1px solid #ccc"
			}).on("mouseenter",this.a1hover)
			
				
				$(this.target).children()
				.css({
					background: "#e6133c",
					color: "#fff",
					border: "1px solid #e6133c"
				})
				.parent()
				.siblings().children()
				.css({
					background: "#eee",
					color: "#333",
					border: "1px solid #ccc"
				})
			this.rendring();
		},
		picarr:function(res){
			
			this.res= JSON.parse(res);
			this.resthirty=this.res.slice(0,30)
			
			this.resthirty.forEach(this.picergodic.bind(this))
			
		},
		picergodic:function(item){
			this.item=item;
			this.$li=$('<li>'+
					'<div class="pro-show">'+
						'<div class="pro-icon">'+
							'<img src="images/imggoodslist/icon-bl-2.png" alt="闪购" title="闪购">'+
					   	'</div>'+
					   	'<div class="pro-img">'+
							'<a href="goodsdetail.html">'+
								'<img src="'+this.item.imageUrl+'" title="'+this.item.title+'">'+
							'</a>'+
						'</div>'+
						'<div class="pro-money">'+
							'<div class="money-fl">'+this.item.money+'</div>'+
							'<div class="money-fr">'+
								'<span class="px12">满200减50</span>'+
							'</div>'+
						'</div>'+
						'<div class="product-comment">'+
							'<div class="pro-name">'+
								'<a class="px13" title="'+this.item.title+'" href="javascript:;">'+this.item.title+'</a>'+
							'</div>'+
							'<div class="pro-discount" title="满200减50，可叠10次">'+
								'<a class="px12" href="javascript:;">满200减50，可叠10次</a>'+
							'</div>'+
						'</div>'+
						'<div class="pro-top">'+
		            		'<div class="pro-top-left">'+
		            			'<span>在</span>'+
		            			'<a class="red px12" title="面膜" href="javascript:void(0)">&nbsp;面膜&nbsp;'+
		            			'</a>'+
		            			'<span class="px12">中</span>'+
		            			'<span class="red px12">畅销</span>'+
		            		'</div>'+
	                	'</div>'+
	                	'<div class="pro-assess">'+
		                    '<div class="pro-assess-right px12">'+
		                    '百联自营</div>'+
						'</div>'+
						'<div class="probtn">'+
							'<button type="button" class="btn btn-primary addCard">加入购物车</button>'+
						'</div>'+
					'</div>'+
				'</li>')
			
			this.$ul.append(this.$li);

		},
		rendring:function(){
			this.i = $(this.target).index();
			this.imgArr=[];
			this.imgArr[this.i]=this.res.slice(this.i * 50,(this.i + 1) * 50) ;
			this.$ul.html("");
				for(var j = 0;j<this.imgArr[this.i].length;j++){
					this.$ul[0].innerHTML += '<li>'+
					'<div class="pro-show">'+
						'<div class="pro-icon">'+
							'<img src="images/imggoodslist/icon-bl-2.png" alt="闪购" title="闪购">'+
					   	'</div>'+
					   	'<div class="pro-img">'+
							'<a href="goodsdetail.html">'+
								'<img src="'+this.imgArr[this.i][j].imageUrl+'" title="'+this.imgArr[this.i][j].title+'">'+
							'</a>'+
						'</div>'+
						'<div class="pro-money">'+
							'<div class="money-fl">'+this.imgArr[this.i][j].money+'</div>'+
							'<div class="money-fr">'+
								'<span class="px12">满200减50</span>'+
							'</div>'+
						'</div>'+
						'<div class="product-comment">'+
							'<div class="pro-name">'+
								'<a class="px13" title="'+this.imgArr[this.i][j].title+'" href="javascript:;">'+this.imgArr[this.i][j].title+'</a>'+
							'</div>'+
							'<div class="pro-discount" title="满200减50，可叠10次">'+
								'<a class="px12" href="javascript:;">满200减50，可叠10次</a>'+
							'</div>'+
						'</div>'+
						'<div class="pro-top">'+
		            		'<div class="pro-top-left">'+
		            			'<span>在</span>'+
		            			'<a class="red px12" title="面膜" href="javascript:void(0)">&nbsp;面膜&nbsp;'+
		            			'</a>'+
		            			'<span class="px12">中</span>'+
		            			'<span class="red px12">畅销</span>'+
		            		'</div>'+
	                	'</div>'+
	                	'<div class="pro-assess">'+
		                    '<div class="pro-assess-right px12">'+
		                    '百联自营</div>'+
						'</div>'+
						'<div class="probtn">'+
							'<button type="button" class="btn btn-primary addCard">加入购物车</button>'+
						'</div>'+
					'</div>'+
				'</li>';
			}
		}
	}
	return new Prolist()
})


