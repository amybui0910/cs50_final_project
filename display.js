let info = document.querySelector('tbody')
if (localStorage.length > 0) {
    for (var i = 0; i < localStorage.length; i++) {
    const front = localStorage.key(i); // Get front of card
    const back = localStorage.getItem(front); // Get back of card
    info.innerHTML += "<tr><td>" + front + "</td><td>" + back + "</td></tr>";
    } 
} else {
    console.log("No cards to display");
}
