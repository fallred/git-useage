define(['backbone','model/street/hotstreetmodel','text!tpl/street/diahotcontpl.html'], function(Backbone,HotCollection,tpl) {   
    // 访问元素视图
	var AddHotItemview = Backbone.View.extend({
		tagName: 'li',
		className: 'lovestreetitem addItem',
		bgColor: null,
		AddHotTemplate: _.template(tpl),
		initialize: function() {
		},
		events: {
			    "click .addItem  .add-btn":"clickbtnAdd",
		},
		addFocus: function(){
			removedModel = this.model;
			data.push({
				groupname:"",
				value: this.model.get("id")
			});
		},
		render: function() {
			this.$el.html(this.AddHotTemplate(this.model.toJSON()));
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
            this.bgColor = 'lovestreetitem' + b;
            this.$el.addClass(''+ this.bgColor + '')   
        },
	});
    var self,page;
    var DiaHotConView = Backbone.View.extend({
    	parentContainer: null,
     	tagName: 'ul',
		className: 'dynamiclovestreet',
		initialize: function() {
			self = this;
		},
		setParent:function(parent){
          this.parent=parent;
		},
		setCollection: function(data){
			this.collection = new HotCollection(data);
		},
		insertCollection: function(data,index){
			this.collection.add(data, {at: index});
		},
		render: function() {
			_.each(this.collection.models, function(item,index) {
				this.renderHotItem(item);
			}, this);
		    // $(".dynamiclovestreet .btn-r-r-md").last().addClass("addlovestreet");
		},
		renderHotItem: function(item) {
			var addHotItemview = new AddHotItemview({
				model: item
			});
			this.$el.append(addHotItemview.render().el);
		},
     });
     return DiaHotConView;
 });