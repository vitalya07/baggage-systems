document.addEventListener('DOMContentLoaded', ()=> {
    const filter = document.querySelector('.fillter');
    const filterBox = document.querySelector('.fillter__box');
    const boxes = document.querySelector('.luggage__boxes').offsetHeight;
    const products = document.querySelector('.products').offsetHeight;
    i = boxes + products;
    filter.style.height = `boxes + products - 1000px`;
    
    function filterFixed() {
        if(window.scrollY > 150) {
            filterBox.style.position = 'sticky';
           filterBox.style.top = `10%`;
           filterBox.style.left = '0';
        } else if (window.scrollY >= i) {
            filterBox.style.position = 'static';
        }
        else {
            filterBox.style.position = 'static';
        }
    }
    window.addEventListener('scroll', ()=> {
        filterFixed();
    });
})