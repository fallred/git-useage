/*
* 公共模块
*/
define(['backbone'], function(Backbone) {
    
    var CategoryModel = Backbone.Model.extend({
        defaults: {
            "text":"",
            "title":"",
            "nickName": "",
            "date":"",
            "content":"",
            "mPhoto": "http://localhost:8080/Curry/images/userpm.jpg",
            "lPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
            "sPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
            "tPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
            "img": "http://localhost:8080/Curry/images/1111.jpg",
            "data": "",
            "comment":"",
            "forwarding":"",
            "praise":"",
            "collect":"",
            "read":"",
            "value":""
            }
    });
    
    return CategoryModel;
});