/*
* 创建班级详情弹层模块
*/
define(['backbone',
	'model/class/categorymodel',
	'text!tpl/class/establishdetailtpl.html',
	'global',], 
	function(Backbone ,CategoryModel, tpl, global) {   
    // 访问元素视图
	var EstablishDetailview  = Backbone.View.extend({
		tagName: 'div',
		className: 'fn-clear',
		//releasenoticeTemplate: _.template(tpl),
		initialize: function(){
			self =this;
		},
		setCollection: function(data){
			this.collection = new CategoryModel(data);
		},
		
		render: function(){
			this.$el.html(tpl);
			var d = dialog({
				id: "establishdetail",
			    title: '创建班级',
			    content: this.el.innerHTML,
			    okValue: '确定创建',
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
     
     return EstablishDetailview;
 });