<%@ page language="java" pageEncoding="UTF-8"%>  
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<html>  
    <head>  
    <base href="<%=basePath%>">
        <title>chat</title>  
        <meta http-equiv="pragma" content="no-cache">  
        <meta http-equiv="cache-control" content="no-cache">  
        <meta http-equiv="expires" content="0">  
        <script type="text/javascript" src="js/jquery.js"></script>
        <script type='text/javascript' src='dwr/engine.js'></script>  
        <script type='text/javascript' src='dwr/util.js'></script>
        <script type='text/javascript' src='dwr/interface/DWRScriptMethod.js'></script> 
        <script type="text/javascript" src="js/dwrInit.js"></script>  
    </head>  
    <body>  
   
       
        我要对   
        <input type="text"  name="receiver" id="receiver"  > 
        说:   
        <input type="text" name="message" id="message" />  
        <input type="button" value="发送" id="send" name="send" 
            onclick="send();" />  
        <br />  
        <input type="text" id="msg" width="300" height="50"/>
        <br /> 
    </body>  
</html> 
