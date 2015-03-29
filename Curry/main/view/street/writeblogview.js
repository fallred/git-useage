/*
* 写博客
*/
define(['backbone',
	'text!tpl/street/streeteditortpl.html',
	'global'], function(Backbone,tpl,global) {  
    var WriteBlogView = Backbone.View.extend({
        el: '.categoryShow',
		parent: null,
		initialize: function() {
			$(this.el).off();
        },
		render: function(){
			//this.$el.find(".category").html(tpl);
			this.$el.html(tpl);
			CKEDITOR.replace('editor1', {
		        uiColor : '#FFFFFF',
		         toolbar :
		             [
		                //加粗     斜体，     下划线      穿过线      下标字        上标字
		                ['Bold','Italic','Underline','Strike','Subscript','Superscript'],
		                // 数字列表          实体列表            减小缩进    增大缩进
		                ['NumberedList','BulletedList','-','Outdent','Indent'],
		                //左对 齐             居中对齐          右对齐          两端对齐
		                ['JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock'],
		                //超链接  取消超链接 锚点
		                ['Link','Unlink','Anchor'],
		                //图片    flash    表格       水平线            表情       特殊字符        分页符
		                ['Image','Flash','Table','HorizontalRule','Smiley','SpecialChar','PageBreak'],
		                '/',
		                // 样式       格式      字体    字体大小
		                ['Styles','Format','Font','FontSize'],
		                //文本颜色     背景颜色
		                ['TextColor','BGColor'],
		                //全屏           显示区块
		                ['Maximize', 'ShowBlocks','-']
		             ]
			});
        },
        // 发布关闭
        events: {
			"click .blog-close1": "returnBlog",
			"click .btn-release1": "releaseBlog"
		},
		setParent : function(parent){
			this.parent = parent;
		},
		//关闭按钮
		returnBlog: function(e) {
			//this.parent.render();
			var self = this;
			var editor = CKEDITOR.instances.editor1;
			var blogtitle = $.trim($("#blog-title").val());
			var textedit = editor.getData();
			var blogtitle = $.trim($("#blog-title").val());
			//var textedit = $.trim($("#editor1").val());
			var type  = this.$el.find('.quntype .nowradio[checked=checked]').val();
			var classify = this.$el.find('.selecter-classify input').attr('data-id');
			var power = this.$el.find('.selecter-power input').attr('data-id');
			if(blogtitle=="" && textedit == "" && type == "" && classify == "" && power == "") {
				self.parent.render();
				//self.parent.parent.getBlog(blogtitle,textedit);
			} else {
				var d = dialog({
					id: "returnblog",
				    title: '取消发布',
				    content: '是否退出写博客',
				    okValue: '确定',
				    
				    cancelValue: '取消',
				    cancel: function () {
				    	this.remove();
				    },
				    ok: function(){
				    	self.parent.render();
				    },
				    width: 400
				});
				d.showModal();
				
				//return this;
			}
		},
		releaseBlog : function(e) {
			var self = this;
			var editor = CKEDITOR.instances.editor1;
			var blogtitle = $.trim($("#blog-title").val());
			var textedit = editor.getData();
			var type  = this.$el.find('.quntype .nowradio[checked=checked]').val();
			var classify = this.$el.find('.selecter-classify input').attr('data-id');
			var power = this.$el.find('.selecter-power input').attr('data-id');
			// remove !
			/*if(blogtitle == "" || textedit == "" || type == "" ||  classify == "" ||  power == "") {
				var d = dialog({
					id: "releaseblog1",
				    title: '发布',
				    content: '请完善信息',
				    okValue: '确定',
				    // ok: function() {
				    // 	this.remove();
				    // },
				    cancelValue: '取消',
				    cancel: function () {
				    	this.remove();
				    },
				    width: 400
				});
				d.showModal();
			} else {*/
				//console.log("success");
				var blogdata1 = {
					"blogtitle": blogtitle,
					"blogcontent": textedit,
					"blogfcategory": type,
					"blogscategory": classify,
					"userId": global.usrinfo.id,
					"blogauthority": power
				};
				$.ajax({
		            type: "post",
		            //url:"login.html",
		            url: global.url + "/Curry/blog/createBlog",
		            dataType:"json",
		            data: {newBlog: JSON.stringify(blogdata1)},
		            success: function(data) {
		            	console.log(data)
				    },    
				    error: function (XMLHttpRequest, textStatus, errorThrown) {
					}	
		        });
			/*}*/
		}
     });
  
     return WriteBlogView;
 });

   