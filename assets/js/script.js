document.addEventListener('DOMContentLoaded', (e)=> {
    //Открытие окна
    const informationHide = document.querySelector('.information__wrapper-hide');
    const informationBtn = document.querySelector('.information__btn');

    informationBtn.textContent = `Читать далее`;
    informationBtn.addEventListener('click', (e) => {
        informationHide.classList.toggle('hide');
        if (informationHide.classList.contains('hide')) {
            informationBtn.textContent = `Читать далее`;
        } else { 
            informationBtn.textContent = `Скрыть текст`;
        }
    });    
    //Раскрытие меню на мобильном
    const headerMobile = document.querySelector('.header__mobile');
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