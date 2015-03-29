<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html lang="en">
  <head>
    <%-- <base href="<%=basePath%>"> --%>
    
    <title>sigupfullinfosp.jsp</title>
    
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
					<h2 class="lfloat">学生注册</h2>
					<a href="#" class="rfloat">返回</a>
				</div>
				<div class="content">
					<form id="formTest" fv-validate="true" fv-msgpanel="formerror" action="<%=basePath%>register/studentRegistUserFullinfo" method="post">
						<dl class="formList">
							<dt class="formList-tit">真实姓名：</dt>
							<dd class="formList-det"><input name="realname" type="text" fv-empty="false" fv-empty-msg="真实姓名不能为空！" fv-format="^[\u4e00-\u9fa5]{2,4}$" fv-format-msg="请填写真实姓名！" fv-msgpanel="msgxm" />
								<span id="msgxm" class="validate-info">请输入真实姓名！</span>
							</dd>
							<dt class="formList-tit">身份证号：</dt>
							<dd class="formList-det"><input name="cardid" type="text" id="identitycode" fv-empty="false" fv-empty-msg="身份证不能为空！" fv-custom="IdentityCodeValid" fv-custom-msg="请填写正确的身份证号码！" fv-msgpanel="msgsfz" />
								<span id="msgsfz" class="validate-info">请输入身份证号！</span>
							</dd>
							<dt class="formList-tit">性别：</dt>
							<dd class="formList-det"><label><input type="radio" checked="checked" name="gender" fv-minlength="1" fv-maxlength="1" fv-msgpanel="msggender" fv-msg-succeed="OK" />男</label>
								<label><input type="radio" name="gender" />女</label>
							</dd>
							<dt class="formList-tit">我的学校：</dt>
							<dd class="formList-det"><input type="text" id="school" name="school"  readonly="readonly"  fv-empty="false" fv-empty-msg="学校不能为空！" fv-msgpanel="msgxx" />
								<span id="msgxx" class="validate-info">请填写学校！</span>
							</dd>
							<dt class="formList-tit">兴趣：</dt>
							<dd class="formList-det interests" numlimit="5">
								<ul class="select-items">
									<li value="01">篮球<i class="close">×</i></li>
					<li value="02">足球<i class="close">×</i></li>
					<li value="03">羽毛球<i class="close">×</i></li>
					
									<li class="addinterest">新增</li>
								</ul>
							</dd>
							<dt class="formList-tit">手机号：</dt>
							<dd class="formList-det"><input name="mobile" type="text"  fv-format="^(13[0-9]|15[0|3|6|7|8|9]|18[8|9])\d{8}$" fv-format-msg="请输入正确的手机号" fv-empty="false" fv-empty-msg="手机号不能为空！"  fv-msgpanel="msgsj" />
								<span id="msgsj" class="validate-info">请填写手机号！</span>
							</dd>
							<dt class="formList-tit">验证码：</dt>
							<dd class="formList-det"><input type="text" fv-empty="false" fv-empty-msg="验证码不能为空！" />
								<a href="javascript:void(0)" class="btn">免费获取验证码</a>
							</dd>
						</dl>
						<input type="button" value="进入童年号" onClick="checkForm();"/>
					</form>					
				</div>
			</div>
		</div>
		<div class="dialog interests">
			<div class="dialog-title clearfix"><h3 class="lfloat">添加兴趣</h3><a href="javascript:void(0)" class="close rfloat">×</a></div>
			<div class="dialog-content clearfix">
				<ul class="select-items">
					<li value="01">篮球<i class="close">×</i></li>
					<li value="02">足球<i class="close">×</i></li>
					<li value="03">羽毛球<i class="close">×</i></li>
					<li value="04">乒乓球<i class="close">×</i></li>
					<li value="05">网球<i class="close">×</i></li>
					<li value="06">游泳<i class="close">×</i></li>
				</ul>
			</div>
		</div>
		<div class="dialog addschool">
			<div class="dialog-title"><h3 class="lfloat">添加学校</h3><a href="javascript:void(0)" class="close rfloat">×</a></div>
			<div class="dialog-content clearfix">
				<div class="content-left lfloat">
					<dl class="formList">
							<dt class="formList-tit"><span class="red">*</span>学校类型：</dt>
							<dd class="formList-det">
								<select name="" id=""
								>
								<option value="">大学</option>
							</select>
							</dd>
							<dt class="formList-tit">学校所在地：</dt>
							<dd class="formList-det">
								<select name="" id=""
								>
								<option value="">湖北</option>
							</select>
							</dd>
							<dt class="formList-tit"><span class="red">*</span>学校名称：</dt>
							<dd class="formList-det">
								<input type="text" class="schoolname" name="schoolname" />
								<br>
								<span class="showinfo">找不到该学校</span>
							</dd>
							<dt class="formList-tit"><span class="red">*</span>入学年份：</dt>
							<dd class="formList-det">
								<select name="" id=""
								>
								<option value="">2014</option>
							</select>
							</dd>
						</dl>
						<a href="javascript:void(0)" class="btn schoolsubmit">提交</a>
				</div>
				<div class="content-right rfloat">
					<div class="content-right-letter clearfix">
						<ul>
							<li><a href="#">A</a></li>
							<li><a href="#">B</a></li>
							<li><a href="#">C</a></li>
							<li><a href="#">D</a></li>
							<li><a href="#">E</a></li>
							<li><a href="#">F</a></li>
							<li><a href="#">G</a></li>
							<li><a href="#">H</a></li>
							<li><a href="#">I</a></li>
							<li><a href="#">J</a></li>
							<li><a href="#">K</a></li>
							<li><a href="#">L</a></li>
							<li><a href="#">M</a></li>
							<li><a href="#">N</a></li>
							<li><a href="#">O</a></li>
							<li><a href="#">P</a></li>
							<li><a href="#">Q</a></li>
							<li><a href="#">R</a></li>
							<li><a href="#">S</a></li>
							<li><a href="#">T</a></li>
							<li><a href="#">U</a></li>
							<li><a href="#">V</a></li>
							<li><a href="#">W</a></li>
							<li><a href="#">X</a></li>
							<li><a href="#">Y</a></li>
							<li><a href="#">Z</a></li>
						</ul>
					</div>
					<div class="content-right-schools">
						<ul>
							<li value="1">武汉大学</li>
							<li value="2">华中科技大学</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<input type="hidden" value="${userinfo.username}" name="username">
		<span class="copyright">
		www.tongnian.com 童年号Web版
		</span>
		<script>
		$(document).on("click", ".dialog .select-items li", function(e){
			// alert(0)
			itemSelect(e);
		})
		$(document).on("click", ".select-items i.close", function(){
			$(this).parent("li").remove();
		})
		$(".schoolsubmit").click(function(){
			schoolCheck();
		})
		$(".addinterest").click(function(){
			$(".dialog.interests").show();

		})
		$(".addclass").click(function(){
			$(".dialog.classes").show();

		})
		$("#school").click(function(){
			$(".addschool").show();

		})
		$(".dialog-title .close").click(function(){
			$(this).closest(".dialog").hide();
		})
		$(document).on("click",".content-right-schools ul li", function(e){
			schoolSelect(e);
		})
		// 添加兴趣/科目
		function itemSelect(e){
			var Current = $(e.target),
				CurClass = Current.closest(".dialog").attr("class").replace("dialog ",""),
				Loc = $('.formList-det.'+ '' + CurClass +''),
				Selected = Loc.find(".select-items li"),
				flag = 0,
				num = Loc.attr("numlimit");
				if (Selected.length > num) {
					alert("最多只能添加" + '' + num +'' + "个")
					return false		
				} else {
					Selected.each(function(index ,val){
					if ($(val).text() == Current.text()) {
						flag = 1;
						alert("不能重复添加")
						return false;
					}
					
				})
				};
				
				if (flag == 1) {
					return false;
				};
				Current.clone(true).prependTo(Loc.find(".select-items"));
				

		}
		// 是否选择学校检查
		function schoolCheck(){
			var Schools = $(".content-right-schools ul li"),
				selectedSchool = $(".schoolname").val();
			Schools.each(function(index, val){
				if (selectedSchool == $(val).attr("value")) {
					$("#school").val(selectedSchool).change();
					$(".addschool, .showinfo").hide();
					return false;
				} else{
					$(".showinfo").show();
				};
			})
		}
		// 学校选择、赋值
		function schoolSelect(e){
			var Current = $(e.target),
				Schools = $(".content-right-schools ul li");
				Schools.removeClass("selected");
				Current.addClass("selected");
				$(".schoolname").val(Current.attr("value"));
		}
		// 表单验证
		function checkForm() {
		document.getElementById("formTest").submit();
		}
		
		</script>
	</body>
</html>
