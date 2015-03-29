require.config({
    shim: {
        'underscore': {
            exports: '_'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'global': {
            deps: ['jquery'],
            exports: 'global'
        },
        'bootstrap': {
            deps: ['jquery'],
            exports: 'bootstrap'
        },
        'formoperation': {
            deps: ['jquery'],
            exports: 'formoperation'
        },
        'ajaxfileupload': {
            deps: ['jquery'],
            exports: 'ajaxfileupload'
        },
        'atwho': {
            deps: ['jquery'],
            exports: 'atwho'
        },
        'caret': {
            deps: ['jquery'],
            exports: 'caret'
        },
        'artdialog': {
            deps: ['jquery'],
            exports: 'artdialog'
        },
        'formoperation': {
            deps: ['jquery'],
            exports: 'formoperation'
        },
    },
    paths: {
        'js': '../js',
        'model': '../main/model',
        'view': '../main/view',
        'tpl': '../main/template',
        'jquery': '../js/jquery-1.11.1.min',
        'jsontool': '../js/jquery.json.min',
        'underscore': '../js/underscore-min',
        'backbone': '../js/backbone-min',
        'bootstrap': '../dist/js/bootstrap.min',
        // 'mCustomScrollbar': '../js/jquery.mCustomScrollbar.min',
        'glide': '../js/jquery.glide',
        'formoperation':'../js/formoperation',
        'artdialog': '../js/dialog-plus',
        'text': '../js/text',
        'ajaxfileupload': '../js/ajaxfileupload',
        'emoji-list-with-image':'../js/emoji-lib/emoji-list-with-image',
        'punycode':'../js/emoji-lib/vendor/punycode/punycode',
        'emoji':'../js/emoji-lib/emoji',
        'atwho':'../js/at/jquery.atwho',
        'caret':'../js/at/jquery.caret',
        'ckeditor':'../js/ckeditor/ckeditor'
    }
});

require(['jquery', 'backbone', 'global', 'router','bootstrap','glide','formoperation','artdialog','text','ajaxfileupload','atwho','caret','ckeditor'], function($, Backbone, global, IndexRouter) {
	$(function() {
		 //初始化取个人信息
        $.ajax({
        	async: false,
			type: "post",
			url: global.url + "/Curry/user/getUsersById",
			data: "loginId=" + currLoginId,
			success: function(data) {
				global.usrinfo = data;
	            console.log(global.usrinfo);
				
			},    
			error: function (XMLHttpRequest, textStatus, errorThrown) {
			}
		});
         //初始化路由，所有请求由路由捕获处理
        global.router = new IndexRouter();
        Backbone.history.start();
    });
});
