/*
* 小喇叭公告弹层模块
*/
define(['backbone',
	'model/class/categorymodel',
	'text!tpl/class/releasenoticetpl.html',
	'global',], 
	function(Backbone ,CategoryModel, tpl, global) {   
    // 访问元素视图
	var ReleaseNoticeView  = Backbone.View.extend({
		tagName: 'div',
		className: 'fn-clear',
		releasenoticeTemplate: _.template(tpl),
		initialize: function(){
			self =this;
		},
		setCollection: function(data){
			this.collection = new CategoryModel(data);
		},
		
		render: function(){
			this.$el.html(this.releasenoticeTemplate(tpl));
			var d = dialog({
				id: "releasenotice",
			    title: '发布群公告',
			    content: this.el.innerHTML,
			    okValue: '确定',
			    ok: '确定',
			    cancelValue: '取消',
			    cancel: function () {
			    	this.remove();
			    },
			    width: 600
			});
			d.showModal();
			return this;
		},
		
	});
     
     return ReleaseNoticeView;
 });