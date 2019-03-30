<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>分班页面</title>
<style>
	.submit:hover{
		background: #3D598A;
		border:1px solid #3D598A;
		color:#FFF;
	}
	th,td{
		height:30px;
	}
</style>
<script type="text/javascript"
		src="http://apps.bdimg.com/libs/jquery/2.1.1/jquery.min.js"></script>
		
	
<script type="text/javascript">
var isCheckAll = false;
function swapCheck() {
	if (isCheckAll) {
		$("input[type='checkbox']").each(function() {
			this.checked = false;
		});
		isCheckAll = false;
	} else {
		$("input[type='checkbox']").each(function() {
			this.checked = true;
		});
		isCheckAll = true;
	}
}
</script>
</head>
<body>


<s:form action="selectNameListByTdAction" method="post">
           请先选择技术方向:
    <select name="tdname">
    	<s:iterator value="tdList" var="t" >
        	<option value="${t}">${t}</option>
        </s:iterator>
    </select>
	<input type="submit" class="submit" value="搜索" style="margin:5px 10px;cursor: pointer;border:none;">
</s:form>
<br>


<form action="divideClassAction?nowPage=1" method="post">
<table border="1" style="border-collapse:collapse;">
    <tr style="width:460px">
    	<th colspan="7">本页共计: ${lists.size() }人</th>
    </tr>
	<tr>
		<th style="width:80px"><input type="checkbox" name="all" onclick="swapCheck()"/>全选</th>
		<th style="width:120px">学号</th>
		<th style="width:130px">姓名</th>
		<th style="width:160px">所选技术方向</th>
	</tr>	
	<s:iterator value="lists" var="list">
		<tr>
			<td><input type="checkbox" name="idlist" value="<s:property value="#list.userid"/>"></td>
			<td><s:property value="#list.userid"/></td>
			<td><s:property value="#list.username"/></td>
			<td><s:property value="#list.td"/></td>
		</tr>
	</s:iterator>
</table>
<br>

<s:if test="flag==true">
    <s:if test="lists.size()<20">
     请输入回复信息:<input type="text" name="cname" value="">
	<input type="submit" value="回复">
    </s:if>
    <s:else>
      请先选择企业：
    <select name="enname">
    	<s:iterator value="enList" var="e">
        	<option value="${e}">${e}</option>
        </s:iterator>
    <lect><br><br>
           请填写班级名称:<input type="text" name="cname" value="">
	<input type="submit" value="确认分班">
    </s:else>            
</s:if>

<br>
</form >

		第<s:property value="nowPage"/>页/共<s:property value="count"/>页
		<a href="selectNameListByTdAction?nowPage=1">首页</a>
		<a href="selectNameListByTdAction?nowPage=<s:property value="nowPage"/>&vis=1">上一页</a>
		<a href="selectNameListByTdAction?nowPage=<s:property value="nowPage"/>&vis=2">下一页</a>
		<a href="selectNameListByTdAction?nowPage=<s:property value="count"/>">尾页</a>
		<form action="selectNameListByTdAction?nowPage=<s:property value="nowPage"/>" method="post" style="display:inline;">
		<input type="text" size="1" name="newPage" value="">
		<input type="submit" value="GO>>">	
	</form>

</body>
</html>