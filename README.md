一点点说明
=======
一个简约，轻量，可定制的jQuery返回顶部插件

------
[View Demo](http://inslow.com/jQuery.toTop/)

------



### 可定制的选项

````javascript
         jQuery(function($){
          

           // 可定制选项
           $('.to-top').toTop({
               //以下是选项默认参数，您可以根据自己的需求修改
               autohide: true,  //是否自动隐藏
               offset: 420,     //距离顶部多少距离时自动隐藏按钮
               speed: 500,      //滚动持续时间
               position:true,   //如果设置为 false，则需要手动在 css 中设置“按钮”的位置
               right: 15,       //右侧距离
               bottom: 30       //底部距离
           });
       });
	   
	       <a class="to-top"><img src="img/toTop(default).png" alt="top"></a>
		   <!-- 根据需求可以使用文字或者图片作为返回顶部的标识 -->
		   <!-- 这是文字<a class="to-top">Top &uarr;</a> -->
		   <!-- 这是图片<a class="to-top"><img src="img/toTop(demo).png" alt="top"></a> -->
````
