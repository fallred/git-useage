
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
//表单验证


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

//复选框
$(document).on("click",".nowcheck", function(){
        if($(this)[0].checked){
            $(this).attr("checked","checked").siblings(".checkBox").addClass("checkedBox");
            $(".colsMain").show();
        }
        else{
            $(this).removeAttr("checked").siblings(".checkBox").removeClass("checkedBox");
            $(".colsMain").hide();
        }
    }
);

$(function() {
//登录
$(".login-btn").click(function(){
	poptip();
});
	
$(".input input").on("propertychange input",function(e){
	showtextclear(e)
}) ;
$(".input span.text-clear").click(function(){
	$(this).prev("input").val("");
	$(this).hide();
});

//角色选择
	 $(".role").hover(function() {
	 	$(this).css("background","#57a9d1");
	 	$(this).find(".role1").css("border","2px dashed #fff");
	 	$(this).find(".role1 a").css("color","#fff");
	 },function(){
	 	$(this).css("background","#fff");
	 	$(this).find(".role1").css("border","2px dashed #57a9d1");
	 	$(this).find(".role1 a").css("color","#0e5068");
	 });
});
function poptip(){
	var inputVal = $(".input input");
	var totalVal = inputVal.eq(0).val() + inputVal.eq(1).val()
	var tip;
	if (totalVal.length == 0) {
		tip = "要填写用户名和密码哦！";
		$(".poptip").css("display","table").addClass("scale").find("span").text(tip);
		return false;
	} else if (inputVal.eq(0).val().length == 0) {
		tip = "要填写用户名哦！";
		$(".poptip").css("display","table").addClass("scale").find("span").text(tip);
		return false;
	} else if (inputVal.eq(1).val().length == 0) {
		tip = "要填写密码哦！";
		$(".poptip").css("display","table").addClass("scale").find("span").text(tip);
		return false;
	} else{
		$(".poptip").hide();
	};
}
function showtextclear(e){
	var showBtn = $(e.target).next(".text-clear");
	if ($(e.target).val().length != 0) {
		showBtn.css("display","block")
	}else{
		showBtn.css("display","none")
	};	
}
//审核结构接受手机/邮箱
function choice() {
	var radioval= $(".nowradio[checked]").val();
	if(radioval == "1"){
		$(".choice-phone").find("label").text("接受结果的手机号码");
	} else if(radioval == "2") {
		$(".choice-phone").find("label").text("接受结果的邮箱");
	};
};
// function choice() {
// 	var radioval= $(".nowradio[checked]").val();
// 	if(radioval == "1"){
// 		$(".choice-phone").show();
// 		$(".choice-email").hide();
// 	} else if(radioval == "2") {
// 		$(".choice-phone").hide();
// 		$(".choice-email").show();
// 	};
// };
//验证方式
function verify() {
	var selected = $(".selecter-trigger input").attr("data-id");
	if(selected == "1") {
		$(".choice-phone1").show();
		$(".choice-email1").hide();
	} else if(selected == "2") {
		$(".choice-phone1").hide();
		$(".choice-email1").show();
	}
};

//添加兴趣
