<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<%
	String data=new Date().getTime()+"";
	
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
				<div class="title clearfix">
					<h2 class="lfloat">学生注册</h2>
					<a href="#" class="rfloat">返回</a>
				</div>
				<div class="content">
					<form id="formTest" fv-validate="true" fv-msgpanel="formerror" action="<%=basePath%>register/studentRegistUser" method="post">
						<dl class="formList">
							<dt class="formList-tit"><span class="red">*</span>用户名：</dt>
							<dd class="formList-det"><input type="text" fv-empty="false" fv-empty-msg="用户名不能为空！" fv-msgpanel="msgyhm" name="username" />
							<span id="msgyhm" class="validate-info">请输入昵称！</span></dd>							
							<dt class="formList-tit"><span class="red">*</span>设置密码：</dt>
							<dd class="formList-det"><input   type="password" id="pass" fv-msgpanel="msgpass" fv-empty="false" fv-minlength="6" fv-minlength-msg="密码至少6为。" fv-maxlength="16" fv-maxlength-msg="密码最大长度为16" maxlength="16" />
							<span id="msgpass" class="validate-info">请输入密码！</span>
							<div class="pwdstrength clearfix">
								<div class="level0" id="pwdLevel_1"> </div>
								<div class="level0" id="pwdLevel_2"> </div>
								<div class="level0" id="pwdLevel_3"> </div>
								<div class="leveltext"> 弱</div>
								<div class="leveltext"> 中</div>
								<div class="leveltext"> 强</div>
							</div>
							</dd>
							<dt class="formList-tit"><span class="red">*</span>确认密码：</dt>
							<dd class="formList-det"><input type="password" id="pass2" fv-msgpanel="msgpass2" fv-empty="false" fv-compareto="==,pass" fv-compareto-msg="两次输入密码不一样！"  maxlength="16" name="password"/>
							<span id="msgpass2" class="validate-info">请输入确认密码！</span></dd>
							
							<dt class="formList-tit"><span class="red">*</span>验证码：</dt>
							<dd class="formList-det"><input type="text" fv-empty="false" fv-empty-msg="验证码不能为空！" fv-msgpanel="msgyzm" id="captcha" name="captcha" style=" width:60px;">
             <img id="captchaImg" src="<%=basePath%>getCaptcha?date=<%=data%>" width="70" height="28" align="absmiddle" />
				<a href="javascript:reloadValidateCode();">
							
							<span id="msgyzm" class="validate-info">请输入验证码！</span>
							<a title="修改号码" href="#">看不清？换一张</a></dd>
         
							
							<dt class="formList-tit"></dt>
							<dd class="formList-det"><label><input type="checkbox" name="chkaaa" fv-minlength="1" fv-minlength-msg="必须同意服务条款" fv-maxlength="1" fv-maxlength-msg="必须同意服务条款" fv-msgpanel="msgaaa" fv-msg-succeed="OK" />您已同意<a href="#">网站服务条款</a></label>
							<span class="validate-succeed" id="msgaaa" fv-msg-info="请阅读服务条款">请阅读服务条款</span></dd>
						</dl>
						<input type="button" value="立即注册" onClick="checkForm();"/>
					</form>
					
				</div>
			</div>
		</div>
		<span class="copyright">
		www.tongnian.com 童年号Web版
		</span>
		
		<script type="text/javascript">
function reloadValidateCode() {
	$("#captchaImg").attr("src",
			"getCaptcha?date = " + new Date() + Math.floor(Math.random() * 24));
}
</script>
		
		<script>
		$('#pass').focus(function () {
		$('#pwdLevel_1').attr('class', 'level0');
		$('#pass').keyup();
		});
		$('#pass').blur(function () {
		$(this).next("#msgpass").show();
			$(".pwdstrength").hide();
		});
		$('#pass').keyup(function () {
		var __th = $(this);
		if (!__th.val()) {
			__th.next("#msgpass").hide();
			$(".pwdstrength").show();
			Primary();
			return;
		}
		if (__th.val().length < 6) {
			__th.next("#msgpass").hide();
			$(".pwdstrength").show();
			Weak();
			return;
		}
		var _r = checkPassword(__th);
		if (_r < 1) {
			__th.next("#msgpass").hide();
			$(".pwdstrength").show();
			Primary();
			return;
		}
		if (_r > 0 && _r < 2) {
			Weak();
		} else if (_r >= 2 && _r < 4) {
			Medium();
		} else if (_r >= 4) {
			Tough();
		}
		__th.next("#msgpass").hide();
			$(".pwdstrength").show();
		
		});
		function Primary() {
		$('#pwdLevel_1').attr('class', 'level0');
		$('#pwdLevel_2').attr('class', 'level0');
		$('#pwdLevel_3').attr('class', 'level0');
		}
		function Weak() {
		$('#pwdLevel_1').attr('class', 'level1');
		$('#pwdLevel_2').attr('class', 'level0');
		$('#pwdLevel_3').attr('class', 'level0');
		}
		function Medium() {
		$('#pwdLevel_1').attr('class', 'level1');
		$('#pwdLevel_2').attr('class', 'level2');
		$('#pwdLevel_3').attr('class', 'level0');
		}
		function Tough() {
		$('#pwdLevel_1').attr('class', 'level1');
		$('#pwdLevel_2').attr('class', 'level2');
		$('#pwdLevel_3').attr('class', 'level3');
		}
		function checkPassword(pwdinput) {
		var maths, smalls, bigs, corps, cat, num;
		var str = $(pwdinput).val()
		var len = str.length;
		var cat = /.{16}/g
		if (len == 0) return 1;
		if (len > 16) { $(pwdinput).val(str.match(cat)[0]); }
		cat = /.*[\u4e00-\u9fa5]+.*$/
		if (cat.test(str)) {
			return -1;
		}
		cat = /\d/;
		var maths = cat.test(str);
		cat = /[a-z]/;
		var smalls = cat.test(str);
		cat = /[A-Z]/;
		var bigs = cat.test(str);
		var corps = corpses(pwdinput);
		var num = maths + smalls + bigs + corps;
		if (len < 6) { return 1; }
		if (len >= 6 && len <= 8) {
			if (num == 1) return 1;
			if (num == 2 || num == 3) return 2;
			if (num == 4) return 3;
		}
		if (len > 8 && len <= 11) {
			if (num == 1) return 2;
			if (num == 2) return 3;
			if (num == 3) return 4;
			if (num == 4) return 5;
		}
		if (len > 11) {
			if (num == 1) return 3;
			if (num == 2) return 4;
			if (num > 2) return 5;
		}
		}
		function corpses(pwdinput) {
		var cat = /./g
		var str = $(pwdinput).val();
		var sz = str.match(cat)
		for (var i = 0; i < sz.length; i++) {
			cat = /\d/;
			maths_01 = cat.test(sz[i]);
			cat = /[a-z]/;
			smalls_01 = cat.test(sz[i]);
			cat = /[A-Z]/;
			bigs_01 = cat.test(sz[i]);
			if (!maths_01 && !smalls_01 && !bigs_01) { return true; }
		}
		return false;
		}
		function checkForm() {
		document.getElementById("formTest").submit();
		}
		function dowork() {
		return true;
		}
		</script>
	</body>
</html>
