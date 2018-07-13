import React, { Component } from 'react'
import Shelfchanger from './Shelfchanger'

class Book extends Component {

render(){ 
   const { book, booksOnShelf, updateBook } = this.props
    return (
      <div>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
              <Shelfchanger book={book}  updateBook={updateBook} booksOnShelf={booksOnShelf}/>
            </div>
           <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors}</div>
        </div>
       </div>
        )
    }
}

export default Book
