define(["jquery"],function($){
	function timeCountdown(){

	}
	timeCountdown.prototype={
		constructor:timeCountdown,
		init:function(jd,jh,jm,js){
			this.jd=jd;
			this.jh=jh;
			this.jm=jm;
			this.js=js;
			this.end = new Date("2018/1/31");
			this.nEnd = this.end.getTime();
			setInterval($.proxy(this.downcount,this),1000);

		},
		downcount:function(){
			var now = new Date();
			var nNow = now.getTime();
			var cha = this.nEnd - nNow;//两个日期之间的插值;
			var day = parseInt(cha / (1000 * 60 * 60 * 24));
			var hour = parseInt(cha % (1000 * 60 * 60 * 24) / (1000 * 60 * 60) );
			var minutes = parseInt(cha % (1000 * 60 * 60) / (1000 * 60) );
			var seconds = parseInt(cha % (1000 * 60) / 1000 );
			this.jd.html(day);
			this.jh.html(hour);
			this.jm.html(minutes);
			this.js.html(seconds);
		}
	}
	return new timeCountdown();
})

