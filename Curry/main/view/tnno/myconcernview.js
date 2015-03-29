define(['backbone','model/tnno/myconcernmodel','text!tpl/tnno/myconcerntpl.html'], function(Backbone,MyconcernCollection,tpl) {   
    // 访问元素视图
	var MyconcernItemview = Backbone.View.extend({
		tagName: 'div',
		className: 'row',
		myconcernTemplate: _.template(tpl),
		render: function() {
			this.$el.html(this.myconcernTemplate(this.model.toJSON()));
			return this;
		},
		
	});
	
    var temp;
    var MyconcernView = Backbone.View.extend({
    	className: 'box-content-fluid',
		setCollection: function(data){
			this.collection = new MyconcernCollection(data);
		},
		render: function() {
			this.$el.html("");
			_.each(this.collection.models, function(item,index) {
				this.renderMyconcern(item);
				if (index%2 == 0) {
					// alert(index);
				  	this.$el.find(".row > div").eq(index).addClass("tip-left");
				}else{
					// alert(index)
					this.$el.find(".row > div").eq(index).addClass("tip-right");
					this.$el.find(".row > div").eq(index).find(".recent-tip").appendTo(this.$el.find(".row > div").eq(index));
					this.$el.find(".row > div").eq(index).find(".recent-time").prependTo(this.$el.find(".row > div").eq(index));
				}
			}, this);
		},
		renderMyconcern: function(item) {
			var myconcernView = new MyconcernItemview({
				model: item
			});
			this.$el.append(myconcernView.render().el);
			// temp = myconcernView.render().el;
		},

     });
     
     return MyconcernView;
 });