define(['backbone','view/street/streetdetailview','global'],function(Backbone,StreetDetailView,global){
   var self;
   var StreetView=Backbone.View.extend({
   	el:$("#main-container"),
   	containerBuild:function(){
   		this.$el.find(".main-list").attr("id","streetlist").html('<div class="list-container"></div>');
   	},
	initialize: function(){
		this.containerBuild();
		self = this;
	},
    render: function(){	
    	this.getStreetdetail();
    },
   	clear:function(){
   		this.$el.empty();
   	},
    getStreetdetail:function(){
      	var streetDetailView = new StreetDetailView();
        streetDetailView.setParent(this);
        streetDetailView.render(); 
     }
   });
   return StreetView;
});