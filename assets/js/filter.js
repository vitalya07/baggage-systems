document.addEventListener('DOMContentLoaded', ()=> {
    //Прилипание фильтра
    const filter = document.querySelector('.fillter');
    const filterBox = document.querySelector('.fillter__box');
    const boxes = document.querySelector('.luggage__boxes').offsetHeight;
    const products = document.querySelector('.products').offsetHeight;
    i = boxes + products;
    filter.style.height = `${i}px`;
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
    //Прилипание фильтра конец   
    const rangeSlider = document.querySelector('#range-slider');
    if(rangeSlider) {
        noUiSlider.create(rangeSlider , {
            start: [300, 999999],
            connect: true,
            step: 1,
            range: {
                'min': 300,
                'max': 55000
            }
        });
        const minPrice = document.querySelector('#min-price');
        const maxPrice = document.querySelector('#max-price');

        const prices = [minPrice, maxPrice];
        
        rangeSlider.noUiSlider.on('update', function(values, handel) {
            prices[handel].value = Math.round(values[handel]);
        });

        const setRangeSlider = (i, value) => {
            let arr = [null, null];
            arr[i] = value;

            rangeSlider.noUiSlider.set(arr)
        }

        prices.forEach((el, index) => {
            el.addEventListener('change', (e)=> {
                setRangeSlider(index, e.currentTarget.value)
            })
        })
    }
});