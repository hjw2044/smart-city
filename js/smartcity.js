$(function(){
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal',
        //loop: true,
        effect:"coverflow",
        slidesPerView : 1.5,//����Ϊ1.5ʱ�ֲ��Ŀ�ȿ��Բ�����
        centeredSlides : true,
        initialSlide:1,

        // �����Ҫ��ҳ��
        pagination: {
            el: '.swiper-pagination',
        },

        // �����Ҫǰ�����˰�ť
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // �����Ҫ������
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    })
});