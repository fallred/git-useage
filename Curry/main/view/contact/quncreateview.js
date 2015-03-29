define(['backbone','model/share/selectormodel','view/contact/quncatalogview','view/contact/qundragfriendview','text!tpl/contact/quncreatetpl.html','text!tpl/contact/quninvitetpl.html','global',], function(Backbone, SelectorCollection,QunCatalogView,ContactsFriendView,createtpl,invitetpl,global) {   
    // 访问元素视图
    var self,usrid=[],newgroup=[],
    	qunObj = {};
	var QunCreateView  = Backbone.View.extend({
		tagName: 'div',
		className: 'quncreate',
		initialize: function(){
			self =this;
			//清空群成员选择
			//global.qundrag =[];
			// this.getData();
			// this.$el.listenTo(".newgroupbtn","click", this.newGroup());
		},
		setCollection: function(data){
			this.collection = new SelectorCollection(data);
		},
		events: {
			"change .quncreatelist input,.quncreatelist textarea": "vl",
		},
		render: function(){
			this.$el.html(createtpl);
			
			this.getCatalog();
			
			var d = dialog({
				id:'quncreatedialog',
			    title: '创建群',
			    //不取innerHTML导致弹窗消失后el元素依然留在页面上
			    content: this.$el,
			    button: [
			        {	
			        	id: 'pretbtn',
			            value: '上一步',
			            callback: function () {
			                this.width(300);
			                self.$el.html(createtpl);
			                self.getCatalog();
			                this.f$('nextbtn').show().attr("disabled","");
			                this.f$('pretbtn').hide();
			                this.f$('cancel').show();
			                this.f$('ok').hide();
			                //清空群成员选择
							global.qundrag =[];
			                return false;
			            },
			        },
			        {	
			        	id: 'nextbtn',
			            value: '下一步',
			            callback: function () {
			            	//获取建群信息
			            	qunObj.name = this._popup.find('#qunname').val();
			            	qunObj.type = this._popup.find('.quntype .nowradio[checked=checked]').val();
			            	qunObj.category = this._popup.find('.selecter-trigger input').attr('data-id');
			            	qunObj.intro = this._popup.find('#qunintro').val();
			            	qunObj.member = [];
			            	this.width(600);
			                self.$el.html(invitetpl);
			                var contactsFriendView = new ContactsFriendView();
				            contactsFriendView.setCollection(global.friends);
				            contactsFriendView.render();
				            self.$el.find(".listcontainer").html(contactsFriendView.$el);
			                this.f$('pretbtn').show();
			                this.f$('nextbtn').hide();
			                this.f$('ok').show();
			                this.f$('cancel').hide();
			                //清空群成员选择
							global.qundrag =[];
							
			    			return false;
			            },
			            disabled: true,
			            autofocus: true
			        },
			        {
			            id: 'ok',
			            value: '完成创建',
			           	callback: function () {
			           		self.postData();
							global.qundrag =[];
			            },
			             autofocus: true
			        },
			        {
			            id: 'cancel',
			            value: '取消',
			           	callback: function () {
			           		//清空群成员选择
							global.qundrag =[];
			            },
			        }
			    ],
			    onshow: function () {
			        this.f$('pretbtn').hide();
			        this.f$('ok').hide();
			    },
			    width: 300
			});
			d.showModal();
			
			
			//修改el指向，承接事件代理（导致itemview事件绑定失效）
			// this.setElement($(".groupmglist"));
			
			return this;
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
		postData: function(){
			this.getData();
			console.log(JSON.stringify(qunObj));
			$.ajax({
	            type: "post",
	            url: global.url + "/Curry/group/greateGroup",
	            dataType:"json",      
	            data: {quncreate: JSON.stringify(qunObj)},
	            success: function(data) {
	             	console.log(data.str);
			        self.send(data);
			        
			    },    
			    error: function (XMLHttpRequest, textStatus, errorThrown) {
				}
			
         	});
		},
		send: function(data){
			var d = dialog({
			    title: '提示',
			    content: '<span style="display:inline-block;line-height:50px;margin-left:10px">'+ data.str +'</span>',
			    cancelValue: '完成',
			    cancel: function () {
			    	this.remove();
			    },
			});
			d.showModal();
			setTimeout(function () {
			    d.close().remove();
			}, 1000);
		},
		getData: function(){
			_.each(global.qundrag,function(item){
				qunObj.member.push(item.get("id"));
			});
		},
		vl:function(){
			qunObj.name = this.$el.find('#qunname').val();
        	qunObj.type = this.$el.find('.quntype .nowradio[checked=checked]').val();
        	qunObj.category = this.$el.find('.selecter-trigger input').attr('data-id');
        	qunObj.intro = this.$el.find('#qunintro').val();
        	qunObj.userId = global.usrinfo.id;
        	if (qunObj.name.length > 0 && qunObj.type > 0 && qunObj.category > 0 && qunObj.intro.length > 0){
        		$("button[i-id=nextbtn]").removeAttr("disabled");
        	}else{
        		$("button[i-id=nextbtn]").attr("disabled","");
        	}
		},
		
	});
     
     return QunCreateView;
 });