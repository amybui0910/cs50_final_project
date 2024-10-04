// Button elements
const create = document.getElementById("create")
const view = document.getElementById("view")

// Input elements
const front_card = document.getElementById("front-card")
const back_card = document.getElementById("back-card")

// Create a card
create.onclick = function() {
    const card = {
        front_info: front_card.value, 
        back_info: back_card.value
    }
    chrome.runtime.sendMessage({ event: 'create', card })
}


// View all cards stored
view.onclick = function() {
    location.href = "cards.html"
}