let tick
const sliderInfo = new Swiper('.slider__info', {
    direction: 'vertical',
    init: true,
    containerModifierClass: 'slider__info',
    wrapperClass: 'info-wrapper',
    slideClass: 'slider__info_item',
    slidesPerView: 3,
    slideToClickedSlide: true,
    spaceBetween: 32,
    slidesPerGroup: 1,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
});

const sliderContent = new Swiper('.slider__content', {
    direction: 'horizontal',
    containerModifierClass: 'slider__content',
    wrapperClass: 'content-wrapper',
    slideClass: 'slider__content_item',
    slidesPerView: 1,
    loop: true,
    // centeredSlides: true,
    autoHeight: true,
    thumbs: {
        swiper: sliderInfo,
        slideThumbActiveClass: 'active'
    },
    grabCursor: true,
    on: {
        slideChangeTransitionStart: function () {
            let activeElem = this.thumbs.swiper.el
            timerSlider(activeElem)
        }
    }
});

function timerSlider(elem) {
    let progress = elem.querySelector('.slider__info_item.active .slider__progress')
    let time = .1;
    let percentTime = 0
    // document.querySelectorAll('.slider__progress').style.height = 0 + '%'
    elem.querySelectorAll('.slider__progress').forEach(item => item.style.height = "")
    clearInterval(tick)
    console.log(elem.querySelector('.slider__info_item'))

    tick = setInterval(() => {
        if (percentTime <= 100){
            progress.style.height = percentTime + '%'
            percentTime += 1 / (time + 5);
        } else {
            percentTime = 0
            clearInterval(tick)
            progress.style.height = 0 + '%'
            sliderContent.slideNext()
        }
    }, 10);

}

