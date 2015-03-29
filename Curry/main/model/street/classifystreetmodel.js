define(['backbone'], function(Backbone) {
    var ClassifyModel = Backbone.Model.extend({
        defaults: {
            id:"",
            streetname:"",
            streettype1:"",
            streettype2:"",
        }
    });
    var classifyStreetCollection = Backbone.Collection.extend({
        model:ClassifyModel
    });
    return 	classifyStreetCollection;
});
