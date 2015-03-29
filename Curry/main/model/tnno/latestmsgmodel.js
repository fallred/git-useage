//最新消息模型
define(['backbone'], function(Backbone) {
    
    var LatestMsgModel = Backbone.Model.extend({
        defaults: {
            photo: "http://localhost:8080/Curry/images/defaultp.jpg",
			nickname: "",
			senderid : "",
			message:"无最新消息",
			id:"",
			remarkname:null,
			tnno:""
        }
    });
    
    var LatestMsgCollection = Backbone.Collection.extend({
        model: LatestMsgModel
    });
    
    return 	LatestMsgCollection;
});