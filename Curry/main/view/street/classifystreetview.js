define(['backbone','view/street/classifystatus2view','model/share/selectormodel'], function(Backbone,ClassifyStatus2View,SelectorCollection) {   
    var self,data;
    var ClassifyStreetView = Backbone.View.extend({
    	el:".classifystreet",
		initialize: function() {
			self = this;
			// this.$el.off();
		},
		setParent:function(data){
           this.parent=data;
		},
		setCollection: function(data){
			this.collection = new SelectorCollection(data);
		},
		render: function() {
			_.each(this.collection.models, function(item,index) {
				this.renderClassify1(item.get("streettype1"),item.get("streettype2"));
			}, this);
		},
		renderClassify1:function(streettype1,streettype2){
			self=this;
           var str='<div class="row classify1"><h2 class="classify1title">'+streettype1+'</h2><ul class="row classify2"></ul></div>';
           var container=$(str);
           this.$el.find('.box-content-fluid').append(container);  
           this.$el.find('.classify2').last().append(this.renderClassify2(streettype2))
		},
		renderClassify2: function(streettype2) {
			var classifyStatus2View = new ClassifyStatus2View();
			classifyStatus2View.setCollection(streettype2);
			// self.$el.append(classifyStatus2View.render().el);
			// self.$el.find(".classify2").append(123);
			classifyStatus2View.render();
			return classifyStatus2View.el;
		}
     });
     return ClassifyStreetView;
 });