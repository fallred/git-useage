define(['backbone'], function(Backbone) {
    
    var HotModel = Backbone.Model.extend({
        defaults: {
            id:"",
            streetname:"",
            streettype1:"",
            streettype2:"",
        }
    });
    
    var LoveStreetCollection = Backbone.Collection.extend({
        model: HotModel
    });
    
    return 	LoveStreetCollection;
});