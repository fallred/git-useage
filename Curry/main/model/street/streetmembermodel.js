/*
* 公共集合模块
*/
define(['backbone'], function(Backbone) {
    
    var MemberModel = Backbone.Model.extend({
        defaults: {
		    "classname":"",
			"id":"",
		 	"schname": "",
		 	"mPhoto": "",
			"lPhoto": "",
		 	"sPhoto": "",
		 	"tPhoto": "",
		 	"identity": "",
			"username": "",
			"time":"",
			"number":"",
			"gender":""
			}
    });
    var MemberCollection = Backbone.Collection.extend({
        model: MemberModel
    });
    
    return MemberCollection;
});
