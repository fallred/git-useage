/*
* 朋友圈主页面
* 基于AMD (Asynchronous Module Definition) 规范实现
*/
define(['backbone', 
            'view/relation/relationinfoview',
            'view/relation/relationventview',
            'view/relation/relationbrowseview', 
            'global'], 
    function(Backbone, RelationInfoView , RelationVentView, RelationBrowseView ,global) {
       var self;

    var RelationView = Backbone.View.extend({
        el: $("#main-container"),
        containerBuild : function(){
            var container = $('<div class="category fn-clear"></div><div class="categoryShow"></div>');
            listcontainer = $('<div class="list-container"></div>');
            this.$el.find(".main-list").attr("id","relationlist").html(listcontainer);
        },
        initialize: function(){
            this.containerBuild();
            self = this;
            this.render();
        },

        render: function(){ 
            this.getRelationinfo();
            this.showRelation();
        },
        events: {
            "click .list-relation": "showRelation",
            "click .list-browse": "showBrowse",
            "click .list-interfix": "showInterfix",
            "click .relation-item ul li": "addstyle",
        },
        //添加样式
        addstyle : function(e) {
            $(".relation-item ul li").removeClass("infoSelected");
            $(e.target).addClass("infoSelected");
        },
        //左侧信息
        getRelationinfo : function(){
            var relationInfoView  = new RelationInfoView ();
                relationInfoView.setModel();
                relationInfoView .render();

        },
        //吐槽爆料
        showRelation : function(){
            var relationVentView = new RelationVentView();
                relationVentView.render();
            
        },
        //随便看看
        showBrowse : function() { 
            var relationBrowseView = new RelationBrowseView();
                relationBrowseView.render();
        },
        //与我相关
        showInterfix : function() {
            // this.$el.find("#container-fluid").html("afsfds");
            var relationVentView = new RelationVentView();
                relationVentView.render();
        }
  });


    return RelationView;
});
