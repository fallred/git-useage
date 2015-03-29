/*
* 街区动态
*/
var dynamicstreetdata = [{
    "streettype":"奔跑吧兄弟",
    "title": "慢慢享受生活——我的厦门之旅",
    "nickName": "陈晓星星",
    "date":"10:05:40",
    "content":"某小学关于举行运动会的通知 经学校研究决定将于本月月底举行春季运动会,具体比赛项目另行通知,望各位老师及同学高度重视,积极参与,各班报名截止日期;某小学关于举行运动会的通知 经学校研究决定将于本月月底举行春季运动会,具体比赛项目另行通知,望各位老师及同学高度重视,积极参与,各班报名截止日期;某小学关于举行运动会的通知 经学校研究决定将于本月月底举行春季运动会,具体比赛项目另行通知,望各位老师及同学高度重视,积极参与,各班报名截止日期;某小学关于举行运动会的通知 经学校研究决定将于本月月底举行春季运动会,具体比赛项目另行通知",
    "mPhoto": "http://localhost:8080/Curry/images/userpm.jpg",
    "lPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
    "sPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
    "tPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
    "img": "http://localhost:8080/Curry/images/1111.jpg",
    "comment":"0",
    "forwarding":"30",
    "praise":"430",
    "collect":"20",
    "read":"70"
},{
    "streettype":"爸爸去哪儿吧",
    "title": "香港言爱基金捐助",
    "nickName": "阿佛搭",
    "date":"10:05:40",
    "content":"毕节市8所思源实验学校是由有关县（区）政府出资和香港言爱基金捐助新建的九年一贯制义务教育公办寄宿制学校，旨在整体迁移部分处于生态核心保护区和边远贫困地区的农村中小学生到该学校接受较高质量的义务教育，是一项教育移民扶贫工程，是贵州省委、省政府改善民生促进贵州经济社会发展的重点工程。",
    "mPhoto": "http://localhost:8080/Curry/images/userpm.jpg",
    "lPhoto": "http://localhost:8080/Curry/images/userp-s.jpg",
    "sPhoto": "http://localhost:8080/Curry/images/userp-s.jpg",
    "tPhoto": "http://localhost:8080/Curry/images/userp-s.jpg",
    "img": "http://localhost:8080/Curry/images/1111.jpg",
    "comment":"0",
    "forwarding":"30",
    "praise":"430",
    "collect":"20",
    "read":"70"
}];

