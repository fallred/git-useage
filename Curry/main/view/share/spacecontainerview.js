define(['backbone', 'view/share/spaceview',  'global'], function(Backbone, SpaceView,  global) {
	var UserModel = Backbone.Model.extend({
		defaults : {
			photo : "http://localhost:8080/Curry/images/defaultp.jpg",
			nickname : null,
			spacebg : "http://localhost:8080/Curry/images/1111.jpg",
			todayVisit : null,
			visitCount : null,
			blogamount : null,
			friendamount : null,
			city : null,
			schoolid : null,
			remark : null,
			remarkname : null,
			interest : null,
			tnno : null,
			spacelg : "http://localhost:8080/Curry/images/2222.jpg",
			//群成员邀请控制属性
			draged : "false",
			gender : null,
		}
	});

	var SpacecontainerView = Backbone.View.extend({
		render : function() {
			//只存第一次进入前的值
			var modelParam = new UserModel();
			this.space(modelParam);

			return this;
		},
		space : function(modelParam) {
			var spaceView = new SpaceView({
				model : modelParam
			});
			
				$.ajax({
					type : "post",
					url : global.url + "/Curry/relation/checkIfFriendAndGetUser?userId=" + global.usrinfo.id + "&fid=" + receiverId,
					success : function(data) {
						spaceView.model.set(data, {
							silent : true
						});
						spaceView.render();

						console.log(data)

					},
					error : function(XMLHttpRequest, textStatus, errorThrown) {
					}
				});
			
			spaceView.setParent(this);
			global.currentChat = null;
		},
	});
	return SpacecontainerView;
}); 