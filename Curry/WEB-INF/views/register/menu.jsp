<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Insert title here</title>
<script type='text/javascript' src='<c:url value="/dwr/engine.js"/>'></script>
<script type='text/javascript' src='<c:url value="/dwr/util.js" />'></script>
<script type='text/javascript'
	src='<c:url value="/dwr/interface/DirectController.js" />'></script>
<script type="text/javascript">
	function view(obj) {
		var id = obj.value;
		DirectController.showMenu(id, function(data) {
			document.getElementById('view').innerHTML = data;
		});
	}
</script>
</head>
<body>
	<select onchange="javascript:view(this);">
		<c:forEach items="${list_u}" var="item">
			<option value="${item.id }">${item.name}</option>
		</c:forEach>
	</select>
	<div id="view"></div>
</body>
</html> 