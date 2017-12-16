import React, { Component } from 'react';
import './App.css';
import LoginRegister from './LoginRegister.jsx'
import AddNote from './AddNote.jsx'
import AllNotes from './AllNotes.jsx'
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {check} from './authentication-logics/check';
import {login} from './authentication-logics/login';
import {register} from './authentication-logics/register';
import {logout} from './authentication-logics/logout'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
          message: "",
          loading : true
        };
        // when page loads, check if there is a user already logged in
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
        this.checkExistence = this.checkExistence.bind(this);
        this.getNote = this.getNote.bind(this);
        this.checkExistence();
    }
    //check is a user is logged in already
    checkExistence() {
      check()
      .then(loginInfo => {
        this.setState({
          loading: false,
          user: loginInfo.username,
          loggedIn: loginInfo.username !== undefined
        }, this.getNote);
      })
    }

    // log in a user
    handleLogin(event) {
      login(this.state.name, this.state.password)
      .then(
        function(response) {
          if (response.ok) {
            return response.json();
          } else {
            response.json().then( err => {
              Promise.reject(err);
            })
          }
      })
      .then(loginInfo => {
        this.setState ({
          loading: false,
          loggedIn: loginInfo !== undefined,
          user: loginInfo.username,
          message: "",
        }, this.getNote);
        document.cookie=`userToken=${loginInfo.token}`;
      })
      .catch( err => {
        console.warn(err);
        this.setState({ message: "username or password is incorrect"});
      });
    }

    // register a user
    handleRegister(event) {
      register(this.state.name, this.state.password)
      .then(
        function(response) {
          if (response.ok) {
            return response.json();
          } else {
            response.json().then( err => {
              Promise.reject(err);
            })
          }
      })
      .then((loginInfo) => {
        this.setState ({
          loading : false,
          loggedIn : loginInfo.username !== undefined,
          user : loginInfo.username,
          message : ""
        }); document.cookie=`userToken=${loginInfo.token}`
      })
      .catch( err => {
        console.warn(err);
        this.setState({message: "username already exists"});
      })
    }

    // log out current user
    handleLogout(event) {
      logout(this.state.user)
      .then( response => response.ok ? response.json() : response.json().then( err => Promise.reject(err)) )
      .then( loginInfo => {this.setState ({
          loading : false,
          loggedIn : false,
          user : "",
          message : `Logged ${this.state.user} out`
        },
        () => {document.cookie="name=userToken; expires=Thu, 01 Jan 1970 00:00:00 UTC;"});
      })
      .catch( err => console.warn(err));
    }

    // catch name change
    handleNameChange(event) {
      this.setState({
        name : event.target.value
      });
    }

    // catch pass word change
    handlePasswordChange(event) {
      this.setState({
        password : event.target.value
      });
    }

    getNote() {
      fetch(`/notes/${this.state.user}`, {method : 'GET'})
      .then(
        function(response) {
          if (response.ok) {
            return response.json();
          } else {
            response.json().then(err => {
              Promise.reject(err);
            })
          }
        }
      )
      .then((response) => {
        console.log(response);
        this.setState({
          Notes : response
        });
      }).catch( err => console.warn(err))
    }

    render() {
      if (this.state.loading) {
        return (<h1 className="App">Loading Now, please wait</h1>);
      } else if (!this.state.loggedIn) {
        return (
          <div className="App">
            <h1 className="headline">
              User Log in / Register
            </h1>
            {this.state.message}
            <LoginRegister handleNameChange={this.handleNameChange} handlePasswordChange={this.handlePasswordChange} handleLogin={this.handleLogin} handleRegister={this.handleRegister}>
            </LoginRegister>
          </div>
          );
      } else if (this.state.Notes === undefined) {
        return (<h1 className="App">getting Notes, refersh after a while</h1>);
      } else {
        return (
          <div className="App">
                <h2>{this.state.user} Note Book</h2>
                <button id="log-out-button" type="submit" onClick={this.handleLogout}>Log {this.state.user} out</button>
                <AllNotes data={this.state.Notes} refresh={this.getNote}></AllNotes>
                <AddNote author={this.state.user} refresh={this.getNote}/>
          </div>
        );
      }
  }
}

export default App;
