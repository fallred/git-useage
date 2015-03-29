define(['backbone'], function(Backbone) {
    
    var UserModel = Backbone.Model.extend({
        defaults: {
            photo: "http://localhost:8080/Curry/images/defaultp.jpg",
			nickname: null,
			spacebg : "http://localhost:8080/Curry/images/1111.jpg",
			todayVisit: null,
			visitCount: null,
			blogamount: null,
			friendamount:null,
			city: null,
			schoolid: null,
			remark:null,
			remarkname:null,
			interest:null,
			tnno:null,
			spacelg:"http://localhost:8080/Curry/images/2222.jpg",
			//群成员邀请控制属性
			draged:"false",
			gender:null,
        }
    });
    
    var UserCollection = Backbone.Collection.extend({
        model: UserModel
    });
    
    return 	UserCollection;
});