define(['backbone'], function(Backbone) {
    
    var SliderModel = Backbone.Model.extend({
        defaults: {
            pic: 0,
			title: "数据加载中。。。",
        }
    });
    var SliderCollection = Backbone.Collection.extend({
        model: SliderModel
    });
    
    return 	SliderCollection;
});