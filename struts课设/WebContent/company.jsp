<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="s"  uri="/struts-tags"%>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="icon" href="./images/company8.png" type="image/x-icon" />
    <link rel="stylesheet" href="./css/company.css">
    <title>公司概况</title>
</head>
<body>
    <span class="title">中北大学软件学院企业聘请单位：</span>
    <div class="line"></div>
    <s:iterator value="%{#session.comList}" var="com" status="st">
    
    	<s:if test="#st.odd">
    		<div class="company">
		        <img src="${com.icon }" alt="">
		        <div class="introduce">
		        	<span class="companyName">
			            <a href="#" title="查看ena企业官网">${com.name}企业</a>
			        </span>
		        	${com.introduce}
		        </div>
		    </div>
    	</s:if>
    	<s:else>
    		<div class="company company2">
		        <div class="introduce introduce2">
		        	<span class="companyName companyName2">
			            <a href="#" title="查看ena企业官网">${com.name}企业</a>
			        </span>
		        	${com.introduce}
		        </div>
		        <img src="${com.icon }" alt="">
		    </div>
    	</s:else>
    </s:iterator>
    
     <div class="link">
        <div class="link_left">
            <span class="span1"></span>
            <div>
                <span class="span3">友情链接</span>
            </div>
        </div>
    </div>
    <div class="imgs">
        <div class="imgA">
            <a href="#"><img src="./images/a1.jpg"></a>
        </div>
        <div class="imgA">
            <a href="#"><img src="./images/a2.jpg"></a>
        </div>
        <div class="imgA">
            <a href="#"><img src="./images/a3.jpg"></a>
        </div>
        <div class="imgA">
            <a href="#"><img src="./images/a4.jpg"></a>
        </div>
        <div class="imgA">
            <a href="#"><img src="./images/a5.jpg"></a>
        </div>
        <div class="imgA">
            <a href="#"><img src="./images/a6.jpg"></a>
        </div>
    </div>
    
</body>
</html>