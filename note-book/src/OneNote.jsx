import React, {Component} from 'react';
import {Button, ListGroup, ListGroupItem} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {updateNote} from './note-operations/updateNote';
import {deleteNote} from './note-operations/deleteNote';

class OneNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toBeUpdated : false,
      text : this.props.text
    };
    this.updateNote = this.updateNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    this.handleNoteUpdate = this.handleNoteUpdate.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
  };

  updateNote(e) {
    e.preventDefault();
    this.setState({
      toBeUpdated : !this.state.toBeUpdated,
    });
  }

  deleteNote(e) {
    e.preventDefault();
    deleteNote(this.props.id);
    this.props.refresh();
  }

  handleNoteUpdate(e) {
    e.preventDefault();
    updateNote(this.props.id, this.props.author, this.state.text)
    this.setState({
      text : '',
      toBeUpdated : !this.state.toBeUpdated,
    })
    this.props.refresh();
  }

  handleTextChange(e) {
    this.setState({
      text: e.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <ListGroup>

        <ListGroupItem header="Created Time:">{this.props.time}</ListGroupItem>
        <ListGroupItem header="Content:">{this.props.text}</ListGroupItem>

        <Button bsStyle="success" onClick={this.updateNote}>click to update</Button>
        <Button bsStyle="danger" onClick={this.deleteNote}>delete</Button>

        {(this.state.toBeUpdated) ?
        (<form onSubmit={this.handleNoteUpdate}>
          <textarea
          value={this.state.text}
          onChange={this.handleTextChange}/>
          <div><Button
          type='submit'>
          Update
          </Button></div>
        </form>)
         : null}

         </ListGroup>
      </div>
    )
  }

}

export default OneNote
