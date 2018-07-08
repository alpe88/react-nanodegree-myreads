import React from 'react'
import * as BooksAPI from './BooksAPI'
import Bookshelf from './Bookshelf'
import { Route, Link } from 'react-router-dom'
import './App.css'

class BooksApp extends React.Component {
  state = {
    
    
      /**
      * Added array to store all books
      **/
      books: [],
    
    bookshelfs: [
        {
         'id':'458485dfbxgc',
         'type':'currentlyReading',
         'title':'Currently Reading'
        },
        {
         'id':'zcvbm07845',
         'type':'wantToRead',
         'title':'Want to Read'
        },
        {
         'id':'4w6iet6yilu',
         'type':'read',
         'title':'Read'
        },
        {
         'id':'08pt7e68576',
         'type':'none',
         'title':'None'
        }
      ]
      
      
  	}

 componentDidMount() {
        BooksAPI.getAll()
          .then((books) => {
            this.setState(() => ({
              books
            }))
          })
        }


  render() {
    
    const { bookshelfs, books } = this.state
    
    return (
      <div className="app">
            <Route exact path='/' render={() => (
                <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                 <div>
                    {bookshelfs.map((bookshelf) => (
                     <div key={bookshelf.id}> 
                       <Bookshelf bookshelf={bookshelf} books={books} />
                     </div>
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
          <div className="search-books">
            <div className="search-books-bar">
              <Link
                to='/'
                className='close-search'
              >Close</Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author" />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
          
        )} />


      </div>
    )
  }
}

export default BooksApp
