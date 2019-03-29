$(function () {
    //监听游戏规则相关事件（查看规则、关闭规则）
    $(".rules").click(function () {
        $(".rule").stop().fadeIn(100);
    });
    $(".close").click(function () {
        $(".rule").stop().fadeOut(100);
    });

    //监听开始游戏事件点击
    $(".start").click(function () {
        //开始游戏后按钮消失
        $(this).stop().fadeOut(100);
        //执行进度条方法
        progressHandler();
        //执行灰太狼动画
        startWolfAnimation();
    });

    //监听重新开始游戏事件点击
    $(".reStart").click(function () {
        //当前重新开始页面需要消失
        $(".mask").stop().fadeOut();
        //重新执行进度条方法
        progressHandler();
        //重新执行灰太狼动画效果
        startWolfAnimation();
        //重新开始的时候分数要归零
        $(".score").text(0);
    });

    //进度条处理方法
    function progressHandler() {
        //每次开始时需要设置进度条的长度
        $(".progress").css({
            width:180
        })
        //开启定时器，进度条长度逐渐减短
        var timer=setInterval(function () {
            var $progressWidth=$(".progress").width();
            $progressWidth-=1;
            //根据当前长度设置进度条
            $(".progress").css({
                width:$progressWidth
            })
            //如果进度条的长度小于等于0，那么关闭定时器，显示重新开始按钮，停止动画效果
            if($progressWidth<=0){
                clearInterval(timer);
                $(".mask").stop().fadeIn(100);
                stopWolfAnimation();
            }
        },100)
    }

    //定义一个专门处理灰太狼动画的方法
    var wolfTimer;   //定义一个全局定时器，方便对动画操作
    function startWolfAnimation() {
        //定义两个数组保存所有灰太狼和小灰灰的图片
        var wolf_1=['./images/h0.png','./images/h1.png','./images/h2.png', './images/h3.png','./images/h4.png',
            './images/h5.png','./images/h5.png','./images/h7.png','./images/h8.png','./images/h9.png',]
        var wolf_2=['./images/x0.png','./images/x1.png','./images/x2.png', './images/x3.png','./images/x4.png',
            './images/x5.png','./images/x5.png','./images/x7.png','./images/x8.png','./images/x9.png',]
        //定义一个数组用来保存图片出现的位置
        var arrPos=[
            {left:"100px",top:"115px"},
            {left:"20px",top:"160px"},
            {left:"190px",top:"142px"},
            {left:"105px",top:"193px"},
            {left:"19px",top:"221px"},
            {left:"202px",top:"212px"},
            {left:"120px",top:"275px"},
            {left:"30px",top:"295px"},
            {left:"209px",top:"297px"}
        ];

        /*
       Math.random()是随机生成0-1的数， Math.round()是四舍五入
       扩展：
       parseInt(5.1234) //5 只保留整数部分
       Math.floor(5.1234)//5 向下取整，和parseInt一样
       Math.ceil(5.1234) //6向上取整（有小数，就+1）
       Math.round(5.1234)//四舍五入
       Math.abs(-1)//取绝对值
       Math.max(1,2)//2 返回两者中较大值
       Math.min(1,2)//1 返回两者中较小者
       Math.random()//随机生成0-1的数
       */
        //生成随机位置
        var wolfPosIndex=Math.round(Math.random()*8);
        $wolfImage=$("<image src='' class='wolfImage'>")
        $wolfImage.css({
            position:"absolute",
            left:arrPos[wolfPosIndex].left,
            top:arrPos[wolfPosIndex].top
        })
        //随机获取狼的类型，改进：我们可以通过三元目判断条件来获取
        var wolfType=Math.round(Math.random())==0?wolf_1:wolf_2
        //实现灰太狼和小灰灰的动画效果
        /*
        此处将两个索引定义为在内部的全局变量，是为了再点击狼后，无论何时，这个狼逐渐出现的动画就要停止，而改为拍打的动画
         */
        window.wolfStartIndex=0;
        window.wolfEndIndex=5;
        wolfTimer=setInterval(function () {
            if(wolfStartIndex<wolfEndIndex) {  //满足该条件时，图片继续变化
                $wolfImage.attr("src",wolfType[wolfStartIndex])
                wolfStartIndex++;
            }
            else {
                $wolfImage.remove();  //不要讲当前不满足条件的图片移除，否则图片将一直显示
                /*这个定时器记得一定要关，否则不关闭这个定时器而在调用startWolfAnimation方法时，就会有多个定时器
                同时打开，就会出现万狼出洞的效果（图片出现速度越来越快，js运动框架中的现象）
                */
                clearInterval(wolfTimer);
                startWolfAnimation();  //开始另一个动画效果
            }

        },200)
        $(".container").append($wolfImage)
        gameRules($wolfImage);
    }

    //处理游戏规则的方法
    function gameRules($wolfImage) {  //参数为当前显示到狼的元素
        $wolfImage.one("click",function () {
            //点击，改变索引，即停止当前动画，改为拍打动画（5-9）
            window.wolfStartIndex=5;
            window.wolfEndIndex=9;
            //获取图片的地址
            var $src=$(this).attr("src");
            //根据图片判断是否是灰太狼
            var flag=$src.indexOf("h")>-1;
            if (flag){
                //如果是灰太狼，那么分数+10，并且进度条的长度就+10
                $(".score").text(parseInt( $(".score").text())+10);
                $(".progress").css({
                    width: $(".progress").width()+20
                })
            }
            else {
                $(".score").text(parseInt( $(".score").text())-5);
                $(".progress").css({
                    width: $(".progress").width()-5
                })
            }
        })
    }

    //灰太狼动画结束的方法
    function stopWolfAnimation() {
        // 在停止动画的时候，需要要把最后的图片给移除了
        $(".wolfImage").remove();
        // 停止动画的时候也要关闭定时器，不然狼的动画效果会持续进行
        clearInterval(wolfTimer);  //window.wolfTImer;
    }
})