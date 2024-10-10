const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]
let bookTitles = [];


function getTheTitles(book) {
    books.forEach(book => {
        bookTitles.push(book.title)
    });
console.log(bookTitles);


    return bookTitles;
}





  
  
//   Your job is to write a function that takes the array and returns an array of titles:
  
  
  getTheTitles(books) // ['Book','Book2']