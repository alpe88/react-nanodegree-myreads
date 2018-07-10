import React, { Component } from 'react'

class Shelfchanger extends Component {
       
       
    

render(){
     const { book, switchBookshelf } = this.props

    	return (
        	<div key={book.id}>
          		<div className="book-shelf-changer">
					<select value={book.shelf} onChange={(event) => switchBookshelf(book, event.target.value)}>
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
