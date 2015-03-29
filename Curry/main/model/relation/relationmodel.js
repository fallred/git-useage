/*
* 朋友圈公共模块
*/
define(['backbone'], function(Backbone) {
    
    var RelationModel = Backbone.Model.extend({
        defaults: {
            "nickname": "",
            "mPhoto": "http://localhost:8080/Curry/images/userpm.jpg",
            "lPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
            "sPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
            "tPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
            "img": "http://localhost:8080/Curry/images/1111.jpg"
            }
    });
    
    return RelationModel;
});