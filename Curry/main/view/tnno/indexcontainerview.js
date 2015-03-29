define(['backbone'], 
    function(Backbone) {
    
    var IndexContainerView = Backbone.View.extend({
        indexcontainerTemplate: _.template($('#indexcontainerTemplate').html()),
        render: function(){
        	$(".content-container .container-fluid").html(this.indexcontainerTemplate());
        },
    });
    
   
      
    
    return IndexContainerView;
});