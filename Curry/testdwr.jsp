<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'testdwr.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->

  </head>
<script src="<%=basePath %>dwr/interface/java里暴露的class"></script> <!--  //切记不能<script *** />这样写 -->
<script src="<%=basePath %>dwr/engine.js"></script>  <!--  //Dwr的脚本驱动Js,以上两个必写 -->
<script src="<%=basePath %>dwr/util.js"></script>   <!-- //这是个工具包，可以不调用 -->

<script type="text/javascript">
    function doMethod()
    {
        //调用方法:若公开的类是AAA,公开的AAA里的方法是bbb([参数]);
        AAA.bbb([参数],callBack);//回调函数callBack()
    }

    function callBack(data)//data是后台返回的值，名字自取，也可省略，因为JS允许
    {
       /* 处理方法……; *///如果callBack()没有写明返回值，可以通过argments[0]拿到
    }
</script>

  <body>
    This is my JSP page. <br>
  </body>
  
</html>
