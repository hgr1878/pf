console.clear();

setTimeout(function() {
  $(window).scrollTop(1500);
}, 500);


$('.top-bar > .top-bar-con > .menu-box-1').mouseenter(function() {
    $('.top-bar').addClass('menu-box-1-actived');
});

$('.top-bar').mouseleave(function() {
    $(this).removeClass('menu-box-1-actived');
});


$(window).scroll(function(){
    var scrollTop = $(window).scrollTop();
    console.log(scrollTop);
    if ( scrollTop > 50 ) {
        $('.top-bar').addClass('follow');
    } else {
        $('.top-bar').removeClass('follow');
    }
})

/* 비주얼 배경 이미지 */
setInterval(function() {
    var current = $('.visual > .background-img-box > .active');
    var post = $('.visual > .background-img-box > .active').next();
    post.addClass('active');
    current.removeClass('active');
    if (post.length == 0) {
        $('.visual > .background-img-box > div:first-child').addClass('active');
    };
},5000);

/* 비주얼 슬라이더 박스 */
setInterval(function() {
    var current = $('.visual > .con > .slider-box > .active');
    var post = $('.visual > .con > .slider-box > .active').next();
    post.addClass('active');
    current.removeClass('active');
    if (post.length == 0) {
        $('.visual > .con > .slider-box > div:first-child').addClass('active');
    };
},5000);