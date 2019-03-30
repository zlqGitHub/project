<%@ page language="java" import="com.opensymphony.xwork2.ActionContext" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="s"  uri="/struts-tags"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<title>在线报名</title>
	<link rel="icon" type="image/x-icon" href="./images/library3.png">
	<link rel="stylesheet" type="text/css" href="./css/signUp.css">
</head>
<body>
	<div class="header">
		<img src="./images/logo_school.png">
		<span>在线报名</span>
	</div>
	<div class="main_bg">
        <div class="main">
            <div class="myInfo">
                <span class="span1">填写表单</span>
                <form action="GignUpAction2" class="form" method="post">
                	<span class="tip">注意>>你还有 ${num} 提交报名的机会！！！</span>
                    <input class="input" type="text" name="userid" value="${userid}"><br>
                    <input class="input" type="text" name="username" value="${username}"><br>
                    <select class="input" name="td" class="select">
                    	<s:iterator value="csList" var="c">
                    		<option value="${c.getTd()}">${c.getTd()}</option>
                    	</s:iterator>
                    </select>

                    <s:if test=" (#session.num != 0)">
                    	<input type="submit" class="submit" value="提交报名">               
                    </s:if>
                    <s:else>
                    	<input class="submit2" title="您的报名次数已达上限！" value="提交报名">               
                    </s:else>
                    

                </form>

            </div>
            <div class="info">
                <span class="span2">联系我们</span>
                <div style="padding-top: 50px;">
                    <div class="info_div">
                        <div><img class="img1" src="./images/dizhi.png" width="25px"></div>
                        <span class="info_span">地址：中北大学软件学院</span>
                    </div>
                    <div class="info_div">
                        <div><img src="./images/youxiang.png" width="20px"></div>
                        <span class="info_span">邮箱：email@email.com</span>
                    </div>
                    <div class="info_div">
                        <div><img src="./images/tel.png" width="20px"></div>
                        <span class="info_span">电话：15513268481</span>
                    </div>
                </div>
            </div>

        </div>

    </div>	
	
	
	
</body>
</html>
