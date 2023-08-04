function menuHead() {
    let menuHamburger = document.querySelector('#conteudo');
    
    if (menuHamburger.style.display == 'block'){
        menuHamburger.style.display = 'none';
    }else{
        menuHamburger.style.display = 'block';
    }
}