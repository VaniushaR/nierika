import React, { Component } from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { db } from './Credentials';
import Nav from './Nav';
import { Menu } from 'semantic-ui-react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import UsersList from './UsersList';
import TimeLine from './TimeLine';
import Profile from './Profile.jsx';
import About from './About.jsx';

let currentUser;
let picCurrentUser;

class Login extends Component {
  state = { isSignedIn: false };
  state = { exists: false };
  constructor() {
    super();
    this.state = {
      user: null,
      pictures: []
    };
  }
  uiConfig = {
    // signInSuccessUrl: '/signedIn',
    signInFlow: 'popup',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.PhoneAuthProvider.PROVIDER_ID
      // firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
    ],

    callbacks: {
      signInSucces: () => false
    }
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user });
      this.setState({ isSignedIn: !!user });
    });
  }

  render() {
    //Conditional rendering:
    if (this.state.user) {
      const lastLogin = new Date();
      currentUser = this.state.user.displayName;
      // console.log(currentUser);
      picCurrentUser = this.state.user.photoURL;
      //    console.log(picCurrentUser);
      //search on db if the user already exist

      db.collection('users')
        .where('email', '==', this.state.user.email)
        .get()
        .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
            // If the user exists:
            console.log(doc.id, ' => EXISTE EL USUARIO ', doc.data());
            doc.id.add({ lastLogin: lastLogin });
            this.setState.exist = true;
          });
        })
        .catch(function(error) {
          console.log('Error getting documents: ', error);
        });

      if ((this.state.exist = true)) {
        console.log('not a new addition to the userslist');
      } else {
        console.log('NEW USER ARRIVES!');
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
      }

      //***************Function to erase my own user registration
      // db.collection('users')
      //   .where('email', '==', 'vaniusha.wolf@hotmail.com')
      //   .get()
      //   .then(function(querySnapshot) {
      //     querySnapshot.forEach(function(doc) {
      //       doc.ref
      //         .delete()
      //         .then(() => {
      //           console.log('Document successfully deleted!');
      //         })
      //         .catch(function(error) {
      //           console.error('Error removing document: ', error);
      //         });
      //     });
      //   });

      return (
        <div>
          <Menu stackable>
            <Menu.Item className="profile-content">
              <img
                className="profile"
                src={this.state.user.photoURL}
                alt={this.state.user.displayName}
              />
              <h4 className="profile-name">{this.state.user.displayName}</h4>
            </Menu.Item>
            <Menu.Item position="right"></Menu.Item>
            <div className="exitBtn">
              <button
                className="btn btn-danger"
                onClick={() => firebase.auth().signOut()}
              >
                Salir
              </button>
            </div>
          </Menu>
          <Router>
            <Nav />
            <Switch>
              <Route
                path="/nierika"
                render={props => (
                  <TimeLine {...props} user={this.state.user.displayName} />
                )}
              />
              <Route path="/usuarios" component={UsersList} />
              <Route path="/perfil" component={Profile} />
              <Route path="/about" component={About} />
            </Switch>
          </Router>
        </div>
      );
    } else {
      return (
        <div className="card-login">
          <div className="main">
            <h2 className="welcome">
              Red Social para aprender y enseñar una Lengua Indígena
            </h2>
            <section className="login">
              <h2>Inicia Sesión</h2>
              <StyledFirebaseAuth
                uiConfig={this.uiConfig}
                firebaseAuth={firebase.auth()}
              />
            </section>
          </div>
        </div>
      );
    }
  }
}

export default Login;
export { currentUser, picCurrentUser };
// class Login extends Component {
//   constructor() {
//     super();
//     this.state = {
//       user: null,
//       pictures: []
//     };
//     this.LoginFB = this.LoginFB.bind(this);
//     this.LoginTwitter = this.LoginTwitter.bind(this);
//     this.LoginGoogle = this.LoginGoogle.bind(this);
//     this.handleLogout = this.handleLogout.bind(this);
//   }

//   componentWillMount() {
//     firebase.auth().onAuthStateChanged(user => {
//       this.setState({ user }); //user : user
//     });

