/*
*创建弹层模块
*/
var addstreetdata1 =[{
	"categoryname":"体育",
	"id": "1"
},
{
	"categoryname":"跳舞",
	"id": "2"
},
{
	"categoryname":"唱歌",
	"id": "3"
}];
var addstreetdata2 =[{
	"categoryname":"NBA",
	"id": "1"
},
{
	"categoryname":"芭蕾",
	"id": "2"
},
{
	"categoryname":"钢琴",
	"id": "3"
}];
define(['backbone',
	'model/share/selectormodel',
	'view/contact/quncatalogview',
	'text!tpl/street/createstreetlayertpl.html',
	'global',], 
	function(Backbone ,SelectorCollection, QunCatalogView, tpl, global) {   
    // 访问元素视图
	var CreateStreetLayerView  = Backbone.View.extend({
		tagName: 'div',
		className: 'addstreetmsg fn-clear',
		// addclassTemplate: _.template(tpl),
		initialize: function(){
			self =this;
			 this.$el.off();
		},
		setParent:function(parent){
          this.parent=parent;
		},
		setCollection: function(data){
			this.collection = new SelectorCollection(data);
		},
		render: function(){
			this.$el.html(tpl);
			this.renderStreet();
			this.renderGrade();
			this.renderClass();
			var d = dialog({
				id: "addstreet",
			    title: '创建街区',
			    // content: this.el.innerHTML,
			    content: this.$el,
			    okValue: '创建',
			    ok: function() {
			    	self.confirm();
			    	//调用父级的创建成功的函数
			    	self.parent.createSuccess();
			    },
			    cancelValue: '取消',
			    cancel: function () {
			    	// this.remove();
			    },
			    width: 400,
			    onremove: function () {
			        self.$el.remove();
			    },
			});
			d.showModal();
			return this;
		},

		//点击确定
		// confirm: function() {
		// 	var streetid = this.$el.find('.selecter-trigger-street input').attr('data-id');
		// 	var gradeid = this.$el.find('.selecter-trigger-grade input').attr('data-id');
		// 	var classnameid = this.$el.find('.selecter-trigger-class input').attr('data-id');
		// 	var remark = this.$el.find('#classintro').val();
		// 	alert(streetid+","+gradeid+","+classnameid+","+remark);
		// 	 $.ajax({
	 //             type: "POST",
	 //             url:"login.html",
	 //             // data:{
	 //             // 	"school":streetid,
	 //             // 	"grade": gradeid,
	 //             // 	"classname": classid,
	 //             // 	"remark": remark
	 //             // },
	 //             data:"school=" + streetid + "&grade=" + gradeid + "&classname=" + classnameid + "&remark=" +remark,
	             
	 //             success: function(data) {
	 //             	alert("111");
		// 	     },
		// 	     error: function (XMLHttpRequest, textStatus, errorThrown) {
		// 		}
	 //         });
		// },

		confirm: function() {
			var streetid = this.$el.find('.selecter-trigger-street input').attr('data-id');
			var gradeid = this.$el.find('.selecter-trigger-grade input').attr('data-id');
			var classid = this.$el.find('.selecter-trigger-class input').attr('data-id');
			var streetstr = this.$el.find('.selecter-options-street .selected').text();
			var gradestr = this.$el.find('.selecter-options-grade .selected').text();
			var classnamestr = this.$el.find('.selecter-options-class .selected').text();
			var remark = this.$el.find('#classintro').val();
			var data = {
					"createdby":global.usrinfo.id,
	             	"school":streetid,
	             	"grade": gradeid,
	             	"class": classid,
	             	"remark": remark,
	             	"classname": streetstr+""+gradestr+""+classnamestr 
	             };
			 $.ajax({
	             type: "post",
	             //url:global.url + "/Curry/tnclass/createTnClass",
	             url:"login.html",
	             dataType:"json", 
	             data: {tnClass: JSON.stringify(data)},

	             //data:"school=" + streetid + "&grade=" + gradeid + "&classname=" + classnameid,
	             
	             success: function(data) {
					console.log(data)			     },
			     error: function (XMLHttpRequest, textStatus, errorThrown) {
				}
	         });
		},
		renderStreet: function(){
			this.setCollection({"categoryname": "篮球吧","id":global.usrinfo.streetid});
			
			_.each(this.collection.models, function(item) {
				this.renderStreetItem(item);
			}, this);
			//下拉框初始化方法
			selecter();
		},
		renderStreetItem: function(item){
			var qunCatalogView = new QunCatalogView({
				model:item
			});
			var options = qunCatalogView.render().el;
			this.$el.find(".selecter-options-street").append(options);
		},

		renderGrade: function(){
			this.setCollection(addstreetdata1);
			
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
			this.setCollection(addstreetdata2);	
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
     return CreateStreetLayerView;
 });