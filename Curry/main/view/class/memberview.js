/*
* 班级成员模块
*/
define(['backbone',
	'model/class/membermodel',
	'text!tpl/class/membertpl.html',
	'global'], function(Backbone,MemberModel,tpl, global) {  

    var MemberView = Backbone.View.extend({
        el: '#container-fluid',
		classInfoTemplate: _.template(tpl),
		
		setData: function(data){
			this.data = data;
		},
		render: function() {
			var container = $('<div class="category fn-clear"></div><div class="categoryShow"></div>');
			this.$el.html(container);
			this.$el.find(".category").html(this.classInfoTemplate(this.data));	
        }

     });
     
     return MemberView;
 });