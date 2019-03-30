<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@ taglib uri="/struts-tags" prefix="s" %>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>企业后台管理</title>
	<link rel="stylesheet" href="./css/admin.css">
	<script type="text/javascript" src="./js/jquery.min.js" ></script>
	<script type="text/javascript" src="./js/admin.js" ></script>
	<style>
		.zhuxiao{
			width:50px;
			height: 20px;
			position:absolute;
			top:0px;
			right:20px;
			text-decoration: none;
			color:red;
		}
	</style>
	<script type="text/javascript">
		window.history.forward(1);
		function replaceDoc(){		
			window.location.replace("index.jsp");
		}
	</script>
</head>
<body>
	<div class="left">
		<div class="bigTitle">后台管理系统</div>
		<div class="lines">
			<div onclick="pageClick(this)" class="active">
				<img src="images/icon-1.png" />
				<a href="intoen?en=${sessionScope.type}" target="main">查看技术方向</a>
			</div>
			<div onclick="pageClick(this)">
				<img src="images/icon-2.png" />
				<a href="delete.jsp" target="main">删除技术方向</a>
			</div>
			<div onclick="pageClick(this)">
				<img src="images/icon-3.png" />
				<a href="add.jsp" target="main">添加技术方向</a>
			</div>
		</div>
	</div>

	<div class="top">
			<div class="leftTiyle" id="flTitle">业务人员管理</div>
			<div class="thisUser">当前用户：${sessionScope.admin}</div>
			<div><a class="zhuxiao" id="zhuxiao" href="javascript:;" onclick="replaceDoc()">注销</a></div>
	</div>

	<iframe name="main" target="_parent" frameborder="0" scrolling="no" class="content-main" id="content-main" src="">
	</iframe>
		 
</body>
</html>