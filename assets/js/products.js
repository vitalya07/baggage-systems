document.addEventListener('DOMContentLoaded', ()=> {
    const products = document.querySelectorAll('.products');
    if (products) {
        products.forEach(el => {
            let currentProduct = el
            const imagesSwitchItems = el.querySelectorAll('.product__images-item');
            const imagePagination = el.querySelector('.product__pagination');
            if(imagesSwitchItems.length > 1) {
                imagesSwitchItems.forEach( (el, index) => {                    
                    el.setAttribute ('data-index', index);
                    imagePagination.innerHTML += `<li class="product__pagination-item ${index === 0 ? 'product__pagination-item--active': ''}" data-index="${index}"></li>`;
                    el.addEventListener('mouseenter', (e)=> {
                        // currentProduct.classList.remove('product__pagination-item--active');
                        // currentProduct.querySelector(`.product__pagination-item[data-index="${e.currentTarget.dataset.index}"]`).classList.add('product__pagination-item--active');
                        currentProduct.querySelectorAll('.product__pagination-item').forEach((el)=> {
                            el.classList.remove('product__pagination-item--active');
                            currentProduct.querySelector(`.product__pagination-item[data-index="${e.currentTarget.dataset.index}"]`).classList.add('product__pagination-item--active');
                        })
                    });
                    el.addEventListener('mouseleave', (e)=> {
                        // currentProduct.classList.remove('product__pagination-item--active');
                        // currentProduct.querySelector(`.product__pagination-item[data-index="${e.currentTarget.dataset.index}"]`).classList.add('product__pagination-item--active');
                        currentProduct.querySelectorAll('.product__pagination-item').forEach((el)=> {
                            el.classList.remove('product__pagination-item--active');
                            currentProduct.querySelector(`.product__pagination-item[data-index="0`).classList.add('product__pagination-item--active');
                        })
                    });
                });
            }           
        }); 
    }
})