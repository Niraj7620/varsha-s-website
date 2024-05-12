cart: 0
/*const quantity = {
} */

const quantity = JSON.parse(localStorage.getItem('quantity')) || {
    cart: 0
};
console.log(quantity);

function savecart() {

    quantity.cart += 1;

    document.querySelector('.js-my-button')
        .innerHTML = `${quantity.cart}`;

    localStorage.setItem('quantity', JSON.stringify(quantity));
}

function sidebar1() {
    document.querySelector('.sidebar').style.width = '350px';
}
function cancelbtn() {
    document.querySelector('.sidebar').style.width = '0px';
}