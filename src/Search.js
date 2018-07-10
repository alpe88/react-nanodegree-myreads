import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'
import Bookshelf from './Bookshelf'

class Search extends Component {
    state = {
      searchQuery: '',
      searchResults: [],
      currentBookshelf: 'none'
    }

    updateSearch = (searchQuery) => {
      console.log('Now updating search')
      if(searchQuery !== ''){ this.findBook(searchQuery) }
      this.setState(() => ({
        searchquery: searchQuery
      }))
    }

    clearSearch = () => {
      console.log('Now clearing search')
        this.updateSearch('')
        this.setState(() => ({
              searchResults: []
             }))
    }
   
    findBook = (searchQuery, maxResults) => {
          console.log('Running Search in BooksAPI')
          BooksAPI.search(searchQuery,maxResults)
              .then((searchResults) => {
                if(!searchResults.length){
                  this.setState(() => ({
                     searchResults:[]
                  }))
                }else{
                  this.setState(() => ({
                       searchResults:[]
                    }))
                }
                
              })
    }

     handleInputChange = (formInput) => {
         if(formInput !== '' || formInput.indexOf(' ') >= 0){ this.updateSearch(formInput) }
         else{ this.clearSearch() }
     }
  
    

render(){
    const { searchQuery, searchResults, currentBookshelf} = this.state
    return (
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
                <input type="text" placeholder="Search by title or author" value={searchQuery}
            onChange={(event) => this.handleInputChange(event.target.value)} autoFocus />
              </div>
            </div>
               {searchResults.length !== 0 && (
                <div className="search-books-results">
                  <ol className="books-grid"><Bookshelf bookshelf={currentBookshelf} books={searchResults} /></ol>
                </div> 
                )}
                
            
          </div>
      
        )
    }
}

export default Search
