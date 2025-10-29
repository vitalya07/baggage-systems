document.addEventListener('DOMContentLoaded', ()=> {
    //Открытие мобильного меню
    const header = document.querySelector('.header');
    const hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', (e)=> {
        header.classList.toggle('menu__active');
    });

    //Раскрытие элементов меню на мобильном
    const headerMobileLi = document.querySelectorAll('.header__mobile > ul > li');
    headerMobileLi.forEach(item => {
        item.addEventListener('click', (e) => {
            let submenu = item.querySelector('ul');             
            if(submenu){
                submenu.classList.toggle('show');
            }
        });
    });
})