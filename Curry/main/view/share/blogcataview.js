define([
	'backbone',
	'model/share/blogcatamodel',
	'view/share/blogcatasecview',
	'view/share/bloglistview',
	'view/share/pagectlview',
	'text!tpl/share/blogmenutpl.html',
	'text!tpl/share/blogcatamaintpl.html',
	'global'
	], function(Backbone,BlogCataCollection,BlogCataSecView,BlogListView,PageCtlView,blogmenutpl,tpl,global) {
	var self,pageObj,selected,pageCtlView,receiverId;
	
	var BlogCataItemView = Backbone.View.extend({
		tagName: 'li',
		template: _.template(tpl),
		render: function() {
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		},
		events:{
			"click a": "shiftCata"
		},
		shiftCata: function(){
			var collection = _.compact(this.model.get("member"));
			//判断是否有二级菜单，兼容街区
			//if( collection.length > 0){
				//if (!blogCataSecView) {
				var	blogCataSecView = new BlogCataSecView();
				//}
				blogCataSecView.setCollection(collection);
				blogCataSecView.render();
			//}
			
				
		},
		
	});
	var BlogCataView = Backbone.View.extend({
		el: '.blogcata',
		setCollection: function(data){
			this.collection = new BlogCataCollection(data);
		},
		getParam: function(param){
			receiverId = param;
		},
		initialize: function(){
			this.$el.off();
			self = this;
			//加载两级菜单容器
			this.$el.html(blogmenutpl);
		},
		insertCollection: function(data,index){
			this.collection.add(data, {at: index});
		},
		events:{
			"click a": "shiftSel"
		},
		render: function() {
			
			this.$el.find(".maincata").empty();
			this.$el.find(".seccata").empty();
			_.each(this.collection.models, function(item) {
				this.renderItem(item);
			}, this);
			//判断分页视图是否存在，防止事件多次绑定
			//if (!pageCtlView){
				pageCtlView = new PageCtlView();
				this.listenTo(pageCtlView.model, "change:currentPage", this.getBlogList);
			//}
			//监听翻页的当前页面变化
			
			//默认点击菜单1
			this.$el.find(".color0").click();
		},
		renderItem: function(item){
			var blogCataItemView = new BlogCataItemView({
				model:item
			});
			this.$el.find(".maincata").append(blogCataItemView.render().el);
		},
		shiftSel: function(e){
			pageCtlView.model.set({
				pageNo:null,
	        	pageSize: null,
	        	currentPage: null,
	        	pageCount: null
			},{silent:true});
			// pageCtlView.render();
			selected = $(e.target);
			selected.closest("ul").find("a").removeClass("selected");
			selected.addClass("selected");
			this.getBlogList();
		},
		getBlogList: function(){
			this.getData();
			$.ajax({
	            type: "post",
	            url: global.url + "/Curry/blog/getBlogFlagM",
	            data: {page: JSON.stringify(pageObj)},
	            success: function(data) {
	            	console.log(data);
		    		var blogListView = new BlogListView();
					blogListView.setCollection(data.resultList);
					blogListView.render();
					//翻页(判断翻页是否第一次加载)
					// if (pageCtlView.model.get("currentPage")){
						// pageCtlView.setModel({
							// pageNo: data.pageNo,
							// pageSize: data.pageSize
						// },true);
						// pageCtlView.render();
					// } else{
						pageCtlView.setModel(data,true);
						pageCtlView.render();
					//}
		    		
			    },    
			    error: function (XMLHttpRequest, textStatus, errorThrown) {
				}
				
	        });
		},
		getData: function(){
			pageObj = {
				userId: global.usrinfo.id,
				receiverId: receiverId,
				blogscategory: selected.attr("data-id"),
			};
			if (pageCtlView.model.get("currentPage")){
				pageObj.currentPage = pageCtlView.model.get("currentPage");
			} else {
				return;
			}
		}
	});
	 return BlogCataView;
 });