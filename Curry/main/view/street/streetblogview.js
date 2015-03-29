define(['backbone','view/share/blogpraiseview','view/share/blogcommentview', 'view/street/currentstreetview','text!tpl/street/streetblogtpl.html'], function(Backbone,BlogPraiseView,BlogCommentView,CurrentStreetView,tpl) {   
    // 访问元素视图
    var blogPraiseView;
	var StreetBlogView = Backbone.View.extend({
		 el: $('#container-fluid'),
		invitationDetailtemplate: _.template(tpl),
		initialize:function(){
			var blogPraiseView = new BlogPraiseView();
			//this.listenTo(this.model, "change", this.render);
		},
		render: function() {
            this.$el.html("");
            var container = $('<div class="category"></div><div class="categoryShow"></div>');
            this.$el.html(container);
            this.getCurrentStreet();
            this.getInvitationDetail();
			return this;
		},
		events: {
			"click .btn-close": "closePage",
			"click .btn-praise": "praise"
		},
		getCurrentStreet:function(){
            var currentStreetView = new CurrentStreetView();
            currentStreetView.setModel(currentstreetdata);
            currentStreetView.setParent(this.parent);
            currentStreetView.render();
           // this.$el.find(".category").html(currentStreetView.$el);
        },
        getInvitationDetail: function(){
            this.$el.find(".categoryShow").html(this.invitationDetailtemplate(this.model.toJSON()));
			this.getPraised();
			this.getComment();
        },
		closePage: function(){
			this.$el.empty();
		},
		praise: function(){
			var data = {nickname:"Superwen",photo:"http://localhost:8080/Curry/images/userp-mid4.jpg",id:1};
			blogPraiseView.insertCollection(data,0);
			blogPraiseView.render();
			this.model.set({
				praise: 1
			});
		},
		getPraised: function(){
			var dataCollection = [{nickname:"Superwen2",photo:"http://localhost:8080/Curry/images/userp-mid3.jpg",id:2},{nickname:"Superwen",photo:"http://localhost:8080/Curry/images/userp-l.jpg",id:3},{nickname:"Superwen3",photo:"http://localhost:8080/Curry/images/userp-mid2.jpg",id:4}];
			blogPraiseView = new BlogPraiseView();
			blogPraiseView.setCollection(dataCollection);
			blogPraiseView.render();
			
		},
		getComment: function(){
			var dataCollection = [{
				nickname:"21312",
				photo:"http://localhost:8080/Curry/images/userp-mid3.jpg",
				id:1,
				content:"否的份上",
				date:"2015-02-06 11:20",
				subcomment: [{
					nickname:"大法师",
					photo:"http://localhost:8080/Curry/images/userp-mid2.jpg",
					id:11,
					content:"否的份上",
					date:"2015-02-06 11:20",
				},{
					nickname:"大法师",
					photo:"http://localhost:8080/Curry/images/userp-mid2.jpg",
					id:12,
					content:"否的份上",
					date:"2015-02-06 11:20",
				}]
			},{
				nickname:"极乐空间",
				photo:"http://localhost:8080/Curry/images/userp-l.jpg",
				id:2,
				content:"否的份上",
				date:"2015-02-06 11:20",
				subcomment: [{
					nickname:"大法师",
					photo:"http://localhost:8080/Curry/images/userp-mid2.jpg",
					id:21,
					content:"否的份上",
					date:"2015-02-06 11:20",
				},{
					nickname:"大法师",
					photo:"http://localhost:8080/Curry/images/userp-mid2.jpg",
					id:22,
					content:"否的份上",
					date:"2015-02-06 11:20",
				}]
			}];
			blogCommentView = new BlogCommentView();
			blogCommentView.setCollection(dataCollection);
			blogCommentView.render();
		}
	});
     
     return StreetBlogView;
 });