import React, { Component } from 'react'
import Shelfchanger from './Shelfchanger'

class Bookshelves extends Component {
  
    state = {
    }
    
	render(){
      
      const { books } = this.props
      console.log(books);

    	return (
        	<div>
              <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                         	{books.map((book) => (
                                <li key={book.id}>
                                 {book.shelf === 'currentlyReading' && (
                                  <div className="book">
                                    <div className="book-top">
                                      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                                      <Shelfchanger bookshelfType={book.shelf} />
                                    </div>
                                    <div className="book-title">{book.title}</div>
                                    <div className="book-authors">{book.authors}</div>
                                  </div>
                                  )}
                                </li>                
                           ))}
                    	</ol>
                  	</div>
                </div>



             <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                         	{books.map((book) => (
                                <li key={book.id}>
                                 {book.shelf === 'wantToRead' && (
                                  <div className="book">
                                    <div className="book-top">
                                      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                                      <Shelfchanger bookshelfType={book.shelf} />
                                    </div>
                                    <div className="book-title">{book.title}</div>
                                    <div className="book-authors">{book.authors}</div>
                                  </div>
                                  )}
                                </li>                
                           ))}
                    	</ol>
                  	</div>
                </div>


                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                         	{books.map((book) => (
                                <li key={book.id}>
                                 {book.shelf === 'read' && (
                                  <div className="book">
                                    <div className="book-top">
                                      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                                      <Shelfchanger bookshelfType={book.shelf} />
                                    </div>
                                    <div className="book-title">{book.title}</div>
                                    <div className="book-authors">{book.authors}</div>
                                  </div>
                                  )}
                                </li>                
                           ))}
                    	</ol>
                  	</div>
                </div>

          	</div>
        )
    }
}

export default Bookshelves
