/*
* 我爱我班发布模块
*/
define(['backbone',
	'model/class/categorymodel',
	'text!tpl/class/postphototpl.html',
	'global'], 
	function(Backbone ,CategoryModel, tpl, global) {   
    // 访问元素视图
	var PostPhotoView  = Backbone.View.extend({
		tagName: 'div',
		className: 'fn-clear',
		releasenoticeTemplate: _.template(tpl),
		initialize: function(){
			self =this;
		},
		setCollection: function(data){
			this.collection = new CategoryModel(data);
		},
		setParent : function(parent){
			this.parent = parent;
		},
		render: function(){
			this.$el.html(this.releasenoticeTemplate(tpl));
			var d = dialog({
				id: "releasephoto",
			    title: '发布照片',
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
     
     return PostPhotoView;
 });