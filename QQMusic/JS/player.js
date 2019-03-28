(function(window){
	//定义一个播放的类
	function Player($audio){
      return new Player.prototype.init($audio);
	}

	//与构造函数相匹配的原型库
	Player.prototype = {
		//使原型默认属性constructor指向Player函数
		constructor: Player,
		musicList: [],
		//初始化属性
		init: function($audio){
			//添加属性
		    this.$audio = $audio;
		    this.audio = $audio.get(0);
		},
   
        currentIndex: -1,
		//添加一个播放的方法
		playMusic: function(index,music){
			//判断是否是同一首
			if(this.currentIndex === index){
				//是同一首
				//判断当前播放/暂停状态
				if(this.audio.paused){
					//暂停状态，播放音乐
					this.audio.play();
				}else{
					//播放状态，暂停播放
					this.audio.pause();
				}
			}else{
				//不是同一首,切换当前播放路径，播放音乐
				this.$audio.attr("src",music.link_url);
				//播放音乐
				this.audio.play();
				//改变当前索引，给当前索引赋值
				this.currentIndex = index;
			}

			//判断当前播放音乐是否是当前播放的前一首
			if(index < this.currentIndex){
				this.currentIndex = this.currentIndex-1;
			}
		},

		//添加处理索引的方法
		preIndex: function(){
			var index = this.currentIndex-1;
			//判断此时索引是否小于0,若小于0则回到最后一首
			if(index < 0 ){
               index = this.musicList.length-1;
			}
			return index;
		},
		nextIndex: function(){
			var index = this.currentIndex+1;
			//判断是否超出数组最大长度
			if(index > this.musicList.length-1){
				index = 0;
			}
			return index;
		},

		//添加一个删除数据的方法
		changeMusic: function(index){
			this.musicList.splice(index,1);
		},

		//添加一个处理播放速度的方法
		musicTimeUpdate: function(callBack){
			//此刻的this是player
			var $this = this;
		    //监听播放的速度
		    this.$audio.on("timeupdate",function(){
		    	var duration = $this.audio.duration;
		    	var currentTime = $this.audio.currentTime;
		    	//格式化后的字符串
		    	var timeStr = $this.formateDate(currentTime,duration);
		    	callBack(currentTime,duration,timeStr);
		    });
		},

		//添加一个格式化时间的方法
		formateDate: function(currentTime,duration){
		    //结束时间
	    	var endMin = parseInt(duration/60);
	    	var endSec = parseInt(duration%60);
	    	if(endMin < 10){
	    		endMin = "0" + endMin;
	    	}
	    	if(endSec < 10){
	    		endSec = "0" + endSec;
	    	}

	    	//开始时间
	    	var startMin = parseInt(currentTime/60);
	    	var startSec = parseInt(currentTime%60);
	    	if(startMin < 10){
	    		startMin = "0" + startMin;
	    	}
	    	if(startSec < 10){
	    		startSec = "0" + startSec;
	    	}

	    	//拼接
	    	return startMin +":"+ startSec +" / "+ endMin +":" +endSec
		},
		//新增一个跳转的方法
		musicSeekTo: function(value){
			if(isNaN(value)) return;
			this.audio.currentTime = this.audio.duration*value;
		},

		//添加一个处理音量的方法
		musicVoiceSeekTo: function(value){
			if(isNaN(value)) return;
			if(value<0 || value>1) return;
			//属性volume是调节音量的值,取值范围在0～１之间
			this.audio.volume = value;
		}
	};
	//使init函数默认属性prototype指向Player函数的默认属性prototype
	Player.prototype.init.prototype = Player.prototype;
	//使局部变量变为全局变量，方便外界进行访问
	window.Player = Player;
})(window)