/*
* 公共集合模块
*/
define(['backbone'], function(Backbone) {
    
    var NoticeModel = Backbone.Model.extend({
        defaults: {
        	"text":"",
        	"subject":"",
        	"workTitle":"",
        	"noticetitle":"",
        	"nickName": "",
			"date":"",
			"content":"",
			"mPhoto": "http://localhost:8080/Curry/images/userpm.jpg",
			"lPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
			"sPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
			"tPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
			"img": "http://localhost:8080/Curry/images/1111.jpg",
			"time": "",
			"comment":"",
			"forwarding":"",
			"praise":"",
			"collect":"",
			"read":"",
			"value":""
			}
    });
    var NoticeCollection = Backbone.Collection.extend({
        model: NoticeModel
    });
    
    return NoticeCollection;
});
