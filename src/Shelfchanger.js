import React, { Component } from 'react'

class Shelfchanger extends Component {

  	state = {
      bookshelfSelectorValue: 'none'
    }

    updateBookshelfType = (selectedValue) => {
        this.setState(() => ({
          bookshelfSelectorValue: selectedValue,

          })
        )
      }

render(){
     // const { bookshelfType } = this.props
      const { bookshelfSelectorValue } = this.state

    	return (
        	<div>
          		<div className="book-shelf-changer">
					<select value={bookshelfSelectorValue} onClick={(event) => this.props.updateBookshelfType(event.target.value)} ref='shelfselector'>
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
