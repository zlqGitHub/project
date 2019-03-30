<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
    <%@ taglib uri="/struts-tags" prefix="s" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Insert title here</title>
<style>
	.div{
		width:300px;
		height:260px;
		background: #313541;
		margin:50px 0 0 300px;
		text-align: center;
		padding-top:50px;
	}	
	span{
		display: block;
		font-size:23px;
		margin:-15px auto 45px;
		color:#FFFFFF;	
	}
	input{
		width:260px;
		height:40px;
		display:block;
		border:none;
		margin:5px auto;
		padding-left:10px;
		font-size:16px;
		border-radius: 5px;
	}
	.submit{
		font-size:20px;
		letter-spacing:5px;
		cursor: pointer;
	}
	.submit:hover {
		color:#FFFFFF;
		background-color: #3D598A;
	}
</style>
</head>
<body>
	<div class="div">
		<form action="deleteen" method="post">
			<span>请输入技术方向名</span>
			<input type="text" name="td" value=""><br>
			<input class="submit" type="submit"  value="删除">
		</form>
	</div>
</body>
</html>