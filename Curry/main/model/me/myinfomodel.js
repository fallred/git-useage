define(['backbone'], function(Backbone) {
    
    var MyInfoModel = Backbone.Model.extend({
        defaults: {
				photo: "http://localhost:8080/Curry/images/defaultp.jpg",
				nickname: "",
				tnno: "6666666666",
				level: "",
				todayVisit: "",
				visitCount: "",
				blogCount: "",
				friendCount:"",
			},
        
    });
    
    return MyInfoModel;
});