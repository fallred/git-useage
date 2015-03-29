<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib uri="http://shiro.apache.org/tags" prefix="shiro" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
  <%--   <base href="<%=basePath%>"> --%>
    
    <title>加比力渠道管理系统</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->

 <style type="text/css">
<!--
body {
	margin-left: 0px;
	margin-top: 0px;
	margin-right: 0px;
	margin-bottom: 0px;
	background-image: url(<%=basePath%>images/left.gif);
}
-->
</style>
<link href="<%=basePath%>css/css.css" rel="stylesheet" type="text/css" />
</head>
<SCRIPT language=JavaScript>
function tupian(idt){
    var nametu="xiaotu"+idt;
    var tp = document.getElementById(nametu);
    tp.src="images/ico05.gif";//图片ico04为白色的正方形
	
	for(var i=1;i<30;i++)
	{
	  
	  var nametu2="xiaotu"+i;
	  if(i!=idt*1)
	  {
	    var tp2=document.getElementById('xiaotu'+i);
		if(tp2!=undefined)
	    {tp2.src="images/ico06.gif";}//图片ico06为蓝色的正方形
	  }
	}
}

function list(idstr){
	var name1="subtree"+idstr;
	var name2="img"+idstr;
	var objectobj=document.all(name1);
	var imgobj=document.all(name2);
	
	
	//alert(imgobj);
	
	if(objectobj.style.display=="none"){
		for(i=1;i<10;i++){
			var name3="img"+i;
			var name="subtree"+i;
			var o=document.all(name);
			if(o!=undefined){
				o.style.display="none";
				var image=document.all(name3);
				//alert(image);
				image.src="images/ico04.gif";
			}
		}
		objectobj.style.display="";
		imgobj.src="images/ico03.gif";
	}
	else{
		objectobj.style.display="none";
		imgobj.src="images/ico04.gif";
	}
}

</SCRIPT>

<body>

<table width="198" border="0" cellpadding="0" cellspacing="0" class="left-table01">
  <tr>
    <TD>
		<table width="100%" border="0" cellpadding="0" cellspacing="0">
		  <tr>
			<td width="207" height="55" background="<%=basePath%>images/nav01.gif">
				<table width="90%" border="0" align="center" cellpadding="0" cellspacing="0">
				  <tr>
					<td width="25%" rowspan="2"><img src="<%=basePath%>images/ico02.gif" width="35" height="35" /></td>
					<td width="75%" height="22" class="left-font01">您好，<span class="left-font02">${userName}</span></td>
				  </tr>
				  <tr>
					<td height="22" class="left-font01">
						[&nbsp;<a href="<%=basePath%>login.html" target="_top" class="left-font01">退出</a>&nbsp;]</td>
				  </tr>
				</table>
			</td>
		  </tr>
		</table>
