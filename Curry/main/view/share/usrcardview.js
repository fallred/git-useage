define(['backbone'], function(Backbone) {   
    // 访问元素视图
    
	var UserCardView  = Backbone.View.extend({
		hander:null,
		el: $(".usrcard"),
		usrcardTemplate: _.template($("#usrcardTemplate").html()),
		render: function() {
			this.$el.html(this.usrcardTemplate(this.model.toJSON()));
			return this;
		},
		events: {
			"mouseenter .usercardContainer": "showUsrcard",
			"mouseleave .usercardContainer": "hideUsrcard",
		},
		showUsrcard: function() {

			clearTimeout(handler);
			
		},
		hideUsrcard: function() {
			clearTimeout(handler);
			handler = setTimeout(function() {
				$(".usrcard").stop().fadeOut(200).empty();
			}, 500);
		},
	});
     
     return UserCardView;
 });