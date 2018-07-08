import React, { Component } from 'react'
import Bookshelf from './Bookshelf'

class Bookshelves extends Component {
  
    state = {
      bookshelfs: [
        {
         'id':'458485dfbxgc',
         'type':'wantToRead',
         'title':'Currently Reading'
        },
        {
         'id':'zcvbm07845',
         'type':'currentlyReading',
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

render(){
      const { bookshelfs } = this.state
      const { books } = this.props

      
      return (
       <div>
         {bookshelfs.map((bookshelf) => (
          <div key={bookshelf.id}>
              <Bookshelf bookshelf={bookshelf} books={books} />
          </div>
         ))}
        </div>
      )}
}

export default Bookshelves
