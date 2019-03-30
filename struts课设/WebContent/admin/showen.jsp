<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
    <%@ taglib uri="/struts-tags" prefix="s" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Insert title here</title>
<style>
	td{
		text-align: center;
		height:40px;
		width:160px;
	}
	a{
		text-decoration: none;
		color:#3D598A;
	}
	a:hover {
		color:red;
	}
</style>
</head>
<body>
<table border="1" style="border-collapse:collapse;">
	<tr>
		<td>技术方向</td>
		<td>状态</td>
		<td colspan=2>修改状态</td>
		<td>查看班级</td>
	</tr>
		<s:iterator var="b" value="enList" status="l">
    		<tr>
    			<td><s:property value="td"/></td>
    			<td><s:property value="state"/></td>
    			<td><a href="updateen1?td=<s:property value="td"/>">开放</a></td>
    			<td><a href="updateen2?td=<s:property value="td"/>">关闭</a></td>
    			<td><center><a href="selectclass?td=<s:property value="td"/>">进入</a></center></td>
    		</tr>
    	</s:iterator>   	
</table>
</body>
</html>