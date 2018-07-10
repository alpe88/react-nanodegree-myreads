import React, { Component } from 'react'
import Shelfchanger from './Shelfchanger'
import * as BooksAPI from './BooksAPI'

class Book extends Component {
     state = {
          currentBookshelf: 'none'
     }  

updateBook = (book, newBookshelf) => {
        console.log(book.title +' is now on '+ newBookshelf)
          BooksAPI.update(book,newBookshelf)
             .then((book) => {
               this.updateBookshelfType(newBookshelf)
        })
      }


 updateBookshelfType = (newBookshelf) => {
           this.setState(() => ({
                currentBookshelf: newBookshelf
            })
          )
        }
  

render(){
  const { updateBook } = this.state
   const { book } = this.props
    return (
      <div>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
              <Shelfchanger book={book} switchBookshelf={updateBook} />
            </div>
           <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors}</div>
        </div>
       </div>
        )
    }
}

export default Book
