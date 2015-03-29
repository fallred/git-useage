define(['backbone'], function(Backbone) {
    
    var QunModel = Backbone.Model.extend({
        defaults: {
        	createdby: null,
        	createtime: null,
        	deleteby: null,
        	deletetime: null,
        	flag: null,
        	groupauthority: null,
        	groupcategory: null,
        	groupcategoryname: null,
        	groupname: null,
        	groupremark: null,
        	grouprole: null,
        	groupstyle: null,
        	grouptips: null,
        	grouptotalmembers: null,
        	grouptype: null,
        	id: null,
            groupphoto: "http://localhost:8080/Curry/images/defaultp.jpg"
        }
    });
    
    var QunCollection = Backbone.Collection.extend({
        model: QunModel
    });
    
    return 	QunCollection;
});