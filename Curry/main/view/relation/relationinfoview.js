/*
* 朋友圈信息模块
*/
define(['backbone','model/relation/relationmodel','text!tpl/relation/relationinfotpl.html','global'], function(Backbone,RelationModel,tpl,global) {   
    var handler;
    var RelationInfoView = Backbone.View.extend({
        el: '.list-container',
        // tagName: 'div',
        // className: 'class-item b-bottom',
		classInfoTemplate: _.template(tpl),
		
		setModel:function(data){
			this.model = new RelationModel(data);
		},

		render: function() {
			this.$el.html(this.classInfoTemplate(this.model.toJSON()));
        }
     });
     
     return RelationInfoView ;
 });