<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>班级页面</title>
<style>
	th,td{
		height:25px;
		text-align: center;
	}

</style>
</head>
<body>
<table border="1" style="border-collapse: collapse;margin:20px 60px;">
	<tr>
		<th style="width:120px;">学号</th>
		<th style="width:110px;">姓名</th>
		<th style="width:120px;">企业名称</th>
		<th style="width:160px;">所选技术方向</th>
		<th style="width:90px;">班级</th>
		<th style="width:110px;">任课教师</th>
	</tr>
	<s:iterator value="lists" var="list">
	<tr>
		<td><s:property value="#list.userid"/></td>
		<td><s:property value="#list.username"/></td>
		<td><s:property value="#list.en"/></td>
		<td><s:property value="#list.td"/></td>
		<td><s:property value="#list.classname"/></td>
		<td><s:property value="#list.teachername"/></td>
	</tr>
	</s:iterator>
</table>
</body>
</html>