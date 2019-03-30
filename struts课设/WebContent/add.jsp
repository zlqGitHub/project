<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Insert title here</title>
</head>
<body>
<form action="adden" method="post">
请输入要添加的技术方向：<input type="text" name="td" value=""><br>
该方向是否开设：<br>
<select name="state">
<option>未开放</option>
<option>已开放</option>
</select><br>
<input type="submit"  value="添加">
</form>
</body>
</html>