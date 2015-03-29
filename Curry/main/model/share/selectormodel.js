define(['backbone'], function(Backbone) {
    
    var SelectorModel = Backbone.Model.extend({
        defaults: {
            value: 0,
			text: "未命名",
        }
    });
    var SelectorCollection = Backbone.Collection.extend({
        model: SelectorModel
    });
    
    return 	SelectorCollection;
});