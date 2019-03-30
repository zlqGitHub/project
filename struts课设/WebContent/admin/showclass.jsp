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
		height:25px;
		text-align: center;
	}
	a{
		text-decoration: none;
		color:#3D598A;
	}
	a:hover{
		color:red;
	}
</style>
</head>
<body>
<span style="font-size:22px;margin-left:140px;">教师安排</span>
<table border="1" style="border-collapse: collapse;">
	<tr>
		<td width="80px">班级</td>
		<td width="110px">老师</td>
		<td width="180px" colspan="2">操作</td>
	</tr>
		<s:iterator var="b" value="classlist" status="l">
    		<tr>
    			<td><s:property value="classname"/></td>
    			<td><s:property value="teachername"/></td>
    			<td><a href="selectteacher?classname=<s:property value="classname"/>">分配老师</a></td>
    			<td><a href="intoen">返回</a></td>
    		</tr>
    	</s:iterator>   	
</table>

</body>
</html>