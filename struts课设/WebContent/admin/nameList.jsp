<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>报名表</title>
<style>
	th,td{
		height:25px;
		text-align: center;
	}

</style>
</head>
<body>
<table border="1" style="border-collapse:collapse;margin:20px 110px;">
	<tr>
		<th style="width:120px;">学号</th>
		<th style="width:110px;">姓名</th>
		<th style="width:160px;">所选技术方向</th>
		<th style="width:140px;">报名时间</th>
		<th style="width:140px;">剩余报名次数</th>
	</tr>
	<s:iterator value="lists" var="list">
	<tr>
		<td><s:property value="#list.userid"/></td>
		<td><s:property value="#list.username"/></td>
		<td><s:property value="#list.td"/></td>
		<td><s:property value="#list.date"/></td>
		<td><s:property value="#list.change"/></td>
	</tr>
	</s:iterator>
</table>
</body>
</html>