<shiro:hasRole name="A">
		<!--  供应商管理系统开始    -->
		<TABLE width="100%" border="0" cellpadding="0" cellspacing="0" class="left-table03">
          <tr>
            <td height="29">
				<table width="85%" border="0" align="center" cellpadding="0" cellspacing="0">
					<tr>
						<td width="8%"><img name="img8" id="img8" src="<%=basePath%>images/ico04.gif" width="8" height="11" /></td>
						<td width="92%">
								<a href="javascript:" target="mainFrame" class="left-font03" onClick="list('8');" >供应商管理</a></td>
					</tr>
				</table>
			</td>
          </tr>		  
        </TABLE>
		<table id="subtree8" style="DISPLAY: none" width="80%" border="0" align="center" cellpadding="0" 
				cellspacing="0" class="left-table02">
				<tr>
				  <td width="9%" height="20" ><img id="xiaotu20" src="<%=basePath%>images/ico06.gif" width="8" height="12" /></td>
				  <td width="91%"><a href="<%=basePath%>supplier/querySuppliersForShow" target="mainFrame" class="left-font03" onClick="tupian('20');">供应商登记</a></td>
				</tr>
				<tr>
				  <td width="9%" height="21" ><img id="xiaotu21" src="<%=basePath%>images/ico06.gif" width="8" height="12" /></td>
				  <td width="91%"><a href="<%=basePath%>product/getSuppliersForAdd" target="mainFrame" class="left-font03" onClick="tupian('21');">供应商新增商品</a></td>
				</tr>
				<tr>
				  <td width="9%" height="21" ><img id="xiaotu21" src="<%=basePath%>images/ico06.gif" width="8" height="12" /></td>
				  <td width="91%"><a href="listrenwu.htm" target="mainFrame" class="left-font03" onClick="tupian('21');">淘汰供应商</a></td>
				</tr>
				<tr>
				  <td width="9%" height="21" ><img id="xiaotu21" src="<%=basePath%>images/ico06.gif" width="8" height="12" /></td>
				  <td width="91%"><a href="listrenwu.htm" target="mainFrame" class="left-font03" onClick="tupian('21');">恢复淘汰供应商</a></td>
				</tr>
				
      </table>
		<!--  供应商管理结束    -->

		

		<!--  商品管理开始    -->
		<TABLE width="100%" border="0" cellpadding="0" cellspacing="0" class="left-table03">
          <tr>
            <td height="29">
				<table width="85%" border="0" align="center" cellpadding="0" cellspacing="0">
					<tr>
						<td width="8%"><img name="img7" id="img7" src="<%=basePath%>images/ico04.gif" width="8" height="11" /></td>
						<td width="92%">
								<a href="javascript:" target="mainFrame" class="left-font03" onClick="list('7');" >商品管理</a></td>
					</tr>
				</table>
			</td>
          </tr>		  
        </TABLE>
		<table id="subtree7" style="DISPLAY: none" width="80%" border="0" align="center" cellpadding="0" 
				cellspacing="0" class="left-table02">
				<tr>
				  <td width="9%" height="20" ><img id="xiaotu17" src="<%=basePath%>images/ico06.gif" width="8" height="12" /></td>
				  <td width="91%">
						<a href="<%=basePath%>product/showProductforInsret" target="mainFrame" class="left-font03" onClick="tupian('17');">新增商品登记</a></td>
				</tr>
				<tr>
				  <td width="9%" height="20" ><img id="xiaotu18" src="<%=basePath%>images/ico06.gif" width="8" height="12" /></td>
				  <td width="91%">
					<a href="<%=basePath%>category/showCategoryforinsert" target="mainFrame" class="left-font03" onClick="tupian('18');">新增类别</a></td>
				</tr>
				<tr>
				  <td width="9%" height="20" ><img id="xiaotu19" src="<%=basePath%>images/ico06.gif" width="8" height="12" /></td>
				  <td width="91%">
						<a href="<%=basePath%>product/showProductByFlag" target="mainFrame" class="left-font03" onClick="tupian('19');">商品信息查询
							</a></td>
				</tr>
				<tr>
				  <td width="9%" height="20" ><img id="xiaotu24" src="<%=basePath%>images/ico06.gif" width="8" height="12" /></td>
				  <td width="91%">
						<a href="listxiaoxi.htm" target="mainFrame" class="left-font03" onClick="tupian('24');">消息信息列表
							</a></td>
				</tr>
      </table>
		<!--  商品管理结束    -->

			<!-- 订货管理开始 -->

        <TABLE width="100%" border="0" cellpadding="0" cellspacing="0" class="left-table03">
          <tr>
            <td height="29">
				<table width="85%" border="0" align="center" cellpadding="0" cellspacing="0">
					<tr>
						<td width="8%"><img name="img1" id="img1" src="<%=basePath%>images/ico04.gif" width="8" height="11" /></td>
						<td width="92%">
								<a href="javascript:" target="mainFrame" class="left-font03" onClick="list('1');" >订货管理</a></td>
					</tr>
				</table>
			</td>
          </tr>		  
        </TABLE>
		<table id="subtree1" style="DISPLAY: none" width="80%" border="0" align="center" cellpadding="0" 
				cellspacing="0" class="left-table02">
				<tr>
				  <td width="9%" height="20" ><img id="xiaotu1" src="<%=basePath%>images/ico06.gif" width="8" height="12" /></td>
				  <td width="91%"><a href="<%=basePath%>order/showOrderByFlagN" target="mainFrame" class="left-font03" onClick="tupian('1');">显示所有采购单</a></td>
				</tr>
				<tr>
				  <td width="9%" height="20" ><img id="xiaotu4" src="<%=basePath%>images/ico06.gif" width="8" height="12" /></td>
				  <td width="91%"><a href="<%=basePath%>dorders/showAllDordersByFlagN" target="mainFrame" class="left-font03" onClick="tupian('4');">显示所有未受理订单</a></td>
				</tr>
				<tr>
				  <td width="9%" height="20" ><img id="xiaotu2" src="<%=basePath%>images/ico06.gif" width="8" height="12" /></td>
				  <td width="91%"><a href="<%=basePath%>dorders/showAllDordersByFlagS" target="mainFrame" class="left-font03" onClick="tupian('2');">显示所有已受理订单</a></td>
				</tr>
				<%-- <tr>
				  <td width="9%" height="20" ><img id="xiaotu5" src="<%=basePath%>images/ico06.gif" width="8" height="12" /></td>
				  <td width="91%"><a href="listmokuai.htm" target="mainFrame" class="left-font03" onClick="tupian('5');">项目模块信息查看</a></td>
				</tr>
				<tr>
				  <td width="9%" height="20" ><img id="xiaotu3" src="<%=basePath%>images/ico06.gif" width="8" height="12" /></td>
				  <td width="91%"><a href="listgongneng.htm" target="mainFrame" class="left-font03" onClick="tupian('3');">项目功能信息查看</a></td>
				</tr>
				<tr>
				  <td width="9%" height="20" ><img id="xiaotu6" src="<%=basePath%>images/ico06.gif" width="8" height="12" /></td>
				  <td width="91%"><a href="listshangchuan.htm" target="mainFrame" class="left-font03" onClick="tupian('6');">项目上传信息查看</a></td>
				</tr>
				<tr>
				  <td width="9%" height="20" ><img id="xiaotu7" src="<%=basePath%>images/ico06.gif" width="8" height="12" /></td>
				  <td width="91%"><a href="listchengbenxinxi.htm" target="mainFrame" class="left-font03" onClick="tupian('7');">项目成本信息查看</a></td>
				</tr> --%>
      </table>
		<!--  项目系统结束    -->
