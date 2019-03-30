<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
    <%@ taglib uri="/struts-tags" prefix="s" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Insert title here</title>
</head>
<body>
<s:fielderror>
<s:param>deleteerror</s:param>
<s:param>adderror</s:param>
</s:fielderror>
<a href="delete.jsp" target="mainframe">删除技术方向</a>
<a href="add.jsp" target="mainframe">添加技术方向</a>
<table>
	<tr>
		<td>技术方向</td>
		<td>状态</td>
		<td colspan=2>修改状态</td>
	</tr>
		<s:iterator var="b" value="enList" status="l">
    		<tr>
    			<td><s:property value="td"/></td>
    			<td><s:property value="state"/></td>
    			<td><a href="updateen1?td=<s:property value="td"/>">开放</a></td>
    			<td><a href="updateen2?td=<s:property value="td"/>">关闭</a></td>
    		</tr>
    	</s:iterator>   	
</table>
<a href="selecten.jsp">返回</a>
</body>
</html>