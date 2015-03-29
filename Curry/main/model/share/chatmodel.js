define(['backbone'], function(Backbone) {
    
    var ChatModel = Backbone.Model.extend({
        defaults: {
			messagecontent:"",
			date:"",
			senderid:"",
			receiverid:"",
			usernickname:"",
			userphoto:"http://localhost:8080/Curry/images/defaultp.jpg"
        }
    });
    
    var ChatCollection = Backbone.Collection.extend({
        model: ChatModel
    });
    
    return 	ChatCollection;
});