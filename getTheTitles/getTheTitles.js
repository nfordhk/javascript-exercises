/*const books = [
    {
      title: 'Fuck',
      author: 'Name'
    },
    {
      title: 'Yeah',
      author: 'Name2'
    }
  ]*/


const getTheTitles = function(books) {
    // 'Book','Book2'
    let newArray = []
    for ( let i = 0; i < books.length; i++){
        //console.log (books[i].title)
        newArray.push(books[i].title)
    }
    console.log(newArray)
    return newArray
}

//getTheTitles(books)

module.exports = getTheTitles;
