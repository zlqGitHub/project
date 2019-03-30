<%@ page language="java" pageEncoding="utf-8" contentType="text/html; charset=utf-8"%>
<%@ taglib prefix="s"  uri="/struts-tags"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="en">
<head>
	<link rel="stylesheet" type="text/css" href="../css/admin-index.css">
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta http-equiv="pragma" content="no-cache" />
	<meta http-equiv="cache-control" content="no-cache" />
	<meta http-equiv="expires" content="0" />
	<title>管理系统</title>
	<link rel="icon" type="image/x-icon" href="../images/admin.png">
	<script type="text/javascript">
		window.history.forward(1);
	</script>
</head>
<body>
<s:fielderror cssStyle="color:red" />
	<div class="login-box">
		<div class="login-main">
			<form action="AdminLoginAction" method="post" class="form">
		        <input type="text" name="admin" value=""><br>
		        <input type="password" name="pass" value=""><br>
		        <select class="select" id="login" name="type">
					<option value="学校">学校</option>
					<option value="ena">ena</option>
					<option value="enb">enb</option>
					<option value="enc">enc</option>
                </select>
		        
		        <button type="submit" class="submit"></button>		     
			</form>
		</div>
	</div>

</body>
</html>