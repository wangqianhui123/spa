$(function() {
  var $width = $('#width'),
      $height = $('#height'),
     // $btnCal = $('#calculate'),
      $from = $('#form'),
      $area = $('#area'),
      $perimeter = $('#perimeter');

 // $btnCal.click(function(){
    $from.submit(function(e){
    e.preventDefault()
    var w =Number($width.val()),
        h =Number($height.val());

    var p = 2 * (w + h),
        a = w * h;

    $perimeter.val(p);
    $area.val(a);
  });
});
