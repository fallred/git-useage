define(['backbone','model/street/lovestreetmodel','text!tpl/street/dialovecontpl.html'], function(Backbone,AddFocusCollection,tpl) {   
    // 访问元素视图
	var AddFocusItemview = Backbone.View.extend({
		tagName: 'li',
		className: 'lovestreetitem deleteItem',
		bgColor: null,
		AddFocusTemplate: _.template(tpl),
		initialize: function() {
			this.listenTo(this.model,"change",this.render);
		},
		events: {
			// "click .delete": "deleteGroup",
		},
		deleteGroup: function(){
			removedModel = this.model;
			data.push({
				groupname:"",
				value: this.model.get("id")
			});
		},
		render: function() {
			this.$el.html(this.AddFocusTemplate(this.model.toJSON()));
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
    var DiaLoveConView = Backbone.View.extend({
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
			this.collection = new AddFocusCollection(data);
			this.listenTo(this.collection,"add",this.render);
			this.listenTo(this.collection,"remove",this.render);
		},
		insertCollection: function(data,index){
			this.collection.add(data, {at: index});
		},
		render: function() {
			_.each(this.collection.models, function(item,index) {
				this.renderFocusItem(item);
			}, this);
		    // $(".dynamiclovestreet .btn-r-r-md").last().addClass("addlovestreet");
		},
		renderFocusItem: function(item) {
			var addFocusItemview = new AddFocusItemview({
				model: item
			});
			this.$el.append(addFocusItemview.render().el);
		},
		removeModel: function(){
			this.collection.remove(removedModel);
		},
		addNewGroup: function(){
			//新建分组默认value为-1
			this.insertCollection({
				groupname: '未命名',
				value: -1
			});
		},
     });
     return DiaLoveConView;
 });