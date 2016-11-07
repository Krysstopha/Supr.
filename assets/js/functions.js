/// HOVER FUNCTION FOR PORTFOLIO
// var movePort = false;
// $(document).ready(function(){
//   $(".portPara").attr("style", "display: none");
//     $("#test").click(function(){
//       if(movePort) {
// 	        $(this).animate({
// 		          marginLeft: "-=500px"
// 			        }, 500);
// 		      });
//       }
//   else {
//     $("#test").click(function(){
//       $(this).animate({marginLeft: "-=500px"}, 500);
//       movePort = true;
//     }
//   });
// });

$(document).ready(function(){
	$(".langBar").mouseover(function(){
		$(".langTitle").attr("style", "visibility: visible");
		setTimeout(1000);
		$(".langTitle").attr("style", "visibility: hidden");
	});
});
