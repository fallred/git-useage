define(['backbone'], function(Backbone) {
    
    var GroupModel = Backbone.Model.extend({
        defaults: {
            groupname: "未命名",
        }
    });
    
    var GroupCollection = Backbone.Collection.extend({
        model: GroupModel
    });
    
    return 	GroupCollection;
});