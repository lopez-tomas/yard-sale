let cards = document.querySelectorAll(".card");
cards = Array.from(cards);

cards.forEach(card => {
    card.addEventListener("click", changeCartStatus);
})

function changeCartStatus() {
    const cart_message = this.querySelector(".cart--message");
    const cart_icon = this.querySelector(".cart");
    const icon_src = cart_icon.getAttribute("src");

    cart_message.style.opacity = "1";
    cart_message.classList.remove("hidden");

    if (icon_src != "./icons/bt_added_to_cart.svg") {
        cart_icon.setAttribute("src", "./icons/bt_added_to_cart.svg");
        cart_message.innerText = "Product added to cart!";
        cart_message.style.backgroundColor = "#71D37E";

    } else {
        cart_icon.setAttribute("src", "./icons/bt_add_to_cart.svg");
        cart_message.innerText = "Product removed from cart!";
        cart_message.style.backgroundColor = "red"
    }

    checkCartMessage(this);
}

function checkCartMessage(card) {
    const message = card.querySelector(".cart--message");

    setTimeout(() => {
        message.style.opacity = "0";

        setTimeout(() => {
            message.classList.add("hidden");
        }, 2000);
    }, 5000)

}