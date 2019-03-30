<%@ page language="java" import="nuc.ee.model.Course,java.util.*,com.opensymphony.xwork2.ActionContext" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="s"  uri="/struts-tags"%>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>软件学院实训分方向分班系统</title>
    <link rel="icon" href="./imgs/school.jpg" type="image/x-icon" />
    <link rel="stylesheet" href="./css/main.css">
    <script src="./js/tools.js"></script>
    <script src="./js/main.js"></script>
    <style>
		.zhuxiao{
			width:50px;
			height: 20px;
			position:relative;
			top:-104px;
			right:-1160px;
			text-decoration: none;
			color:#EF6762;
			font-size:15px;
		}
	</style>
	<script type="text/javascript">
		function replaceDoc(){		
			window.location.replace("index.jsp");
		}
	</script>
    
</head>
<body>
    <div class="nav">
        <div class="header">
            <span class="tip">教育改变生活</span>
            <div class="tel">
                <img src="imgs/tel.png">
                <span>15513268481</span>
            </div>
        </div>
        <div class="navBar">
            <div class="logo">
                <img src="./imgs/school.jpg" width="56px">
                <div class="school">
                    <span class="sc1">中北大学</span> 软件学院<br>
                    <span class="sc2">Software School Of North University Of China</span>
                </div>
                <ul class="navBarUl" id="navBarUlId">
                    <li><a href="#" style="color: #EF6762">网站首页</a></li>
                    <li><a href="company.jsp">公司概况</a></li>
                    <li><a href="teacher.jsp">师资力量</a></li>
                    <li><a href="GignUpAction">在线报名</a></li>
                    <li><a href="http://ss.nuc.edu.cn/#tips" target="_blank">关于我们</a></li>
                </ul>
                <s:if test="(#session.userid) != '' ? 1 : 0">
					<span class="myInfo">欢迎&nbsp;<a class="a0" title="我的信息" href="myInfo.jsp">[<%=ActionContext.getContext().getSession().get("userid") %>]</a>&nbsp;登录</span>
				</s:if>
				<s:else>
					<span class="myInfo"><a class="a0" style="display:block;position:relative;left:35px;" href="login.jsp">未登录</a></span>
				</s:else>
				<a class="zhuxiao" id="zhuxiao" href="javascript:;" onclick="replaceDoc()">注销</a>
                
            </div>
        </div>
    </div>


    <div class="mainContent" id="mainContent" >
        <!--轮播图-->
        <div class="paly">
            <div class="paly_images">
                <ul class="paly_images_ul" id="pic">
                    <div class="prev" id="point_prev" style="opacity: 0;"></div>
                    <div class="next" id="point_next" style="opacity: 0;"></div>
                    <li style="z-index: 1; height: 360px;"><img src="imgs/1.jpg"></li>
                    <li style=" height: 360px;"><img src="imgs/2.jpg"></li>
                    <li style=" height: 360px;"><img src="imgs/3.jpg"></li>
                </ul>
            </div>
        </div>
        <!--主页内容-->
        <div class="contianer">
            <div class="contianer_header">
                <span class="span1"></span>
                <div class="contianer_header_title">
                    <span class="span2">NEWS</span>
                    <span class="span3">新闻资讯</span>
                    <span class="span4">最新文章</span>
                </div>
            </div>
            <div class="contianer_main">
                <div class="shadowbox" name="shadowbox">
                    <div class="firstbox">
                        <img src="./imgs/news.jpg" alt="">
                    </div>
                    <p><a href="javascript:;">新闻资讯</a></p>
                    <div class="lastbox">
                        <a href="javascript:;">中国新闻网是知名的中文新闻网站...</a>
                        <a href="javascript:;">中国新闻网是知名的中文新闻网站...</a>
                        <a href="javascript:;">中国新闻网是知名的中文新闻网站...</a>
                    </div>
                </div>
                <div class="shadowbox" name="shadowbox">
                    <div class="firstdiv">
                        <img src="./imgs/meiti.jpg" alt="">
                    </div>
                    <p><a href="javascript:;">媒体报告</a></p>
                    <div class="lastbox">
                        <a href="javascript:;"> 中国互联网媒体报告是北京益派咨询...</a>
                        <a href="javascript:;"> 中国互联网媒体报告是北京益派咨询...</a>
                        <a href="javascript:;"> 中国互联网媒体报告是北京益派咨询...</a>
                    </div>
                </div>
                <div class="shadowbox" name="shadowbox">
                    <div class="firstdiv">
                        <img src="./imgs/company.jpg" alt="">
                    </div>
                    <p><a href="company.jsp">企业百科</a></p>
                    <div class="lastbox">
                        <a href="company.jsp">ena企业是全国知名互联网公司之一...</a>
                        <a href="company.jsp">enb企业是全国知名互联网公司之一...</a>
                        <a href="company.jsp">enc公司是全国知名互联网公司之一...</a>
                    </div>
                </div>
                <div class="shadowbox" name="shadowbox">
                    <div class="firstdiv">
                        <img src="./imgs/school2.jpg" alt="">
                    </div>
                    <p><a href="school.jsp">学校动态</a></p>
                    <div class="lastbox">
                    	<a href="school.jsp">报名时间：2019.1.10-2019.1.19...</a>
                        <a href="school.jsp">中北大学2019年寒假放假通知...</a>
                        <a href="company.jsp">我校今年聘请企业培训机构有...</a>		
                    </div>
                </div>
            </div>

            <!--课程体系-->
            <div class="course">
                <div class="course_header">
                    <span class="span1"></span>
                    <div>
                        <span class="span2">CURRICULUM STRUCTURE</span>
                        <span class="span3">课程体系</span>
                        <span class="span4">我们提供针对性的课程体系</span>
                    </div>
                </div>
                <div class="course_main" style="height:${sessionScope.height}px">
                	<s:iterator value="%{#session.csList}" var="c">
                		
	                    <div class="shadowbox2" name="shadowbox2">
	                        <div class="firstdiv">
	                            <img src="./imgs/tec1.png" alt="">
	                        </div>
	                        
	                        
	                   <!--    <p><a href="courseDetail.jsp?id=${c.getId()}">${c.getTd()}</a></p>  -->  
	                        
	                        
	                        <p><a href="javascript:;">${c.getTd()}</a></p>
	                        <div class="lastbox">
	                            <span>${c.getIntroduce()}</span>
	                        </div>
	                    </div>
                    </s:iterator>

                </div>

            </div>

        </div>



    </div>


    <div class="buttom">
        <img class="img1" src="./imgs/code.jpg" width="180px">
        <div class="list">
            <ul class="ul">
                <li>联系方式：15513268481</li>
                <li>版权所有：中北大学软件学院田园创新实验室</li>
                <li>联系电话：15513268481</li>
                <li>联系地址：山西省太原市学院路3号中北大学软件学院</li>
            </ul>
        </div>
        <img class="img2" id="wx" src="./imgs/wx.png">
        <img class="img2" src="./imgs/QQ.png">
        <img class="img2" src="./imgs/email.png">
        <img class="weixin" id="weixin" src="./imgs/code2.jpg" alt="">
        <div class="adContent">
            <span>专业技术团队</span>
            <span>尽我所能</span>
            <span>圆你梦想</span>
            <img src="./imgs/logo.png" height="80px">
        </div>
    </div>
    <div class="footer">
        <span>版权所有：田园实验室 Copyright ©2015-2016  &nbsp;&nbsp;&nbsp;&nbsp;地址：中北大学软件学院</span>
    </div>




    <script type="text/javascript">
        var oPic = document.getElementById('pic');
        var oPre = document.getElementById('point_prev');    //下一张
        var oNext = document.getElementById('point_next');    //上一张

        var oLi = oPic.getElementsByTagName('li');

        var now = 0;
        var nowZindex = 1;   //图片的堆叠顺序

        function tab(){
            oLi[now].style.zIndex = nowZindex++;
            oLi[now].style.height = 0;
            move(oLi[now],{height:445});
        }

        //点击播放
        oNext.onclick = function(){
            now++;
            if(now == oLi.length){
                now = 0;
            }
            tab();
        }
        oPre.onclick = function(){
            now--;
            if(now == -1){
                now = oLi.length - 1;
            }
            tab();
        }

        //自动播放及鼠标移入移出时的效果
        var timer = setInterval(oNext.onclick,2000);

        oPic.onmouseover = function(){
            clearInterval(timer);
            changeOpacity(oPre,65);
            changeOpacity(oNext,65);
        }

        oPic.onmouseout = function(){
            timer = setInterval(oNext.onclick,2000);
            changeOpacity(oPre,0);
            changeOpacity(oNext,0);
        }

    </script>
</body>
</html>