define(['backbone'], function(Backbone) {
    
    var BlogCataModel = Backbone.Model.extend({
        defaults: {
            categoryname:null,
            id:null,
            blogcatid:null
        }
    });
    
    var BlogCataCollection = Backbone.Collection.extend({
        model: BlogCataModel
    });
    
    return 	BlogCataCollection;
});