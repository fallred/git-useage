/*
* 云课堂模块
*/
define(['backbone',
	'model/share/selectormodel',
	'view/class/roomcontentview',
	'view/class/releasecoursewareview',
	'text!tpl/contact/friendmgitemtpl.html',
	'text!tpl/class/classroomtpl.html',
	'global'], function(Backbone,SelectorCollection,RoomContentView,ReleaseCourseView,itemtpl,tpl,global) {  

	//科目列表视图
	var self;
	var ClassRoomItemView = Backbone.View.extend({
		tagName: 'li',
		template: _.template(itemtpl),
		initialize: function(){
			self =this;
			this.listenTo(this.model, "change", this.render);
		},
		render: function() {
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		},
		events: {
			"click a":"shiftMenu"
		},
		shiftMenu: function(){
	        var roomContentView = new RoomContentView();
	            roomContentView.setCollection(this.model.get("list"));
	            //console.log(this.model);
	            roomContentView.render();
		}

	});

    var ClassRoomView = Backbone.View.extend({
        el: $('#container-fluid'),
		//classInfoTemplate: _.template(tpl),
		
		// setModel:function(){
		// 	this.model = new ClassBlogModel();
		// },
		initialize: function() {
			self = this;
			this.containerBuild();
        },
        containerBuild: function() {
        	//var container = $('<div class="category fn-clear"></div><div class="categoryShow"></div>');
			this.$el.html(tpl);
			//this.$el.find(".category").html(tpl);
		},
		setCollection: function(data){
			this.collection = new SelectorCollection(data);
		},
		insertCollection: function(data,index){
			this.collection.add(data, {at: index});
		},
		events: {
			// "click .tab-lg li a": "shiftmenu",
			"click .tab-lg li": "shiftSel",
			"click .releasebtn": "releasebtn",
			"click .myPublish": "myPublish",
			"click .publicbtn": "publicbtn"
		},
		render: function() {
			_.each(this.collection.models, function(item) {
				this.renderSubject(item);
			}, this);
			
			this.$el.find(".tab-lg li a").eq(0).click();	
        },
        renderSubject: function(item){
			var classRoomItemView = new ClassRoomItemView({
				model:item
			});
			var options = classRoomItemView.render().el;
			this.$el.find(".tab-lg").append(options);
		},

		//样式切换
		shiftSel: function(e){
    		this.$el.find(".tab-lg li").removeClass("selected");
    		$(e.target).closest("li").addClass("selected");
    	},
    	//发布
    	releasebtn: function(e) {
    		var releaseCourseView = new ReleaseCourseView();
	            releaseCourseView.render();
	            releaseCourseView.setParent(this);
        		this.$el.append(releaseCourseView.$el);
    	},
    	//我发布的课件
    	myPublish: function() {
    		this.$el.html(3);
    	},
    	//公共教育云
    	publicbtn: function() {
    		this.$el.html(4);
    	},
		//内容截取
		intercept : function() {
			$(".text-content").each(function(i,el) {
	    		var str = $(el).text();
	    		var name = str.substr(0,200);
	    		if (str.length > 200) {
	    			var newname = name + '...';
	    			$(this).text(newname);
	    		}else {
	    			$(this).text(str);
	    		}
    		});
		}
     });
     
     return ClassRoomView;
 });