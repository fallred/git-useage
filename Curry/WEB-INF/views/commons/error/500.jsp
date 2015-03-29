<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ page import="org.slf4j.Logger,org.slf4j.LoggerFactory" %>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
<%response.setStatus(200);%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-

transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>我要模考网</title>
<meta name="keywords" content="SEO关键词" />
<meta name="description" content="SEO介绍 " />

<link rel="stylesheet" type="text/css" href="<%=basePath%>css/style.css" />
<link rel="stylesheet" type="text/css" href="<%=basePath%>css/err-404.css" />
</head>
<body>
	<div id="content" class="cl">
     <div class="width-wrap error-404">
     	<div class="err-500"></div>
        <div class="err-exp">
       		<h3>服务器正忙，请您稍后再尝试！</h3>
        	<a class="small-button" href="javascript:history.go(-1);">返回上一页</a>  <%-- <a class="small-button2" href="<%=basePath%>redirectTo?url=manager/index">返回首页</a> --%>
        </div>
        
     </div>
</div>

</body>
</html>
