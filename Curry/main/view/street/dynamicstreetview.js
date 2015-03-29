define(['backbone','model/street/lovestreetmodel','view/street/addlovestreetview','text!tpl/street/lovestreettpl.html'], function(Backbone,LoveStreetCollection,AddLoveStreetView,tpl) {   
    // 访问元素视图
	var LoveStreetItemview = Backbone.View.extend({
		tagName: 'li',
		className: 'lovestreetitem',
		bgColor: null,
		LoveStreetTemplate: _.template(tpl),
		initialize: function() {
			// this.$el.off();
				this.listenTo(this.model,"change",this.render);
		},
		render: function() {
			this.$el.html(this.LoveStreetTemplate(this.model.toJSON()));
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
    var DynamicLoveStreetView = Backbone.View.extend({
    	parentContainer: null,
        el:".categoryShow",
		initialize: function() {
			self = this;
			this.$el.off();
		},
		events:{
		   "click .dynamiclovestreet .addlovestreet":"addLoveStreet",
		},
		setCollection: function(data){
			this.collection = new LoveStreetCollection(data);
			this.listenTo(this.collection,"add",this.render);
			this.listenTo(this.collection,"remove",this.render);
		},
		insertCollection: function(data,index){
			this.collection.add(data, {at: index});
		},
		render: function() {
			_.each(this.collection.models, function(item,index) {
				this.renderLoveItem(item);
			}, this);
		    this.$el.find(".dynamiclovestreet .btn-r-r-md").last().addClass("addlovestreet");
		},
		renderLoveItem: function(item) {
			var loveStreetItemview = new LoveStreetItemview({
				model: item
			});
			this.$el.find(".dynamiclovestreet").append(loveStreetItemview.render().el);
		},
		//添加爱逛的街区事件
		addLoveStreet:function(){
		    // alert("添加爱逛的街区");
		    var addLoveStreetView = new AddLoveStreetView();
		    addLoveStreetView.setParent(this);
		    addLoveStreetView.render();
		},
     });
     return DynamicLoveStreetView;
 });