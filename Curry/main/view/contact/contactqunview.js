define([
	'backbone',
	'model/share/qunmodel',
	'view/share/qunchatview',
	'text!tpl/contact/contactquntpl.html',
	], function(Backbone,QunCollection,QunChatView,tpl) {
	
	
	
	// 联系列表视图
		var ContactQunItemView = Backbone.View.extend({
		tagName: 'div',
		className: 'qunitemlist',
		contactitemTemplate: _.template(tpl),
		render: function() {
			this.$el.html(this.contactitemTemplate(this.model.toJSON()));
			return this;
		},
		events: {
			"click .list-item": "chatWindow",
		},

		chatWindow: function(){
			var qunchatView = new QunChatView({
				model:this.model
			});
			qunchatView.render();
			qunchatView.setParent(global.homepage);
		},
	});
	//联系人视图
    var ContactQunView = Backbone.View.extend({
    	el: "#btn-groups .list-container",
		setCollection: function(data){
			//this.collection.reset();
			this.collection = new QunCollection(data);
		},
		insertCollection: function(data,index)
		{
			this.collection.add(data, {at: index});
			var col = new UserCollection(data);
			
			_.each(col.models, function(item) {
				this.renderContact(item);
			}, this);
		},
		render: function() {
			this.$el.html("");
			_.each(this.collection.models, function(item) {
				this.renderContact(item);
			}, this);
		},
		renderContact: function(item) {
			var contactQunItemView = new ContactQunItemView({
				model:item
			});
			contactQunItemView.render();
			this.$el.append(contactQunItemView.$el);
		},
     });
     
     return ContactQunView;
 });