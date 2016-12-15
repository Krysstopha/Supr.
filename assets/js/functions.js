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

// $(document).ready(function(){
// 	$(".langBar").mouseover(function(){
// 		$(".langTitle").attr("style", "visibility: visible");
// 	});
// 	$(".langBar").mouseout(function(){
// 		$(".langTitle").attr("style", "visibility: hidden");
// 	});
// });

// SCROLL FUNCTIONALITY SECTION

//Scroll Variables
var dura = {
		duration: 1000
}; // Duration of 1000

// Scroll Functions
window.sr = ScrollReveal();
sr.reveal('.intro-statement', dura); // Starting statement of each section
sr.reveal('.test1', dura); // Skills - 1,2
sr.reveal('.test2', dura); // Skills - 3,4
sr.reveal('.test3', dura); // Skills - 5,6
sr.reveal('.langTitle', dura); // Language Name
sr.reveal('.langBar', { duration: 1500 }); // Progress Bar
sr.reveal('.langPer', { duration: 2000 }); // Progress Percentage
sr.reveal('.abilContainer', { duration: 1500 });
sr.reveal('.button-centering', { rotate: { x: 0, y: -100, z: 0 } }, { duration: 30000 }); // More Button
