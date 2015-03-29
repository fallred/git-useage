define([
	'backbone',
	'model/share/usermodel',
	'text!tpl/contact/qundragedfriendtpl.html',
	], function(Backbone,UserCollection,contftpl) {
	
	
	
	// 联系列表视图
		var QunDragedFriendItemView = Backbone.View.extend({
		tagName: 'div',
		className:'dragedfriend-container',
		contactitemTemplate: _.template(contftpl),
		render: function() {
			this.$el.html(this.contactitemTemplate(this.model.toJSON()));
			return this;
		},
		events: {
			"click .list-item .iconfont": "deleted",
		},

		deleted: function(){
			this.model.set({
				draged: false
			});
			this.remove();
			var _exist=$.inArray(this.model,global.qundrag);
			global.qundrag.splice(_exist,1);
			this.render();
			$('.count span').html(global.qundrag.length);
		},
	});
	//联系人视图
    var QunDragedFriendView = Backbone.View.extend({
    	el: '.qunselected',
		setCollection: function(data){
			//this.collection.reset();
			this.collection = new UserCollection(data);
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
			this.$el.find('.selectedlist').empty();
			_.each(this.collection.models, function(item) {
				this.renderContact(item);
			}, this);
		},
		renderContact: function(item) {
			var qunDragedFriendItemView = new QunDragedFriendItemView({
				model:item
			});
			qunDragedFriendItemView.render();
			this.$el.find('.selectedlist').append(qunDragedFriendItemView.$el);
			this.$el.find('.count span').html(global.qundrag.length);
		},
     });
     
     return QunDragedFriendView;
 });