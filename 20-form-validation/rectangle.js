$(function() {
  var $width = $('#width'),
      $height = $('#height'),
      $btnCal = $('#calculate'),
      $area = $('#area'),
      $perimeter = $('#perimeter');

  $btnCal.click(function(){
    if(!validate('#width')||!validate('#height')) return;
    var w =Number($width.val()),
        h =Number($height.val());

    var p = 2 * (w + h),
        a = w * h;

    $perimeter.val(p);
    $area.val(a);
  });
//e.key e.target.value
  $width.keypress(function(e){
    if(/[abcdf-zABCDF-Z`~!@#$%^&*()\-=_+[\]{}|;:'",<>/?\\]/"']`].test(e.key)){
      e.preventDefault();
      return;
    }

    //合法字符 e
    //允许出现在非科学技术法的数字末尾、中间
    //不能出现在非科学计数法的数字前面
    //不能出现在空文本中
    //不能出现在负号后面
    //不能出现在科学技术法数字(e,E)的末尾、前面、中间
    
    
  });
  $height.keypress(function(e){
    if(/[abcdf-zABCDF-Z`~!@#$%^&*()\-=_+[\]{}|;:'",<>/?\\]/"']`].test(e.key)){
      e.preventDefault();
      return;
    }
  })

  $width.focusout(function(){
    if(!validate('#width')) $width.select();
  });
  $height.focusout(function(){
    if(!validate('#$height')) $height.select();
  });

  function validate(field){
    //get DOM error message
    var $data = $(field),
        $msg  = $(field+'-validation-message');
    //validation null
    if($data.val()===''){
      $msg.html('不能为空！');
      $data.select();
      return false;
    }
    //validation num 
    if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test( $data.val())) {
      $msg.html(label + '必须是数值');
      $data.select();
      return false;
    }
    
    //validation >0
    if(window.Number($data.val()) < 0) {
      $msg.html(label + '必须大于零');
      $data.select();
      return false;
    }
      
      //prompt error message
      //return false
     
    $msg.html('');
    return true;
  }
});
