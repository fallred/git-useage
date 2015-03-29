define(['backbone','model/share/usermodel','text!tpl/tnno/tnstartpl.html'], function(Backbone,UserCollection,tpl) {   
    // 访问元素视图
	var TnstarItemview = Backbone.View.extend({
		tagName: 'div',
		className: 'col-xs-2',
		tnstarTemplate: _.template(tpl),
		render: function() {
			this.$el.html(this.tnstarTemplate(this.model.toJSON()));
			return this;
		},
		
	});
	
    
    var TnstarView = Backbone.View.extend({
		className: 'row tnstar',
		setCollection: function(data){
			this.collection = new UserCollection(data);
		},
		render: function() {
			this.$el.html("");
			_.each(this.collection.models, function(item) {
				this.renderTnbox(item);
			}, this);
		},
		renderTnbox: function(item) {
			var tnstarView = new TnstarItemview({
				model: item
			});
			this.$el.append(tnstarView.render().el);
		},

     });
     
     return TnstarView;
 });