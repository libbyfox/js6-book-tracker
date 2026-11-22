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

console.log("JS6 is connected");
addBook();
console.log(library);

