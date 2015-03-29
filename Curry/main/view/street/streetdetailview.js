define(['backbone',
	'view/street/tnstreetview',
	'view/street/mystreetview',
	'view/street/24hotview',
	'text!tpl/street/streetdetailtpl.html',
	'global'],
	function(Backbone,TnStreetView,MyStreetView,Hot24view,tpl,global){
        var StreetDetailView= Backbone.View.extend({
	   	    el:".list-container",
	   	  	initialize: function(){
				
		    },	
		    render:function(){
		    	this.$el.html(tpl);
		    	$(".street-item a").removeClass("itemback");
			    $(".street-item a").eq(0).addClass("itemback");
			   var tnStreetView = new TnStreetView();
	            tnStreetView.render();
		    },
			events: {
	        	"click a": "menu",
			},
			menu: function(e){
				if ($(e.target).is(".tnstreet")) {
					this.showTnStreet(e);
				}else if($(e.target).is(".mystreet")){
					this.showMyStreet(e);
				}else if($(e.target).is(".24Hot")){
                    this.show24Hot(e);
				}
			},
			setParent:function(parent){
				this.parent = parent;
			},
			showTnStreet:function(e){
			   $(".street-item a").removeClass("itemback");
			   $(e.currentTarget).addClass("itemback");
			   var tnStreetView = new TnStreetView();
	            tnStreetView.render();
               // alert("showTnStreet");
			},
			showMyStreet:function(e){
			   $(".street-item a").removeClass("itemback");
			   $(e.currentTarget).addClass("itemback");
			    var myStreetView = new MyStreetView();
	            myStreetView.render();
				// alert("showMyStreet");
			},
			show24Hot:function(e){
			   $(".street-item a").removeClass("itemback");
			   $(e.currentTarget).addClass("itemback");
				// alert("show24Hot");
				var hot24view=new Hot24view();
				hot24view.render();
 			}
       });
       return StreetDetailView;
    });