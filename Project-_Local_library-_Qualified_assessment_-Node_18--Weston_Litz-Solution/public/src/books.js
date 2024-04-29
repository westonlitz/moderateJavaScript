function findAuthorById(authors, id) {
return authors.find(author=> author.id === id)
}

function findBookById(books, id) {
return books.find(book => book.id === id)
}

function partitionBooksByBorrowedStatus(books) {
const checkedBooks = books.filter(book=>book.borrows[0].returned === false)
const returnedBooks = books.filter(book=>book.borrows[0].returned === true)
return [checkedBooks, returnedBooks]
                                    
  
}

function getBorrowersForBook(book, accounts) {
  const borrowers = book.borrows.map(borrow => {
        const account = accounts.find(acc => acc.id === borrow.id);
        return { ...borrow, ...account };
    }).slice(0, 10); // Limit to ten borrowers
    return borrowers;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
