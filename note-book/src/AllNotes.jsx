import React, {Component} from 'react';
import OneNote from './OneNote.jsx';

class AllNotes extends Component {
  render() {
    let Nodes = this.props.data.map(note => {
      return (
        <OneNote author={note.author} text={note.text} id={note._id} time={note.time} refresh={this.props.refresh}></OneNote>
      )
    })

    return (
      <div className="App">
        {Nodes}
      </div>
    )
  }
}

export default AllNotes