</shiro:hasRole>

<shiro:hasRole name="D">
	  <!--  分销商订货管理开始    -->
	  <table width="100%" border="0" cellpadding="0" cellspacing="0" class="left-table03">
          <tr>
            <td height="29"><table width="85%" border="0" align="center" cellpadding="0" cellspacing="0">
                <tr>
                  <td width="8%" height="12"><img name="img2" id="img2" src="<%=basePath%>images/ico04.gif" width="8" height="11" /></td>
                  <td width="92%"><a href="javascript:" target="mainFrame" class="left-font03" onClick="list('2');" >分销商订货</a></td>
                </tr>
            </table></td>
          </tr>
      </table>
	  
	  <table id="subtree2" style="DISPLAY: none" width="80%" border="0" align="center" cellpadding="0" cellspacing="0" class="left-table02">
        <tr>
          <td width="9%" height="20" ><img id="xiaotu7" src="<%=basePath%>images/ico06.gif" width="8" height="12" /></td>
          <td width="91%"><a href="<%=basePath%>announcement/getAnnouncementByFlag" target="mainFrame" class="left-font03" onClick="tupian('7');">公告查询</a></td>
        </tr>
		<tr>
          <td width="9%" height="20" ><img id="xiaotu7" src="<%=basePath%>images/ico06.gif" width="8" height="12" /></td>
          <td width="91%"><a href="<%=basePath%>dorders/forinsertDorders" target="mainFrame" class="left-font03" onClick="tupian('7');">分销商订货</a></td>
        </tr>
        <tr>
          <td width="9%" height="20" ><img id="xiaotu7" src="<%=basePath%>images/ico06.gif" width="8" height="12" /></td>
          <td width="91%"><a href="<%=basePath%>distributor/showalldordersbydisid" target="mainFrame" class="left-font03" onClick="tupian('7');">分销商订单查询</a></td>
        </tr>
        <tr>
          <td width="9%" height="20" ><img id="xiaotu7" src="<%=basePath%>images/ico06.gif" width="8" height="12" /></td>
          <td width="91%"><a href="<%=basePath%>dorders/forinsertDorders" target="mainFrame" class="left-font03" onClick="tupian('7');">分销商对账单查询</a></td>
        </tr>     
      </table>

	  <!--  分销商订货管理结束    -->

