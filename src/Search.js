import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'
import Bookshelf from './Bookshelf'
import {DebounceInput} from 'react-debounce-input'

class Search extends Component {
    state = {
      searchQuery: '',
      searchResults: [],
      searchResultBookshelf: {
      },
      badResult: ''
    }

    updateSearch = (searchQuery) => {
      console.log('Now updating search')
      if(searchQuery !== ''){ this.findBook(searchQuery) }
      this.setState(() => ({
        searchQuery: searchQuery,
        badResult: false,
        searchResultBookshelf: {
         'id' : 'asgioj24Q@$ASR',
         'type':'search',
         'title':'Search Result'
      }
      }))
    }

    clearSearch = () => {
      console.log('Now clearing search')
        this.updateSearch('')
        this.setState(() => ({
              searchResults: [],
              badResult: '',
              searchResultBookshelf: {}
             }))
    }
   
    findBook = (searchQuery, maxResults) => {
          console.log('Running Search in BooksAPI')
          BooksAPI.search(searchQuery,maxResults)
              .then((searchResults) => {
                if(searchResults.length){
                  searchResults.forEach((foundBook, i) => {
                      let shelvedBookinSearchResult = this.props.selectedBooks.find((b) => b.id === foundBook.id)
                      foundBook.shelf = shelvedBookinSearchResult ? shelvedBookinSearchResult.shelf : 'none'
                      searchResults[i] = foundBook
                  })
                  this.setState(() => ({
                     searchResults:searchResults,
                     badResult: false,
                     searchResultBookshelf: {
                       'id' : 'asgioj24Q@$ASR',
                       'type':'search',
                       'title':'Search Result'
                    }
                  }))
                }else{
                  this.setState(() => ({
                       searchResults:[],
                       badResult:true,
                       searchResultBookshelf: {}
                    }))
                }
                
              }).catch(err => {
                 console.log('caught it!',err)
                 this.setState(() => ({
                       badResult: true,
                       searchResults:[],
                       searchResultBookshelf: {}
                    }))
              })
    }

     handleInputChange = (formInput) => {
         if(formInput !== '' || formInput.indexOf(' ') >= 0){ this.updateSearch(formInput) }
         else{ this.clearSearch() }
     }
  
    

render(){
    const { searchQuery, searchResults, searchResultBookshelf, badResult } = this.state
    const { selectedBooks, updateBook } = this.props
    console.log(searchResults)
    
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
                  <DebounceInput
                      minLength={2}
                      debounceTimeout={500}
                      element="input"
                      placeholder="Search by title or author"
                      value={searchQuery}
                      autoFocus
                      onChange={(event) => this.handleInputChange(event.target.value)}
                   />
              </div>
            </div>
                <div className="search-books-results">
                  <ol className="books-grid">{badResult ? (
                                              <p>No books found, please try another search term...</p> 
                                              ) : (
                                              <Bookshelf bookshelf={searchResultBookshelf} books={searchResults} updateBook={updateBook} />
                   )}</ol>
                </div> 
          </div>
        )
    }
}

export default Search