//全部帖子数据
var invitationdata1 = [{
    "streettype":"糯米吧",
    "title": "慢慢享受生活——我的厦门之旅",
    "nickName": "陈晓星星",
    "date":"10:05:40",
    "content":"某小学关于举行运动会的通知 经学校研究决定将于本月月底举行春季运动会,具体比赛项目另行通知,望各位老师及同学高度重视,积极参与,各班报名截止日期;某小学关于举行运动会的通知 经学校研究决定将于本月月底举行春季运动会,具体比赛项目另行通知,望各位老师及同学高度重视,积极参与,各班报名截止日期;某小学关于举行运动会的通知 经学校研究决定将于本月月底举行春季运动会,具体比赛项目另行通知,望各位老师及同学高度重视,积极参与,各班报名截止日期;某小学关于举行运动会的通知 经学校研究决定将于本月月底举行春季运动会,具体比赛项目另行通知",
    "mPhoto": "http://localhost:8080/Curry/images/userpm.jpg",
    "lPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
    "sPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
    "tPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
    "img": "http://localhost:8080/Curry/images/1111.jpg",
    "comment":"0",
    "forwarding":"30",
    "praise":"430",
    "collect":"20",
    "read":"70"
},{
    "streettype":"天天向上吧",
    "title": "香港言爱基金捐助",
    "nickName": "阿佛搭",
    "date":"10:05:40",
    "content":"毕节市8所思源实验学校是由有关县（区）政府出资和香港言爱基金捐助新建的九年一贯制义务教育公办寄宿制学校，旨在整体迁移部分处于生态核心保护区和边远贫困地区的农村中小学生到该学校接受较高质量的义务教育，是一项教育移民扶贫工程，是贵州省委、省政府改善民生促进贵州经济社会发展的重点工程。",
    "mPhoto": "http://localhost:8080/Curry/images/userpm.jpg",
    "lPhoto": "http://localhost:8080/Curry/images/userp-s.jpg",
    "sPhoto": "http://localhost:8080/Curry/images/userp-s.jpg",
    "tPhoto": "http://localhost:8080/Curry/images/userp-s.jpg",
    "img": "http://localhost:8080/Curry/images/1111.jpg",
    "comment":"0",
    "forwarding":"30",
    "praise":"430",
    "collect":"20",
    "read":"70"
}];
//我的街区
var currentstreetdata = {
    "lPhoto": "http://localhost:8080/Curry/images/userp.jpg",
    "streettype":"篮球吧",
    "classify":"运动 篮球",
    "introduce":"苟延残喘，总觉得自己做的还不够好。对自己，对别人，对时间。节市8所思源实验学校是由有关县（区）政府出资和香港言爱基金捐助新建的九年一贯制义务教育公办寄宿制学校，旨在整体迁移部分处于生态核心保护区和边远贫困地区的农村中小学生到该学校接受较高质量的义务教育，是一项教育移民扶贫工程，是贵州省委、省政府改善民生促进贵州经济社会发展的重点工程",
    "invitation":"999",
    "fans":"999", 
    "focusstatus":true,
};
var blogdata = [{
    "title": "慢慢享受生活——我的厦门之旅",
    "nickName": "陈晓星星",
    "date":"10:05:40",
    "content":"某小学关于举行运动会的通知 经学校研究决定将于本月月底举行春季运动会,具体比赛项目另行通知,望各位老师及同学高度重视,积极参与,各班报名截止日期;某小学关于举行运动会的通知 经学校研究决定将于本月月底举行春季运动会,具体比赛项目另行通知,望各位老师及同学高度重视,积极参与,各班报名截止日期;某小学关于举行运动会的通知 经学校研究决定将于本月月底举行春季运动会,具体比赛项目另行通知,望各位老师及同学高度重视,积极参与,各班报名截止日期;某小学关于举行运动会的通知 经学校研究决定将于本月月底举行春季运动会,具体比赛项目另行通知",
    "mPhoto": "http://localhost:8080/Curry/images/userpm.jpg",
    "lPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
    "sPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
    "tPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
    "img": "http://localhost:8080/Curry/images/1111.jpg",
    "comment":"0",
    "forwarding":"30",
    "praise":"430",
    "collect":"20",
    "read":"70"
},{
    "title": "香港言爱基金捐助",
    "nickName": "阿佛搭",
    "date":"10:05:40",
    "content":"毕节市8所思源实验学校是由有关县（区）政府出资和香港言爱基金捐助新建的九年一贯制义务教育公办寄宿制学校，旨在整体迁移部分处于生态核心保护区和边远贫困地区的农村中小学生到该学校接受较高质量的义务教育，是一项教育移民扶贫工程，是贵州省委、省政府改善民生促进贵州经济社会发展的重点工程。",
    "mPhoto": "http://localhost:8080/Curry/images/userpm.jpg",
    "lPhoto": "http://localhost:8080/Curry/images/userp-s.jpg",
    "sPhoto": "http://localhost:8080/Curry/images/userp-s.jpg",
    "tPhoto": "http://localhost:8080/Curry/images/userp-s.jpg",
    "img": "http://localhost:8080/Curry/images/1111.jpg",
    "comment":"0",
    "forwarding":"30",
    "praise":"430",
    "collect":"20",
    "read":"70"
}];

