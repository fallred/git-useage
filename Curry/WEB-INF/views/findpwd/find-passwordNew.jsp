<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<<script type="text/javascript">
function regist(){
	form1.action="<%=basePath%>user/resetPassword"
	form1.submit();
}

</script>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html lang="en">
	<head>
		<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
		<title>忘记密码—重置</title>
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
			<div class="main-top">
				<div class="row">
					<div class="col-xm-6 col-xs-8">
						<ul class="counts">
							<li class="tip"><p>输入账号</p></li>
							<li class="sign">></li>
							<li class="tip"><p>验证身份</p></li>
							<li class="sign">></li>
							<li class="tip back-r"><p>重置密码</p></li>
							<li class="sign">></li>
							<li class="tip"><p>完成</p></li>
						</ul>
					</div>
					<div class="col-xm-6 col-xs-4">
						<div class="formList-det content-padding" style="float:right;">
							<a href="#" class="btn-w">返回</a>
						</div>
					</div>
				</div>
			</div>
			<div class="main-container">
				<div class="content">
					<form id="formTest" name="form1" method="post" fv-validate="true" fv-msgpanel="formerror" action="">
						<div class="formList">
							<div class="row" >
								
								<div class="col-xs-4 col-sm-4"></div>
								<div class="col-xs-8 col-sm-8">
									<div class="formList-det">
										<input type="password" name="newpassword" class="formList-width1" id="pass" fv-msgpanel="msgpass" fv-empty="false" fv-minlength="6" fv-minlength-msg="密码至少6为。" fv-maxlength="16" fv-maxlength-msg="密码最大长度为16" maxlength="16" placeholder="请输入密码"/>
										<label href="javascript:void(0)" class="info">重置密码</label>
										<span id="msgpass" class="validate-info">请输入密码！</span>
									<div class="pwdstrength clearfix">
										<div class="level0" id="pwdLevel_1"> </div>
										<div class="level0" id="pwdLevel_2"> </div>
										<div class="level0" id="pwdLevel_3"> </div>
										<div class="leveltext"> 弱</div>
										<div class="leveltext"> 中</div>
										<div class="leveltext"> 强</div>
									</div>
									</div>
								</div>

								<div class="col-xs-4 col-sm-4"></div>
								<div class="col-xs-8 col-sm-8">
									<div class="formList-det">
										<input type="password" class="formList-width1" id="pass2" fv-msgpanel="msgpass2" fv-empty="false" fv-compareto="==,pass" fv-compareto-msg="两次输入密码不一样！"  maxlength="16" placeholder="请再次输入密码"/>
										<label href="javascript:void(0)" class="info">确认密码</label>
										<span id="msgpass2" class="validate-info">请输入确认密码！</span>
									</div>
								</div>

								<div class="col-xs-4 col-sm-4"></div>
								<div class="col-xs-8 col-sm-8">
									<div class="formList-det">
										<a href="javascript:void(document.form1.submit())" onclick="regist();" class="btn-bg btn-width btn-text btn-margintb">提交</a>
									</div>
								</div>
							</div>
						</div>
					</form>
					
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
		}if (__th.val().length < 6) {
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