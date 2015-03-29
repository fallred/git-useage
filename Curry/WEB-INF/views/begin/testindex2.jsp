<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>

    <title>主页</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->

  </head>
  
<FRAMESET border=0 frameSpacing=0 rows="60, *" frameBorder=0>

<FRAME name=header src="<%=basePath%>redirectTo?url=begin/head" frameBorder=0 noResize scrolling=no>

<FRAMESET cols="170,*">
<FRAME name=menu src="<%=basePath%>redirectTo?url=begin/menu" frameBorder=0 noResize>
<FRAME name=main src="<%=basePath%>redirectTo?url=begin/main" frameBorder=0 noResize scrolling=yes>

</FRAMESET>

</FRAMESET>
</html>
