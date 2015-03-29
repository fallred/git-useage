define(['backbone',
		'view/tnno/indexview',
		'text!tpl/share/individualspacetpl.html'], 
    function(Backbone,IndexView,tpl) {
    
    var IndividualSpaceView = Backbone.View.extend({
		tagName: 'div',
		className: 'individualspace container-box',
        individualspaceTemplate: _.template(tpl),
        initialize: function(){
        	var self = this;
        	$(window).on('resize',function(){
    			self.resize();
    		});
        },
        render: function(){
        	this.$el.html(this.individualspaceTemplate(this.model.toJSON()));
        	this.resize();
        },
       	events:{
       		"click .close":"backPage"
       	},
        resize: function(){
        	var rwidth = $(".content-container .container-fluid").width(); 
        	$(".spacetoolbar").css("width", rwidth -2);
        },
        backPage: function() {
          	var indexView = new IndexView();
        },
    });
    
    return IndividualSpaceView;
});