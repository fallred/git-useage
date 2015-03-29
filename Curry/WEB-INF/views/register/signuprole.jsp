<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
	<title>童年号-角色</title>
	<link rel="stylesheet" href="http://localhost:8080/Curry/dist/css/bootstrap.css">
	<link rel="stylesheet" href="http://localhost:8080/Curry/css/login.css">
	<script src="http://localhost:8080/Curry/js/jquery-1.11.1.min.js"></script>
	<script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="bootstrap" src="http://localhost:8080/Curry/dist/js/bootstrap.min.js"></script>
	<script src="http://localhost:8080/Curry/js/login.js"></script>
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
			<div class="role-box">
				<div class="row" >
		      		<div class="col-xs-3 col-sm-3">
						<div class="role">
							<div class="role1">
								<a href="<%=basePath%>redirectTo?url=register/signupbase">学生</a>
							</div>
						</div>
					</div>
					<div class="col-xs-3 col-sm-3">
						<div class="role">
							<div class="role1">
								<a href="<%=basePath%>redirectTo?url=register/signupteacher">教师</a>
							</div>
						</div>
					</div>
					<div class="col-xs-3 col-sm-3">
						<div class="role">
							<div class="role1">
								<a href="<%=basePath%>redirectTo?url=register/signupparent">家长</a>
							</div>
						</div>
					</div>
					<div class="col-xs-3 col-sm-3">
						<div class="role">
							<div class="role1">
								<a href="<%=basePath%>redirectTo?url=register/signuppublic">机构公众号</a>
							</div>
						</div>
					</div>
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