$('#title').hover(
    function() {
        $(this).css('background-color', '#FF0');
    },
);

function clickHandler(e) {
    alert('My element was clicked!');
}
var ele = document.getElementById('my-element');
ele.addEventListener('click', clickHandler);

$("h1").click(function(){
    $(this).css("back-ground", "red");
});
$(.menu, .close-menu).click(function(){
    $(".mobile").
}