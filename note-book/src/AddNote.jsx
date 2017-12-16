import React, {Component} from 'react';
import {Panel, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {addNote} from './note-operations/addNote';

class AddNote extends Component{
  constructor(props) {
    super(props);
    this.state = {};
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleAddNote = this.handleAddNote.bind(this);
  }

  handleTextChange(event) {
    this.setState({
      text : event.target.value
    });
  }

  handleAddNote(e) {
    e.preventDefault();
    addNote(this.props.author, this.state.text)
    this.props.refresh();
  }

  render() {
    return (
      <div className="App">
        <Panel header="Your New Note" bsStyle="primary">

        <form onSubmit={this.handleAddNote}>
          <textarea className="note" onChange = {this.handleTextChange}/>
          <div><Button type="submit" bsstyle="success">add</Button></div>
        </form>

        </Panel>
      </div>
    );
  }
}

export default AddNote
