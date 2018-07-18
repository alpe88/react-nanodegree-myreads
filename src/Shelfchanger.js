import React, { Component } from 'react'

class Shelfchanger extends Component {
       state = {
          shelf: this.props.book.shelf
       }
render(){
     const { book, updateBook, booksOnShelf } = this.props
     let currentShelf = 'none'
     for (let item of booksOnShelf ) {
      if (item.id === book.id)  {
        currentShelf = item.shelf
        break
      }
    }
  
    	return (
        	<div key={book.id}>
                   <div className="book-shelf-changer">
                     <select defaultValue={this.state.shelf}  onChange={(event) => updateBook(book, event.target.value)}>
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
