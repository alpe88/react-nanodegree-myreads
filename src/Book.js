import React, { Component } from 'react'
import Shelfchanger from './Shelfchanger'

class Book extends Component {
  
  

render(){ 
   
   const { book, booksOnShelf, updateBook } = this.props
   const coverImage = book.imageLinks && book.imageLinks.thumbnail ? book.imageLinks.thumbnail : "No cover available"
   const bookTitle = book.title ? book.title : "No title available"
   
    return (
      <div>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${coverImage})` }}></div>
              <Shelfchanger book={book}  updateBook={updateBook} booksOnShelf={booksOnShelf}/>
            </div>
           <div className="book-title">{bookTitle}</div>
          { /* Check for authors and render each on separate line if exist*/
                book.authors && book.authors.map((author, index) => (
                  <div className="book-authors" key={index}>{author}</div>
              ))}
        </div>
       </div>
        )
    }
}

export default Book
