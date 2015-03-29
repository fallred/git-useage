/**  
 * 页面初始化  
 */ 
function init() { 
    dwr.engine.setActiveReverseAjax(true); // 激活反转 重要
    dwr.engine.setNotifyServerOnPageUnload(true);
    DWRScriptMethod.onPageLoad();
}   
window.onload = init;//页面加载完毕后执行初始化方法init

function send() {
  /*  var receiver = dwr.util.getValue('receiver'); // 获得接受者id   
    var msg = dwr.util.getValue('message'); // 获得消息内容
*/    /*var sender = dwr.util.getValue('sender');*/
    DWRScriptMethod.sendMessage(receiver,msg,sender,type);
//    alert("消息发送成功！"); 
}   

function receiveMsg(type,message,date,senderid,receiverid,sendernickname,senderphoto){
	console.log(type);
	if(type == "msg_talk" && senderid == global.currentChat){
		// 单人会话推送
		callbackfun(type,message,date,senderid,receiverid,sendernickname,senderphoto);
	} else if(type == "msg_group_talk" && receiverid == global.currentChat && senderid != global.usrinfo.id){
		// 群会话
		callbackfun(type,message,date,senderid,receiverid,sendernickname,senderphoto);
	} else if(type == "msg_verify" || type == "msg_talk" || type == "msg_group_talk"){
		//验证消息推送
		latestCallBackfun(type,message,date,senderid,receiverid,sendernickname,senderphoto);
	}
	
	return;
  }

var callbackfun, latestCallBackfun;
function callBack(fun)
{
	callbackfun=fun;
};
function latestCallBack(fun)
{
	latestCallBackfun=fun;
}