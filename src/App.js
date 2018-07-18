import React from 'react'
import * as BooksAPI from './BooksAPI'
import Bookshelf from './Bookshelf'
import Search from './Search'
import { Route, Link } from 'react-router-dom'
import './App.css'

class BooksApp extends React.Component {
  state = {

      /**
      * Added array to store all books
      **/
      books: [],
      updatedBook: ''
  	}


 componentDidMount() {
        BooksAPI.getAll()
          .then((books) => {
            this.setState(() => ({
              books
            }))
          })
        }

updateBook = (bookToChange, newBookshelf) => {
        console.log(bookToChange.title +' is now on '+ newBookshelf)
          BooksAPI.update(bookToChange,newBookshelf)
             .then((book) => {
              bookToChange.shelf = newBookshelf
              let updatedBooks = this.state.books.filter( book => book.id !== bookToChange.id ).concat(bookToChange)
              this.setState(() => ({
                    books: updatedBooks
                })
              )
        })
      }

  render() {
    
    const { books } = this.state
    const bookshelfs = [
        {
         'type':'currentlyReading',
         'title':'Currently Reading'
        },
        {
         'type':'wantToRead',
         'title':'Want to Read'
        },
        {
         'type':'read',
         'title':'Read'
        },
        {
         'type':'none',
         'title':'None'
        }
      ]
    return (
      <div className="app">
            <Route exact path='/' render={() => (
                <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                 <div>
                    {bookshelfs.map((bookshelf, index) => (
                    <div key={index}>  {bookshelf.type !== 'none' && (
                     
                       <Bookshelf bookshelf={bookshelf} updateBook={this.updateBook} books={books} />
                    
      )} </div>
                    ))}
          </div>
        </div>
              <div className="open-search">
                <Link
                  to='/search'
                >Add a Book</Link>
              </div>
            </div>
          )} />


        <Route path='/search' render={({ history }) => (
          <Search updateBook={this.updateBook} />
         )} />


      </div>
    )
  }
}

export default BooksApp
