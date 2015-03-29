<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<script language="javascript" type="text/javascript">
function login(){
	form1.action="<%=basePath%>/in"
	form1.submit();
}
</script>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
	<title>童年号-登录</title>
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
				</ul>
			</div>
		</div>
	</div>
	
	
	<div class="login-main">
<form action="#" method="post" name="form1">
		<div class="loginwindow container-box">
			<div class="login-container fn-clear">
		
				<div class="container-form fn-clear">
					<h2>欢迎登录童年号</h2>
					<div class="round input input-top">
						<input type="text" placeholder="请输入用户名/童年号/邮箱/手机" maxlength="16" name="username"/>
				
						<span class="text-clear"></span>
					</div>
					<div class="round input input-bottom">
						<input type="password" placeholder="请输入密码"  maxlength="32" name="password"/>
						<span class="text-clear"></span>
					</div>
					<div class="container-checkbox fn-clear">
						<div class="inputDiv">
							<input type="checkbox" class="nowcheck" />
							<p class="checkBox"></p>
							<span>记住密码（网吧或别人的电脑请不要勾选）</span>
						</div>
					</div>
					<div class="login-btn">
						<a href="javascript:void(document.form1.submit())" onclick="login();" class="btn-bg btn-width btn-text">登录</a>	
					</div>
					<div class="link fn-clear">
						<a href="<%=basePath%>user/userFindPwd" class="fn-left">忘记密码？</a>
						<span class="fn-right">还没有童年号，
						<a href="<%=basePath%>redirectTo?url=register/signuprole" >立即注册</a></span>
					</div>
					<div class="poptip"><span>要填写用户名和密码哦！</span></div>
				</div>
			</div>
		</div>
</form>			
		<div class="back">
			<div class="back-top"></div>
			<div class="back-center"></div>
			<div class="back-bottom"></div>
		</div>
		<span class="copyright">
			童年网版权所有2014@copyright all right reserved
		</span>
	</div>
	<script>

	function inibody(){
		var wheight = $(document).height();
		var header = $(".header").height();
		$(".login-main").css("height",wheight-header);
	}
	window.onload = inibody();
	</script>
</body>
</html>