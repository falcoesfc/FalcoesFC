function menuShow()
{
    let menuMobile = document.querySelector('.mobile');

    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "assets/img/menu.png";
        
    }else
    {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "assets/img/close.png"; document.querySelector('.logo2') .src = "";
    }
}
