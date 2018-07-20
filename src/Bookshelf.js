import React, { Component } from 'react'
import Book from './Book'

class Bookshelf extends Component {
 
render(){
     const { bookshelf, books, updateBook } = this.props
     {console.log(bookshelf)}
      return (
        <div>
        
            <div className="bookshelf" key={bookshelf.id}>
                    <h2 className="bookshelf-title">{bookshelf.title}</h2>
                      <div className="bookshelf-books">
                          <ol className="books-grid">
                            {books.map((book) => (
                               <div key={book.id}> 
                                 {bookshelf.type === book.shelf && (
                                  <li>
                                   <Book book={book} updateBook={updateBook} booksOnShelf={books} />
                                  </li>
                                  )}
                                
                                   {bookshelf.type === 'search' && (
                                    <li>
                                     <Book book={book} updateBook={updateBook} booksOnShelf={books} />
                                    </li>
                                    )}
                                      
                                </div>
                               ))}
                            </ol>
                        </div>
                  </div>
        
        </div>
      )}
}

  
export default Bookshelf 
  
  
