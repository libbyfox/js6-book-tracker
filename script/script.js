const library = [];

function addBook() {
    const title = prompt("Enter the book title:");
    const author = prompt("Enter the author's name:");
    const isRead = false;

    
const book = {
    title: title,
    author: author,
    isRead: isRead

     };

   library.push(book);

}

 function listBooks() {
    library.forEach(function(book) {
        console.log(book);
    });


}

function markAsRead(title) {
    const book = library.find(function(book) {
        return book.title === title;
    });

    if (book) {
        book.isRead = true;
        console.log("Book marked as read!");
    } else {
        console.log("Book not found.");
    }
}

let running = true;
while (running) {
const choice = prompt(`
     Book Tracker

    1. Add Book
    2. List Books
    3. Mark Book as Read
    4. Exit

    Enter your choice:
`);

switch (choice) {
    case "1":
        addBook();
        break;

    case "2":
        listBooks();
        break;
    
    case "3":
    const title = prompt("Enter the title of the book:");
    markAsRead(title);
    break;

    case "4":
    running = false;
    alert("Thank you for using Book Tracker. Goodbye!");
    break;

    default:
    alert("Invalid choice. Please try again.");
    break;
}
}


/*
console.log("JS6 is connected");
addBook();
console.log(library);
listBooks();
markAsRead("Gotcha");
listBooks();
*/
