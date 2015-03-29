define([
	'backbone',
	'model/share/pagectlmodel',
	'text!tpl/share/pagectltpl.html',
	'global'
	], function(Backbone,PageCtlModel,tpl,global) {
	
	var self;
	var PageCtlView = Backbone.View.extend({
		el: ".pagectl",
		template: _.template(tpl),
		initialize: function(){
			//初始化解绑事件
			this.$el.off();
			self = this;
			this.model = new PageCtlModel();
			//this.listenTo(this.model, "change", this.render);
		},
		setModel:function(data,opt){
			this.model.set(data,{silent:opt});
		},
		events: {
			"click .btn-page": "pageshift"
			
		},
		render: function() {
			this.$el.empty();
			this.$el.html(this.template(this.model.toJSON()));
		},
		pageshift: function(e){
			if ($(e.target).is(".selected") || $(e.target).is(".disabled") ){
				return;
			} else if ($(e.target).is(".pagepre") && $(e.target).not(".disabled")) {
				var currentPage = this.model.get("currentPage") -1;
				this.model.set({currentPage:currentPage});
			} else if ($(e.target).is(".pagenext") && $(e.target).not(".disabled")) {
				var currentPage = this.model.get("currentPage") +1;
				this.model.set({currentPage:currentPage});
			} else {
				var currentPage = $(e.target).attr("data-page");
				this.model.set({currentPage:currentPage});
			}
			
		}
     });
     
     
     return PageCtlView;
 });