(function(window){
	//定义一个歌词的类
	function Lyric(path){
		return new Lyric.prototype.init(path);
	}

	//与构造函数相匹配的原型库
	Lyric.prototype = {
		//使原型的默认属性constructor指向构造函数的
	    constructor: Lyric,
	    //定义两个数组分别用来存放时间和歌词
	    times: [],
	    lyrics: [],
	    index: -1,
	    //初始化属性
	    init: function(path){
            this.path = path;
	    },
	    //添加一个加载歌词的方法
	    loadLyric: function(callBack){
	    	//当前的this是lyric
	    	var $this = this;
	    	//使用ajax()引入外部文件
			$.ajax({
				url: $this.path,
				dataType: "text",   //文件类型是文本格式
				success: function(data){
					//调用解析歌词的方法
					$this.parseLyric(data);
					// console.log($this);
					//歌词加载完毕执行一下回调
					callBack();
				},
				error: function(e){
					console.log(e);
				}
			});
	    },
	    //添加一个解析歌词的方法
	    parseLyric: function(data){
	    	var $this = this;
	    	//清空时间和歌词
	    	$this.times = [];
	    	$this.lyrics = [];
	    	//将歌词切割
	    	var array = data.split("\n");
	    	//使用正则表达式匹配时间[00:00.92]
	    	var timeReg = /\[(\d*:\d*\.\d*)\]/;
	    	//遍历取出每一条歌词
	    	$.each(array,function(index,ele){
	    		//处理歌词
                var lrc = ele.split("]")[1];
                //过滤掉没有歌词的语句
                if(lrc.length == 1) return;
                $this.lyrics.push(lrc);

                //处理时间
                var res = timeReg.exec(ele);
                //过滤掉没有时间的内容
                if(res === null) return true;
                //取出符号条件的时间格式
                var timeStr = res[1];
                //由监听歌曲播放进度时属性currentTime返回的是秒，
                //将获取到的时间转化为秒
                var res2 = timeStr.split(":");
                var min = parseInt(res2[0])*60;
                var sec = parseFloat(res2[1]);
                var time = parseFloat(Number(min+sec).toFixed(2));
                $this.times.push(time);
	    	});
	    },

	    //添加一个处理歌词高亮和歌词的滚动
	    currentIndex: function(currentTime){
            if(currentTime >= this.times[0]){
            	this.index++;
            	this.times.shift();  //删除数组最前面的一个元素
            }
            return this.index;
	    }

	}
	//使init函数默认属性prototype指向构造函数的属性prototype
	Lyric.prototype.init.prototype = Lyric.prototype;
	//使局部变量变为全局变量
    window.Lyric = Lyric;
})(window)