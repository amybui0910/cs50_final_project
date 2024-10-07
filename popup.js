let name = "flashcards"

let flashcards = localStorage.getItem(name); 

if (!flashcards) {
    document.querySelector('h1').innerHTML = "No cards created";
} else {
    let cards = JSON.parse(flashcards); 
    if (cards.length > 0) {
        let index = Math.floor(Math.random() * cards.length); 

        document.querySelector('h1').innerHTML = `${cards[index]["front"]}`;
        document.querySelector('body').innerHTML += "<button id='flip'>Flip</button>";

        document.querySelector('#flip').addEventListener('click', function() {
            document.querySelector('body').innerHTML += "<h2>" + cards[index]["back"] + "</h2>";
        });

    } else {
        document.querySelector('h1').innerHTML = "No cards created";
    }
}

let closeButton = document.querySelector('#close');
if (closeButton) {
    closeButton.addEventListener('click', function() {
        // Close the current window
        chrome.windows.getLastFocused({populate: false}, function(window) {
            chrome.windows.remove(window.id);
        });
    });
}