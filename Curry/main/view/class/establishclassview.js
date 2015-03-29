/*
* 老师角色
*/
define(['backbone',
	'model/class/categorymodel',
	'view/class/establishclasslayerview',
	'view/class/addclasslayerview',
	'text!tpl/class/establishclasstpl.html',
	'global'], function(Backbone,CategoryModel, EstablishClassLayerView , AddClassLayerView, tpl, global) {  

    var EstablishClassView = Backbone.View.extend({
        el: '#container-fluid',
		//classInfoTemplate: _.template(tpl),
		
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
			"click .add-class": "addClass",
			"click .establish-class": "establishClass"
		},
		addClass: function(){			
			var addClassLayerView = new AddClassLayerView({
				model: this.model
			});
			addClassLayerView.render();
			
		},
		establishClass: function(){			
			var establishClassLayerView = new EstablishClassLayerView({
				model: this.model
			});
			establishClassLayerView.render();
			
		},
  
     });

     return EstablishClassView;
 });