<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<%@ taglib prefix="s" uri="/struts-tags" %>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'query.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
	<style>
		td{
			text-align: center;
		}
	</style>
	
  </head>
  
  <body>
 	
 	<form action="QueryByClass" method="post">
 		输入所要查询的班级：<input type="text" name="classname"/>
 		<input type="submit" value="查询">
 	</form>
 	
    <table border="1" align="center" style="border-collapse: collapse;margin-left:0;">
          <tr>
            <th width="110px">学号</th>
            <th width="110px">姓名</th>
            <th width="120px">企业</th>
            <th width="140px">方向</th>
            <th width="100px">班号</th>
            <th width="110px">老师</th>
            <th colspan="2" align="center">操作</th>
          </tr>
          <s:iterator value="students" status="st">
              <tr>
                  <td><s:property value="userid"/></td>
                  <td><s:property value="username"/></td>
                  <td><s:property value="en"/></td>
                  <td><s:property value="td"/></td>
                  <td><s:property value="classname"/></td>
                  <td><s:property value="teachername"/></td>
                  <td width="75px">
                      <a href='
                           <s:url action="Del">
                                    <s:param name="userid" value="userid"/>
                            </s:url>
                       '>删除</a>
                  </td>
                  <td width="75px">
                      <a href='
                           <s:url action="QueryUserById">
                                    <s:param name="userid" value="userid"/>
                            </s:url>
                       '>修改</a>
                  </td>
              </tr>
          </s:iterator>
      </table>
  </body>
</html>
