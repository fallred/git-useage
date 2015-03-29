define(['backbone', 'view/contact/findfriendview', 'view/contact/findqunview','text!tpl/contact/catcontainertpl.html', 'global'], 
    function(Backbone,FindFriendView,FindQunView,cattpl, global) {
    	var self;
    //
    var ContactHomePage = Backbone.View.extend({
    	el: "#container-fluid",
 		initialize: function(){
 			global.homepage = this;
 		},
 		containerBuild : function(){
    		this.$el.html(cattpl);
    	},
        render: function(){
         	this.containerBuild();
            this.getFindFriend();
            this.getFindQun();
            
       		
        },
       
    	getFindFriend: function(){
    		var findfriendView = new FindFriendView();
    		findfriendView.getFindfriend(0);
            this.$el.find(".findfriendbox .box-content-fluid").html(findfriendView.$el);
    	},
    	getFindQun: function(){
    		var findQunView = new FindQunView();
    		findQunView.getFindQun(0);
           	this.$el.find(".findqunbox .box-content-fluid").html(findQunView.$el);
    	},
        
     
    });
    

    return ContactHomePage;
});