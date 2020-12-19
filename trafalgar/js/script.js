$('.feedback__slider').slick({
    dots: true,
    arrow: true,
    infinite: false,
    prevArrow: $('#prev'),
    nextArrow: $('#next'),
    appendDots: $('.feedback__dots'),
});

//Get the button:
const btnGoTop = document.getElementsByClassName("btn__go-top")[0];
btnGoTop.addEventListener('click', () => window.scrollTo({
    top: 0,
    behavior: 'smooth',
}));

// When the user scrolls down 400px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    console.log(1);
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        btnGoTop.classList.add('btn__go-top--show');
    } else {
        btnGoTop.classList.remove('btn__go-top--show');
        btnGoTop.fadeOut(300);
    }
}

const btnViewAll = document.querySelector('.info__btn');
btnViewAll.addEventListener('click', function () {
    if (btnViewAll.classList.contains('info__btn--all')) {
        btnViewAll.classList.remove('info__btn--all');
        btnViewAll.textContent = "View all";

        var items = document.querySelectorAll('.info__item');
        for (let i = 3; i < items.length; i++) {
            items[i].classList.add('info__item--hide');
        }
    } else {
        btnViewAll.classList.add('info__btn--all');
        btnViewAll.textContent = "View less";

        var items = document.querySelectorAll('.info__item');
        for (let i = 3; i < items.length; i++) {
            items[i].classList.remove('info__item--hide');
        }
    }
});