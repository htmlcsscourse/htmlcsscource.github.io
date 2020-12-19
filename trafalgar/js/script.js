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
window.onscroll = function () { scrollFunction(); };

function scrollFunction() {
    console.log(1);
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        btnGoTop.classList.add('btn__go-top--show');
    } else {
        btnGoTop.classList.remove('btn__go-top--show');
    }
}