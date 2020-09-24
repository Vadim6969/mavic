const mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: true,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})
// accordion

document.querySelectorAll('.question__item').forEach(function (section) {
    section.addEventListener('click', function (e) {
        document.querySelectorAll('.question__item').forEach(function (section) {
            section.classList.remove('question__item--active')
        })
        e.target.closest('.question__item').classList.add('question__item--active')

    })
})




    // menu
document.querySelector('.menu__btn').addEventListener('click', function () {
    this.classList.toggle('menu__btn--active');
    document.querySelector('.menu__list').classList.toggle('menu__list--active')
})
document.querySelectorAll('.menu__list-link').forEach(function (e) {
    e.addEventListener("click" , () => {
        document.querySelector('.menu__btn').classList.remove('menu__btn--active');
        document.querySelector('.menu__list').classList.remove('menu__list--active')
    })

})
