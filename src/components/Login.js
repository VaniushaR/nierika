import React, { Component } from 'react';
import firebase from 'firebase';
import { db } from './Credentials';
import Nav from './Nav';
//import NewPublication from './NewPublication';
//import TimeLine from './TimeLine';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UsersList from './UsersList';
import TimeLine from './TimeLine';

let currenUser;
let picCurrenUser;

class Login extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      pictures: []
    };
    this.LoginFB = this.LoginFB.bind(this);
    this.LoginGoogle = this.LoginGoogle.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }
  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user }); //user : user
    });
    firebase //para qué hago esto??
      .database()
      .ref('pictures')
      .on('child_added', snapshot => {
        this.setState({
          pictures: this.state.pictures.concat(snapshot.val())
        });
      });
  }

  LoginGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => console.log(`${result.user.email} ha iniciado sesión`))
      .catch(error => console.error(`Error ${error.code}: ${error.message}`));
  }
  LoginFB() {
    let provider = new firebase.auth.FacebookAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => console.log(`${result.user.email} ha iniciado sesión`))
      .catch(error => console.error(`Error ${error.code}: ${error.message}`));
  }

  handleLogout() {
    firebase
      .auth()
      .signOut()
      .then(result =>
        console.log(`${result.user.email} ha terminado su sesión.`)
      )
      .catch(error =>
        console.log(`Ha ocurrido un error ${error.code}: ${error.message}`)
      );
  }

  renderLogin() {
    //if User have an a succesful login, get the date and the user basic data
    if (this.state.user) {
      const lastLogin = new Date();
      currenUser = this.state.user.displayName;
      console.log(currenUser);
      picCurrenUser = this.state.user.photoURL;
      console.log(picCurrenUser);
      db.collection('users')
        .add({
          name: this.state.user.displayName,
          email: this.state.user.email,
          picture: this.state.user.photoURL,
          lastLogin: lastLogin
        })
        .then(function(docRef) {
          console.log('Document written with ID: ', docRef.id);
        })
        .catch(function(error) {
          console.error('Error adding document: ', error);
        });
      return (
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a
                    className="nav-link"
                    href="https://vaniushar.github.io/nierika/"
                  >
                    <img
                      className="profile"
                      src={this.state.user.photoURL}
                      alt={this.state.user.displayName}
                    />
                    <span className="sr-only">(current)</span>
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a
                    className="nav-link"
                    href="https://vaniushar.github.io/nierika/"
                  >
                    <h3> {this.state.user.displayName}</h3>
                    <span className="sr-only">(current)</span>
                  </a>
                </li>
              </ul>
              <button className="btn btn-danger" onClick={this.handleLogout}>
                Salir
              </button>
            </div>
          </nav>
          <Router>
            <Nav />
            <Switch>
              <Route path="/" exact component={TimeLine} />
              <Route path="/usuarios" component={UsersList} />
            </Switch>
          </Router>
        </div>
      );
    } else {
      //if user isn't log
      return (
        <div className="main">
          <h2 className="welcome">
            Red Social para aprender y enseñar una Lengua Originaria
          </h2>
          <section className="login">
            <h2>Inicia Sesión</h2>
            <button
              type="button"
              onClick={this.LoginGoogle}
              className="btn btn-danger google"
            >
              Login con Google
            </button>
            <br />
            <br />
            <button onClick={this.LoginFB} className="btn facebook" />
          </section>
        </div>
      );
    }
  }

  render() {
    return <div className="App-intro">{this.renderLogin()}</div>;
  }
}

export default Login;
export { currenUser, picCurrenUser };
