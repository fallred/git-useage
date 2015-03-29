define(['backbone','model/street/hotstreetmodel','text!tpl/street/hotstreettpl.html'], function(Backbone,HotStreetCollection,tpl) {   
    // 访问元素视图
	var HotStreetItemview = Backbone.View.extend({
		tagName: 'div',
		className: 'col-xs-4 hotitem',
		bgColor: null,
		HotStreetTemplate: _.template(tpl),
		initialize: function() {
			// this.listenTo(this.model, 'change', this.render);
		},
		render: function() {
			this.$el.html(this.HotStreetTemplate(this.model.toJSON()));
			this.randomClass();
			return this;
		},
		events: {
		  "click .addfocus":"addFocusData",
		},
		  aa:function(){alert(aa);},
		addFocusData:function(){
			  this.setaddFocusDialog();
		},
		setaddFocusDialog:function(){
	     	 var d = dialog({
			    title: '关注街区成功提示',
			    content: '<span style="display:inline-block;line-height:50px;margin-left:10px">恭喜您成功成为本街区的第<span style="color:#f65d58">888</span>位成员</span>',
			    okValue: '知道了',
			    ok: function () {
			    	this.remove();
			    },
			});
			d.showModal();
			// setTimeout(function () {
			//     d.close().remove();
			// }, 1000);
		},
		randomClass: function(){
			var a,b;
			b=parseInt(Math.random()*5);
            if(b!==a){
                a=b;
            }else{
                arguments.callee();
            }
            this.bgColor = 'hotitem' + b;
            this.$el.addClass(''+ this.bgColor + '')     
    	},
	});
    var self,page;
    var HotStreetView = Backbone.View.extend({
    	parentContainer: null,
		className: 'row',
		initialize: function() {
			self = this;
		},
		setCollection: function(data){
			// page = data.currentPage;
			this.collection = new HotStreetCollection(data);
		},
		render: function() {
			this.$el.html("<div class='btn-nav nav-left fn-btn'><i class='iconfont'>&#xe624;</i></div><div class='btn-nav nav-right fn-btn'><i class='iconfont'>&#xe623;</i></div>");
			_.each(this.collection.models, function(item,index) {
				var ex = /^\d+$/;
				if (ex.test(index / 3)) {
				    this.$el.append('<div class="col-xs-12 itemgroup"><div class="row"></div></div>');
				}
				this.renderHotItem(item);
			}, this);
		},
		events:{
			// "click .nav-right": "nextPage",
			// "click .nav-left": "previousPage",
		},
		renderHotItem: function(item) {
			 var hotStreetItemview = new HotStreetItemview({
				model: item
			});
			this.$el.find(".itemgroup > .row").eq(-1).append(hotStreetItemview.render().el);
		},
		previousPage: function(){
			// this.getHotStreet(page - 1);
		},
		nextPage: function(){
			// this.getHotStreet(page + 1);
		}
     });
     return HotStreetView;
 });