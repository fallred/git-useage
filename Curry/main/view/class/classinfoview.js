/*
* 班级信息模块
*/
define(['backbone','model/class/categorymodel','text!tpl/class/classinfotpl.html','global'], function(Backbone,CategoryModel,tpl,global) {   
    var handler;
    var ClassInfoView = Backbone.View.extend({
        el: '.list-top',
        // tagName: 'div',
        // className: 'class-item b-bottom',
		classInfoTemplate: _.template(tpl),
		
		setModel:function(classInfodata){
			if(typeof classInfodata == "string") {
				var classData = JSON.parse(classInfodata);
				this.model = new CategoryModel(classData);
			}else {
				this.model = new CategoryModel(classInfodata);
			}
		},
		events: {
			"mouseenter .switch-class":"showMyclass",
			"mouseleave .switch-class":"hideMyclass",
			"mouseenter .showmyclass" : "showMyclass",
			"mouseleave .showmyclass" : "hideMyclass"
		},
		showMyclass: function() {
			$(".showmyclass").show();
			clearTimeout(handler);
		},
		hideMyclass: function() {
			clearTimeout(handler);
			handler = setTimeout(function() {
				$(".showmyclass").stop().fadeOut(200).hide();
			}, 500);
		},
		render: function() {
			this.$el.html(this.classInfoTemplate(this.model.toJSON()));
        }
     });
     
     return ClassInfoView;
 });