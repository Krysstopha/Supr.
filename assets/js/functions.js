$(document).ready(function(){
  $("#test").click(function(){
    console.log("falg");
    $(this).animate({
      left: "-=500px"
    }, 500);
  });
});
