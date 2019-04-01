$(function(){
	//引入滚动条插件
	$(".container-list").mCustomScrollbar();

	var $audio = $("audio");
	//实例化一个播放的对象
	var player = new Player($audio);
	var progress,voiceProgress;
	var lyric;
   		

    getPlayerList();
	//加载歌曲列表
	function getPlayerList(){
		//使用ajax()引入外部文件
		$.ajax({
			url: "./source/musiclist.json",
			dataType: "json",
			success: function(data){
				player.musicList = data;
				//遍历获取到的数据创建每一条音乐
				$.each(data,function(index,ele){
                   var $item = createMusicItem(index,ele);
                   $(".container-list ul").append($item);
				});
				//初始化时默认是第一条数据的信息
			    //初始化歌曲信息
			    initMusicInfo(data[0]);
			    //初始化歌词信息
			    initMusicLyric(data[0]);
			},
			error: function(e){
				console.log(e);
			}
		});
	}

	//初始化歌曲信息
	function initMusicInfo(music){
		//获取需要的元素
		var $musicImg = $(".song-info-pic img");
		var $musicName = $(".song-info-name a");
		var $musicSinger = $(".song-info-singer a");
		var $musicAlbum = $(".song-info-ablum a");
		var $musicProgressName = $(".music-progress-name");
		var $musicProgressTime = $(".music-progress-time");
		var $musicBg = $(".mask-bg");

		//给获取到的元素赋值
		$musicImg.attr("src",music.cover);
		$musicName.text(music.name);
		$musicSinger.text(music.singer);
		$musicAlbum.text(music.album);
		$musicProgressName.text(music.name +" / "+ music.singer);
		$musicProgressTime.text("00:00 / " +music.time);
		$musicBg.css({
			background: "url(" +music.cover+ ")"
		});
	}

	//初始化歌词信息
	function initMusicLyric(music){
		//实例化一个歌词相关的对象
		lyric = new Lyric(music.link_lrc);
		console.log(lyric);  //初始化的init对象  init {path: "./source/告白气球.txt"}
		var $lyricContainer = $(".song-lyric");
		//清空上一首音乐的歌词
		$lyricContainer.html("");
		lyric.loadLyric(function(){
			// console.log(lyric.lyrics);
			//遍历创建歌词列表,并将其加入到ul下
			$.each(lyric.lyrics,function(index,ele){
				var $item = $("<li>" +ele+ "</li>");
                $lyricContainer.append($item);
			})
		});
	}

    initProgress();
	//初始化进度条
	function initProgress(){
	    var $progressBar = $(".music-progress-bar");
		var $progressLine = $(".music-progress-line");
		var $progressDot = $(".music-progress-dot");
		//实例化一个播放的对象
		var player = new Player($audio);
	    progress = new Progress($progressBar,$progressLine,$progressDot);
	    
	    //调用点击方法
	    progress.progressClick(function(value){
	       player.musicSeekTo(value);
	    });
	    //调用拖动的方法
	    progress.progressMove(function(value){
	      player.musicSeekTo(value);
	    });

	    var $voiceBar = $(".music-voice-bar");
		var $voiceLine = $(".music-voice-line");
		var $voiceDot = $(".music-voice-dot");
		//实例化一个播放的对像
		voiceProgress = new Progress($voiceBar,$voiceLine,$voiceDot);
		//调用点击方法
	    voiceProgress.progressClick(function(value){
	       player.musicVoiceSeekTo(value);
	    });
	    //调用拖动的方法
	    voiceProgress.progressMove(function(value){
	      player.musicVoiceSeekTo(value);
	    });

	    $progressBar.css({
    	cursor: "pointer"
        });
        $voiceBar.css({
    	cursor: "pointer"
        });
	}

    initEvent();
    //初始化事件监听
    function initEvent(){
		//监听歌曲列表移入事件,由于li元素是动态创建的，使用事件委托
		$(".container-list").delegate(".list-menu","mouseenter",function(){
			//鼠标进入
			//alert("ok");
			//显示菜单按钮
			$(this).find(".list-click").stop().fadeIn(200);
			//隐藏时长
			$(this).find(".list-time>span").stop().fadeOut();
			//显示删除按钮
			$(this).find(".list-time>a").stop().fadeIn();
		});

		//使用事件委托监听鼠标移出事件
		$(".container-list").delegate(".list-menu","mouseleave",function(){
			//鼠标移出
			//隐藏菜单按钮
			$(this).find(".list-click").stop().fadeOut(200);
			//显示删除按钮
			$(this).find(".list-time>a").stop().fadeOut();
			//显示时长
			$(this).find(".list-time>span").stop().fadeIn();
		});

		//监听复选框的点击,使用事件委托
		$(".container-list").delegate(".list-check","click",function(){
			//给check添加一个类
			$(this).toggleClass("checked");
		});

		//监听标题复选框的点击事件
		$(".list-title").click(function(){
			//全选切换
			$(".list-menu").toggleClass("checked");
		});

		//监听播放图标的播放及切换
		var $musicPlay = $(".music-play");
	    $(".container-list").delegate(".list-menu-play","click",function(){
	    	var $item = $(this).parents(".list-menu");
	    	//调用播放音乐的方法
	    	player.playMusic($item.get(0).index,$item.get(0).music);
			// console.log($item.get(0).music);
			//切换网站头部文字的显示
			$("head title").text(" 正在播放 "+$item.get(0).music.name+"-"+$item.get(0).music.singer);
			// console.log(console.log($("head title").text().split("")));
			//实现title中文字的滚动效果
			var arr = $("head title").text().split("");
			function fun(){
				arr.push(arr[0]);
				arr.shift(arr[0]);
				// console.log(arr.join(""));
				$("head title").text(arr.join(""));
			}
			setInterval(fun,1000);

			//切换音乐信息
            initMusicInfo($item.get(0).music);
            //切换歌词信息
            initMusicLyric($item.get(0).music);

	    	$(this).toggleClass("list-menu-play2");
	    	//复原
	    	$item.siblings().find(".list-menu-play").removeClass("list-menu-play2");
	    	// $musicPlay.toggleClass("music-play2")
	    	//判断当前按钮是不是播放状态
	    	if($(this).attr("class").indexOf("list-menu-play2") != -1){
	    		//当前子菜单播放按钮是播放状态
	    		$musicPlay.addClass("music-play2");
	    		//让文字高亮
	    		$item.find("div").css("color","#fff");
	    		$item.siblings().find("div").css("color","rgba(255,255,255,.5)");
	    	}else{
	    		$musicPlay.removeClass("music-play2");
	    		//让文字不高亮
	    		$item.find("div").css("color","rgba(255,255,255,.5)");
	    	}
	    	//让数字变为图标动画
	    	$item.find(".list-number").toggleClass("list-number2");
	    	//排他
	    	$item.siblings().find(".list-number").removeClass("list-number2");
	    });

	    //监听底部上一首按钮的点击
	    $(".music-pre").click(function(){
	    	//当前索引值减一
	        $(".list-menu").eq(player.preIndex()).find(".list-menu-play").trigger("click");
	    });
	    //监听底部播放按钮的点击
	    $musicPlay.click(function(){
	       //判断有没有播放过音乐
	       if(player.currentIndex === -1){
	       	//没有播放过音乐，点击以后从第一首开始播放
	       	$(".list-menu").eq(0).find(".list-menu-play").trigger("click");
	       }else{
	       	//播放过音乐,点击后继续播放/暂停当前播放的音乐
	       	$(".list-menu").eq(player.currentIndex).find(".list-menu-play").trigger("click");
	       }
	    });
	    //监听底部下一首按钮的点击
	    $(".music-next").click(function(){
	    	//当前索引值加一
	    	$(".list-menu").eq(player.nextIndex()).find(".list-menu-play").trigger("click");
	    });

	    //监听删除按钮的点击,监听动态创建元素的点击需要使用事件委托
	    $(".container-list").delegate(".del","click",function(){
	    	var $item = $(this).parents(".list-menu");
	    	//判断删除的是否是当前播放的音乐
	    	if($item.get(0).index === player.currentIndex){
	    		//是当前播放的音乐，删除后自动播放下一首
	    		$(".music-next").trigger("click");
	    	}
	    	//删除界面上的歌曲
	    	$item.remove();
	    	//删除后台数据
	    	player.changeMusic($item.get(0).index);

	    	//重新排序
	    　　//遍历每一条音乐,改变索引
	    　　$(".list-menu").each(function(index,ele){
                ele.index = index;
                $(ele).find(".list-number").text(index+1);
	        });
	    });

	    //监听播放的速度
	    player.musicTimeUpdate(function(currentTime,duration,timeStr){
	    	// console.log(currentTime,duration,timeStr);  //格式:2.358558 215.196735 "00:02 / 03:35"
	    	//同步时间
	    	$(".music-progress-time").text(timeStr);
	    	//同步进度条
	    	//计算播放的比例
	    	var value = currentTime/duration *100;
	    	progress.setProgress(value);  //设置进度条位置
	    	//实现歌词的同步
	    	var index = lyric.currentIndex(currentTime);
	    	var $item = $(".song-lyric li").eq(index);
	    	$item.addClass("cur");
	    	//排他
	    	$item.siblings().removeClass("cur");
	    	//滚动起来
	    	if(index <= 2) return;
	    	$(".song-lyric").css({
	    		marginTop: (-index+4)*30
	    	});
	    });

	    //监听声音按钮的点击
	    $(".music-voice-icon").click(function(){
	    	$(this).toggleClass("music-voice-icon2");
	    	//判断当前显示的图标，控制声音的大小
	    	if($(this).attr("class").indexOf("music-voice-icon2") != -1){
	    		//变为没有声音
	    		player.musicVoiceSeekTo(0);
	    	}else{
	    		//有声音
	    		player.musicVoiceSeekTo(1);
	    	}
	    });
	   
    }

	//创建li元素，创建每一条音乐
	function createMusicItem(index,music){
		//创建li元素
		var $item = $("<li class='list-menu'>"+
                 "<div class='list-check'><i></i></div>"+
                 "<div class='list-number'>"+ (index+1) +"</div>"+
                 "<div class='list-name'>"+ music.name +
                    "<div class='list-click'>"+
                      "<a href='javascript:;' title='播放' class='list-menu-play'></a>"+
                      "<a href='javascript:;' title='添加'></a>"+
                      "<a href='javascript:;' title='下载'></a>"+
                      "<a href='javascript:;' title='分享'></a>"+
                    "</div>"+
                 "</div>"+
                 "<div class='list-singer'>"+ music.singer +"</div>"+
                 "<div class='list-time'>"+
                   "<span>"+ music.time +"</span>"+
                   "<a href='javascript:;' title='删除' class='del'></a>"+
                 "</div>"+
               "</li>");
		//给当前元素添加index、music属性，便于获取歌曲
		$item.get(0).index = index;
		$item.get(0).music = music;
		return $item;
	}
});