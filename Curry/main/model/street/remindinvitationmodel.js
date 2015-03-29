/*
* 街区blog动态帖子
*/
define(['backbone'], function(Backbone) {
    
    var StreetBlogModel = Backbone.Model.extend({
        defaults: {
        	"mPhoto": "",
		    "lPhoto": "",
		    "sPhoto": "",
		    "tPhoto": "",
		     "img": "",
		    "nickName": "",
		    "reply":"",
		    "invitationtitle": "",
		    "streettype":"",
		    "date":"",
		    "content":""
			}
    });
    var StreetBlogCollection = Backbone.Collection.extend({
        model: StreetBlogModel
    });
    
    return StreetBlogCollection;
});
