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
    }
});
// 复选框
$(document).on("click",".nowcheck", function(e){
    if($(e.target)[0].checked){
        $(e.target).attr("checked","checked").siblings(".checkBox").addClass("checkedBox");
    }
    else{
        $(e.target).removeAttr("checked").siblings(".checkBox").removeClass("checkedBox");
    }
});
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

//定位光标，插入内容，光标移动到最后
function insertHtmlAtCaret(html,type) {
	var sel,
	    range;
	//清空输入框内容
	if (type == 'comment'){
		document.activeElement.innerHTML = "";
	} 
	if (window.getSelection) {
		// IE9 and non-IE
		sel = window.getSelection();
		
		if (sel.getRangeAt && sel.rangeCount) {
			range = sel.getRangeAt(0);
			range.deleteContents();
			// Range.createContextualFragment() would be useful here but is
			// non-standard and not supported in all browsers (IE9, for one)
			var el = document.createElement("div");
			el.innerHTML = html;
			var frag = document.createDocumentFragment(),
			    node,
			    lastNode;
			while (( node = el.firstChild)) {
				lastNode = frag.appendChild(node);
				
			}
			range.insertNode(frag);
			// Preserve the selection
			if (lastNode) {
				range = range.cloneRange();
				range.setStartAfter(lastNode);
				range.collapse(true);
				sel.removeAllRanges();
				sel.addRange(range);
			}
		}
	} else if (document.selection && document.selection.type != "Control") {
		// IE < 9
		document.selection.createRange().pasteHTML(html);
	}
}
