<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<script language="javascript" type="text/javascript">
function checkForm(){
	form1.action="<%=basePath%>register/studentRegistUserFullinfo"
	form1.submit();
}
</script>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html lang="en">
	<head>
		<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
		<title>童年号-注册-学生/家长</title>
		<!-- <link rel="stylesheet" href="http://localhost:8080/Curry/css/basenew.css"> -->
		<link rel="stylesheet" href="http://localhost:8080/Curry/dist/css/bootstrap.css">
		<link rel="stylesheet" href="http://localhost:8080/Curry/font/iconfont.css">
		<link rel="stylesheet" href="http://localhost:8080/Curry/css/login.css">
		<script src="http://localhost:8080/Curry/js/jquery-1.11.1.min.js"></script>
		<script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="bootstrap" src="http://localhost:8080/Curry/dist/js/bootstrap.min.js"></script>
		<script src="http://localhost:8080/Curry/js/FormValidator.1.0.js"></script>
		<script src="http://localhost:8080/Curry/js/dialog-plus-min.js"></script>
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
				<div class="content">
					<div class="tip-info">
						<p class="tip-text1">
							您已完成基本注册，请完善以下信息享受更多服务
						</p>
						<p class="tip-text2">
							根据《中华人民共和国未成年人保护法》、和国家互联网信息安全法律法规“后台实名、前台自愿”的规定，为了严防未成年人使用互联网遭受不良信息和不良对象的侵害，您必须验证以下信息，才能使用童年网平台的更多服务。
						</p>
						<p class="align-l">
							请填写真实的姓名和身份证号码，才能使用聊天交友服务
						</p>
					</div>
					<form id="formTest" name="form1" method="post" "true" fv-msgpanel="formerror" action="<%=basePath%>register/studentRegistUserFullinfo">
						<div class="formList">
							<div class="row">
							<div class="col-xs-4 col-sm-4"></div>
							<div class="col-xs-8 col-sm-8">
								<div class="formList-det">
									<label class="info">真实姓名</label>
									<input type="text"  name="realname" class="formList-width1" fv-empty="false" fv-empty-msg="真实姓名不能为空！" fv-format="^[\u4e00-\u9fa5]{2,4}$" fv-format-msg="请填写真实姓名！" fv-msgpanel="msgxm" />
									<span id="msgxm" class="validate-info">请输入真实姓名！</span>
								</div>
							</div>
							<div class="col-xs-4 col-sm-4"></div>
							<div class="col-xs-8 col-sm-8">
								<div class="formList-det">
									<label class="info">身份证号</label>
									<input type="text" name="cardiId" class="formList-width1" id="identitycode" fv-empty="false" fv-empty-msg="身份证不能为空！" fv-format="^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X|x)$" fv-custom-msg="请填写正确的身份证号码！" fv-msgpanel="msgsfz" />
										<span id="msgsfz" class="validate-info">请输入身份证号！</span>
								</div>
							</div>

							<div class="col-xs-4 col-sm-4"></div>
							<div class="col-xs-8 col-sm-8">
								<div class="formList-det">
									<span class="detail">性别</span>
									<!-- 单选框 -->
									<div class="group">
										<div class="inputDiv">
									        <input type="radio" name="gender" class="nowradio" value="1" checked="checked">
									        <p class="chenked-radio"></p>
									        <label for="">男</label>
									    </div>
									    <div class="inputDiv">
									        <input type="radio" name="gender" class="nowradio" value="2">
									        <p class="radio"></p>
									        <label for="">女</label>
									    </div>
									</div>  
									
								</div>
							</div>
							<div class="col-xs-4 col-sm-4"></div>
							<div class="col-xs-8 col-sm-8">
								<div class="formList-det">
									<label class="info">我的学校</label>
									<input type="text" name="school" class="formList-width1" id="school" name="school"  readonly="readonly"  fv-empty="false" fv-empty-msg="学校不能为空！" fv-msgpanel="msgxx" value="123"/>
									<span id="msgxx" class="validate-info">请填写学校！</span>
								</div>
							</div>
							<div class="col-xs-4 col-sm-4"></div>
							<div class="col-xs-8 col-sm-8">
								<div class="formList-det interests" numlimit="5">
									<span class="detail">兴趣</span>
									<ul class="select-items interests-item">
										<!-- <li class="project">篮球</li> -->
									</ul>
									<a href="javascript:void(0)" class="addinterest btn-r">新增</a>
								</div>
							</div>
							<div class="col-xs-4 col-sm-4"></div>
							<div class="col-xs-8 col-sm-8">
								<div class="formList-det">
									<label class="info">邮箱</label>
									<input type="text" name="email" class="formList-width1" fv-empty="false" fv-format="^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$" fv-format-msg="邮箱格式不正确" fv-empty-msg="请输入邮箱地址！" fv-msgpanel="msgpanel" />
									<span class="validate-info" id="msgpanel">请输入邮箱！</span>
								</div>
							</div>

							<div class="col-xs-4 col-sm-4"></div>
							<div class="col-xs-8 col-sm-8">
								<div class="formList-det">
									<label class="info">手机号</label>
									<input type="text" name="mobile" class="formList-width1"  fv-format="^(13[0-9]|15[0|3|6|7|8|9]|18[8|9])\d{8}$" fv-format-msg="请输入正确的手机号" fv-empty="false" fv-empty-msg="手机号不能为空！"  fv-msgpanel="msgsj" />
									<span id="msgsj" class="validate-info">请填写手机号！</span>
								</div>
							</div>

							<div class="col-xs-4 col-sm-4"></div>
							<div class="col-xs-8 col-sm-8">
								<div class="formList-det">
									<label class="info">验证码</label>
									<input type="text" name="" class="formList-width1" fv-empty="false" fv-empty-msg="验证码不能为空！" />
									<a href="javascript:void(0)" class="btn-b">免费获取验证码</a>
								</div>
							</div>
						</div>
						<p class="red">以上信息是严格保密的，我们绝不会向第三方泄露，同时也不会用于商业目的</p>
						<a href="javascript:void(document.form1.submit())" class="btn-bg btn-width btn-text btn-margintb" onClick="checkForm();">提交</a>
					</form>
					
				</div>
			</div>
		</div>
		<div class="dialog-interest">
			<div class="dialog-content fn-clear">
				<p>添加兴趣爱好等方面的词语，让更多人找到你，让你找到更多同类</p>
				<h3>已添加：</h3>
				<ul class="select-items added">

				</ul>
				<div class="search">
					<input type="text"/>
					<a href="javascript:void(0)" class="btn-r searchadd">添加</a>
				</div>
				<div class="select-category findbox">
					<h3>快速添加自己的兴趣标签
						<span class="tiplabel">最多只能添加5个</span>
					</h3>
					<div class='btn-nav nav-left fn-btn'>
						<i class='iconfont'>&#xe624;</i>
					</div>
					<div class='btn-nav nav-right fn-btn'>
						<i class='iconfont'>&#xe623;</i>
					</div>
					<ul class="select-items hotlabel">
						<li class="project-add"><b class="add-btn">+</b><span>乒乓球</span></li>
						<li class="project-add"><b class="add-btn">+</b><span>跳绳</span></li>
						<li class="project-add"><b class="add-btn">+</b><span>旅游</span></li>
						<li class="project-add"><b class="add-btn">+</b><span>时间管理</span></li>
						<li class="project-add"><b class="add-btn">+</b><span>羽毛球</span></li>
						<li class="project-add"><b class="add-btn">+</b><span>逛街</span></li>
						<li class="project-add"><b class="add-btn">+</b><span>abc</span></li>
						<li class="project-add"><b class="add-btn">+</b><span>12345</span></li>
						<li class="project-add"><b class="add-btn">+</b><span>时间</span></li>
						<li class="project-add"><b class="add-btn">+</b><span>跳舞</span></li>
					</ul>
				</div>
			</div>
		</div>
		<div class="dialog-shool">
			<div class="dialog-content clearfix">
				<div class="content-left fn-left">
					<div class="list-l">
						<span class="formList-l">所教科目：</span>
						<!-- 下拉框 -->
						<div class="selecter">
							<div class="selecter-container">
								<div class="selecter-trigger">
								<input type="text" data-id="0" value="请选择" disabled="true ">
								<i class="iconfont">&#xe61f;</i>
								</div>
								<ul class="selecter-options">
									<li><a href="javascript:void(0)" value="1">语文</a></li>
									<li><a href="javascript:void(0)" value="2">数学</a></li>
								</ul>
							</div>
						</div>
					</div>
					<div class="list-l">
						<span class="formList-l">学校所在地：</span>
						<!-- 下拉框 -->
						<div class="selecter">
							<div class="selecter-container">
								<div class="selecter-trigger">
								<input type="text" data-id="0" value="请选择" disabled="true ">
								<i class="iconfont">&#xe61f;</i>
								</div>
								<ul class="selecter-options">
									<li><a href="javascript:void(0)" value="1">语文</a></li>
									<li><a href="javascript:void(0)" value="2">数学</a></li>
								</ul>
							</div>
						</div>
					</div>
					<div class="list-l">
						<span class="formList-l"></span>
						<!-- 下拉框 -->
						<div class="selecter">
							<div class="selecter-container">
								<div class="selecter-trigger">
								<input type="text" data-id="0" value="请选择" disabled="true ">
								<i class="iconfont">&#xe61f;</i>
								</div>
								<ul class="selecter-options">
									<li><a href="javascript:void(0)" value="1">语文</a></li>
									<li><a href="javascript:void(0)" value="2">数学</a></li>
								</ul>
							</div>
						</div>
					</div>
					<div class="list-l">
						<span class="formList-l">学校名称：</span>
						<input type="text" />
					</div>
				</div>
				<div class="content-right fn-right">
					<div class="list-box">
						<ul class="list-r">
							<li>武汉一中学校</li>
							<li>武汉一中学校</li>
							<li>武汉一中学校</li>
							<li>武汉一中学校</li>
							<li>武汉一中学校</li>
						</ul>
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
		// function inibody(){
		// 	var wheight = $(document).height();
		// 	var banner = $(".banner").height();
		// 	var header = $(".header").height();
		// 	var footer = $(".footer").height();
		// 	$(".main").css("height",wheight-header-banner-footer);
		// }
		// window.onload = inibody();
		// 表单验证
		function checkForm() {
			document.getElementById("formTest").submit();
		}
		// 选择学校
		$("#school").click(function(){
			school();
		});
		//选择兴趣
		$(".addinterest").click(interest);
		//添加兴趣
		$(document).on("click",".searchadd", function(){
			var str = $(this).siblings("input").val();
			if(interest_data.length < 5 ){
				$(".added").prepend('<li class="project-close"><span>'+str+'</span><b class="close-btn">×</b></li>');
				interest_data.unshift(str);
			}else {
				$(".tiplabel").show();
			}
			$.each($(".hotlabel").find("span"), function(){
				if ($(this).text() == str){
					$(this).parent().css("background","#f76b66");
				}
			});
		});
		//热门标签
		interest_data = [];
		$(document).on("click",".project-add", function (e){
			var text = $(e.currentTarget).find("span").text();
			
			if (interest_data.length<5 && !isExist(text)){
				$(".added").prepend('<li class="project-close"><span>'+text+'</span><b class="close-btn">×</b></li>');
				interest_data.unshift(text);
				$(e.currentTarget).css("background","#f76b66");
			} else{
				$(".tiplabel").show();

			}
		});

		//选择兴趣关闭
		$(document).on("click", ".select-items b.close-btn", function (e){
			var text = $(e.currentTarget).parent().find("span").text();
			var j=0;
			for(var i=0; i<interest_data.length; i++){
				if(interest_data[i] == text){
					j=i;
					break;
				}
			}
			interest_data.splice(j,1);
			$.each($(".hotlabel").find("span"), function(){
				if ($(this).text() == text){
					$(this).parent().css("background","#57a9d1");
				} else {
					$(".tiplabel").hide();
				}
			});
			$(e.target).parent("li").remove();
		})

		
		// 选择学校弹框
		function school() {
			var addschool =$('.dialog-shool').html();
			var d = dialog({
				id: 'school',
			    title: '添加学校',
			    content: addschool,
			    okValue: '确定',
			    ok: function () {
			        this.title('提交中…');
			        return false;
			    },
			    cancelValue: '取消',
			    cancel: function () {},
			    width: 800,
		
			});
			d.showModal();
		};

		// 选择兴趣弹框
		function interest() {
			var elem = $(".dialog-interest").html();
			var d = dialog({
				id: 'interest',
			    title: '添加兴趣',
			    content: elem,
			    cancel: false,
			    okValue: '确定',
			    ok: function () {
			    	str = '';
			    	for(var i=0; i<interest_data.length; i++) {
			    		str += '<li class="project">'+interest_data[i]+'</li>';
			    	};
			    	$(".interests-item").html(str);
			    	
			    },
			    width: 800,
			 
			});
			$(".added").empty();
			var addedStr = '';
			for(var i=0; i<interest_data.length; i++){
				addedStr += '<li class="project-close"><span>'+interest_data[i]+'</span><b class="close-btn">×</b></li>';
				$.each($(".hotlabel").find("span"), function(){
					if ($(this).text() == interest_data[i]){
						$(this).parent().css("background","#f76b66");
					}
				});
			};
			$(".added").html(addedStr);
			d.showModal();
		};

		function isExist(text) {
			for(var i=0; i<interest_data.length; i++){
				if (interest_data[i] == text)
					return true;
			}
			return false;
		}

		</script>
	</body>
</html>