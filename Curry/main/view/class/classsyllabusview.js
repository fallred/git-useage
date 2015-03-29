/*
* 小喇叭课程表模块
*/
define(['backbone','model/class/categorymodel','text!tpl/class/classsyllabustpl.html','global'], function(Backbone,CategoryModel,tpl, global) {   
    // 访问元素视图
	 var ClassSyllabusView = Backbone.View.extend({

     	className: 'container-box list-content',
	 	syllabusTemplate: _.template(tpl),
		
		setModel:function(data){
			this.model = new CategoryModel(data);
		},

		render: function() {
			this.$el.html(this.syllabusTemplate(this.model.toJSON()));
        }
     });
    return ClassSyllabusView;
 });

