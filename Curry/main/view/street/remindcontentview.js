/*
* 提醒内容模块
*/
define(['backbone','model/street/remindinvitationmodel','text!tpl/street/remindcontenttpl.html'], function(Backbone,RemindInvitationCollection,tpl) {   
    // 访问元素视图
	var RemindItemview = Backbone.View.extend({
		tagName: 'div',
		className: 'blog-listitem',
		remindinvitationTemplate: _.template(tpl),
	    initialize: function() {

        },	
		render: function() {
			this.$el.append(this.remindinvitationTemplate(this.model.toJSON()));
			return this;
		},
		events: {
			
		},
	});
    var RemindContentView = Backbone.View.extend({
        // el: $('.categoryShow'),
		setCollection: function(data){
			this.collection = new RemindInvitationCollection(data);
		},
		buildContainbox:function(){
           var container="<div class='container-box'><div class='box-title-b fn-clear'>全部提醒</div></div>";
           this.$el.html(container);
		},
		render: function() {
			this.$el.html("");
			this.buildContainbox();
			_.each(this.collection.models, function(item) { 
				this.renderTnbox(item);
			}, this);
		},
		renderTnbox: function(item) {
			var remindItemView = new RemindItemview({
				model: item
			});
			this.$el.find(".container-box").append(remindItemView.render().$el);
		},
     });
     return RemindContentView;
 });