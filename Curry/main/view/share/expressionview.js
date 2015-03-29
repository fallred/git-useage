define([
	'backbone',
	'text!tpl/share/expressiontpl.html',
	'global'
	], function(Backbone,exptpl,global) {
	
	var self,d,divobject,divmark;
	var ExpressionView = Backbone.View.extend({
		initialize: function(){
			self = this;
		},
		events: {
			"click .expression-tab li[role='presentation'] a[data-toggle='tab']":"renderEmoji",
			"click .expicon img":"sendExp"
			
		},
		render: function() {
			this.$el.html(exptpl);
			this.$el.find("li[role='presentation'] a[data-toggle='tab']").eq(0).click();
		},
		//传入弹窗打开位置与表情添加文本框
		expressionDialog: function(position,object,mark){
			this.render();
			d = dialog({
				id: 'expressiondialog',
				align: position,
				content: this.$el,
				quickClose: true,
				width: 360,
				height:220,
				onremove: function () {
			        self.$el.remove();
			    },
			});
			divobject = object;
			divmark = mark;
			d.show(document.getElementById(divmark));
    	},
    	renderEmoji: function(e){
    		var emosIndex = $(e.target).attr("data-index");
    		//判断表情列表是否已经渲染，否则渲染表情
    		if (this.$el.find(".tab-pane[role='tabpanel']").eq(emosIndex).html().length <= 0){
    			var emos = getEmojiList()[emosIndex];//此处按需是否生成所有emoji
				var html = $('<table>');
				for (var j = 0; j < emos.length; j++) {
					var emo = emos[j];
					var data = 'data:image/png;base64,' + emo[2];
					if (j % 13 == 0) {
						html.append('<tr>');
					}
					html.find('tr').last().append('<td class="expicon"><img style="display: inline;vertical-align: middle;" src=' + data + ' utf8="&#x' + emo[1] + ';" unicode16='+ emo[1] +' /></td>');
				 
				}
				this.$el.find(".tab-pane[role='tabpanel']").eq(emosIndex).html(html);
    		}
    		
    	},
		sendExp: function(e){
			var what = $(e.target).attr("utf8");
	        var html = ioNull.emoji.parse(what);
	        d.close();
	        if(divobject){
	        	$(divobject).focus();
    			insertHtmlAtCaret(html);
	        }
	        
		}
     });
     
     
     return ExpressionView;
 });