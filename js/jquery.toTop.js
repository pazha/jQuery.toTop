/**
 *  插件名称: 返回顶部
 *  插件地址: https://github.com/pazha/jQuery.toTop
 *  版本: 1.0
 *  作者: Pazha
 *  作者GitHub主页: https://github.com/pazha
 *  作者博客主页: http://inslow.com
 *  声明: 使用请注明出处
 **/

(function( $ ){
    'use strict';
    
    $.fn.toTop = function(opt){
        
        //变量
        var elem = this;
        var win = $(window);
        var doc = $('html, body');
        
        //根据需求可修改的参数
        var options = $.extend({
            autohide: true,
            offset: 420,
            speed: 500,
            position: true,
            right: 15,
            bottom: 30
        }, opt);
        
        elem.css({
            'cursor': 'pointer'
        });
        
        if(options.autohide){
            elem.css('display', 'none');
        }
        
        if(options.position){
            elem.css({
                'position': 'fixed',
                'right': options.right,
                'bottom': options.bottom,
            });
        }
        
        elem.click(function(){
            doc.animate({scrollTop: 0}, options.speed);
        });
        
        win.scroll(function(){
            var scrolling = win.scrollTop();
            
            if(options.autohide){
                if(scrolling > options.offset){
                    elem.fadeIn(options.speed);
                }
                else elem.fadeOut(options.speed);
            }
            
        });
        
    };
    
}( jQuery ));
