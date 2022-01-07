let orders = document.querySelectorAll('.order__resume');
orders = Array.from(orders);

orders.forEach(order => {
    order.addEventListener("click", rotateArrow);
})

function rotateArrow() {
    const arrow = this.querySelector('.arrow');
    const products = this.querySelector('.products');

    if (!arrow.classList.contains("rotated")) {
        arrow.classList.add("rotated");
        arrow.classList.remove("normal");
        
        products.style.display = "block";
    } else {
        arrow.classList.remove("rotated");
        arrow.classList.add("normal");

        products.style.display = "none";
    }
}