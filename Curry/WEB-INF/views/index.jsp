<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jstl/core" %>

<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
Object objLoginId= request.getSession().getAttribute("loginId");
if(objLoginId==null){
	response.sendRedirect("../");
}
%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html lang="en">
	<head>
<%-- <base href="http://localhost:8080/Curry/Curry/"> --%>

<title>童年号</title>
<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">

<link rel="stylesheet" href="http://localhost:8080/Curry/dist/css/bootstrap.css">
<link rel="stylesheet" href="http://localhost:8080/Curry/dist/css/docs.min.css">
<link rel="stylesheet" href="http://localhost:8080/Curry/dist/css/proto.css">
<link rel="stylesheet" href="http://localhost:8080/Curry/css/basenew.css">
<link rel="stylesheet" href="http://localhost:8080/Curry/css/class.css">
<link rel="stylesheet" href="http://localhost:8080/Curry/css/street.css">
<script type="text/javascript">
	var currLoginId = '${loginId}';
</script>
</head>
<body>
		<img src="../images/pic03.jpg" alt="" class="bodybg blur">
		<div class="menu-main">
			<div class="logo"></div>
			<ul>
				<li id="dynamic" class="selected"><i class="iconfont">&#xe601;</i><span>童年号</span></li>
				<li id="classes"><i class="iconfont">&#xe602;</i><span>班级</span></li>
				<li id="contacts"><i class="iconfont">&#xe603;</i><span>联系人</span></li>
				<li id="circle"><i class="iconfont">&#xe605;</i><span>朋友圈</span></li>
				<li id="streets"><i class="iconfont">&#xe604;</i><span>街区</span></li>
				<li id="setting"><i class="iconfont">&#xe606;</i><span>设置</span></li>
			</ul>
		</div>
		<!-- 右侧内容 -->
		
		<div class="main-container" id="main-container">
			<div class="usrabstract">
			<div class="infopanel container-fluid fn-clear">
				<div class="row">
					<div class="col-md-2">
						<div class="usrpic-xs fn-left">
							<img src="${userinfo.photo }" alt="nickName">
						</div>
						<ul class="fn-left">
							<li class="main-usrname">${userinfo.nickname }</li>
							<li class="main-tnnum">童年号<span>${userinfo.tnno }</span>
							</li>
						</ul>
					</div>
					<div class="col-md-2">
						<div class="main-level user-level-${userinfo.level }"></div>
					</div>
					<div class="col-md-2">
						<div class="abstract todayvisit">
							<i class="iconfont">&#xe61a;</i>${userinfo.todayvisit }</div>
					</div>
					<div class="col-md-2">
						<div class="abstract visitcount">
							<i class="iconfont">&#xe61c;</i>${userinfo.totalvisit }</div>
					</div>
					<div class="col-md-2">
						<div class="abstract blogcount">
							<i class="iconfont">&#xe611;</i>${userinfo.blogamount}</div>
					</div>
					<div class="col-md-2">
						<div class="abstract friendcount">
							<i class="iconfont">&#xe619;</i>${userinfo.friendamount }</div>
					</div>
				</div>
			</div>
		</div>
			<div class="contactlist-container">
				
				<div class="searchpanel"><input type="text" placeholder="搜索：童年号、用户名、群、公众号"><a class="iconfont" href="javascript:void(0)">&#xe607;</a></div>
				<div class="main-list">

				</div>
				
			</div>
			<div class="content-container">
				<div class="container-fluid" id="container-fluid">
				</div>

			</div>
		</div>
		
		<!-- 名片容器 -->
		<div class="usrcard fn-clear">
		</div>
		<!-- 博客容器 -->
		<div class="blogpage">
		</div>
			
		</body>
<script type='text/javascript' src='../js/emoji-lib/emoji-list-with-image.js'></script>
<script type='text/javascript' src='../js/emoji-lib/vendor/punycode/punycode.min.js'></script>
<script type="text/javascript" src="../js/emoji-lib/emoji.js"></script>
<script type="text/javascript" src="../js/require.js" data-main="../main/main"></script>
<script type="text/javascript" src="../js/jquery.js"></script>
<script type='text/javascript' src='../dwr/engine.js'></script>
<script type='text/javascript' src='../dwr/util.js'></script>
<script type='text/javascript' src='../dwr/interface/DWRScriptMethod.js'></script>
<script type="text/javascript" src="../js/dwrInit.js"></script>
<script type="text/javascript" src="../js/ckeditor/ckeditor.js"></script>
</html>