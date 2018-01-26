define(["jquery","cookie"],function($){
	//console.log($.cookie);
	function ShoppingGoods(){

	}
	ShoppingGoods.prototype={
		constructor:ShoppingGoods,
		init:function(){
			$.ajax({
				url:"scripts/picture.txt",
				success:$.proxy(this.Rendering,this)
			})
		},
		Rendering:function(res){
			res=JSON.parse(res);
			res=res.slice(0,31)
			var _this = this ;
			var acookie = JSON.parse($.cookie("shopping_car"))
			var str = "" ;
			acookie.forEach(function(items){
				var _item = items ;
				res.forEach(function(item,index){
					var regmoney = /\D/ ;
					var money =item.money.replace(regmoney,"")
					if(item.id == _item.id){
						str += `<li class="cart-table-line">
					<div class="chk-line">
						<div class="chk" onclick=" checkBox(this)"></div>
					</div>
					<div class="item-box">
						<a href="javascript:;"> 
							<img src="`+item.imageUrl+`">
						</a>
						<div class="name">
							<a href="javascript:;" >`+item.title+`</a>
						</div>
						<div class="message-line"></div>
					</div>
					<div class="type-box"></div>
					<div class="item-price-box">
						<div class="price">`+item.money+`</div>
					</div>
					<div class="number-box">
						<div class="input-line">
							<em class="reduce disable">-</em> 
							<input class="text" onchange="inputUpdata(this)" type="text" value="`+_item.num+`"> 
							<em class="add" onclick="upButton(this)">+</em>
						</div>
					</div>
					<div class="price-box">
						<div class="price">￥`+money*_item.num+`.00</div>
					</div>
					<div class="action-box">
						<a class="add-favourite" href="javascript:;">移入收藏夹</a> 
						<br>
						<a class="delete" href="javascript:;">删除</a>
					</div>
				</li>`}
							
					
				})	
			})
			$(".no-points").html(str);
		}
		

	}
	return new ShoppingGoods()
})


