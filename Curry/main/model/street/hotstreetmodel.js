define(['backbone'], function(Backbone) {
    
    var HotModel = Backbone.Model.extend({
        defaults: {
            id:"",
            streetphoto: "http://localhost:8080/Curry/images/defaultp.jpg",
        	streetname:"",
            streettype1:"",
            streettype2:"",
            fans:"",
            invitation:"" 
        }
    });
    
    var HotStreetCollection = Backbone.Collection.extend({
        model: HotModel
    });
    
    return 	HotStreetCollection;
});