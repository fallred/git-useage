/*
* 学生/家长角色
*/
define(['backbone',
	'model/class/categorymodel',
	// 'view/class/noticeview',
	'view/class/addclasslayerview',
	'text!tpl/class/addclasstpl.html',
	'global'], function(Backbone,CategoryModel, AddClassLayerView, tpl, global) {  

    var AddClassView = Backbone.View.extend({
        el: '#container-fluid',
		classInfoTemplate: _.template(tpl),
		
		setModel:function(){
			this.model = new CategoryModel();
		},
		initialize: function() {

        },

		render: function() {
			var container = $('<div class="container-box full-screen fn-clear"></div>');
			this.$el.html(container);
			this.$el.find(".full-screen").html(tpl);
			
        },
        events: {
			"click .add-class": "addClass"
		},
		addClass: function(){	
         	var addClassLayerView = new AddClassLayerView({
				model: this.model
			});
			addClassLayerView.render();
	     },

  
     });
     
     return AddClassView;
 });