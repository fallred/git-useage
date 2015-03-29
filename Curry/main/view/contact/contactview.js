/*
* 主页面Router
* 基于AMD (Asynchronous Module Definition) 规范实现
*/
define(['backbone', 
            'view/me/myinfoview', 
            'view/contact/contactsview',
            'view/tnno/sliderview', 
            'view/contact/contacthomepage',
            'global'], 
    function(Backbone, MyInfoView, ContactsView, SliderView,ContactHomePage,global) {
    	var self;
    //
    var ContactView = Backbone.View.extend({
    	el: $("#main-container"),

 		initialize: function(){
 			self = this;
 			
 		},
        render: function(){
           //$(".content-container .container-fluid").html(container);
            //进入主页面，初始化主页面并加载
	        //this.getUser();
            this.getContacts();
            this.ContactHomePage();
       		
        },
        clear: function(){
        	this.$el.empty();
        },
       
    	getContacts: function(){
	        var contactsView = new ContactsView();
      		contactsView.render();
            self.$el.find(".main-list").attr("id","contactlist").append(contactsView.$el);
		    
    	},
    	ContactHomePage: function(){
    		var contactHomePage = new ContactHomePage();
    		contactHomePage.render();
    	},
        
        
    });
    
    
      
    
    return ContactView;
});