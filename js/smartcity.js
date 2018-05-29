$(function(){
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal',
        //loop: true,
        effect:"coverflow",
        slidesPerView : 1.5,//设置为1.5时轮播的宽度可以不用设
        centeredSlides : true,
        initialSlide:1,

        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
        },

        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // 如果需要滚动条
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    })
});