define(['backbone'], function(Backbone) {
    
    var NewsModel = Backbone.Model.extend({
        defaults: {
            pic: 0,
			title: "数据加载中。。。",
        }
    });
    var NewsCollection = Backbone.Collection.extend({
        model: NewsModel
    });
    
    return 	NewsCollection;
});