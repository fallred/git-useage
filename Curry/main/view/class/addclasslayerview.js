/*
* 加入班级弹层模块
*/
var data1 =[{
	"categoryname":"2010级",
	"id": "1"
},
{
	"categoryname":"2011级",
	"id": "2"
},
{
	"categoryname":"2012级",
	"id": "3"
}];
var data2 =[{
	"categoryname":"1班",
	"id": "1"
},
{
	"categoryname":"2班",
	"id": "2"
},
{
	"categoryname":"3班",
	"id": "3"
}];
define(['backbone',
	'model/share/selectormodel',
	'view/contact/quncatalogview',
	'text!tpl/class/addclasslayertpl.html',
	'global',], 
	function(Backbone ,SelectorCollection, QunCatalogView, tpl, global) {   
    // 访问元素视图
	var AddClassLayerView  = Backbone.View.extend({
		tagName: 'div',
		className: 'fn-clear',
		// addclassTemplate: _.template(tpl),
		initialize: function(){
			self =this;
		},
		setCollection: function(data){
			this.collection = new SelectorCollection(data);
		},
		
		render: function(){
			this.$el.html(tpl);
			this.renderSchool();
			this.renderGrade();
			this.renderClass();

			var d = dialog({
				id: "addclass",
			    title: '加入班级',
			    // content: this.el.innerHTML,
			    content: this.$el,
			    okValue: '确定',
			    ok: function() {
			    	self.confirm();
			    },
			    cancelValue: '取消',
			    cancel: function () {
			    	this.remove();
			    },
			    width: 400
			});
			d.showModal();
			return this;
		},

		//点击确定
		// confirm: function() {
		// 	var schoolid = this.$el.find('.selecter-trigger-school input').attr('data-id');
		// 	var gradeid = this.$el.find('.selecter-trigger-grade input').attr('data-id');
		// 	var classnameid = this.$el.find('.selecter-trigger-class input').attr('data-id');
		// 	var remark = this.$el.find('#classintro').val();
		// 	alert(schoolid+","+gradeid+","+classnameid+","+remark);
		// 	 $.ajax({
	 //             type: "POST",
	 //             url:"login.html",
	 //             // data:{
	 //             // 	"school":schoolid,
	 //             // 	"grade": gradeid,
	 //             // 	"classname": classid,
	 //             // 	"remark": remark
	 //             // },
	 //             data:"school=" + schoolid + "&grade=" + gradeid + "&classname=" + classnameid + "&remark=" +remark,
	             
	 //             success: function(data) {
	 //             	alert("111");
		// 	     },
		// 	     error: function (XMLHttpRequest, textStatus, errorThrown) {
		// 		}
	 //         });
		// },

		confirm: function() {
			var schoolid = this.$el.find('.selecter-trigger-school input').attr('data-id');
			var gradeid = this.$el.find('.selecter-trigger-grade input').attr('data-id');
			var classid = this.$el.find('.selecter-trigger-class input').attr('data-id');
			var schoolstr = this.$el.find('.selecter-options-school .selected').text();
			var gradestr = this.$el.find('.selecter-options-grade .selected').text();
			var classnamestr = this.$el.find('.selecter-options-class .selected').text();
			var remark = this.$el.find('#classintro').val();
			var data = {
					"createdby":global.usrinfo.id,
	             	"school":schoolid,
	             	"grade": gradeid,
	             	"class": classid,
	             	"remark": remark,
	             	"classname": schoolstr+""+gradestr+""+classnamestr 
	             }
			 $.ajax({
	             type: "post",
	             //url:global.url + "/Curry/tnclass/createTnClass",
	             url:"login.html",
	             dataType:"json", 
	             data: {tnClass: JSON.stringify(data)},

	             //data:"school=" + schoolid + "&grade=" + gradeid + "&classname=" + classnameid,
	             
	             success: function(data) {
					console.log(data)			     },
			     error: function (XMLHttpRequest, textStatus, errorThrown) {
				}
	         });
		},
		renderSchool: function(){
			this.setCollection({"categoryname": "华师一附中","id":global.usrinfo.schoolid});
			
			_.each(this.collection.models, function(item) {
				this.renderSchoolItem(item);
			}, this);
			//下拉框初始化方法
			selecter();
		},
		renderSchoolItem: function(item){
			var qunCatalogView = new QunCatalogView({
				model:item
			});
			var options = qunCatalogView.render().el;
			this.$el.find(".selecter-options-school").append(options);
		},

		renderGrade: function(){
			this.setCollection(data1);
			
			_.each(this.collection.models, function(item) {
				this.renderGradeItem(item);
			}, this);
			//下拉框初始化方法
			selecter();

			// $.ajax({
	  //            type: "get",
	  //            url:"data1.json",

	  //            success: function(data) {
	  //            	self.setCollection(data);
					
			// 		_.each(self.collection.models, function(item) {
			// 			self.renderGradeItem(item);
			// 		}, self);
			// 		//下拉框初始化方法
			// 		selecter();

			//      },
			//      error: function (XMLHttpRequest, textStatus, errorThrown) {
			// 	}
	  //        });
		},
		renderGradeItem: function(item){
			var qunCatalogView = new QunCatalogView({
				model:item
			});
			var options = qunCatalogView.render().el;
			this.$el.find(".selecter-options-grade").append(options);
		},
		renderClass: function(){
			this.setCollection(data2);
			
			_.each(this.collection.models, function(item) {
				this.renderClassItem(item);
			}, this);
			//下拉框初始化方法
			selecter();
		},
		renderClassItem: function(item){
			var qunCatalogView = new QunCatalogView({
				model:item
			});
			var options = qunCatalogView.render().el;
			this.$el.find(".selecter-options-class").append(options);
		}
		
	});
     
     return AddClassLayerView;
 });