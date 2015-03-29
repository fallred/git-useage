define(['backbone','model/share/usermodel','view/share/quneditview','text!tpl/share/qundetailcardtpl.html','text!tpl/share/qunmgmembertpl.html','global',], function(Backbone,UserCollection,QunEditView,tpl,membertpl,global) {   
    // 访问元素视图
    var self,d;
    var QunMgMemberView = Backbone.View.extend({
		tagName: 'div',
		className: 'list-item',
		template: _.template(membertpl),
		render: function() {
			
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		},
	});
	var QunDetailCardView  = Backbone.View.extend({
		tagName: 'div',
		className: 'fn-clear',
		template: _.template(tpl),
		initialize: function(){
			self =this;
			this.listenTo(this.model, "change", this.render);
		},
		setCollection: function(data){
			this.collection = new UserCollection(data);
		},
		events: {
			"click .btn-edit": "qunEdit",
		},
		dialog: function(){
			this.render();
			d = dialog({
				id:'usrdetailcarddialog',
			    title: '',
			    content: this.el,
			    okValue: '完成',
			    ok: function(){},
			    width: 350
			});
			d.showModal();
			return d;
			//修改el指向，承接事件代理
			//this.setElement($(".usrdetailcard"));
		},
		render: function(){
			this.$el.html(this.template(this.model.toJSON()));
			this.setCollection(this.model.get("member"));
			_.each(this.collection.models, function(item) {
				this.renderItem(item);
			}, this);
			return this;
		},
		renderItem: function(item){
			var qunMgMemberView = new QunMgMemberView({
				model:item
			});
			this.$el.find(".mgmembercontainer").append(qunMgMemberView.render().el);
			
		},
		qunEdit: function(){
			d.close().remove();
			var qunEditView = new QunEditView({
				model:this.model
			});
			qunEditView.dialog();
			
		},

	});
     
     return QunDetailCardView;
 });