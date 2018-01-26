define(["jquery"],function($){
	function alsoBuy(){

	}
	alsoBuy.prototype={
		constructor:alsoBuy,
		init:function(){
			this.$ul=$(".strip").find("ul");
			this.$next = $(".next")
			this.$prev = $(".prev")

			$.ajax({
				url:"scripts/picture.txt",
				success:$.proxy(this.picarr,this)
			})
			 
			
			this.$next .on("click",$.proxy(this.nextczt,this))
			this.$prev.on("click",$.proxy(this.prevczt,this))

		},
		picarr:function(res){
			
			this.res= JSON.parse(res);
			this.resthirty=this.res.slice(0,9)
			
			this.resthirty.forEach(this.picergodic.bind(this))
			
		},
		picergodic:function(item){

			this.item=item;

			this.$li=(`<a href="javascript:;" title="`+this.item.title+`">
	            			<li>
	            				<span class="picture">
	            					<img src="`+this.item.imageUrl+`"> 
	            				</span>
	            				<span class="name" title="`+this.item.title+`">`+this.item.title+`</span>
	            				<span class="price">`+this.item.money+`</span>
	            			</li>
	            		</a>`)
			
			this.$ul.append(this.$li);

		},
		nextczt:function(){
			
			$(this.$ul)
			.stop(true)
			.animate({
				left:-1190
			},1000)
			
		},
		prevczt:function(){
			$(this.$ul)
			.stop(true)
			.animate({
				left:0
			},1000)
			
		}	
	}
	return new alsoBuy();
})