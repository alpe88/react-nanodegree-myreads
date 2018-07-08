import React, { Component } from 'react'
import Book from './Book'


class Bookshelf extends Component {
  
render(){
     const { bookshelf, books } = this.props
      return (
        <div>
          {bookshelf.type !== 'none' && (
           <div className="bookshelf" key={bookshelf.id}>
                    <h2 className="bookshelf-title">{bookshelf.title}</h2>
                      <div className="bookshelf-books">
                          <ol className="books-grid">
                            {books.map((book) => (
                               <div key={book.id}> 
                                 {book.shelf === 'wantToRead' && (
                                  <li>{console.log(book.shelf)}
                                   <Book book={book} />
                                  </li>
                                  )}
                                </div>
                               ))}
                            </ol>
                        </div>
                  </div>
         )}
       </div>  
      )}
}

  
export default Bookshelf 
  
  
