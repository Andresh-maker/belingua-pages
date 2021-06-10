let tick
const sliderInfo = new Swiper('.slider__info', {
    direction: 'vertical',
    containerModifierClass: 'slider__info',
    wrapperClass: 'info-wrapper',
    slideClass: 'slider__info_item',
    slidesPerView: 3,
    slideToClickedSlide: true,
    spaceBetween: 32,
    allowTouchMove: false,
});

const sliderContent = new Swiper('.slider__content', {
    direction: 'horizontal',
    containerModifierClass: 'slider__content',
    wrapperClass: 'content-wrapper',
    slideClass: 'slider__content_item',
    slidesPerView: 1,
    loop: true,
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
    elem.querySelectorAll('.slider__progress').forEach(item => item.style.height = "")
    clearInterval(tick)

    tick = setInterval(() => {
        if (percentTime <= 100) {
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

const stepSlider = new Swiper('.step__content', {
    direction: 'horizontal',
    containerModifierClass: 'step__content',
    wrapperClass: 'step__wrapper',
    slideClass: 'step__item',
    slidesPerView: 1,
    allowTouchMove: false,
    on: {
        slideChangeTransitionStart: function (){
            $('.swiper-slide-active').find('.form-step__tab').first().click()
        }
    }
})
const tabs = $('.form-step__tab')
const content = $('.form-step__content')

$('.step-element__btn > .next').on('click', function () {
    stepSlider.slideNext()
})

$('.step-element__btn > .prev').on('click', function () {
    stepSlider.slidePrev()
})

tabs.on('click', toggleTab)

function toggleTab() {
    tabs.removeClass('active')
    $(this).addClass('active')
    let contentIdx = content[tabs.index(this)]
    content.hide()
    $(contentIdx).show()
}