var dynamiclovestreetdata=[{
    "id":"0",
    "streetname":"篮球吧|吧主"
   },{
    "id":"1",
    "streetname":"篮球吧|吧主"
   },{
    "id":"2",
    "streetname":"奶茶吧"
   },{
    "id":"3",
    "streetname":"天天向上"
    },{
    "id":"4",
    "streetname":"篮球吧"
    },{
    "id":"5",
    "streetname":"童年吧"
    },{
    "id":"6",
    "streetname":"奔跑吧兄弟"
    },{
    "id":"7",
    "streetname":"童年吧"
    },{
    "id":"8",
    "streetname":"奔跑吧兄弟"
    }];

    var invitationdata = [{  
    "streetname":"奔跑吧兄弟",
    "id":"1",   
    "list":[{
        "streettype":"糯米吧1",
        "title": "慢慢享受生活——我的厦门之旅",
        "nickName": "陈晓星星",
        "date":"10:05:40",
        "content":"某小学关于举行运动会的通知 经学校研究决定将于本月月底举行春季运动会,具体比赛项目另行通知,望各位老师及同学高度重视,积极参与,各班报名截止日期;某小学关于举行运动会的通知 经学校研究决定将于本月月底举行春季运动会,具体比赛项目另行通知,望各位老师及同学高度重视,积极参与,各班报名截止日期;某小学关于举行运动会的通知 经学校研究决定将于本月月底举行春季运动会,具体比赛项目另行通知,望各位老师及同学高度重视,积极参与,各班报名截止日期;某小学关于举行运动会的通知 经学校研究决定将于本月月底举行春季运动会,具体比赛项目另行通知",
        "mPhoto": "http://localhost:8080/Curry/images/userpm.jpg",
        "lPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
        "sPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
        "tPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
        "img": "http://localhost:8080/Curry/images/1111.jpg",
        "comment":"0",
        "forwarding":"30",
        "praise":"430",
        "collect":"20",
        "read":"70"
      },{
        "streettype":"天天向上吧1",
        "title": "香港言爱基金捐助",
        "nickName": "阿佛搭",
        "date":"10:05:40",
        "content":"毕节市8所思源实验学校是由有关县（区）政府出资和香港言爱基金捐助新建的九年一贯制义务教育公办寄宿制学校，旨在整体迁移部分处于生态核心保护区和边远贫困地区的农村中小学生到该学校接受较高质量的义务教育，是一项教育移民扶贫工程，是贵州省委、省政府改善民生促进贵州经济社会发展的重点工程。",
        "mPhoto": "http://localhost:8080/Curry/images/userpm.jpg",
        "lPhoto": "http://localhost:8080/Curry/images/userp-s.jpg",
        "sPhoto": "http://localhost:8080/Curry/images/userp-s.jpg",
        "tPhoto": "http://localhost:8080/Curry/images/userp-s.jpg",
        "img": "http://localhost:8080/Curry/images/1111.jpg",
        "comment":"0",
        "forwarding":"30",
        "praise":"430",
        "collect":"20",
        "read":"70"
    }]
 },{ 
    "streetname":"奶茶吧",
    "id":"2",
    "list":[{
        "streettype":"糯米吧2",
        "title": "慢慢享受生活——我的厦门之旅",
        "nickName": "陈晓星星",
        "date":"10:05:40",
        "content":"某小学关于举行运动会的通知 经学校研究决定将于本月月底举行春季运动会,具体比赛项目另行通知,望各位老师及同学高度重视,积极参与,各班报名截止日期;某小学关于举行运动会的通知 经学校研究决定将于本月月底举行春季运动会,具体比赛项目另行通知,望各位老师及同学高度重视,积极参与,各班报名截止日期;某小学关于举行运动会的通知 经学校研究决定将于本月月底举行春季运动会,具体比赛项目另行通知,望各位老师及同学高度重视,积极参与,各班报名截止日期;某小学关于举行运动会的通知 经学校研究决定将于本月月底举行春季运动会,具体比赛项目另行通知",
        "mPhoto": "http://localhost:8080/Curry/images/userpm.jpg",
        "lPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
        "sPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
        "tPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
        "img": "http://localhost:8080/Curry/images/1111.jpg",
        "comment":"0",
        "forwarding":"30",
        "praise":"430",
        "collect":"20",
        "read":"70"
      },{
        "streettype":"天天向上吧2",
        "title": "香港言爱基金捐助",
        "nickName": "阿佛搭",
        "date":"10:05:40",
        "content":"毕节市8所思源实验学校是由有关县（区）政府出资和香港言爱基金捐助新建的九年一贯制义务教育公办寄宿制学校，旨在整体迁移部分处于生态核心保护区和边远贫困地区的农村中小学生到该学校接受较高质量的义务教育，是一项教育移民扶贫工程，是贵州省委、省政府改善民生促进贵州经济社会发展的重点工程。",
        "mPhoto": "http://localhost:8080/Curry/images/userpm.jpg",
        "lPhoto": "http://localhost:8080/Curry/images/userp-s.jpg",
        "sPhoto": "http://localhost:8080/Curry/images/userp-s.jpg",
        "tPhoto": "http://localhost:8080/Curry/images/userp-s.jpg",
        "img": "http://localhost:8080/Curry/images/1111.jpg",
        "comment":"0",
        "forwarding":"30",
        "praise":"430",
        "collect":"20",
        "read":"70"
    }]
},{
    "streetname":"天天向上",
    "id":"3",
    "list":[{
        "streettype":"糯米吧3",
        "title": "慢慢享受生活——我的厦门之旅",
        "nickName": "陈晓星星",
        "date":"10:05:40",
        "content":"某小学关于举行运动会的通知 经学校研究决定将于本月月底举行春季运动会,具体比赛项目另行通知,望各位老师及同学高度重视,积极参与,各班报名截止日期;某小学关于举行运动会的通知 经学校研究决定将于本月月底举行春季运动会,具体比赛项目另行通知,望各位老师及同学高度重视,积极参与,各班报名截止日期;某小学关于举行运动会的通知 经学校研究决定将于本月月底举行春季运动会,具体比赛项目另行通知,望各位老师及同学高度重视,积极参与,各班报名截止日期;某小学关于举行运动会的通知 经学校研究决定将于本月月底举行春季运动会,具体比赛项目另行通知",
        "mPhoto": "http://localhost:8080/Curry/images/userpm.jpg",
        "lPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
        "sPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
        "tPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
        "img": "http://localhost:8080/Curry/images/1111.jpg",
        "comment":"0",
        "forwarding":"30",
        "praise":"430",
        "collect":"20",
        "read":"70"
    },{
        "streettype":"天天向上吧3",
        "title": "香港言爱基金捐助",
        "nickName": "阿佛搭",
        "date":"10:05:40",
        "content":"毕节市8所思源实验学校是由有关县（区）政府出资和香港言爱基金捐助新建的九年一贯制义务教育公办寄宿制学校，旨在整体迁移部分处于生态核心保护区和边远贫困地区的农村中小学生到该学校接受较高质量的义务教育，是一项教育移民扶贫工程，是贵州省委、省政府改善民生促进贵州经济社会发展的重点工程。",
        "mPhoto": "http://localhost:8080/Curry/images/userpm.jpg",
        "lPhoto": "http://localhost:8080/Curry/images/userp-s.jpg",
        "sPhoto": "http://localhost:8080/Curry/images/userp-s.jpg",
        "tPhoto": "http://localhost:8080/Curry/images/userp-s.jpg",
        "img": "http://localhost:8080/Curry/images/1111.jpg",
        "comment":"0",
        "forwarding":"30",
        "praise":"430",
        "collect":"20",
        "read":"70"
   }]
},{
    "streetname":"童年吧",
    "id":"4",
    "list":[{
        "streettype":"糯米吧4",
        "title": "慢慢享受生活——我的厦门之旅",
        "nickName": "陈晓星星",
        "date":"10:05:40",
        "content":"某小学关于举行运动会的通知 经学校研究决定将于本月月底举行春季运动会,具体比赛项目另行通知,望各位老师及同学高度重视,积极参与,各班报名截止日期;某小学关于举行运动会的通知 经学校研究决定将于本月月底举行春季运动会,具体比赛项目另行通知,望各位老师及同学高度重视,积极参与,各班报名截止日期;某小学关于举行运动会的通知 经学校研究决定将于本月月底举行春季运动会,具体比赛项目另行通知,望各位老师及同学高度重视,积极参与,各班报名截止日期;某小学关于举行运动会的通知 经学校研究决定将于本月月底举行春季运动会,具体比赛项目另行通知",
        "mPhoto": "http://localhost:8080/Curry/images/userpm.jpg",
        "lPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
        "sPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
        "tPhoto": "http://localhost:8080/Curry/images/userp-mid3.jpg",
        "img": "http://localhost:8080/Curry/images/1111.jpg",
        "comment":"0",
        "forwarding":"30",
        "praise":"430",
        "collect":"20",
        "read":"70"
    },{
        "streettype":"天天向上吧4",
        "title": "香港言爱基金捐助",
        "nickName": "阿佛搭",
        "date":"10:05:40",
        "content":"毕节市8所思源实验学校是由有关县（区）政府出资和香港言爱基金捐助新建的九年一贯制义务教育公办寄宿制学校，旨在整体迁移部分处于生态核心保护区和边远贫困地区的农村中小学生到该学校接受较高质量的义务教育，是一项教育移民扶贫工程，是贵州省委、省政府改善民生促进贵州经济社会发展的重点工程。",
        "mPhoto": "http://localhost:8080/Curry/images/userpm.jpg",
        "lPhoto": "http://localhost:8080/Curry/images/userp-s.jpg",
        "sPhoto": "http://localhost:8080/Curry/images/userp-s.jpg",
        "tPhoto": "http://localhost:8080/Curry/images/userp-s.jpg",
        "img": "http://localhost:8080/Curry/images/1111.jpg",
        "comment":"0",
        "forwarding":"30",
        "praise":"430",
        "collect":"20",
        "read":"70"
   }]
}];
/*
var invitationlovestreetdata=[{
    "lovestreetid":"love2",
    "lovestreetname":"奔跑吧兄弟"
   },{
    "lovestreetid":"love3",
    "lovestreetname":"奶茶吧"
   },{
    "lovestreetid":"love4",
    "lovestreetname":"天天向上"
    },{
    "lovestreetid":"love5",
    "lovestreetname":"篮球吧"
    },{
    "lovestreetid":"love6",
    "lovestreetname":"童年吧"
    },{
    "lovestreetid":"love7",
    "lovestreetname":"奔跑吧兄弟"
    },{
    "lovestreetid":"love8",
    "lovestreetname":"童年吧"
    },{
    "lovestreetid":"love9",
    "lovestreetname":"奔跑吧兄弟"
    }];*/
