<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'edit.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->

  </head>
  
  <body>
    <form action="UpdateUser" method="post">
        <table>
            <caption>修改信息</caption>
            <tr>
                <td>学号：</td>
                <td><input type="text" name="userid" value="${classes.userid}"></td>
            </tr>
            <tr>
                <td>姓名：</td>
                <td><input type="text" name="username" value="${classes.username}"></td>
            </tr>
            <tr>
                <td>企业：</td>
                <td><input type="text" name="en" value="${classes.en}"></td>
            </tr>
            <tr>
                <td>方向：</td>
                <td><input type="text" name="td" value="${classes.td}"></td>
            </tr>
            <tr>
                <td>班号：</td>
                <td><input type="text" name="classname" value="${classes.classname}"></td>
            </tr>
            <tr>
                <td>老师：</td>
                <td><input type="text" name="teachername" value="${classes.teachername}"></td>
            </tr>
            <tr>
                <td colspan="2"><input type="submit" value="确认修改"></td>
            </tr>
        </table>
    </form>
  </body>
</html>
