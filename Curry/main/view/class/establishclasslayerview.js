/*
* 创建班级弹层模块
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
	//'view/class/establishdetailview',
	'text!tpl/class/establishclasslayertpl.html',
	'text!tpl/class/establishdetailtpl.html',
	'global',], 
	function(Backbone ,SelectorCollection, QunCatalogView, tpl, detailtpl, global) {   
    // 访问元素视图
    classObj = {};
	var EstablishClassLayerView  = Backbone.View.extend({
		tagName: 'div',
		className: 'fn-clear classcreatelist',
		// addfriendTemplate: _.template(tpl),
		initialize: function(){
			self =this;
		},
		setCollection: function(data){
			this.collection = new SelectorCollection(data);
		},
		events: {
			"change .classcreatelist input": "vl"
		},
		render: function(){
			this.$el.html(tpl);
			this.renderSchool();
			this.renderGrade();
			this.renderClass();

			var d = dialog({
				id: "establishclass",
			    title: '创建班级',
			    content: this.$el,
			    // okValue: '确定',
			    // ok: function() {
			    // 	self.confirm();
			    // },
			    button: [
			    	{
			    		id: 'pretbtn',
			            value: '上一步',
			            callback: function () {
			            	this.width(400);
			            	self.$el.html(tpl);
			            	self.renderSchool();
							self.renderGrade();
							self.renderClass();
			                //this.f$('nextbtn').show().attr("disabled","");
			                this.f$('nextbtn').show();
			                this.f$('pretbtn').hide();
			                this.f$('cancel').show();
			                this.f$('ok').hide();
			                return false;
			            },
			    	},
			    	{	
			        	id: 'nextbtn',
			            value: '下一步',
			            callback: function () {
			            	this.width(600);
			            	//self.confirm();
							var schoolstr = this._popup.find('.selecter-options-school .selected').text();
							var gradestr = this._popup.find('.selecter-options-grade .selected').text();
							var classnamestr = this._popup.find('.selecter-options-class .selected').text();
							classObj.createdby = global.usrinfo.id;
							classObj.school = this._popup.find('.selecter-trigger-school input').attr('data-id');
			             	classObj.grade =  this._popup.find('.selecter-trigger-grade input').attr('data-id');
			             	classObj.class =  this._popup.find('.selecter-trigger-class input').attr('data-id');
			             	classObj.classname =  schoolstr+""+gradestr+""+classnamestr;  
			             	console.log(JSON.stringify(classObj));  

			             	self.$el.html(detailtpl);
			                self.$el.find('#realname').val(global.usrinfo.realname);
			            	self.$el.find('#phonenumber').val(global.usrinfo.mobile);    	
			            	this.f$('pretbtn').show();
			                this.f$('nextbtn').hide();
			                this.f$('ok').show();
			                this.f$('cancel').hide();
			    			return false;
			            },
			            //disabled: true,
			            autofocus: true
			        },
			        {
			            id: 'ok',
			            value: '完成创建',
			           	callback: function () {
			            	self.complete();

			            },
			             autofocus: true
			        },
			        {
			            id: 'cancel',
			            value: '取消',
			           	callback: function () {

			            },
			        }
			    ],
			    onshow: function () {
			        this.f$('pretbtn').hide();
			        this.f$('ok').hide();
			    },
			    width: 400
			});
			d.showModal();
			return this;
		},
		//点击下一步
		confirm: function() {
			var schoolid = this.$el.find('.selecter-trigger-school input').attr('data-id');
			var gradeid = this.$el.find('.selecter-trigger-grade input').attr('data-id');
			var classid = this.$el.find('.selecter-trigger-class input').attr('data-id');
			var schoolstr = this.$el.find('.selecter-options-school .selected').text();
			var gradestr = this.$el.find('.selecter-options-grade .selected').text();
			var classnamestr = this.$el.find('.selecter-options-class .selected').text();
			var data = {
					"createdby":global.usrinfo.id,
	             	"school":schoolid,
	             	"grade": gradeid,
	             	"class": classid,
	             	"classname": schoolstr+""+gradestr+""+classnamestr 
	             }
			 $.ajax({
	             type: "post",
	             url:global.url + "/Curry/tnclass/createTnClass",
	             dataType:"json", 
	             data: {tnClass: JSON.stringify(data)},

	             //data:"school=" + schoolid + "&grade=" + gradeid + "&classname=" + classnameid,
	             
	             success: function(data) {
					console.log(data)			     
				},
			     error: function (XMLHttpRequest, textStatus, errorThrown) {
				}
	         });
		},
		//完成创建
		complete: function() {
	  		classObj.realname = this.$el.find('#realname').val();
			classObj.mobile = this.$el.find('#phonenumber').val();
			classObj.telephone = this.$el.find('#telephone').val();
			 $.ajax({
	             type: "post",
	             url:global.url + "/Curry/tnclass/createTnClass",
	             //url:"login.html",
	             dataType:"json", 
	             data: {tnClass: JSON.stringify(classObj)},

	             //data:"school=" + schoolid + "&grade=" + gradeid + "&classname=" + classnameid,
	             
	             success: function(data) {
					console.log(data)			     
				},
			     error: function (XMLHttpRequest, textStatus, errorThrown) {
				}
	         });
		},
		//学校
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

		//年级
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
		//班级
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
		},
		vl: function() {
			var school = this.$el.find('.selecter-trigger-school input').attr('data-id');
         	var grade =  this.$el.find('.selecter-trigger-grade input').attr('data-id');
         	var classid =  this.$el.find('.selecter-trigger-class input').attr('data-id');
         	if(school > 0 && grade > 0 && classid > 0){
         		$("button[i-id=nextbtn]").removeAttr("disabled");
        	}else{
        		$("button[i-id=nextbtn]").attr("disabled","");
        	}
		}
				
	});
     
     return EstablishClassLayerView;
 });