define(['backbone','model/share/qunmodel','view/share/addfriendview','text!tpl/contact/findquntpl.html'], function(Backbone,QunCollection,AddFriendView,tpl) {   
    // 访问元素视图
	var FindQunItemview = Backbone.View.extend({
		tagName: 'div',
		className: 'col-xs-4 qunitem',
		bgColor: null,
		FindQunTemplate: _.template(tpl),
		initialize: function() {
			// this.listenTo(this.model, 'change', this.render);
		},
		render: function() {
			this.$el.html(this.FindQunTemplate(this.model.toJSON()));
			this.randomClass();
			return this;
		},
		events: {
			"click .btn-add": "addFriend",
		},
		addFriend: function(){
			
			var addFriendView = new AddFriendView({
				model: this.model
			});
			addFriendView.render();
			
		},
		randomClass: function(){
			var a,b;
			b=parseInt(Math.random()*5);
            if(b!==a){
                a=b;
            }else{
                arguments.callee();
            }
            this.bgColor = 'qunitem' + b;
            this.$el.addClass(''+ this.bgColor + '')
	            
    	},
		
	});
	
    var self,page;
    var FindQunView = Backbone.View.extend({
    	parentContainer: null,
		className: 'row',
		initialize: function() {
			self = this;
		},
		setCollection: function(data){
			page = data.currentPage;
			this.collection = new QunCollection(data.resultList);
		},
		render: function() {
			this.$el.html("<div class='btn-nav nav-left fn-btn'><i class='iconfont'>&#xe624;</i></div><div class='btn-nav nav-right fn-btn'><i class='iconfont'>&#xe623;</i></div>");
			_.each(this.collection.models, function(item,index) {
				var ex = /^\d+$/;
				if (ex.test(index / 3)) {
				    this.$el.append('<div class="col-xs-12 itemgroup"><div class="row"></div></div>');
				}
				this.renderFindQun(item);
			
			}, this);

		},
		events:{
			"click .nav-right": "nextPage",
			"click .nav-left": "previousPage",
		},
		renderFindQun: function(item) {

			 var findQunItemView = new FindQunItemview({
				model: item
			});
			this.$el.find(".itemgroup > .row").eq(-1).append(findQunItemView.render().el);
		},
		
		previousPage: function(){
			this.getFindQun(page - 1);
		},
		nextPage: function(){
			this.getFindQun(page + 1);
		},
		getFindQun : function(page){
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
     
     return FindQunView;
 });