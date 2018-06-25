

$(function () {

    $('#btnTool').click(function () {
        $('#resultStatus').toggle();
        $('#selectResult').toggle();
    });

    $('#upBtn').click(function () {
        $("html,body").animate({scrollTop:$('#header').offset().top});
    });

    $('#downBtn').click(function () {
        $("html,body").animate({scrollTop:$('#name').offset().top});
    });
});
