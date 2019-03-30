<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="s"  uri="/struts-tags"%>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>师资力量</title>
    <link rel="stylesheet" href="./css/teacher.css">
</head>
<body>
	<span class="title">企业单位教师信息：</span>
	<div class="line"></div>
	 <s:iterator value="%{#session.teaList}" var="tea" status="st">
    	<s:if test="#st.odd">
			<div class="teacher">
			    <img src="${tea.img}" alt="">
			    <div class="introduce">
			    	<span class="teacherName">
			            <a href="javascript:;" title="查看ena企业官网">${tea.teachername }老师</a> (${tea.en}企业，从事<font color="red">${tea.td}</font>)
			        </span>
			        ${tea.introduce}
			    </div>
			</div>
		</s:if>
		<s:else>
			<div class="teacher teacher2">
			    <div class="introduce introduce2">
			    	<span class="teacherName teacherName2">
			            <a href="javascript:;" title="查看ena企业官网">${tea.teachername }老师</a> (${tea.en}企业，从事<font color="red">${tea.td}</font>)
			        </span>
			        ${tea.introduce}
			    </div>
			    <img src="${tea.img}" alt="">
			</div>
		</s:else>
	</s:iterator>
</body>
</html>