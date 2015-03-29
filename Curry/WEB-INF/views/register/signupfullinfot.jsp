<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<script language="javascript" type="text/javascript">
function checkForm(){
	form1.action="<%=basePath%>register/teacherRegistUserFullinfo"
	form1.submit();
}
</script>



<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html lang="en">
	<head>
		<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
		<title>童年号-注册-教师</title>
		<link rel="stylesheet" href="http://localhost:8080/Curry/dist/css/bootstrap.css">
		<link rel="stylesheet" href="http://localhost:8080/Curry/css/login.css">
		<link rel="stylesheet" href="http://localhost:8080/Curry/font/iconfont.css">
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
				<form id="formTest" name="form1" method="post" "true" fv-msgpanel="formerror" action="<%=basePath%>register/teacherRegistUserFullinfo">
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
								<div class="formList-det">
									<span class="detail">所教科目</span>
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
		<div class="dialog interests">
			<div class="dialog-title clearfix"><h3 class="lfloat">添加兴趣</h3><a href="javascript:void(0)" class="close rfloat">×</a></div>
			<div class="dialog-content clearfix">
				<ul class="select-items">
					<li>篮球<i class="close">×</i></li>
					<li>足球<i class="close">×</i></li>
					<li>羽毛球<i class="close">×</i></li>
					<li>乒乓球<i class="close">×</i></li>
					<li>网球<i class="close">×</i></li>
					<li>游泳<i class="close">×</i></li>
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
							<li value="武汉大学">武汉大学</li>
							<li value="华中科技大学">华中科技大学</li>
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

		function inibody(){
			var wheight = $(document).height();
			var banner = $(".banner").height();
			var header = $(".header").height();
			var footer = $(".footer").height();
			$(".main").css("height",wheight-header-banner-footer);
		}
		window.onload = inibody();
		
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
		
		// 单选框
		$(document).on("click",".nowradio", function(){
		    var group = $(this).closest('.group').find('p');
		        group.each(function(){
		            if(!$(this).hasClass('radio'))
		                $(this).removeClass().addClass('radio');
		        });
		        $(".nowradio").removeAttr("checked");
		        $(this).attr("checked","true");
		        if($(this).attr("checked","true")){
		            $(this).next().removeClass().addClass("chenked-radio");
		        }
		    }
		);
		//收起下拉菜单
		function selecter(){
		    var selecters = $(".selecter");
		    selecters.each( function(index,item){
		        var coptions = $(item).find('.selecter-options');
		        $(item).find('.selecter-trigger').width(coptions.width()+2);
		        $(item).width(coptions.width()+4);
		        coptions.hide();
		    });
		}
		$(document).on("click",function(e){
		    if($(e.target).is(".selecter-trigger input,.selecter-trigger i")){
		        return false;
		    }else{
		        $(".selecter").removeAttr('style').find('.iconfont').html('&#xe61f;');
		        $(".selecter-options").hide();
		    }
		});
		$(document).on("click",".selecter",function(e){
		    var trigger = $(e.target),
		        selecter = trigger.closest(".selecter"),
		        options = selecter.find(".selecter-options"),
		        width = options.width();
		    if((trigger.is(".selecter-trigger input")||trigger.is(".selecter-trigger i")) && options.is(":hidden")){
		        $(".selecter-options").hide();
		        $(".selecter").removeAttr('style').find('.iconfont').html('&#xe61f;');
		        selecter.css("z-index",99).find('.iconfont').html('&#xe61e;');
		        options.show();
		    }else if(trigger.is(".selecter-options a")){
		        var cval = trigger.text(),
		            cid = trigger.attr('value');
		        options.find("li").removeClass("selected");
		        trigger.closest("li").addClass("selected");
		        selecter.find("input").val(cval);
		        selecter.find("input").attr('data-id',cid).change();
		        selecter.removeAttr('style').find('.iconfont').html('&#xe61f;');
		        options.hide();
		    }
		    else {
		        selecter.removeAttr('style').find('.iconfont').html('&#xe61f;');
		        options.hide()
		    };
		});
		</script>
	</body>
</html>
