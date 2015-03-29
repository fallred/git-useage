define(['backbone','model/share/usermodel','view/share/addfriendview','text!tpl/contact/findfriendtpl.html'], function(Backbone,UserCollection,AddFriendView,tpl) {   
    // 访问元素视图
	var FindFriendItemview = Backbone.View.extend({
		tagName: 'div',
		className: 'col-xs-4 frienditem',
		findfriendTemplate: _.template(tpl),
		initialize: function() {
			// this.listenTo(this.model, 'change', this.render);
		},
		render: function() {
			this.$el.html(this.findfriendTemplate(this.model.toJSON()));
			return this;
		},
		events: {
			"click .btn-add": "addFriend",
		},
		addFriend: function(){
			
			var addFriendView = new AddFriendView({
				model: this.model
			});
			addFriendView.dialog();
			
		},
		
	});
	
    var self,page;
    var FindFriendView = Backbone.View.extend({
    	parentContainer: null,
		className: 'row',
		initialize: function() {
			self = this;
		},
		setCollection: function(data){
			page = data.currentPage;
			this.collection = new UserCollection(data.resultList);
		},
		render: function() {
			this.$el.html("<div class='btn-nav nav-left fn-btn'><i class='iconfont'>&#xe624;</i></div><div class='btn-nav nav-right fn-btn'><i class='iconfont'>&#xe623;</i></div>");
			_.each(this.collection.models, function(item,index) {
				var ex = /^\d+$/;
				if (ex.test(index / 3)) {
				    this.$el.append('<div class="col-md-12 col-lg-6"><div class="row"></div></div>');
				}
				this.renderFindFriend(item);
			
			}, this);

		},
		events:{
			"click .nav-right": "nextPage",
			"click .nav-left": "previousPage",
		},
		renderFindFriend: function(item) {

			 var findFriendItemView = new FindFriendItemview({
				model: item
			});
			this.$el.find(".col-md-12 .row").eq(-1).append(findFriendItemView.render().el);
		},
		previousPage: function(){
			this.getFindfriend(page - 1);
		},
		nextPage: function(){
			this.getFindfriend(page + 1);
		},
		getFindfriend : function(page){
        	 $.ajax({
             type: "GET",
             url: global.url + "/Curry/user/getUsersOrderBySix?currentPage="+page,
             
             success: function(data) { 
	            self.setCollection(data);
	            //self.parentContainer.empty();
	            self.render();
	            console.log(data);
		     },    
		     error: function (XMLHttpRequest, textStatus, errorThrown) {
				}
         });
        	
        },
		
		

     });
     
     return FindFriendView;
 });