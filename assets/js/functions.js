$(document).ready(function(){
    $('.imageSrc:first').hover(function(){
      $('.portP:first').toggle();
    });
    $('.imageSrc:last').hover(function(){
      $('.portP:last').toggle()
    });
});
