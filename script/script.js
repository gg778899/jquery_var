var num=12

function check() {
    if (num<10) {
        $(".alert").css("color", "orange");
        $(".alert").text("數量極少!!");
        $(".call").css("padding-top", "20px");
        $(".call").css("padding-bottom", "20px");
        $(".call").css("height", "35px");
    }else if (num<20) {
        $(".alert").css("color", "yellow");
        $(".alert").text("賣得不錯喔!!");
        $(".call").css("padding-top", "0px");
        $(".call").css("padding-bottom", "0px");
        $(".call").css("height", "0px");
    } else {
        $(".alert").css("color", "green");
        $(".alert").text("還剩很多!!");
    }
}

$(".des").click(function () { 
    $(".num").text(--num);
    check();
});
$(".plu").click(function () { 
    $(".num").text(++num);
    check();
});

$(".hover").mouseenter(function () { 
    $(this).css("background-color", "#ccc");
    $(this).css("color", "#333");
    $(this).css("transition", "0.5s");
});

$(".hover").mouseleave(function () { 
    $(this).css("background-color", "#333");
    $(this).css("color", "#ccc");
    $(this).css("transition", "0.5s");
});

$(".call").click(function () { 
    $(this).text("聯絡中...");
});
