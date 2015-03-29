define(['backbone','model/me/myinfomodel','text!tpl/me/myinfotpl.html'], function(Backbone,MyInfoModel,tpl) {   
    var MyInfoView = Backbone.View.extend({
        el: $('.infopanel'),
		usrInfopanelTemplate: _.template(tpl),
		
		setModel:function(myInfodata){
			this.model = new MyInfoModel(myInfodata);
		},

		render: function() {
			this.$el.html(this.usrInfopanelTemplate(this.model.toJSON()));
        }
     });
     
     return MyInfoView;
 });