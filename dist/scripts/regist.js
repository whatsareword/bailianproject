define(["jquery"],function($){
	function Regist(){

	}
	Regist.prototype={
		constructor:Regist,
		init:function(){
			//获取手机号、密码、确认密码、注册等id 
            this.username=$("#loginId");
            this.userpass=$("#password");
            this.userpassW=$("#confirmPassword");
            this.mobile=$("#mobile")
            this.enroll=$("#enroll");

            this.inpclick = $(".inp-primaryclick");
			$.each(this.inpclick,$.proxy(this.inpErgodic,this))
            
            //账户名input事件及获得焦点失去焦点的提示信息
            this.username.on("blur",$.proxy(this.downUserName,this));
            this.username.on("focus",this.addBorder);
            this.username.on("blur",this.removeName);

            //密码input事件及获得焦点失去焦点的提示信息
             this.userpass.on("input",$.proxy(this.onUserpass,this));
            this.userpass.on("blur",$.proxy(this.downUserpass,this));
            this.userpass.on("focus",this.addBorder);
            this.userpass.on("blur",this.removeName);


            //确认密码
            this.userpassW.on("blur",$.proxy(this.downUserpassW,this));
            this.userpassW.on("focus",this.addBorder);
            this.userpassW.on("blur",this.removeName);

            //手机号
            this.mobile.on("blur",$.proxy(this.downMobile,this));
            this.mobile.on("focus",this.addBorder);
            this.mobile.on("blur",this.removeName);


            //立即注册
            this.enroll.on("click",$.proxy(this.enrollC,this));
            this.flagName = false;
            this.flagPass = false;
            this.flagWord = false;

			
            
			
		},
		inpErgodic:function(index,item){
			$(item).on("click",$.proxy(this.inpClick,this))
			$(item).on("blur",$.proxy(this.outClick,this))
		},

		inpClick:function(e){

			var e = e || window.e;
			var target = e.currentTarget;
			
			$(target)
			.css({
				border: "2px solid #7fcbfe",
				boxShadow: "0px 0px 3px #f77799"
			})
			.parent().parent().siblings().find(".prompt-text").css({
				display:"block"
			})
			.siblings().css({
				display:"none"
			})
			
		},
		outClick:function(e){

			var e = e || window.e;
			var target = e.currentTarget;
			
			$(target)
			.css({
				border: "1px solid #cccccc",
				boxShadow: "none"
			})
			.parent().parent().siblings().find(".prompt-text").css({
				display:"none"
			})
			.siblings().css({
				display:"none"
			})
			
		},
		downUserName:function(){
            clearTimeout(this.timer);
            var _this = this;
            this.timer=setTimeout(function(){
                var nameVal = _this.username.val();
               // console.log(nameVal)
                var nameReg = /^[a-zA-Z]\w{5,19}$/;
                if(nameReg.test(nameVal)){
                    $(_this.username).parent().css({
                    	border: "1px solid #cccccc",
                    	boxShadow : 'none'

                    });
                    $(_this.username).parent().parent().siblings().find(".prompt-text").css({
						display:"none"
					})
                    $(_this.username).parent().parent().siblings().find(".prompt-correct").css({
						display:"block"
					})
                    _this.flagName=true;
                }else{

                    $(_this.username).parent().css({
                    	border: "2px solid red",
						boxShadow: "0px 0px 3px red"
                    });
                    $(_this.username).parent().parent().siblings().find(".prompt-text").css({
						display:"none"
					})
                    $(_this.username).parent().parent().siblings().find(".prompt-error").css({
						display:"block"
					})
                    _this.flagName = false;
                }
            },20);
        },
        onUserpass:function(){
    	    var passVal=this.userpass.val();
            var passSix = $("#pwdStrong");
            var pone = ((/[a-zA-Z]/g).test(passVal)) ? 1 : 0;
			var ptwo = ((/[0-9]/g).test(passVal)) ? 1 : 0;
			var pthree = ((/[A-Z]/g).test(passVal)) ? 1 : 0;
            var strength = pone + ptwo + pthree;
                if(strength==1){
                	$($(this.userpass).parent().parent().siblings().find(".prompt-text"))
                	.find("#strength_L").css({
					background : "red"
					})
					.next().css({
					background : "#ccc"	
					})
                }else if(strength==2){
                    $($(this.userpass).parent().parent().siblings().find(".prompt-text"))
                	.find("#strength_L").css({
					background : "#ccc"
					})
					$($(this.userpass).parent().parent().siblings().find(".prompt-text"))
                	.find("#strength_M").css({
					background : "red"
					})
					$($(this.userpass).parent().parent().siblings().find(".prompt-text"))
                	.find("#strength_H").css({
					background : "#ccc"
					})
                }else if(strength==3){
                    $($(this.userpass).parent().parent().siblings().find(".prompt-text"))
                	.find("#strength_H").css({
					background : "red"
					})
					.prev().css({
					background : "#ccc"	
					})
                }else{
                	$($(this.userpass).parent().parent().siblings().find(".prompt-text"))
                	.find("#strength_L").css({
					background : "#ccc"
					})
					$($(this.userpass).parent().parent().siblings().find(".prompt-text"))
                	.find("#strength_M").css({
					background : "#ccc"
					})
					$($(this.userpass).parent().parent().siblings().find(".prompt-text"))
                	.find("#strength_H").css({
					background : "#ccc"
					})
                }
           
		},

        downUserpass:function(){
            clearTimeout(this.timer);
         
            var _this=this;
            this.timer=setTimeout(function(){
                var passVal=_this.userpass.val();
                var passSix = $("#pwdStrong");
                var pone = ((/[a-zA-Z]/g).test(passVal)) ? 1 : 0;
				var ptwo = ((/[0-9]/g).test(passVal)) ? 1 : 0;
				var pthree = ((/[A-Z]/g).test(passVal)) ? 1 : 0;
                var strength = pone + ptwo + pthree;
                if(passVal.length>7 && passVal.length<=20){//大于8位并小于20位 进行密码 强度判断
                    if(strength==1){
                    	
                    	$($(_this.userpass).parent().parent().siblings().find(".prompt-correct"))
                    	.find("#strength_L").css({
						background : "red"
						})
                    }else if(strength==2){
                        $($(_this.userpass).parent().parent().siblings().find(".prompt-correct"))
                    	.find("#strength_M").css({
						background : "red"
						})
                    }else if(strength==3){
                        $($(_this.userpass).parent().parent().siblings().find(".prompt-correct"))
                    	.find("#strength_H").css({
						background : "red"
						})
                    }
                     $(_this.userpass).parent().css({
                    	border: "1px solid #cccccc",
                    	boxShadow : 'none'

                    });
                    $(_this.userpass).parent().parent().siblings().find(".prompt-text").css({
						display:"none"
					})
                    $(_this.userpass).parent().parent().siblings().find(".prompt-correct").css({
						display:"block"
					})
                   
                    _this.flagName=true;
                }else{

                     $(_this.userpass).parent().css({
                    	border: "2px solid red",
						boxShadow: "0px 0px 3px red"
                    });
                    $(_this.userpass).parent().parent().siblings().find(".prompt-text").css({
						display:"none"
					})
                    $(_this.userpass).parent().parent().siblings().find(".prompt-error").css({
						display:"block"
					})
                    _this.flagName = false;
                }
            },20);
        },
        downUserpassW:function(){
            //console.log("确认密码")
            clearTimeout(this.timer);
            var _this=this;
            this.timer=setTimeout(function(){
                var passOne = _this.userpass.val();
                var passTwo = _this.userpassW.val();
                if(passOne==passTwo){
                    _this.flagWord=true;
                    $(_this.userpassW).parent().css({
                    	border: "1px solid #cccccc",
                    	boxShadow : 'none'

                    });
                    $(_this.userpassW).parent().parent().siblings().find(".prompt-text").css({
						display:"none"
					})
                    $(_this.userpassW).parent().parent().siblings().find(".prompt-correct").css({
						display:"block"
					})
                }else{
                    _this.flagWord=false;
                    $(_this.userpassW).parent().css({
                    	border: "2px solid red",
						boxShadow: "0px 0px 3px red"
                    });
                    $(_this.userpassW).parent().parent().siblings().find(".prompt-text").css({
						display:"none"
					})
                    $(_this.userpassW).parent().parent().siblings().find(".prompt-error").css({
						display:"block"
					})
                   
                }
            },20);
        },
        downMobile:function(){
        	clearTimeout(this.timer);
            var _this = this;
            this.timer=setTimeout(function(){
                var mobileVal = _this.mobile.val();
                var mobileReg = /^1[34578]\d{9}$/;
                if(mobileReg.test(mobileVal)){
                    $(_this.mobile).parent().css({
                    	border: "1px solid #cccccc",
                    	boxShadow : 'none'

                    });
                    $(_this.mobile).parent().parent().siblings().find(".prompt-text").css({
						display:"none"
					})
                    $(_this.mobile).parent().parent().siblings().find(".prompt-correct").css({
						display:"block"
					})
                    _this.flagName=true;
                }else{
                   $(_this.mobile).parent().css({
                    	border: "2px solid red",
						boxShadow: "0px 0px 3px red"
                    });
                    $(_this.mobile).parent().parent().siblings().find(".prompt-text").css({
						display:"none"
					})
                    $(_this.mobile).parent().parent().siblings().find(".prompt-error").css({
						display:"block"
					})
                    _this.flagName = false;
                }
            },20);
        },
        enrollC: function() {
			var _this = this;
			//判断是否全部输入正确
			if(_this.flagName && _this.flagPass && _this.flagWord) {
				location.href="../dist/list.html"
			} else {
				alert("请补全信息");
			}
		},
        addBorder:function(){
            $(this).parents().addClass("okBorder");
            $(this).parent().parent().children().last().css("display","block")
        },
        removeName:function(){
            $(this).parents().removeClass("okBorder");
            $(this).parent().parent().css("border","none")
        },
        addBorders:function(){
            $(this).addClass("okBorders");
        },
        removeNames:function(){
            $(this).removeClass("okBorders");
        }
	}
	return new Regist();




})
