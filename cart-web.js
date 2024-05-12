const products = [{
    link: "http://127.0.0.1:5500/website/dress-1.html",
    name: 'Exquisite White Raw Silk Sherwani Set',
    rating: '4.7 stars',
    price: '₹115,000',
    classimg: 'dress-div-1'
},{
    link: "http://127.0.0.1:5500/website/dress-2.html",
    name: 'Grey Silk Printed Lehenga Set',
    rating: '4.7 stars',
    price: '₹39,000',
    classimg: 'dress-div-2'
},{
    link: "http://127.0.0.1:5500/website/dress-3.html",
    name: 'Sandshell Cream Palazzo Saree in Sequins Embroidery',
    rating: '4.7 stars',
    price: '₹59,000',
    classimg: 'dress-div-3'
}];

let productsHTML = '';

products.forEach((prod) => {
    productsHTML += `
    <div>
        <div class="${prod.classimg}">
            <a target="_blank" class="attri-link-1" href=${prod.link}></a>
        </div>

        <div class="dress-info-1">
            <div class="dress-text-1">
                ${prod.name}
            </div>

            <div class="price-1">
                MRP: ${prod.price}
            </div>

            <button onclick="
                savecart();
            " class="cart-button-1">Add to cart</button>
        </div>
    </div>

    
    `;
});

console.log(productsHTML);

document.querySelector('.main-dress-inner-div')
    .innerHTML = productsHTML;

/*
<div>
        <div class="dress-div-2">
            <a target="_blank" class="attri-link-1" href="http://127.0.0.1:5500/website/dress-2.html"></a>
        </div>

        <div class="dress-info-1">
            <div class="dress-text-2">
                Grey Silk Printed Lehenga Set
            </div>

            <div class="price-2">
                MRP ₹39,000
            </div>

            <button onclick="
                savecart();                       
            " class="cart-button-2">Add to cart</button>
        </div>
    </div>

    <div>
        <div class="dress-div-3">
            <a target="_blank" class="attri-link-1" href="http://127.0.0.1:5500/website/dress-3.html"></a>
        </div>

        <div class="dress-info-1">
            <div class="dress-text-3">Sandshell Cream Palazzo Saree In Sequins Embroidery</div>

            <div class="price-3">
                MRP ₹59,000
            </div>

            <button onclick="
                savecart();
            " class="cart-button-3">Add to cart</button>

        </div>
    </div>
*/