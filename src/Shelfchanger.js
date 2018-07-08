import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'

class Shelfchanger extends Component {
   

     updateBookshelfTypeSelector = (newBookshelf) => {
           this.setState(() => ({
            currentBookshelf: newBookshelf,
            })
          )
        }
       
       updateBook = (book, newBookshelf) => {
        console.log(book.title +' is now on '+ newBookshelf)
          BooksAPI.update(book,newBookshelf)
             .then((book) => {
             this.setState(() => ({
              currentBookshelf: newBookshelf,
              })
            )
        })
        
      }
    

render(){
     const { book } = this.props

    	return (
        	<div key={book.id}>
          		<div className="book-shelf-changer">
					<select value={book.shelf} onChange={(event) => this.updateBook(book, event.target.value)}>
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
