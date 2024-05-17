function menuHead() {
    let menuHamburger = document.querySelector('#content');
    
    if (menuHamburger.style.display == 'block'){
        menuHamburger.style.display = 'none';
    }else{
        menuHamburger.style.display = 'block';
    }
}

const splash = document.querySelector('.splash');
const form = document.querySelector('.contact-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    splash.classList.add('display-block');

    setTimeout(() => {
        splash.classList.remove('display-block');
    }, 2000);
});