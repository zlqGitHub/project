<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="s"  uri="/struts-tags"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="en">
<head>
	<title>我的页面</title>
	<link rel="icon" type="image/x-icon" href="./images/my.png">
	<link rel="stylesheet" type="text/css" href="./css/myInfo.css">
	<script type="text/javascript" src="./js/myInfo.js"></script>
</head>
<body>
		<span class="span1">个人信息：</span>
		<div class="table">
			<table border="1" style="border-collapse: collapse;">
				<s:form action="UpdateMyInfoAction" method="post" name="form">
					<tr>
						<td>姓名:</td>
						<td>
							<input type="text" name="username" value="${myInfo[0].getUsername()}" disabled>
						</td>
					</tr>
					<tr>
						<td>学号:</td>
						<td>
							<input type="text" name="userId" value="${myInfo[0].getUserid()}" disabled>
						</td>
					</tr>
					<tr>
						<td>密码:</td>
						<td>
							<input id="pass" type="password" name="password" value="${myInfo[0].getPassword()}">
						</td>
					</tr>
					<tr>
						<td>性别:</td>
						<td>
							<input type="text" name="sex" value="${myInfo[0].getSex()}" disabled>
						</td>
					</tr>
					<tr>
						<td>年龄:</td>
						<td>
							<input type="text" name="age" value="${myInfo[0].getAge()}" disabled>
						</td>
					</tr>
					<tr>
						<td>电话:</td>
						<td>
							<input type="text" name="telphone" value="${myInfo[0].getTelphone()}">
						</td>
					</tr>
					<tr>
						<td>院系:</td>
						<td>
							<input type="text" name="department" value="${myInfo[0].getDepartment()}" disabled>
						</td>
					</tr>
					
					<s:submit cssClass="submit" cssStyle="width:90px;height:25px;border-radius: 5px;" value="修改"/>
				
				</s:form>
			</table>
		</div>
		<img id="block" class="block" src="./images/block.png" width="20px">
		
		<span class="span1">报名情况：</span>
		<table border="1" style="border-collapse: collapse;margin-left:20px;">
			<tr>
				<th width="110px">所选课程</th>
				<th width="120px">报名剩余次数</th>
				<th width="120px">报名日期</th>
				<th width="120px">分班情况</th>
			</tr>
			<tr>
				<td style="text-align: center;" height="18px">${sessionScope.gu.getTd() }</td>
				<td style="text-align: center;">${sessionScope.gu.getChange() }</td>
				<td style="text-align: center;">${sessionScope.gu.getDate() }</td>
				<td style="text-align: center;">${sessionScope.classes }</td>
			</tr>
		</table>
		
</body>
</html>