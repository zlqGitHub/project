(function(window){
	//定义一个操作进度条的类
	function Progress($progressBar,$progressLine,$progressDot){
		return new Progress.prototype.init($progressBar,$progressLine,$progressDot);
	}

	//与构造函数相匹配的原型库
	Progress.prototype = {
　　　　//使原型库默认属性constructor属性指向Progress构造函数
　　　　constructor: Progress,
        //初始化属性
        init: function($progressBar,$progressLine,$progressDot){
             this.$progressBar = $progressBar;
             this.$progressLine = $progressLine;
             this.$progressDot = $progressDot;
        },

        isMove: false,

        //添加一个点击的方法
        progressClick: function(callBack){
          //此刻的this是progress
          var $this = this;
          //监听背景的点击
          this.$progressBar.click(function(event){
          	//获取当前进度条默认距离窗口的距离
          	var normalLeft = $(this).offset().left;
          	//获取当前点击位置进度条距离窗口的距离
          	var eventLeft = event.pageX;
          	//进度条长度
          	var progressWidth = eventLeft - normalLeft;
          	//改变前景的宽度
          	$this.$progressLine.css("width",progressWidth);
          	//改变圆点的位置
          	$this.$progressDot.css("left",progressWidth);

          	//计算进度条的比例
          	var value = progressWidth / $(this).width();
          	//利用回调函数的形参将计算出的比例返回给外界
          	callBack(value);
          });
        },

        //添加一个移动的方法
        progressMove: function(callBack){
        	//此刻的this是progress
        	var $this = this;
        	//获取当前进度条默认距离窗口的距离
		    var normalLeft = this.$progressBar.offset().left;
		    var barWidth = this.$progressBar.width();
		    var eventLeft,progressWidth;
           //监听鼠标的按下事件
           this.$progressBar.mousedown(function(){
           	    $this.isMove = true;
	           	//监听鼠标的移动事件
	           $(document).mousemove(function(){
		          	//获取当前点击位置进度条距离窗口的距离
		          	eventLeft = event.pageX;
		          	//进度条长度
		            progressWidth = eventLeft - normalLeft;

		            //判断进度条是否超出了范围
		            if(progressWidth>0 && progressWidth<barWidth){
	                    //改变前景的宽度
			          	$this.$progressLine.css("width",progressWidth);
			          	//改变圆点的位置
			          	$this.$progressDot.css("left",progressWidth);
			        }
	            });
           });

           //监听鼠标的抬起事件
           $(document).mouseup(function(){
               $(document).off("mousemove");
               $this.isMove = false;
               var value =  progressWidth / $this.$progressBar.width();
          	   //利用回调函数的形参将计算出的比例返回给外界
          	   return value;
           });
        },
        //添加一个移动进度条的方法
        setProgress: function(value){
        	if(this.isMove) return;
        	if(value<0 || value>100) return;
        	//设置前景的宽度
        	this.$progressLine.css({
        		width: value+ "%"
        	});
        	//设置圆点的位置
        	this.$progressDot.css({
                left: value+ "%"
        	});

        }
　	};

    //使init函数的默认属性prototype指向Progress构造函数的默认属性prototype
    Progress.prototype.init.prototype = Progress.prototype;
    //使局部变量变为全局变量
    window.Progress = Progress;

})(window)