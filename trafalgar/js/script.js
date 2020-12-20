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

// Modal window for [Consult today] button
const btnConsultToday = document.querySelector('.header__consult-btn');
btnConsultToday.addEventListener('click', function () {

    // Wrapper
    let wrapper = document.createElement('div');
    wrapper.classList.add('consult-wrapper');

    // Form
    let form = document.createElement('form');
    form.classList.add('consult');

    // Close button
    let closeButton = document.createElement('div');
    closeButton.classList.add('consult__close-btn');
    closeButton.addEventListener('click', function () {
        document.body.removeChild(wrapper);
        document.body.style.overflowY = "auto";
    });

    // Title
    let title = document.createElement('h3');
    title.classList.add('consult__title');
    title.innerText = "Fill the form";

    // Text
    let text = document.createElement('p');
    text.classList.add('consult__text');
    text.innerText = "And our managers will contact with you soon";

    // Name input
    let userName = document.createElement('div');
    userName.classList.add('consult__name');

    let inputName = document.createElement('input');
    inputName.classList.add('consult__name-input');
    inputName.type = "text";
    inputName.name = "name";
    inputName.id = "name";
    inputName.placeholder = "Full name";

    let labelName = document.createElement('label');
    labelName.classList.add('consult__name-label');
    labelName.htmlFor = "name";
    labelName.innerText = "Full name";

    let validationName = document.createElement('span');
    validationName.classList.add('consult__name--validation');
    validationName.innerText = "Invalid name";

    userName.appendChild(inputName);
    userName.appendChild(labelName);
    userName.appendChild(validationName);

    // Phone input
    let userPhone = document.createElement('div');
    userPhone.classList.add('consult__phone');

    let inputPhone = document.createElement('input');
    inputPhone.classList.add('consult__phone-input');
    inputPhone.type = "tel";
    inputPhone.name = "phone";
    inputPhone.id = "phone";
    inputPhone.placeholder = "Phone";

    let labelPhone = document.createElement('label');
    labelPhone.classList.add('consult__phone-label');
    labelPhone.htmlFor = "phone";
    labelPhone.innerText = "Phone";

    userPhone.appendChild(inputPhone);
    userPhone.appendChild(labelPhone);

    // Submit button
    let submitBtn = document.createElement('button');
    submitBtn.classList.add('consult__submit');
    submitBtn.type = "submit";
    submitBtn.innerText = "Send";
    submitBtn.addEventListener('click', function () {
        let name = document.querySelector('.consult__name-input')?.value;
        let phone = document.querySelector('.consult__phone-input')?.value;

        alert("Name: " + name + " Phone: " + phone);
    });

    // Append all to form
    form.appendChild(closeButton);
    form.appendChild(title);
    form.appendChild(text);
    form.appendChild(userName);
    form.appendChild(userPhone);
    form.appendChild(submitBtn);

    // Append modal window to wrapper
    wrapper.appendChild(form);

    // Append wrapper to body
    document.body.appendChild(wrapper);
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