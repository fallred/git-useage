define(['backbone','text!tpl/share/usrdetailcardtpl.html','global',], function(Backbone,tpl,global) {   
    // 访问元素视图
    var self;
	var UsrDetailCardView  = Backbone.View.extend({
		tagName: 'div',
		className: 'fn-clear',
		template: _.template(tpl),
		initialize: function(){
			self =this;
			this.listenTo(this.model, "change", this.render);
		},
		// setCollection: function(data){
			// this.collection = new SelectorCollection(data);
		// },
		events: {
			// "change select.selectgroup": "newGroup",
			"click .okbtn": "postData",
			"click .remarkbtn": "editRemark",
			"click .cancelbtn": "cancelRemark"
		},
		dialog: function(){
			this.render();
			if(global.relation == false){
				this.$el.find("#usrrelation").prepend('<li><a href="javascript:void(0)" class="btn btn-r-r-md">加为好友</a></li>');
			}
			
			var d = dialog({
				id:'usrdetailcarddialog',
			    title: '',
			    content: this.$el,
			    okValue: '完成',
			    ok: function(){},
			    width: 400,
			    onremove: function () {
			        self.$el.remove();
			    },
			});
			d.showModal();
		},
		render: function(){
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		},
		editRemark: function(){
			var tempval = this.$el.find(".remarkname > div").text(),
			temptpl = $("<div><input type='text' placeholder=" + tempval +"></div><a href='javascript:void(0)' class='btn btn-r-r-xs okbtn'>确定</a><a href='javascript:void(0)' class='btn btn-r-b-xs cancelbtn'>取消</a>");
			this.$el.find(".remarkname").html(temptpl);
		},
		postData: function(){
			var fid = this.model.get("id"),
			remarkval = this.$el.find(".remarkname input").val();
			$.ajax({
	            type: "post",
	            url: global.url + "/Curry/relation/remarkFriend?userId="+global.usrinfo.id,
	            data: "fid=" + fid + "&remarkname=" + remarkval,
	            success: function(data) {
	             	self.model.set({
	             		remarkname: remarkval
	             	});
			    },    
			    error: function (XMLHttpRequest, textStatus, errorThrown) {
				}
	        });
		},
		cancelRemark: function(){
			this.render();
		}

	});
     
     return UsrDetailCardView;
 });