define(['backbone'], function(Backbone) {
    
    var CurrentStreetModel = Backbone.Model.extend({
        defaults: {
            "lPhoto":"",
        	"streettype":"",
            "classify":"",
            "introduce":"",
            "invitation":"",
            "fans":"",
            "focusstatus":"",
        }
    });
    
    var currentStreetCollection = Backbone.Collection.extend({
        model:CurrentStreetModel
    });
    
    return 	CurrentStreetModel;
});