// Form element
const new_card_form = document.getElementById("new-card-form")

// Button elements
const create = document.getElementById("create")
const view = document.getElementById("view")

// Input elements
const front_card = document.getElementById("front-card")
const back_card = document.getElementById("back-card")

// Create a card
create.onclick = function() {

    event.preventDefault();

    if (front_card.value && back_card.value) {
        localStorage.setItem (front_card.value, back_card.value);
        new_card_form.submit();

    } else {
        console.log("Invalid Card")
    }
}

// View all cards stored
view.onclick = function() {
    location.href = "cards.html"
}