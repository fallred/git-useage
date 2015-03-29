define(['backbone', 'model/share/selectormodel','text!tpl/street/lovestreettpl.html'], function(Backbone,SelectorCollection,tpl) {   
    // 访问元素视图
	var LoveStreetItemview = Backbone.View.extend({
		tagName: 'li',
		className: 'lovestreetitem',
		bgColor: null,
		LoveStreetTemplate: _.template(tpl),
		initialize: function() {
			self=this;
			this.listenTo(this.model, "change", this.render);
		},
		events:{
			"click .lovestreetcol a":"invitationDataChange"
		},
		invitationDataChange:function(e){
             this.parent.renderInvitationStreet(this.model.get("streetname"),this.model.get("list"));
		},
		setParent:function(data){
			this.parent=data;
		},
		render: function() {
			this.$el.html(this.LoveStreetTemplate(this.model.toJSON()));
			this.randomClass();
			return this;
		},
       	randomClass: function(){
			var a,b;
			b=parseInt(Math.random()*5);
            if(b!==a){
                a=b;
            }else{
                arguments.callee();
            }
            this.bgColor = 'lovestreetitem' + b;
            this.$el.addClass(''+ this.bgColor + '')     
        },
	});
    var self,page;
    var InvitationStreetview = Backbone.View.extend({
        el:".categoryShow",
		initialize: function() {
			self = this;
			this.$el.off();
		},
		setParent:function(data){
           this.parent=data;
		},
		setCollection: function(data){
			this.collection = new SelectorCollection(data);
		},
		insertCollection: function(data,index){
			this.collection.add(data, {at: index});
		},
		events:{
			"click .invitationlovestreet li":"shiftSel",
		},
		aa:function(){alert("a");},
		//样式切换
		shiftSel:function(e){
    		this.$el.find(".invitationlovestreet li a").removeClass("selected");
    		$(e.target).closest("li").find("a").addClass("selected");
    	},
		render: function() {
			_.each(this.collection.models, function(item,index) {
				this.renderLoveItem(item);
			}, this);
			this.$el.find(".invitationlovestreet li a").eq(0).click();	
		},
		renderLoveItem: function(item) {
			var loveStreetItemview = new LoveStreetItemview({
				model: item
			});
			loveStreetItemview.setParent(this.parent);
			this.$el.find(".invitationlovestreet").append(loveStreetItemview.render().el);
		}
     });
     return InvitationStreetview;
 });