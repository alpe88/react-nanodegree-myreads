import React, { Component } from 'react'
import Shelfchanger from './Shelfchanger'


class Book extends Component {

    /*switchBookshelf = (book,shelf) => {
           BooksAPI.update(book,shelf)
           .then(console.log(book.title))
        }*/
render(){
   const { book } = this.props
    return (
      <div>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
              <Shelfchanger book={book} />
            </div>
           <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors}</div>
        </div>
       </div>
        )
    }
}

export default Book
