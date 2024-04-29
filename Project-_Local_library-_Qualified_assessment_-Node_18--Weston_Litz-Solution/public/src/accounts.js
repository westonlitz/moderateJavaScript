function findAccountById(accounts, id) {
return accounts.find(account=> account.id === id)
}

function sortAccountsByLastName(accounts) {
return accounts.sort((actA, actB) => {
  const surnameA = actA.name.last.toLowerCase()
  const surnameB = actB.name.last.toLowerCase()
  return surnameA > surnameB ? 1 : -1
})
}

function getTotalNumberOfBorrows(account, books) {
const actID = account.id
return books.reduce((total, book) => {
  const borrowNumber = book.borrows.filter(borrow => borrow.id === actID).length
  return total + borrowNumber}, 0)
}


function getBooksPossessedByAccount(account, books, authors) {
const accountID = account.id
return books
  .filter (book => {
  const recentBorrow = book.borrows[0]
  return recentBorrow.id === accountID && !recentBorrow.returned})
  .map(book => {
  const author = authors.find(author=> author.id === book.authorId)
  return { ...book, author}
})
  return borrowers.slice(0, 10)
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
