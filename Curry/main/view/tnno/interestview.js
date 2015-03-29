define([
	'backbone',
	'model/share/usermodel',
	'view/share/addfriendview',
	'text!tpl/tnno/interesttpl.html',
	'text!tpl/share/usrcardtpl.html'], 
	function(
		Backbone,
		UserCollection,
		AddFriendView,
		inttpl,
		cardtpl) {   
	var handler;
	var UserCardView  = Backbone.View.extend({
		hander:null,
		el: $(".usrcard"),
		usrcardTemplate: _.template(cardtpl),
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
	
    // 访问元素视图
	var InterestItemview = Backbone.View.extend({
		tagName: 'div',
		className: 'col-xs-4',
		interestTemplate: _.template(inttpl),
		render: function() {
			this.$el.html(this.interestTemplate(this.model.toJSON()));
			return this;
		},
		events: {
			"mouseover .usrpic-md": "showUsrcard",
			"mouseout .usrpic-md": "hideUsrcard",
			"click .addbtn": "addFriend",
			"click .usrpic-md": "visitSpace",
		},
		showUsrcard: function(e) {
			if ($(e.target).is('.addbtn'))
	            return;
	        else{
	            var userCardView = new UserCardView({
					model: this.model
				});
				userCardView.render();
				
				clearTimeout(handler);
			
				var thisTop = this.$el.offset().top - 250,
					thisLeft = this.$el.offset().left -105,
					borderTop = $(window).height() - $(".usrcard").height() - 10;
					borderLeft = $(window).width() - $(".usrcard").width() - 10;
				if (thisTop > borderTop) {
					$(".usrcard").stop().fadeIn(100).animate({
						top: borderTop
					}, 200);
				} else {
					$(".usrcard").stop().fadeIn(100).animate({
						top: thisTop,
					
					}, 200);
				};
				if (thisLeft > borderLeft) {
					$(".usrcard").stop().fadeIn(100).animate({
						left: borderLeft
					}, 200);
				} else {
					$(".usrcard").stop().fadeIn(100).animate({
						
						left: thisLeft,
					}, 200);
				};
	        }
		
			
			
		},
		hideUsrcard: function() {
			clearTimeout(handler);
			handler = setTimeout(function() {
				$(".usrcard").stop().fadeOut(200).empty();
			}, 500);

		},
		addFriend: function(){
			
			var addFriendView = new AddFriendView({
				model: this.model
			});
			addFriendView.render();
			
		},
		visitSpace: function(e){
			var userId = global.usrinfo.id,
			receiverId = this.model.get("id");
			if ($(e.target).is('.addbtn'))
	            return;
	        else{
	        	var src = "http://192.168.1.110:8080/Curry/web/space.html?userId=" + userId + "&receiverId=" + receiverId +"#menu/space";
				window.open(src);
			}
		},
		
	});
	
    var InterestView = Backbone.View.extend({
		className: 'row myinterest',
		setCollection: function(data){
			this.collection = new UserCollection(data);
		},
		render: function() {
			this.$el.html("");
			_.each(this.collection.models, function(item,index) {
				var ex = /^\d+$/;
				if (ex.test(index / 3)) {
				    this.$el.append('<div class="col-lg-4 col-xs-12"><div class="row"></div></div>');
				   console.log(index);
				}
				this.renderInterest(item);
				
				
			}, this);
			return this;
			
		},
		renderInterest: function(item) {
			var interestView = new InterestItemview({
				model: item
			});
			
		
			this.$el.find(".col-lg-4 .row").eq(-1).append(interestView.render().el);
			
		},
		
     });
     
     return InterestView;
 });