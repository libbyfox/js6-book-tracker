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



console.log("JS6 is connected");
addBook();
console.log(library);
listBooks();
markAsRead("Gotcha");
listBooks();

