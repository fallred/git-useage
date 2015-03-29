define(['backbone'], function(Backbone) {
    
    var BlogListModel = Backbone.Model.extend({
        defaults: {
        	blogtitle: null,
        	blogabstract: null,
			blogtotalcomment:0,
			blogtotaltransmit:0,
			blogtotalassist:0,
			blogtotalfavorite:0,
			blogtotalvisit:0,
			updatetime: null,
        }
    });
    var BlogListCollection = Backbone.Collection.extend({
        model: BlogListModel
    });
    
    return 	BlogListCollection;
});