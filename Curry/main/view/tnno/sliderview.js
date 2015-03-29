define(['backbone','model/share/slidermodel','text!tpl/tnno/slidertpl.html'], function(Backbone,SliderCollection,tpl) {   
    // 访问元素视图
	var SliderItemview = Backbone.View.extend({
		tagName: 'li',
		className: 'slide',
		sliderTemplate: _.template(tpl),
		render: function() {
			this.$el.html(this.sliderTemplate(this.model.toJSON()));
			return this;
		},
		
	});
	
    
    var SliderView = Backbone.View.extend({
		className: 'sliderContainer',
		setCollection: function(data){
			this.collection = new SliderCollection(data);
		},
		render: function() {
			this.$el.html('<div class="slider"><ul class="slides"></ul></div>');
			_.each(this.collection.models, function(item) {
				this.renderSlider(item);
				//页面重新渲染后幻灯片宽度问题
				
			}, this);
			
			
			
		},
		renderSlider: function(item) {

			 var sliderItemView = new SliderItemview({
				model: item
			});
			 this.$el.find(".slides").append(sliderItemView.render().el);
		},
		glide: function(){
			this.$el.find('.slider').glide({
				//autoplay:true,//是否自动播放 默认值 true如果不需要就设置此值
				animationTime:500, //动画过度效果，只有当浏览器支持CSS3的时候生效
				arrows:true, //是否显示左右导航器
				arrowsWrapperClass: "arrowsWrapper",//滑块箭头导航器外部DIV类名
				arrowMainClass: "slider-arrow fn-btn",//滑块箭头公共类名
				arrowRightClass:"slider-arrow--right",//滑块右箭头类名
				arrowLeftClass:"slider-arrow--left",//滑块左箭头类名
				arrowRightText:">",//定义左右导航器文字或者符号也可以是类
				arrowLeftText:"<",
				nav:true, //主导航器也就是本例中显示的小方块
				navCenter:true, //主导航器位置是否居中
			});
		},

     });
     
     return SliderView;
 });