//我的街区
define(['backbone', 
        'view/street/dynamicstreetview',
        'view/street/invitationstreetview',
        'view/street/streetblogcontentview',
        'view/street/remindstreetview',
        'view/street/currentstreetview',
        'view/street/createstreetlayerview',
        'view/street/writeblogview',
        'view/street/streetmembertableview',
        'text!tpl/street/mystreettpl.html',
         'text!tpl/street/createstreetsuccess.html',
        'global'], 
function(Backbone,DynamicStreetView,InvitationStreetView,StreetBlogContentView,RemindStreetView,CurrentStreetView,CreateStreetLayerView,WriteBlogView,StreetMemberTableView,tpl,createsuccesstpl,global) {
    var self,flag;
    var MyStreetView = Backbone.View.extend({
	el: "#container-fluid",
    myStreetTemplate: _.template(tpl),
initialize: function(){
    self=this;
    this.$el.off();
// this.streetblogcon=new StreetBlogContentView();
},
setParent:function(parent){
    this.parent=parent;
},
events:{
    "click .category-mystreet": "getDynamicStreet",
    "click .category-invitation": "getInvitationStreet",
    "click .category-remind": "getRemind",
    "click .dynamiclovestreet .btn-r-r-md:not('.addlovestreet')":"renderStreetIndex",
    "click .category .createStreet":"createStreet",    
    "mouseenter .currentstreet": "currentstreetShow",
    "mouseleave .currentstreet": "currentstreetHide",
     "click .street-type":"renderStreetIndex",
    // "click .addfocus":"setaddFocusDialog",
    // "click .cancelfocus":"setcancelFocusDialog",
},
getStreetMember:function(){
   // render member info
   var smemberTableView = new StreetMemberTableView();
    memberdata.count = memberdata.length;
    smemberTableView.setData(memberdata);
    smemberTableView.containerBuild();
    smemberTableView.getAllData();
},
containerBuild : function(){
    var container = $('<div class="category fn-clear"></div><div class="categoryShow fn-clear"></div>');
    this.$el.html(container);
},
render: function(){
    this.containerBuild();
    //默认我的街区主页显示街区动态
    this.getDynamicStreet();
},
renderDynamicStreet:function(blogtitle,blogcontent){
  //var blogContentView = new BlogContentView();
    var blogContentView1 = new StreetBlogContentView();
    blogContentView1.setCollection(blogcontent);
    blogContentView1.render(blogtitle);
    this.$el.find(".streetblog").append(blogContentView1.$el);
},
renderInvitationStreet:function(blogtitle,blogcontent){
     var blogContentView1 = new StreetBlogContentView();
    blogContentView1.setCollection(blogcontent);
    blogContentView1.render(blogtitle);
    this.$el.find(".streetblog").html(blogContentView1.$el);
},
renderLoveStreet:function(){
   var dynamicStreetView = new DynamicStreetView();
    dynamicStreetView.setCollection(dynamiclovestreetdata);
    var lastindex=dynamiclovestreetdata.length;
    dynamicStreetView.insertCollection({
           id: lastindex, 
           streetname:"添加",
    },lastindex);
    dynamicStreetView.render(); 
},
/*街区动态*/
getDynamicStreet: function(){
   var odynamicmenu=$('<div class="container-box fn-clear box-height dynamicstreet"></div>');
   this.$el.find(".category").html(odynamicmenu);
   this.$el.find(".dynamicstreet").html(tpl);
   var odynamicshow=$('<div class="container-box row"><ul class="dynamiclovestreet"></ul></div><div class="streetblog"></div>');
    this.$el.find(".categoryShow").html(odynamicshow);
    //获取爱逛的街区
    self.renderLoveStreet();
    var category=this.$el.find(".category");
    category.find("li").removeClass("category-selected");
    category.find(".category-mystreet").addClass("category-selected");
    var blogtitle="街区动态";
    this.renderDynamicStreet(blogtitle,dynamicstreetdata);
    this.$el.find(".category-info .createstreet").css({"display":"block"});
},
/*全部帖子*/
getInvitationStreet: function(){
   var oinvitationmenu=$('<div class="container-box fn-clear box-height invitation"></div>');
   this.$el.find(".category").html(oinvitationmenu);
   this.$el.find(".invitation").html(tpl);
   var oinvitationshow=$('<div class="container-box row"><ul class="invitationlovestreet"></ul></div><div class="streetblog"></div>');
   this.$el.find(".categoryShow").html(oinvitationshow);
   var invitationStreetView = new InvitationStreetView();
    // InvitationStreetview.setCollection(invitationlovestreetdata);
    invitationStreetView.setParent(this);
    invitationStreetView.setCollection(invitationdata);
    invitationStreetView.insertCollection({
        streetname: "全部",
        id: 0,
        list: _.compact(_.flatten(_.pluck(invitationdata,'list')))
    },0);
    invitationStreetView.render();

    var category=this.$el.find(".category");
    category.find("li").removeClass("category-selected");
    category.find(".category-invitation").addClass("category-selected");
	// var blogtitle="全部帖子";
    //this.renderInvitationStreet(blogtitle,invitationdata);  
    this.$el.find(".category-info .createstreet").css({"display":"none"});
},
/*我的提醒*/
getRemind:function(){
   var oremindmenu=$('<div class="container-box fn-clear box-height remindcate"></div>');
   this.$el.find(".category").html(oremindmenu);
   this.$el.find(".remindcate").html(tpl);
   var oremindshow=$('<div class="remind"></div>');
   this.$el.find(".categoryShow").html(oremindshow);
    var category=this.$el.find(".category");
    category.find("li").removeClass("category-selected");
    category.find(".category-remind").addClass("category-selected");
    var remindStreetView = new RemindStreetView();
    remindStreetView.render();  
     this.$el.find(".category-info .createstreet").css({"display":"none"});
},
/*写博客
writeBlog:function(){
    var container = $('<div class="category"></div><div class="categoryShow"></div>');
    this.$el.html(container);
    this.getCurrentStreet();
    this.renderEdit();
},*/
/*街区主页写博客里面的文本编辑器*/
renderEdit:function(){
    var writeBlogView = new WriteBlogView();
    writeBlogView.render();
    writeBlogView.setParent(this);
    this.$el.append(writeBlogView.$el);
},
/*街区主页*/
renderStreetIndex:function(){
    var container = $('<div class="category"></div><div class="categoryShow"></div>');
    this.$el.html(container);
    this.getCurrentStreet();
    this.getMessage();
    this.intercept();
},
//当前街区
getCurrentStreet:function(){
    var currentStreetView = new CurrentStreetView();
    currentStreetView.setModel(currentstreetdata);
    currentStreetView.setParent(self);
    currentStreetView.render();
   // this.$el.find(".category").html(currentStreetView.$el);
},
//获取当前街区的帖子
getMessage: function(){
    blogContentView = new StreetBlogContentView();
    blogContentView.setCollection(blogdata);
    blogContentView.render();
    this.$el.find(".categoryShow").html(blogContentView.$el);
},
currentstreetShow:function(e) {
    $(e.target).find(".operate").show();
},
currentstreetHide:function(e) {
    $(e.target).find(".operate").hide();
},
// 发布
releaseInfo: function() {
    var releaseBlogView = new ReleaseBlogView();
        releaseBlogView.render();
        releaseBlogView.setParent(this);
        this.$el.append(releaseBlogView.$el);
},
// 我的发布
myPublish: function() {
    var myPublishBlogView = new MyPublishBlogView();
        myPublishBlogView.render();
        myPublishBlogView.setParent(this);
        this.$el.append(myPublishBlogView.$el);
        //this.parent.getLoveClass();
},
//内容截取
intercept : function() {
    $(".text-content").each(function(i,el) {
        var str = $(el).text();
        var name = str.substr(0,200);
        if (str.length > 200) {
            var newname = name + '...';
            $(this).text(newname);
        }else {
            $(this).text(str);
        }
    });
},
/*
添加我发布的博客
*/
addMyBlog : function (blogtitle, blogcontent) {
    blogContentView.addBlog(blogtitle, blogcontent);
},
 createStreet:function(){
  var createStreetLayerView = new CreateStreetLayerView({
        model: this.model
    });
   createStreetLayerView.setParent(this);
   createStreetLayerView.render();
},
   //回到街区首页
showMyStreet:function(e){
   $(".street-item a").removeClass("itemback");
   $(".mystreet").addClass("itemback");
    // var myStreetView = new MyStreetView();
    this.render();
},
//点击创建街区弹框上的创建按钮，会出现一个创建成功，等待审核的页面，供createStreetLayerView里面调用
createSuccess:function(){
    var container = $('<div class="container-box full-screen fn-clear"></div>');
    this.$el.html(container);
    this.$el.find(".full-screen").html(createsuccesstpl);
    setTimeout(function(){
       self.showMyStreet();
    }, 3000);
  },
});
 return MyStreetView;
});