//     firebase
//       .database()
//       .ref('pictures')
//       .on('child_added', snapshot => {
//         this.setState({
//           pictures: this.state.pictures.concat(snapshot.val())
//         });
//       });
//   }

//   LoginGoogle() {
//     const provider = new firebase.auth.GoogleAuthProvider();
//     firebase
//       .auth()
//       .signInWithPopup(provider)
//       .then(result => console.log(`${result.user.email} ha iniciado sesión`))
//       .catch(error => console.error(`Error ${error.code}: ${error.message}`));
//   }

//   LoginTwitter() {
//     const provider = new firebase.auth.TwitterAuthProvider();
//     firebase
//       .auth()
//       .signInWithPopup(provider)
//       .then(result =>
//         console.log(`${result.user.email} ha iniciado sesión con twitter `)
//       );
//   }

//   LoginFB() {
//     const provider = new firebase.auth.FacebookAuthProvider();
//     firebase
//       .auth()
//       .signInWithPopup(provider)
//       .then(result => console.log(`${result.user.email} ha iniciado sesión`))
//       .catch(error => console.error(`Error ${error.code}: ${error.message}`));
//   }

//   handleLogout() {
//     firebase
//       .auth()
//       .signOut()
//       .then(result =>
//         console.log(`${result.user.email} ha terminado su sesión.`)
//       )
//       .catch(error =>
//         console.log(`Ha ocurrido un error ${error.code}: ${error.message}`)
//       );
//   }
//   handleItemClick = (e, { name }) => this.setState({ activeItem: name });

//   renderLogin() {
//     const { activeItem } = this.state;
//     //if User have an a succesful login, get the date and the user basic data

//     if (this.state.user) {
//       const lastLogin = new Date();
//       currentUser = this.state.user.displayName;
//       console.log(currentUser);
//       picCurrentUser = this.state.user.photoURL;
//       console.log(picCurrentUser);
//       db.collection('users')

//         .add({
//           name: this.state.user.displayName,
//           email: this.state.user.email,
//           picture: this.state.user.photoURL,
//           lastLogin: lastLogin
//         })
//         .then(function(docRef) {
//           console.log('Document written with ID: ', docRef.id);
//         })
//         .catch(function(error) {
//           console.error('Error adding document: ', error);
//         });
//       return (
//         <div>
//           <Menu stackable>
//             <Menu.Item className="profile-content">
//               <img
//                 className="profile"
//                 src={this.state.user.photoURL}
//                 alt={this.state.user.displayName}
//               />
//               <h4 className="profile-name">{this.state.user.displayName}</h4>
//             </Menu.Item>
//             <Menu.Item position="right"></Menu.Item>

//             <div className="exitBtn">
//               <button className="btn btn-danger" onClick={this.handleLogout}>
//                 Salir
//               </button>
//             </div>
//           </Menu>
//           <Router>
//             <Nav />
//             <Switch>
//               <Route
//                 path="/nierika"
//                 render={props => (
//                   <TimeLine {...props} user={this.state.user.displayName} />
//                 )}
//               />
//               <Route path="/usuarios" component={UsersList} />
//               <Route path="/perfil" component={Profile} />
//             </Switch>
//           </Router>
//         </div>
//       );
//     } else {
//       //if user isn't log   exact component={TimeLine}
//       return (
//         <div className="main">
//           <h2 className="welcome">
//             Red Social para aprender y enseñar una Lengua Originaria
//           </h2>
//           <section className="login">
//             <h2>Inicia Sesión</h2>
//             <button
//               type="button"
//               onClick={this.LoginGoogle}
//               className="btn btn-danger google"
//             >
//               Login con Google
//             </button>
//             <br />
//             <br />
//             <button
//               type="button"
//               onClick={this.LoginTwitter}
//               className="btn twitter"
//             />
//             <br />
//             <br />

//             <button onClick={this.LoginFB} className="btn facebook" />
//           </section>
//         </div>
//       );
//     }
//   }

//   render() {
//     return <div className="App-intro">{this.renderLogin()}</div>;
//   }
// }

// export default Login;
// export { currentUser, picCurrentUser };
