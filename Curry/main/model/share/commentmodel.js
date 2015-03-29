define(['backbone'], function(Backbone) {
    
    var CommentModel = Backbone.Model.extend({
        defaults: {
            id: null,
			nickname: null,
			photo:"http://localhost:8080/Curry/images/defaultp.jpg",
			commentcontent:null,
			createtime: "",
        }
    });
    var CommentCollection = Backbone.Collection.extend({
        model: CommentModel
    });
    
    return 	CommentCollection;
});