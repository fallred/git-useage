//群资料编辑
define(['backbone','model/share/selectormodel','view/contact/quncatalogview','text!tpl/share/qunedittpl.html','global',], function(Backbone,SelectorCollection,QunCatalogView,edittpl,global) {   
    // 访问元素视图
    var self,newgroup=[],
    	qunObj = {};
	var QunEditView  = Backbone.View.extend({
		tagName: 'div',
		className: 'fn-clear',
		template: _.template(edittpl),
		initialize: function(){
			self =this;
			this.listenTo(this.model, "change", this.render);
		},
		setCollection: function(data){
			this.collection = new SelectorCollection(data);
		},
		events: {
			// "change select.selectgroup": "newGroup",
			"change .quncreatelist input,.quncreatelist textarea": "vl",
		},
		dialog: function(){
			this.render();
			var d = dialog({
				id:'quneditdialog',
			    title: '',
			    content: this.el,
			     button: [
			        {
			            id: 'ok',
			            value: '确定',
			           	callback: function () {
			           		qunObj.name = this._popup.find('#qunname').val();
			            	qunObj.type = this._popup.find('.quntype .nowradio[checked=checked]').val();
			            	qunObj.category = this._popup.find('.selecter-trigger input').attr('data-id');
			            	qunObj.intro = this._popup.find('#qunintro').val();
			            	newgroup.push(qunObj);
			           		self.postData();
			            },
			            autofocus: true,
			            disabled: true
			        },
			        {
			            id: 'cancel',
			            value: '取消',
			           	callback: function () {
			           		//清空群成员选择
			            },
			        }
			    ],
			    width: 300
			});
			d.showModal();
			
			//修改el指向，承接事件代理
			//this.setElement($(".usrdetailcard"));
		},
		render: function(){
			this.$el.html(this.template(this.model.toJSON()));
			this.getCatalog();
			return this;
		},
		getCatalog: function(){
			$.ajax({
             type: "GET",
             url: global.url + "/Curry/group/getAllGroupCategory",
             success: function(data) {
             	global.qunsort = data;
	            self.renderGroup();
		     },
		     error: function (XMLHttpRequest, textStatus, errorThrown) {
			}
         });
		},
		renderGroup: function(){
			this.setCollection(global.qunsort);
			
			_.each(this.collection.models, function(item) {
				this.renderGroupItem(item);
			}, this);
			//下拉框初始化方法
			selecter();
		},
		renderGroupItem: function(item){
			var qunCatalogView = new QunCatalogView({
				model:item
			});
			var options = qunCatalogView.render().el;
			this.$el.find(".selecter-options").append(options);
		},
		postData: function(){
			//需推送现有群id
			this.getData();
			console.log(JSON.stringify(newgroup));
			$.ajax({
	            type: "post",
	            url: global.url + "/Curry/group/greateGroup",
	            dataType:"json",      
	            data: {quncreate: JSON.stringify(newgroup)},
	            success: function(data) {
	             	console.log(data.str);
			        self.send(data);
			        
			    },    
			    error: function (XMLHttpRequest, textStatus, errorThrown) {
				}
			
         	});
		},
		vl:function(){
			qunObj.name = this.$el.find('#qunname').val();
        	qunObj.type = this.$el.find('.quntype .nowradio[checked=checked]').val();
        	qunObj.category = this.$el.find('.selecter-trigger input').attr('data-id');
        	qunObj.intro = this.$el.find('#qunintro').val();
        	qunObj.userId = global.usrinfo.id;
        	if (qunObj.name.length > 0 && qunObj.type > 0 && qunObj.category > 0 && qunObj.intro.length > 0){
        		$("button[i-id=ok]").removeAttr("disabled");
        	}else{
        		$("button[i-id=ok]").attr("disabled","");
        	}
		},

	});
     
     return QunEditView;
 });