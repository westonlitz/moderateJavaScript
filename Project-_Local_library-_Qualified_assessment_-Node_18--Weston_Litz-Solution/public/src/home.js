function getTotalBooksCount(books) {
return books.length
}

function getTotalAccountsCount(accounts) {
return accounts.length
}

function getBooksBorrowedCount(books) {
return books.filter(book=>!book.borrows[0].returned).length
}

function getMostCommonGenres(books) {
const genres = {}
books.forEach(book=>{
  genres[book.genre] = (genres[book.genre] || 0) + 1
})
  const sorted = Object.entries(genres).sort((aa, bb)=>bb[1] - aa[1])
  return sorted.slice(0, 5).map(([name, count])=>({name, count}))
}

function getMostPopularBooks(books) {
  const sorted = books.sort((aa, bb)=>bb.borrows.length - aa.borrows.length)
  return sorted.slice(0,5).map(book=>({name: book.title, count: book.borrows.length}))
}

function getMostPopularAuthors(books, authors) {
/*const numberOfAuthors = {}
books.forEach(book=>{
  const author = authors.find(author => author.id === book.authorId)
  const authorName = '${author.name.first} ${author.name.last}'
  numberOfAuthors[authorName] = (numberOfAuthors[authorName] || 0) + book.borrows.length
})
  const sorted = Object.entries(numberOfAuthors).sort(([, countOne], [, countTwo])=>countOne - countTwo)
  return sorted.slice(0, 5).map(([name, count])=>({ name, count }))

all my wrong code. ran it through an ai:
*/
  
   const authorCount = {};
    books.forEach(book => {
        const author = authors.find(author => author.id === book.authorId);
        const authorName = `${author.name.first} ${author.name.last}`;
        authorCount[authorName] = (authorCount[authorName] || 0) + book.borrows.length;
    });
    const sortedAuthors = Object.entries(authorCount).sort(([, countA], [, countB]) => countB - countA);
    const formattedAuthors = sortedAuthors.slice(0, 5).map(([name, count]) => ({ name, count }));
    return formattedAuthors;
}
module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
