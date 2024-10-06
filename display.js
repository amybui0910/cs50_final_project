document.addEventListener("DOMContentLoaded", function() {
    let info = document.querySelector('tbody');

    // Display cards in view page
    if (localStorage.length > 0) {
        for (let i = 0; i < localStorage.length; i++) {
            const front = localStorage.key(i); // Get front of card
            const back = localStorage.getItem(front); // Get back of card
            info.innerHTML += `
                <tr>
                    <td>${front}</td>
                    <td>${back}</td>
                    <td><button class="delete" key="${front}">Delete</button></td>
                </tr>
            `;
        }
    } else {
        console.log("No cards to display");
    }

    // Deleting flashcards
    const deleteButtons = document.querySelectorAll('.delete');
    deleteButtons.forEach(button => {
        button.addEventListener('click', function() {
            const keyToDelete = this.getAttribute('key'); // front of card
            localStorage.removeItem(keyToDelete); // remove card
            
            this.closest('tr').remove(); // remove row of table
        });
    });
});
