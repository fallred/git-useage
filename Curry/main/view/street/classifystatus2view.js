define(['backbone','model/street/classifystreetmodel','text!tpl/street/classifystreettpl.html'], function(Backbone,classifyStreetCollection,tpl) {   
    // 访问元素视图
	var ClassifyStreetItemview = Backbone.View.extend({
		tagName: 'li',
		className: 'classifyitem addItem',
		bgColor: null,
		Classify2ItemTemplate: _.template(tpl),
		initialize: function() {
			//this.$el.off();
		},
		render: function() {
			this.$el.html(this.Classify2ItemTemplate(this.model.toJSON()));
			this.randomClass();
			return this;
		},
       	randomClass: function(){
			var a,b;
			b=parseInt(Math.random()*5);
            if(b!==a){
                a=b;
            }else{
                arguments.callee();
            }
            this.bgColor = 'classifyitem' + b;
            this.$el.addClass(''+ this.bgColor + '')   
        },
	});
    var self,page;
    var ClassifyStatus2View = Backbone.View.extend({
        // tagName:"ul",
        // className:"classify2ul",
       
		initialize: function() {
			self = this;
		},
		setCollection: function(data){
			this.collection = new classifyStreetCollection(data);
		},
		render: function() {
			_.each(this.collection.models, function(item,index) {
				this.renderClassifyItem(item);
			}, this);
		},
		renderClassifyItem: function(item) {
			var classifyStreetItemview = new ClassifyStreetItemview({
				model: item
			});
			this.$el.append(classifyStreetItemview.render().el);
		}
     });
     return ClassifyStatus2View;
 });