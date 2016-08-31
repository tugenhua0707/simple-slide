
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
