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
		height:35px;
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
<span style="font-size:22px;margin-left:155px;">分配老师</span>
<s:a href="addteacher?teachername=无" cssStyle="font-size: 14px;margin-left:100px;">(取消)</s:a>
<table border="1" style="border-collapse: collapse;">
	<tr>
		<td width="110px">教师名字</td>
		<td width="130px">课程</td>
		<td width="160px"><center>分配老师</center></td>
	</tr>
		<s:iterator var="b" value="teacherlist" status="l">
    		<tr>
    			<td><s:property value="teachername"/></td>
    			<td><s:property value="td"/></td>
    			<td><a href="addteacher?teachername=<s:property value="teachername"/>">分配</a></td>
    		</tr>
    	</s:iterator>  
    	
</table>
</body>
</html>