</shiro:hasRole>
 <shiro:hasRole name="A">
	  <!--  财务管理系统开始    -->
	  <table width="100%" border="0" cellpadding="0" cellspacing="0" class="left-table03">
          <tr>
            <td height="29"><table width="85%" border="0" align="center" cellpadding="0" cellspacing="0">
                <tr>
                  <td width="8%" height="12"><img name="img3" id="img3" src="<%=basePath%>images/ico04.gif" width="8" height="11" /></td>
                  <td width="92%"><a href="javascript:" target="mainFrame" class="left-font03" onClick="list('3');" >财务管理</a></td>
                </tr>
            </table></td>
          </tr>
      </table>
	  
	  <table id="subtree3" style="DISPLAY: none" width="80%" border="0" align="center" cellpadding="0" cellspacing="0" class="left-table02">
        <tr>
          <td width="9%" height="20" ><img id="xiaotu8" src="<%=basePath%>images/ico06.gif" width="8" height="12" /></td>
          <td width="91%"><a href="<%=basePath%>dorders/showAllDordersByFlagC" target="mainFrame" class="left-font03" onClick="tupian('8');">显示发货单</a></td>
        </tr>
         <%-- <tr>
          <td width="9%" height="20" ><img id="xiaotu8" src="<%=basePath%>images/ico06.gif" width="8" height="12" /></td>
          <td width="91%"><a href="<%=basePath%>dorders/showAllDordersByFlagC" target="mainFrame" class="left-font03" onClick="tupian('8');">显示发货单</a></td>
        </tr> --%>
		<tr>
          <td width="9%" height="20" ><img id="xiaotu9" src="<%=basePath%>images/ico06.gif" width="8" height="12" /></td>
          <td width="91%"><a href="listzhiwu.htm" target="mainFrame" class="left-font03" onClick="tupian('9');">职务信息查看</a></td>
        </tr>
		<tr>
          <td width="9%" height="20" ><img id="xiaotu10" src="<%=basePath%>images/ico06.gif" width="8" height="12" /></td>
          <td width="91%"><a href="listMonthYuanGongGongZi.htm" target="mainFrame" class="left-font03" onClick="tupian('10');">员工工作情况查看</a></td>
        </tr>
      </table>
	
	  <!--  财务管理系统结束    -->

	   <!--  仓库系统开始    -->
	   <table width="100%" border="0" cellpadding="0" cellspacing="0" class="left-table03">
          <tr>
            <td height="29"><table width="85%" border="0" align="center" cellpadding="0" cellspacing="0">
                <tr>
                  <td width="8%" height="12"><img name="img4" id="img4" src="<%=basePath%>images/ico04.gif" width="8" height="11" /></td>
                  <td width="92%"><a href="javascript:" target="mainFrame" class="left-font03" onClick="list('4');" >仓库管理</a></td>
                </tr>
            </table></td>
          </tr>
      </table>
	  
	  <table id="subtree4" style="DISPLAY: none" width="80%" border="0" align="center" cellpadding="0" cellspacing="0" class="left-table02">
		<tr>
          <td width="9%" height="20" ><img id="xiaotu11" src="<%=basePath%>images/ico06.gif" width="8" height="12" /></td>
          <td width="91%"><a href="<%=basePath%>dorders/showAllDordersByFlagR" target="mainFrame" class="left-font03" onClick="tupian('11');">已扣款待发货订单</a></td>
        </tr>
	  	<tr>
          <td width="9%" height="20" ><img id="xiaotu12" src="<%=basePath%>images/ico06.gif" width="8" height="12" /></td>
          <td width="91%"><a href="listMonthYuanGongGongZi.htm" target="mainFrame" class="left-font03" onClick="tupian('12');">员工考勤信息查看</a></td>
        </tr>
      </table>

      <!--  仓库管理结束    -->

	  <!-- 订单管理开始 -->
      <table width="100%" border="0" cellpadding="0" cellspacing="0" class="left-table03">
          <tr>
            <td height="29"><table width="85%" border="0" align="center" cellpadding="0" cellspacing="0">
                <tr>
                  <td width="8%"><img name="img5" id="img5" src="<%=basePath%>images/ico04.gif" width="8" height="11" /></td>
                  <td width="92%"><a href="javascript:" target="mainFrame" class="left-font03" onClick="list('5');">订单管理</a></td>
                </tr>
            </table></td>
          </tr>
      </table>

	  <table id="subtree5" style="DISPLAY: none" width="80%" border="0" align="center" cellpadding="0" cellspacing="0" class="left-table02">
        <tr>
          <td width="9%" height="20"><img id="xiaotu13" src="<%=basePath%>images/ico06.gif" width="8" height="12" /></td>
          <td width="91%"><a href="<%=basePath%>dorders/showalldordersbydisid" target="mainFrame" class="left-font03" onClick="tupian('13');">查看分销商订单</a></td>
        </tr>
        <tr>
          <td height="20"><img id="xiaotu14" src="<%=basePath%>images/ico06.gif" width="8" height="12" /></td>
          <td><a href="addquanxian.html" target="mainFrame" class="left-font03" onClick="tupian('14');">查看供应商订单</a></td>
        </tr>
      </table>
	  <!-- 订单管理结束-->

		
     <!-- 系统管理开始 -->
      <table width="100%" border="0" cellpadding="0" cellspacing="0" class="left-table03">
        <tr>
          <td height="29"><table width="85%" border="0" align="center" cellpadding="0" cellspacing="0">
              <tr>
                <td width="8%"><img name="img6" id="img6" src="<%=basePath%>images/ico04.gif" width="8" height="11" /></td>
                <td width="92%"><a href="mode.html" target="mainFrame" class="left-font03" onClick="list('6');">系统管理</a></td>
              </tr>
          </table></td>
        </tr>
      </table>
	  <table id="subtree6" style="DISPLAY: none" width="80%" border="0" align="center" cellpadding="0" cellspacing="0" class="left-table02">
        <tr>
          <td width="9%" height="20"><img id="xiaotu15" src="<%=basePath%>images/ico06.gif" width="8" height="12" /></td>
          <td width="91%"><a href="<%=basePath%>announcement/getAnnouncementForInsert" target="mainFrame" class="left-font03" onClick="tupian('15');">添加公告</a></td>
        </tr>
        <tr>
          <td height="20"><img id="xiaotu16" src="<%=basePath%>images/ico06.gif" width="8" height="12" /></td>
          <td><a href="mode.html" target="mainFrame" class="left-font03" onClick="tupian('16');">规章制度</a></td>
        </tr>
      </table>
	 <!-- 系统帮助结束-->

	 <!--个人信息管理开始-->

		<TABLE width="100%" border="0" cellpadding="0" cellspacing="0" class="left-table03">
          <tr>
            <td height="29">
				<table width="85%" border="0" align="center" cellpadding="0" cellspacing="0">
					<tr>
						<td width="8%"><img name="img9" id="img9" src="<%=basePath%>images/ico04.gif" width="8" height="11" /></td>
						<td width="92%">
								<a href="javascript:" target="mainFrame" class="left-font03" onClick="list('9');" >个人管理</a></td>
					</tr>
				</table>
			</td>
          </tr>		  
        </TABLE>

		<table id="subtree9" style="DISPLAY: none" width="80%" border="0" align="center" cellpadding="0" 
				cellspacing="0" class="left-table02">
				<tr>
				  <td width="9%" height="22" ><img id="xiaotu22" src="<%=basePath%>images/ico06.gif" width="8" height="12" /></td>
				  <td width="91%"><a href="listgerenxinxi.htm" target="mainFrame" class="left-font03" 
						onClick="tupian('22');">个人信息查看</a></td>
				</tr>
				<tr>
				  <td width="9%" height="23" ><img id="xiaotu23" src="<%=basePath%>images/ico06.gif" width="8" height="12" /></td>
				  <td width="91%"><a href="listgerenrenwu.htm" target="mainFrame" class="left-font03" 
						onClick="tupian('23');">任务信息查看</a></td>
				</tr>
      </table>
		<!--  个人信息结束    -->

	  </TD>
  </tr>
 
</table>
</shiro:hasRole>
</body>
</html>

