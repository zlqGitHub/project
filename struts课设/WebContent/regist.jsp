<%@ page language="java" import="com.opensymphony.xwork2.ActionContext" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="s"  uri="/struts-tags"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<title>用户注册</title>
	<link rel="icon" href="./imgs/school.jpg" type="image/x-icon" />
	<link rel="stylesheet" type="text/css" href="./css/regist.css">
	<script type="text/javascript">
		window.history.forward(1);
	</script>
</head>
<body>
	<div class="header">
		<img src="./images/logo_school.png">
		<span>用户注册</span>
	</div>
	<div class="main_bg">
		<div class="regist">
			<div class="regist_left">
				<span><img src="./images/regist.png" style="position: relative;top: 9px;padding-right: 15px;">注册账号</span>
			</div>
			<div class="regist_right">
				<s:property value="error"/>
				<s:form action="RegistAction" name="form2" method="post" enctype="multipart/form-data">
					<s:textfield label="学号" name="userid" />
					<s:textfield label="姓名" name="username" />
					<s:password label="密码" name="password" />
					<s:password label="确认密码" name="rePassword" />
					<s:radio cssClass="sex" label="性别" name="sex" list="{'男','女'}"/>
					<s:textfield label="年龄" name="age" />
					<s:textfield label="联系方式" name="telphone" />
					<s:select label="院系" name="department" list="{'软件学院','艺术学院','仪器与电子学院','人文院','等等'}" cssStyle="display: inline-block;height:22px;width:157px;border:1px solid #E7F1FD;"/>
					<s:submit name="regist" value="立即注册" cssClass="right" cssStyle="display: inline-block;background:#65B41A;width:157px;height:39px;color:#FFF;position: relative;left:-55px;cursor: pointer;"/>
				</s:form>
				<div class="back">
					<a href="index.jsp">返回登录</a>
				</div>
				<s:if test='#session.success=="注册成功"'>
					<div class="success">
						<img src="./images/success.gif" width="260px" height="260px" >
					</div>
					<%
						ActionContext.getContext().getSession().put("success", "");
						response.setHeader("refresh", "1.5,index.jsp");
					%>				
				</s:if>
			</div>
		</div>	
	</div>
</body>
</html>