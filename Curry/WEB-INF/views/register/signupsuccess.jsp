<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html lang="en">
	<head>
		<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
		<title>童年号-注册成功</title>
		<link rel="stylesheet" href="http://localhost:8080/Curry/dist/css/bootstrap.css">
		<link rel="stylesheet" href="http://localhost:8080/Curry/css/login.css">
		<script src="http://localhost:8080/Curry/js/jquery-1.11.1.min.js"></script>
		<script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="bootstrap" src="http://localhost:8080/Curry/dist/js/bootstrap.min.js"></script>
		<script src="http://localhost:8080/Curry/js/FormValidator.1.0.js"></script>
	</head>
	<body>
		<div class="header">
			<div class="header-container fn-clear">
				<div class="fn-left">
					<h2>童年网</h2>
					<span>未成年人门户</span>
				</div>
				<div class="menu fn-right">
					<ul>
						<li><a href="#">童年网</a></li>
						<li><a href="#">帮助</a></li>
						<li><a href="#" class="btn-r">登录</a></li>
					</ul>
				</div>
			</div>
		</div>
		<div class="banner">
			<div class="bgico cloud">
			
			</div>
		</div>
		<div class="main">
			<div class="main-container">
			<div class="content">
				<div class="content-padding">
					<h2><i></i>注册成功，欢迎您使用童年号！</h2>
				</div>
				<dl class="formList useinfo">
					<dt class="formList-text align-r">您的童年号为：</dt>
					<dd class="formList-text align-l"><span class="red">${userinfo.tnno }</span></dd>
					<dt class="formList-text align-r">用户类型：</dt>
					<dd class="formList-text align-l">
					<c:if test="${userinfo.role =='1' }">学生</c:if>
					<c:if test="${userinfo.role =='2' }">老师</c:if>
					<c:if test="${userinfo.role =='3' }">家长</c:if>
					</dd>
					<dt class="formList-text align-r">用户名：</dt>
					<dd class="formList-text align-l">${userinfo.username }</dd>
				</dl>
				<div class="btn-margintb">
					<a href="<%=basePath%>redirectTo?url=index" class="btn-b">进入主页</a>
					
					<c:if test="${userinfo.role =='1' }"><a href="<%=basePath%>redirectTo?url=register/signupfullinfos" class="btn-completeinfo btn-r">继续完善资料</a></c:if>
					<c:if test="${userinfo.role  == '2'}"><a href="<%=basePath%>redirectTo?url=register/signupfullinfot" class="btn-completeinfo btn-r">继续完善资料</a></c:if>
					<c:if test="${userinfo.role  == '3'}"><a href="<%=basePath%>redirectTo?url=register/signupfullinfop" class="btn-completeinfo btn-r">继续完善资料</a></c:if>

					
				</div>
				<div class="content-padding">
					<span class="color-9">(只需一步，完善资料，你就可以找到你的同学、发博、组建生活圈啦)</span>
				</div>
			</div>
		</div>
	</div>
	<div class="footer">
		<span class="copyright">
		童年网版权所有2014@copyright all right reserved
		</span>
	</div>
	<script>

	function inibody(){
		var wheight = $(document).height();
		var banner = $(".banner").height();
		var header = $(".header").height();
		var footer = $(".footer").height();
		$(".main").css("height",wheight-header-banner-footer);
	}
	window.onload = inibody();
	</script>
</body>
</html>