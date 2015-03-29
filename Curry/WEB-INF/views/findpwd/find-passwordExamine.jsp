<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">

<html>
  <head>
   <%--  <base href="<%=basePath%>"> --%>
    
    <title>My JSP 'find-passwordExamine.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<link rel="stylesheet" href="http://localhost:8080/Curry/css/signup.css">
		<link rel="stylesheet" href="http://localhost:8080/Curry/css/retrieve.css">
		<script src="http://localhost:8080/Curry/js/jquery-1.11.1.min.js"></script>
		<script src="http://localhost:8080/Curry/js/FormValidator.1.0.js"></script>


  </head>
  
  <body>
		<div class="header">
			<div class="container">
				<div class="logo clearfix"><img src="http://localhost:8080/Curry/images/logo1.png" alt="" class="lfloat"><span class="lfloat">童年号</span></div>
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
					<h2 class="lfloat">找回密码</h2>
					<a href="#" class="rfloat">返回</a>
				</div>
				<div class="content">
					<form id="formTest" fv-validate="true" fv-msgpanel="formerror" action="">
						<dl class="formList">
							<!-- 申请人账户信息 -->
							<dt class="formList-tit"><h4>申请人账户信息</h4></dt>
							<dd class="formList-det formList-det-heihgt"></dd>
							<dt class="formList-tit">账户名：</dt>
							<dd class="formList-det"><input type="text" fv-empty="false" fv-empty-msg="账户名不能为空！" fv-msgpanel="msgyhm" />
							<span id="msgyhm" class="validate-info">请输入昵称！</span></dd>
							<!-- 申请人基本资料 -->
							<dt class="formList-tit"><h4>申请人基本资料</h4></dt>
							<dd class="formList-det formList-det-heihgt"></dd>
							<dt class="formList-tit">真实姓名：</dt>
							<dd class="formList-det"><input type="text" fv-empty="false" fv-empty-msg="真实姓名不能为空！" fv-format="^[\u4e00-\u9fa5]{2,4}$" fv-format-msg="请填写真实姓名！" fv-msgpanel="msgxm" />
								<span id="msgxm" class="validate-info">请输入真实姓名！</span>
							</dd>
							<dt class="formList-tit">身份证号：</dt>
							<dd class="formList-det"><input type="text" id="identitycode" fv-empty="false" fv-empty-msg="身份证不能为空！" fv-custom="IdentityCodeValid" fv-custom-msg="请填写正确的身份证号码！" fv-msgpanel="msgsfz" />
								<span id="msgsfz" class="validate-info">请输入身份证号！</span>
							</dd>
							<dt class="formList-tit">学校：</dt>
							<dd class="formList-det"><input type="text" id="school" name="school"  readonly="readonly"  fv-empty="false" fv-empty-msg="学校不能为空！" fv-msgpanel="msgxx" />
								<span id="msgxx" class="validate-info">请填写学校！</span>
							</dd>
							<!-- 审核结构接受 -->
							<dt class="formList-tit"><h4>审核结构接受</h4></dt>
							<dd class="formList-det formList-det-heihgt"></dd>
							<dt class="formList-tit">选择接收方式：</dt>
							<dd class="formList-det"><label><input type="radio" checked="checked" name="gender" fv-minlength="1" fv-maxlength="1" fv-msgpanel="msggender" fv-msg-succeed="OK" />手机短信</label>
								<label><input type="radio" name="gender" />电子邮件</label>
							</dd>
							<dt class="formList-tit">接受结果的手机：</dt>
							<dd class="formList-det"><input type="text" fv-empty="false" fv-empty-msg="验证码不能为空！" />
								<a href="javascript:void(0)" class="btn">免费获取验证码</a>
							</dd>

						</dl>
						<input type="button" value="提交" onClick="checkForm();"/>
					</form>
					
				</div>
			</div>
		</div>
		<span class="copyright">
		www.tongnian.com 童年号Web版
		</span>
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
