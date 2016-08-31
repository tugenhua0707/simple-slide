## 移动端滑块
#### 代码如下：
	<div class="slide-demo">
	 <div class="slide-btn"></div>
	 <a href="javascript:void(0)" class="switchTxt cur">周周盈</a>
	 <a href="javascript:void(0)" class="switchTxt">月月盈</a>
	 <a href="javascript:void(0)" class="switchTxt">季季盈</a>
	</div>
	* {margin:0;padding:0}
	.slide-demo {
	  margin: 20px;
	  position: relative;
	  width: 360px;
	  height: 24px;
	  webkit-border-radius: 5px;
	  border-radius: 5px;
	  background: #CAA5A5;
	 
	}
	.slide-demo a {
	  float: left;
	  width: 120px;
	  height: 24px;
	  line-height: 24px;
	  text-align: center;
	  color:#fff;
	  text-decoration: none;
	}
	.slide-btn {
	  position: absolute;
	  top: 0;
	  left: 0;
	  width: 120px;
	  height: 24px;
	  background: rgba(0,0,0,0.2);
	  webkit-border-radius: 5px;
	  border-radius: 5px;
	}
	/*
	 * 滑块js
	 * 依赖于zepto.js
	 * @param {config} 对象
	 */
	 function slideBox(config){
	   var me = this;
	   // 获取父级容器
	   var $parentContainer = $(config.pContainer);
	   if($parentContainer.length < 1) {
		 return;
	   }
	   var distance = 0;
	   // 需要定位到上面的元素
	   this.slideElem = config.slideElem;
	   var oldIndex = 0,
		   newIndex = 0;

	   $parentContainer.on('click',config.clickItem,function(){
		 var newIndex = $(this).index() - 1;
		 var w = $(this).width();
		 var oldIndex = $parentContainer.find(".cur").index() - 1;
		 // 计算滑块需要移动的距离 
		 distance = w * newIndex;

		 $(me.slideElem).animate({
		   "left" : distance + "px"
		 });
		 $(this).addClass("cur").siblings().removeClass("cur");
	   });
	 }
### 初始化如下：
	slideBox({
	  "pContainer" : ".slide-demo",
	  "slideElem" : ".slide-btn",
	  "clickItem" : ".switchTxt"
	});