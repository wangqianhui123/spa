 // var html ='<input class="timer-button" type="button" value="同意（6s）" disabled>'
function TimerButton(){
 var $btn = $('<input class="timer-button" type="button" disabled>'),
      timer,
      cfg = {
        container:'body',
        num:6,
        title:'同意',
        onClick:null
      };

this.show=function(conf){
  //1.DOM draw
  // $(container).html(html);
  $(cfg.container).append($btn);
  $.extend(cfg,conf);
  $btn.val(cfg.title+'('+cfg.num+'s)');

timer = setInterval(function(){
  cfg.num--;
  if(cfg.num===0){
    clearInterval(timer);
    $btn.val('同意');
    $btn.removeAttr('disabled') 
  }else{
    $btn.val('同意（'+cfg.num+'s)');
  }
},1000);
//event bind
$btn.click(cfg.onClick);
}
};


var $timerButton = (function(){
 // var html ='<input class="timer-button" type="button" value="同意（6s）" disabled>'
function show(conf){
  var $btn = $('<input class="timer-button" type="button" disabled>'),
      timer,
      cfg = {
        container:'body',
        num:6,
        title:'同意',
        onClick:null
      };

  //1.DOM draw
  // $(container).html(html);
  $(cfg.container).append($btn);
  $.extend(cfg,conf);
  $btn.val(cfg.title+'('+cfg.num+'s)');

timer = setInterval(function(){
  cfg.num--;
  if(cfg.num===0){
    clearInterval(timer);
    $btn.val('同意');
    $btn.removeAttr('disabled') 
  }else{
    $btn.val('同意（'+cfg.num+'s)');
  }
},1000);
//event bind
$btn.click(cfg.onClick);
}
return{
  show:show
}
}());

//不用page load event
/*封装成对象，有几种方案
1、简单对象字面量，不完全是面向对象，不能包括私有方法
var timerBtn={
 show:function()
}
2、工厂函数:一个函数返回值是一个简单对象
var timerBtn = (function(){
  return{
    show:function(){}
 }
}())
3、构造函数 function timerBtn(){
}
var tb = new TimerBtn();
*/
