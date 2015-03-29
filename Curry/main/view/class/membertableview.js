/*
* 班级成员内容模块
*/

define(['backbone',
	'model/class/membermodel',
	'view/class/batchregisterview',
	'text!tpl/class/membercontpl.html',
	'text!tpl/class/memberitemtpl.html',
	'global'], function(Backbone,MemberCollection, BatchContentView, contpl, itemtpl, global) {   
    // 访问元素视图
    var MemberItemView = Backbone.View.extend({
    	//el:".tbody",
		tagName: 'tr',
		template: _.template(itemtpl),
		initialize: function(){
			//self =this;
			//this.listenTo(this.model, "change", this.render);
		},
		render: function() {
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		},
		events: {
			
		}

	});

	var MemberTableView = Backbone.View.extend({
		el:".categoryShow",
		memberTemplate: _.template(contpl),
		initialize: function() {
			//this.containerBuild();
        },
        setData: function(data){
			//this.collection = new MemberCollection(data);
			this.data = data;
		},
        events: {
			"click .category-title" : "setStyle",
			"click .batchbtn" : "batchBtn",
			"click .all" : "getAllData",
			"click .student" : "getStudentData",
			"click .teacher" : "getTeacherData",
			"click .parent" : "getParentData",
			"click .modifycard": "modifyCard"
		},
		containerBuild: function() {
			this.$el.html(this.memberTemplate(this.data));
		},
		render: function() {			
			_.each(this.collection.models, function(item) {
				this.renderItem(item);
			}, this);

		},
		renderItem: function(item) {
			var memberItemView = new MemberItemView({
				model: item
			});
			this.$el.find("tbody").append(memberItemView.render().el);
		},
		setParent : function(parent){
			this.parent = parent;
		},
		//修改群名片
		modifyCard : function(e) {
			$(e.target).parent().parent().find(".groupmember").focus();
		},
		//批量注册童年号
        batchBtn: function() {
        	var batchContentView = new BatchContentView();
            batchContentView.render();
        },
        setStyle : function (e) {
			$(".category-title li").removeClass("selected-role");
			$(e.target).addClass("selected-role");
			
		},
		getAllData: function(){
			this.$el.find("tbody").empty();
			this.collection = new MemberCollection(this.data.all);
			this.render();
		},
		getStudentData: function(){
			this.$el.find("tbody").empty();
			this.collection = new MemberCollection(this.data.student);
			this.render();
		},
		getTeacherData: function(){
			this.$el.find("tbody").empty();
			this.collection = new MemberCollection(this.data.teacher);
			this.render();
		},
		getParentData: function(){
			this.$el.find("tbody").empty();
			this.collection = new MemberCollection(this.data.parent);
			this.render();
		}
	});

     return MemberTableView;
 });