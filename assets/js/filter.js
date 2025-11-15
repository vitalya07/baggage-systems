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
    // let mixer = mixitup('.products')
// ---------------------------------------------
//  ИНИЦИАЛИЗАЦИЯ MIXITUP V2
// ---------------------------------------------
var mixer = mixitup('.products', {
    selectors: {
        target: '.product'
    },
    animation: {
        duration: 300
    }
});

// ---------------------------------------------
//  ОЧЕРЕДЬ ДЛЯ SAFE-V2 (fix: instance busy)
// ---------------------------------------------
function filterQueue(command) {
    if (mixer.isMixing()) {

        var handler = function() {
            mixer.off('mixEnd', handler);
            filterQueue(command);
        };

        mixer.on('mixEnd', handler);

    } else {
        mixer.filter(command);
    }
}

// ---------------------------------------------
//  ФИЛЬТРАЦИЯ ПО КАТЕГОРИЯМ
// ---------------------------------------------
var filterCheckboxes = document.querySelectorAll('.fillter__checkbox');
var allProductsCheckbox = document.getElementById('all-product');

var activeFilters = [];
var isUpdating = false;

filterCheckboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {

        if (isUpdating) return;

        var label = checkbox.nextElementSibling;
        var filterValue = label ? label.dataset.filter : null;

        // -------- ALL PRODUCTS --------
        if (checkbox === allProductsCheckbox) {

            isUpdating = true;

            // Сбрасываем остальные чекбоксы
            filterCheckboxes.forEach(function(cb) {
                if (cb !== allProductsCheckbox) cb.checked = false;
            });

            activeFilters = [];

            isUpdating = false;

            filterQueue('all');
            return;
        }

        // Снимаем "Все товары", если включили другие
        if (checkbox.checked) {
            isUpdating = true;
            allProductsCheckbox.checked = false;
            isUpdating = false;

            activeFilters.push(filterValue);
        } else {
            activeFilters = activeFilters.filter(function(f) {
                return f !== filterValue;
            });
        }

        // Ничего не выбрано → показать все
        if (activeFilters.length === 0) {
            filterQueue('all');
        } else {
            filterQueue(activeFilters.join(','));
        }
    });
});

// ---------------------------------------------
//  ФИЛЬТР ЦЕНЫ
// ---------------------------------------------
var minInput = document.getElementById('min-price');
var maxInput = document.getElementById('max-price');

function applyPriceFilter() {
    var min = parseInt(minInput.value) || 0;
    var max = parseInt(maxInput.value) || 9999999;

    // микситап фильтрация через функцию
    filterQueue(function(item) {
        var price = parseInt(item.dom.el.dataset.price);
        return price >= min && price <= max;
    });
}

minInput.addEventListener('input', applyPriceFilter);
maxInput.addEventListener('input', applyPriceFilter);

// ---------------------------------------------
//  СОРТИРОВКА
// ---------------------------------------------
document.getElementById('sort-price-asc')?.addEventListener('click', function() {
    mixer.sort('data-price:asc');
});

document.getElementById('sort-price-desc')?.addEventListener('click', function() {
    mixer.sort('data-price:desc');
});

});