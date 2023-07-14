const form = document.querySelector("form");
const card_1 = document.querySelector(".card-1");
const card_2 = document.querySelector(".card-2");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("ive been clicked!")
    card_1.classList.add("hide");
    card_2.classList.remove("hide");
});