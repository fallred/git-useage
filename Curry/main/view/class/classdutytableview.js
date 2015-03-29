/*
* 小喇叭值日表模块
*/
define(['backbone','model/class/noticemodel','text!tpl/class/classdutytabletpl.html','global'], function(Backbone,NoticeCollection,tpl, global) {   
    // 访问元素视图
	var DutytableItemview = Backbone.View.extend({
		tagName: 'div',
		className: 'container-box list-content',
		dutytableTemplate: _.template(tpl),
		initialize: function() {

        },
		render: function() {
			this.$el.html(this.dutytableTemplate(this.model.toJSON()));
			return this;
		},
		events: {
			"click .notice-open": "spread",
			"mouseenter .edit-delete": "showButton",
			"mouseleave .edit-delete": "hideButton"
		},
		// 展开/收起
		spread : function(e) { 
			var content = $(e.target).parent().parent().siblings("p");
			var text = content.text();
			console.log(text.substring(text.length-3, text.length));
			var endtext = text.substring(text.length-3, text.length);
			if (endtext == '...')
				text = text.substring(0, text.length-3);
			
			var data = content.attr("data-text");
			
			// include
			if (data.length > text.length){
				content.text(data);
		   		//content.slideUp("slow");
		   		$(e.target).text("收起");
		   	}else {
		   		content.text(data.substr(0,200)+"...");
		   		//content.slideDown("slow");
		   		$(e.target).text("展开");
		   	}
		},

		// 编辑/删除
		showButton : function(e) {
			var str = $(e.target).find(".user-list");
			str.find(".nick-item").css("display","inline");
		},
		
		hideButton : function(e) {
			var str = $(e.target).find(".user-list");
			str.find(".nick-item").css("display","none");
		}
		
	});
	
    
    var ClassDutytableView = Backbone.View.extend({
        //el: $('.categoryShow'),
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
			var dutytableView = new DutytableItemview({
				model: item
			});
			this.$el.append(dutytableView.render().el);
		},
     });
     
     return ClassDutytableView;
 });