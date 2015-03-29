<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html lang="en">
  <head>
    <%-- <base href="<%=basePath%>"> --%>
    
    <title>sigupbase.jsp</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	
	<link rel="stylesheet" type="text/css" href="http://localhost:8080/Curry/css/signup.css">
		<script src="http://localhost:8080/Curry/js/jquery-1.11.1.min.js"></script>
		<script src="http://localhost:8080/Curry/js/FormValidator.1.0.js"></script>

  </head>
  
  <body>
	<div class="header">
			<div class="container">
				<div class="logo clearfix"><img src="../images/logo1.png" alt="" class="lfloat"><span class="lfloat">童年号</span></div>
				<div class="menu">
					<ul>
						<li><a href="#">童年网</a></li>
						<li><a href="">帮助</a></li>
						<li><a href="" class="login">登录</a></li>
					</ul>
				</div>
			</div>
		</div>
		<div class="banner">
			<div class="bgico cloud">
				
			</div>
			<div class="circle">
				<div class="c c1 rotate-r"></div>
				<div class="c c2 rotate-l"></div>
			</div>
		</div>
		<div class="main">
			<div class="container">
				<p><i></i>注册成功，欢迎您使用童年号！</p>
			<dl class="formList useinfo">
				<dt class="formList-tit">您的童年号为：</dt>
				<dd class="formList-det">${userinfo.tnno }</dd>
				<dt class="formList-tit">用户类型：</dt>
				<dd class="formList-det">${userinfo.role}</dd>
				<dt class="formList-tit">用户名：</dt>
				<dd class="formList-det">${userinfo.username}</dd>
			</dl>
			<a href="<%=basePath%>user/goHomePage" class="btn-login btn">进入主页</a>
			<c:if test="${userinfo.role =='1' }">
			<a href="<%=basePath%>register/sigupfullinfoS?username=${userinfo.username}" class="btn-completeinfo btn">继续完善资料</a>
			</c:if>
			<c:if test="${userinfo.role =='2' }">
			<a href="<%=basePath%>register/sigupfullinfoT?username=${userinfo.username}" class="btn-completeinfo btn">继续完善资料</a>
			</c:if>
			<c:if test="${userinfo.role =='3' }">
			<a href="<%=basePath%>register/sigupfullinfoP?username=${userinfo.username}" class="btn-completeinfo btn">继续完善资料</a>
			</c:if>
		</div>
	</div>
	
	<span class="copyright">
	www.tongnian.com 童年号Web版
	</span>
	</body>
</html>
