// Trigger "Masukkan Keranjang" button
const masukkanKeranjang = document.querySelectorAll(".add-to-cart");

masukkanKeranjang.forEach(
    button => {
        button.addEventListener("click", () => {
            button.style.display = 'none';

            const quantityAdding = button.nextElementSibling;
            quantityAdding.removeAttribute("style");
            const quantityNum = quantityAdding.nextElementSibling
            const numberQuantity = quantityNum.querySelector(".quantity-cart");
            displayQuantity(numberQuantity)
        })
    }
)

// Update quantity cart
function displayQuantity(x) {
    let i = 0;

    x.previousElementSibling.addEventListener("click", () => {
        if(i>0) {
            i--
            x.textContent = i;
        };
    });
    x.nextElementSibling.addEventListener("click", () => {
        i++;
        x.textContent = i;
    });
    x.nextElementSibling.nextElementSibling.addEventListener("click", () => {
        i = 0;
        x.textContent = i;
    });
    x.textContent = i;
}
