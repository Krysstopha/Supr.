$(document).ready(function(){

  $('imageSrc:first').hover(
    function(){
        $('portP:first').css('display', 'flex');
    });,
    function(){
        $('portP:first').css('display', 'none');
    }
  );

});
