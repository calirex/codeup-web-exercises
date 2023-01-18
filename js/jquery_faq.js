$(document).ready(function () {

    $(`dt`).on(`click`, function () {
        $(this).toggleClass(`highlight`).next().toggleClass(`invisible`);
    });

    $(`#yellowBtn`).on(`click`, function(){
        $(`ul`).each(function(){
            $(this).children(`li`).last().toggleClass(`highlight`);
        });
    });
    $("h3").on("click", function(){
        $(this).next().children().toggleClass("fontBold");
    });
    $("li").on("click", function(){
        $(this).parent().children().first().toggleClass("blue");
        })
});


