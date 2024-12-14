/**
 * Checking Array Membership with ‘includes’
    Instructions:
    Create an array of books containing different book.
    Use the includes method to check if the array contains a javascript book.
    Print a message to the console indicating whether the element is present in the array or not
 */

    let bookList = ["book1", "book2", "book3", "book4", "Javascript"];

    console.log(bookList.includes("Javascript"))

    if(bookList.includes("Javascript")){
        console.log("Read the book");
    }
    else{
        console.log("Go to sleep");
    }