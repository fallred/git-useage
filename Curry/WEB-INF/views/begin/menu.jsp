<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib uri="http://shiro.apache.org/tags" prefix="shiro" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=gbk">
    <title>Bootstrap Admin</title>
    <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">

   <link rel="stylesheet" type="text/css" href="<%=basePath%>css/bootstrap.css">
    
    <link rel="stylesheet" type="text/css" href="<%=basePath%>css/theme.css">
    <link rel="stylesheet" href="<%=basePath%>css/font-awesome.css">

    <script src="<%=basePath%>js/jquery-1.7.2.min.js" type="text/javascript"></script>

    <!-- Demo page code -->

    <style type="text/css">
        #line-chart {
            height:300px;
            width:800px;
            margin: 0px auto;
            margin-top: 1em;
        }
        .brand { font-family: georgia, serif; }
        .brand .first {
            color: #ccc;
            font-style: italic;
        }
        .brand .second {
            color: #fff;
            font-weight: bold;
        }
    </style>

    <!-- Le HTML5 shim, for IE6-8 support of HTML5 elements -->
    <!--[if lt IE 9]>
      <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->

    <!-- Le fav and touch icons -->
    <link rel="shortcut icon" href="../assets/ico/favicon.ico">
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="../assets/ico/apple-touch-icon-144-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="../assets/ico/apple-touch-icon-114-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="../assets/ico/apple-touch-icon-72-precomposed.png">
    <link rel="apple-touch-icon-precomposed" href="../assets/ico/apple-touch-icon-57-precomposed.png">
  </head>
  
  <body class=""> 
  <!--<![endif]-->
   
    <div class="sidebar-nav">
 <%--    <shiro:hasRole name="A">
