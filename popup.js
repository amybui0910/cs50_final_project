    let name = "flashcards"

    if (!(name in localStorage)) {
        document.querySelector('h1').innerHTML = "No cards created";
    } else {
        let cards = JSON.parse(localStorage.getItem(name)); 
        if (cards.length > 0) {
            let index = Math.floor(Math.random() * cards.length); 

            document.querySelector('h1').innerHTML = `${cards[index]["front"]}`;
            document.querySelector('body').innerHTML += "<button id='flip'>Flip</button>";

            document.querySelector('button').addEventListener('click', function() {
                document.querySelector('body').innerHTML += "<h2>" + cards[index]["back"] + "</h2>";
            });
            
        } else {
            document.querySelector('h1').innerHTML = "No cards created";
        }
    }