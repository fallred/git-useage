define(['backbone'], function(Backbone) {
    
    var BlogModel = Backbone.Model.extend({
        defaults: {
            blogtitle: null,
        	blogabstract: null,
        	blogcontent: null,
			blogtotalcomment:0,
			blogtotaltransmit:0,
			blogtotalassist:0,
			blogtotalfavorite:0,
			blogtotalvisit:0,
			updatetime: null,
        }
    });
    var BlogCollection = Backbone.Collection.extend({
        model: BlogModel
    });
    
    return 	BlogCollection;
});