import React, { Component } from 'react'

class Shelfchanger extends Component {
       
       
    

render(){
     const { book, updateBook, booksOnShelf } = this.props
     
     let currentShelf = 'none'
     
     for (let b of booksOnShelf ) {
      if (b.id === book.id)  {
        currentShelf = b.shelf
        console.log('new shelf', currentShelf)
        break
      }
    }
  
    	return (
        	<div key={book.id}>
                   <div className="book-shelf-changer">
                     <select defaultValue={ currentShelf } onChange={(event) => updateBook(book, event.target.value)}>
                      <option value="move" disabled>Move to...</option>
                      <option value="currentlyReading">Currently Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                   </select>
               </div>
          	</div>
        )
    }
}

export default Shelfchanger