<a href="index.jsp">管理员</a>
</shiro:hasRole> --%>
<shiro:hasRole name="A">
        <a href="#dashboard1-menu" class="nav-header" data-toggle="collapse"><i class="icon-dashboard"></i>供应商管理</a>
        <ul id="dashboard1-menu" class="nav nav-list collapse in">
            <li><a href="<%=basePath%>supplier/querySuppliersForShow" target="main">供应商登记</a></li>
           <!--  <li ><a  href="#" target="main">供应商资料变更</a></li> -->
            <li ><a href="<%=basePath%>product/getSuppliersForAdd" target="main" >供应商新增商品</a></li>
            <!-- <li ><a href="media.html">供应商淘汰商品</a></li> -->
            <li ><a href="calendar.html">淘汰供应商</a></li>
			<li ><a href="calendar.html">恢复淘汰供应商</a></li>
        </ul>
 <a href="#dashboard2-menu" class="nav-header" data-toggle="collapse"><i class="icon-dashboard"></i>商品管理</a>
        <ul id="dashboard2-menu" class="nav nav-list collapse ">
            <li><a href="<%=basePath%>product/showProductforInsret" target="main">新商品登记</a></li>
            <li ><a href="<%=basePath%>category/showCategoryforinsert" target="main">新增类别</a></li>
            <li ><a href="<%=basePath%>product/showProductByFlag" target="main">商品信息展示</a></li>
            <li ><a href="media.html">这是功能四</a></li>
            <li ><a href="calendar.html">这是功能五</a></li>
        </ul>
		 <a href="#dashboard3-menu" class="nav-header" data-toggle="collapse"><i class="icon-dashboard"></i>订货管理</a>
        <ul id="dashboard3-menu" class="nav nav-list collapse ">
            <li><a href="<%=basePath%>order/showAllProductForOrder" target="main">供应商订货</a></li>
            <li ><a href="<%=basePath%>order/showOrderByFlagN" target="main">显示所有提交的订单</a></li>
            <li ><a href="<%=basePath%>dorders/showAllDordersByFlagN" target="main">显示所有未审核订单</a></li>
            <li ><a href="<%=basePath%>dorders/showAllDordersByFlagS" target="main">显示所有审核通过订单</a></li>
            <li ><a href="calendar.html">这是功能五</a></li>
        </ul>
        
     </shiro:hasRole>
        
		 <a href="#dashboard4-menu" class="nav-header" data-toggle="collapse"><i class="icon-dashboard"></i>分销商订货</a>
        <ul id="dashboard4-menu" class="nav nav-list collapse ">
            <li><a href="<%=basePath%>dorders/forinsertDorders" target="main">分销商订货申请</a></li>
            <li ><a href="<%=basePath%>distributor/showalldordersbydisid" target="main">分销商订单查询</a></li>
            <li ><a href="user.html">这是功能三</a></li>
            <li ><a href="media.html">这是功能四</a></li>
            <li ><a href="calendar.html">这是功能五</a></li>
        </ul>       
        <shiro:hasRole name="A">
         <a href="#dashboard5-menu" class="nav-header" data-toggle="collapse"><i class="icon-dashboard"></i>财务管理</a>
        <ul id="dashboard5-menu" class="nav nav-list collapse ">
            <li><a href="<%=basePath%>dorders/showAllDordersByFlagC" target="main">显示发货单</a></li>
            <li ><a href="users.html">这是功能二</a></li>
            <li ><a href="user.html">这是功能三</a></li>
            <li ><a href="media.html">这是功能四</a></li>
            <li ><a href="calendar.html">这是功能五</a></li>
        </ul>
           <a href="#dashboard6-menu" class="nav-header" data-toggle="collapse"><i class="icon-dashboard"></i>仓库管理</a>
        <ul id="dashboard6-menu" class="nav nav-list collapse ">
            <li><a href="<%=basePath%>dorders/showAllDordersByFlagR" target="main">已扣款代发货订单</a></li>
            <li ><a href="users.html">这是功能二</a></li>
            <li ><a href="user.html">这是功能三</a></li>
            <li ><a href="media.html">这是功能四</a></li>
            <li ><a href="calendar.html">这是功能五</a></li>
        </ul>
         <a href="#dashboard7-menu" class="nav-header" data-toggle="collapse"><i class="icon-dashboard"></i>订单管理</a>
        <ul id="dashboard7-menu" class="nav nav-list collapse ">
            <li><a href="<%=basePath%>dorders/showDistributorBySupplierid" target="main">查看分销商订单</a></li>
            <li ><a href="users.html">这是功能二</a></li>
            <li ><a href="user.html">这是功能三</a></li>
            <li ><a href="media.html">这是功能四</a></li>
            <li ><a href="calendar.html">这是功能五</a></li>
        </ul>
        <a href="#accounts-menu" class="nav-header" data-toggle="collapse"><i class="icon-briefcase"></i>Account<span class="label label-info">+3</span></a>
        <ul id="accounts-menu" class="nav nav-list collapse">
            <li ><a href="sign-in.html">Sign In</a></li>
            <li ><a href="sign-up.html">Sign Up</a></li>
            <li ><a href="reset-password.html">Reset Password</a></li>
        </ul>
        <a href="#error-menu" class="nav-header collapsed" data-toggle="collapse"><i class="icon-exclamation-sign"></i>Error Pages <i class="icon-chevron-up"></i></a>
        <ul id="error-menu" class="nav nav-list collapse">
            <li ><a href="403.html">403 page</a></li>
            <li ><a href="404.html">404 page</a></li>
            <li ><a href="500.html">500 page</a></li>
            <li ><a href="503.html">503 page</a></li>
        </ul>
        <a href="#legal-menu" class="nav-header" data-toggle="collapse"><i class="icon-legal"></i>Legal</a>
        <ul id="legal-menu" class="nav nav-list collapse">
            <li ><a href="privacy-policy.html">Privacy Policy</a></li>
            <li ><a href="terms-and-conditions.html">Terms and Conditions</a></li>
        </ul>

        <a href="help.html" class="nav-header" ><i class="icon-question-sign"></i>Help</a>
        <a href="faq.html" class="nav-header" ><i class="icon-comment"></i>Faq</a>
        </shiro:hasRole>
    </div>
 
    <script src="<%=basePath%>js/bootstrap.js"></script>
    <script type="text/javascript">
        $("[rel=tooltip]").tooltip();
        $(function() {
            $('.demo-cancel-click').click(function(){return false;});
        });
    </script>
    
  </body>
</html>
