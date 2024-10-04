const create = document.getElementById("create")
const front_card_info = document.getElementById("front-card")
const back_card_info = document.getElementById("back-card")

create.onclick = function() {
    if (front_card_info.value) {
        console.log(front_card_info.value);
    } else if (!front_card_info.value) {
        console.log("Invalid Card")
    }

    if (back_card_info.value) {
        console.log(back_card_info.value);
    } else if (!back_card_info.value) {
        console.log("Invalid Card")
    }
}