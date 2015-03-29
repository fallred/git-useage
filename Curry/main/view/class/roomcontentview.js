/*
* 云课堂模块
*/
define(['backbone','model/class/noticemodel','text!tpl/class/roomcontenttpl.html'], function(Backbone,NoticeCollection, tpl) {   
    // 访问元素视图
	var RoomItemview = Backbone.View.extend({
		tagName: 'div',
		className: 'container-box blog-listitem',
		noticeTemplate: _.template(tpl),
		initialize: function() {

        },
		render: function() {
			this.$el.html(this.noticeTemplate(this.model.toJSON()));
			return this;
		},
		
	});
	
    
    var RoomContentView = Backbone.View.extend({
        el: '.categoryShow',
		setCollection: function(data){
			this.collection = new NoticeCollection(data);
		},
		render: function() {
			this.$el.html("");
			_.each(this.collection.models, function(item) {
				this.renderTnbox(item);
			}, this);
		},
		renderTnbox: function(item) {
			var roomView = new RoomItemview({
				model: item
			});
			this.$el.append(roomView.render().$el);
		},

     });
     
     return RoomContentView;
 });