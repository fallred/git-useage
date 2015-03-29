define(['backbone'], function(Backbone) {
    
    var MyconcernModel = Backbone.Model.extend({
        defaults: {
            type: " ",
            action: " ",
            subject: " ",
            sPhoto: " ",
            nickName: " ",
            date: " ",
            time: " "
        }
    });
    var MyconcernCollection = Backbone.Collection.extend({
        model: MyconcernModel
    });
    
    return 	MyconcernCollection;
});