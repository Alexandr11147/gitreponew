 const footerYearEl = document.querySelector('.footer__year');
    let today = new Date();
    let year = today.getFullYear();
    footerYearEl.textContent = year;

    const burgerIconEl = document.querySelector('.burger-box-icon');
    const navEl = document.querySelector('.nav');

    burgerIconEl.addEventListener('click', function (e) {
      navEl.classList.toggle("nav-left");
    });