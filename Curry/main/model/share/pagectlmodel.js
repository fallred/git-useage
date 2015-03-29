define(['backbone'], function(Backbone) {
    
    var PageCtlModel = Backbone.Model.extend({
        defaults: {
        	pageNo:null,
        	pageSize: null,
        	currentPage: null,
        	pageCount: null
        }
    });
    
    return 	PageCtlModel;
});