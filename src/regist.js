define(["jquery"],function($){
	function Regist(){

	}
	Regist.prototype={
		constructor:Regist,
		init:function(){
			//this.$dom = $(".loginPerfect-data");
			this.inpclick = $(".inp-primaryclick");
			this.prompt_ul = $(".prompt");
			$.each(this.inpclick,$.proxy(this.inpErgodic,this))
			
		},
		inpErgodic:function(index,item){
			$(item).on("click",$.proxy(this.inpClick,this))
		},

		inpClick:function(e){
			/*焦点时  input***border: 2px solid #7fcbfe;
			  错误时  input*** border: 2px solid #f77799;
				      webkit-box-shadow: 0px 0px 3px #f77799;
					<ul class="prompt" style="float:left; line-height:36px;">
					    <li class="prompt-text" style="display: none;">
					   		<i><img src="images/imgregist/v-icon-1.png" width="16" height="16"></i>
					   		<span>请输入用户名</span>
					   	</li>
					   	<li class="prompt-error" style="display: none;">
					   		<i><img src="images/imgregist" width="16" height="16"></i>
					   		<span>用户名只能由字母或字母和数字组合</span>
					   	</li>
					   	<li class="prompt-correct" style="display: list-item;">
					   		<i><img src="images/imgregist/v-icon-3.png" width="16" height="16"></i>
					   		<span></span>
					   	</li>
					</ul>*/
			var e = e || window.e;
			var target = e.currentTarget;
			$(target).css({
				border: "2px solid #7fcbfe",
				boxShadow: "0px 0px 3px #f77799"
			})
			$.each(this.prompt_ul,$.proxy(this.ulErgodic,this))
			
		},
		ulErgodic:function(index,item){
			console.log(index,item)
			
		}
	}
	return new Regist();




})
