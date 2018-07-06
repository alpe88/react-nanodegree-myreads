import React, { Component } from 'react'

class Shelfchanger extends Component {

  	state = {
      value: 'none'
    }

    
	
	render(){
      const { bookshelfType } = this.props
    	return (
        	<div>
          		<div className="book-shelf-changer">
					<select value={bookshelfType}>
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
