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
    }
}

// Consult today button
const btnConsultToday = document.querySelector('.header__consult-btn');
btnConsultToday.addEventListener('click', function () {
    let modalBackground = document.createElement('div');
    modalBackground.setAttribute("style", "display: block; position: fixed; z-index: 1; left: 0; top: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.5);");

    let modal = document.createElement('div');
    modal.setAttribute("style", "display: grid; padding: 20px; border-radius: 10px; position: fixed; z-index: 2; left: 50%; transform: translate(-50%, -50%); top: 50%; width: 320px; background-color: rgb(230, 244, 255);");
    
    let closeButton = document.createElement('button');
    closeButton.textContent = 'X';
    closeButton.setAttribute("style", "justify-self: flex-end; background-color: transparent; border: none; outline: none; cursor: pointer; margin-bottom: 50px");
    closeButton.addEventListener('click', function(){
        modal.style.display = "none";
        modalBackground.style.display = "none";
        document.body.style.overflowY = "auto";
    });

    let title = document.createElement('h3');
    title.innerText = "Fill form";
    title.setAttribute("style", "text-align: center; margin-bottom: 10px; font-size: 24px; line-height: 32px; font-family: Mulish; font-weight: bold");

    let text = document.createElement('p');
    text.innerText = "and our managers will call you";
    text.setAttribute("style", "text-align: center; margin-bottom: 10px; font-size: 18px; line-height: 24px; font-family: Mulish");

    let inputName = document.createElement('input');
    inputName.type = "text";
    inputName.name = "name";
    inputName.placeholder = "Your name";
    inputName.setAttribute("style", "border: none; outline: none; text-align: center; justify-self: center; width: 80%");
    
    
    
    
    modal.appendChild(closeButton);
    modal.appendChild(title);
    modal.appendChild(text);
    modal.appendChild(inputName);
    document.body.appendChild(modal);
    document.body.appendChild(modalBackground);
    document.body.style.overflowY = "hidden";
});

// View all button
const btnViewAll = document.querySelector('.info__btn');
btnViewAll.addEventListener('click', function () {
    const btnClass = 'info__btn--all';
    const itemClass = 'info__item--hide';

    let startIndex = 3;
    let items = document.querySelectorAll('.info__item');
    let isExist = btnViewAll.classList.contains(btnClass);
    btnViewAll.textContent = isExist ? "View all" : "View less";

    if (isExist) {
        btnViewAll.classList.remove(btnClass);

        for (startIndex; startIndex < items.length; startIndex++) {
            items[startIndex].classList.add(itemClass);
        }
    } else {
        btnViewAll.classList.add(btnClass);

        for (startIndex; startIndex < items.length; startIndex++) {
            items[startIndex].classList.remove(itemClass);
        }
    }
});