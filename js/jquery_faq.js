// Q-CLICK LISTENERS//
// $("dt#q1").on("click", function(){
//     $("#a1").toggleClass("invisible")
// });
//
// $("dt#q2").on("click", function(){
//     $("#a2").toggleClass("invisible")
// });
//
// $("dt#q3").on("click", function(){
//     $("#a3").toggleClass("invisible")
// });
//
// $("dt#q4").on("click", function(){
//     $("#a4").toggleClass("invisible")
// });
//
// $("dt#q5").on("click", function(){
//     $("#a5").toggleClass("invisible")
// });
//
// $("dt#q6").on("click", function(){
//     $("#a6").toggleClass("invisible")
// });
//
// $("dt#q7").on("click", function(){
//     $("#a7").toggleClass("invisible")
// });
//
// $("dt#q8").on("click", function(){
//     $("#a8").toggleClass("invisible")
// });
//
// $("dt#q9").on("click", function(){
//     $("#a9").toggleClass("invisible")
// });
//
// $("dt#q10").on("click", function(){
//     $("#a10").toggleClass("invisible")
// });
//
//
// // HIGHLIGHT LISTENERS//
// $("dt").on("click", function(){
//     $(this).toggleClass("highlight")
// });

$(`dt`).on(`click`, function(){
    $(this).toggleClass(`highlight`).next().toggleClass(`invisible`);
});