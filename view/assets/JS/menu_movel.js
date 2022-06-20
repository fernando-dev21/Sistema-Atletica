function MudaImg(){
    checkbox = document.querySelector('[data-menuBotao]');
    if(checkbox.checked) {
    document.querySelector('[data-menuImagem]').src = './assets/img//menu-superior/fechar_white.ico';
} else {
    document.querySelector('[data-menuImagem]').src = './assets/img/menu-superior/menu_white.ico';
    }
}