define([
	'backbone',
	'view/share/expressionview',
	'text!tpl/share/forwardtpl.html',
	'global'
	], function(Backbone,ExpressionView,tpl,global) {
	
	var self,d;
	var ForwardView = Backbone.View.extend({
		tagName: 'div',
		className: 'blog-forward fn-clear',
		initialize: function(){
			self = this;
		},
		render: function(){
			this.$el.html(tpl);
		},
		events: {
			"click .btn-exp":"expression",
			"keypress #forwardsend":"call",
			"click .msgsendbtn":"postMsg",
		},
		dialog: function(blogId){
			d = dialog({
				id: 'forwardialog',
				title: '转发到朋友圈',
			    content: this.$el,
				width: 400,
				height:100,
				onremove: function () {
			        self.$el.remove();
			    },
			});
			d.showModal();
			this.render();
    	},
    	expression: function(){
    		var expressionView = new ExpressionView();
    		expressionView.expressionDialog("bottom left","#forwardsend","forwardmark");
    	},
    	call: function(){
			// var emojis = $.map(getEmojiList, function(value, i) {
				// return {key: value, name:value}
				// });
// 
		    // var emoji_config = {
		      // at: ":",
		      // data: emojis,
		      // displayTpl: "<li>${name} <img src='https://assets-cdn.github.com/images/icons/emoji/${key}.png'  height='20' width='20' /></li>",
		      // insertTpl: ':${key}:',
		      // delay: 400
		    // }
			var names = _.flatten(_.pluck(global.friends, 'member'));
			var names = $.map(names,function(value,i) {
				return {'id':value.id,'name':value.nickname,'tnno':value.tnno};
			});

		    var at_config = {
			    at: "@",
			    data: names,
			    displayTpl: "<li data-id='${id}'>${name} <small>${tnno}</small></li>",
			    limit: 200
		    };
			$('#forwardsend').atwho(at_config);
			
		},
		postMsg: function(){
    		//定义变量，过滤出图片以外的所有html标签
			var forwardinput = this.$el.find("#forwardsend"),forwardmsg = forwardinput.html().replace(/<(?!img)[^>]*>/gi,""),
    		call = [];
    		_.each(this.$el.find("#forwardsend span.atwho-inserted"),function(item){
    			call.push(Number(item.dataset.id));
    		});
			var expfaces = forwardinput.find("img.expface[unicode]"), count = expfaces.length;
			for ( i=0; i < count; i++ ) {
				var ucode = "&#x" + expfaces.eq(i).attr("unicode") + ";";
				forwardmsg = forwardmsg.replace(/<img.*?class=\"expface\".*?(?:>|\/>)/i, ucode);
				
			}
			var forward = {
				userId: global.usrinfo.id,
				blogId: this.model.get("id"),
				transmitcontent: forwardmsg,
				call: call
			};
			$.ajax({
	            type: "post",
	            url: global.url + "/Curry/blog/updateBlogTransmitByBlogId",
	            data: {forward: JSON.stringify(forward)},
	            success: function(data) {
	            	console.log(data)
	            	d.close().remove();
         			self.model.set({blogtotaltransmit:data});
         			self.success();
			    },    
			    error: function (XMLHttpRequest, textStatus, errorThrown) {
				}
				
	        });
			

		},
		success: function(){
			var d = dialog({
				id: 'okdialog',
				title: '转发成功',
			    content: '这篇文章已转发到朋友圈',
			});
			d.showModal();
			setTimeout(function () {
			    d.close().remove();
			}, 1000);
		}
     });
     
     
     return ForwardView;
 });