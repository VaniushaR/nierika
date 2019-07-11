import React, { Component } from 'react';
import { db } from './Credentials';
import DrawTimeLine from './DrawTimeLine';

let user = [];
let date = [];
let textPosted = [];
let postImg = [];
let totalPost = [];

class TimeLine extends Component {
  constructor() {
    super();

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    db.collection('timeLine')
      .orderBy('date', 'desc')
      .onSnapshot(querySnapshot => {
        const posts = [];
        querySnapshot.forEach(doc => {
          const dataPost = doc.data();
          posts.push(dataPost);
          console.log('enviando data', posts);
        });
        this.setState({ posts: posts });
      });
    //console.log('estado:', this.state.posts);
  }

  /* working:
   componentDidMount() {
    db.collection('timeLine')
      .orderBy('date', 'desc')
      .get()
      .then(querySnapshot => {
        const posts = [];
        querySnapshot.forEach(doc => {
          const dataPost = doc.data();
          posts.push(dataPost);
          console.log('enviando data', posts);
        });
        this.setState({ posts: posts });
      });
    //console.log('estado:', this.state.posts);
  }
  */

  //querySnapshot.forEach(doc => {
  //console.log(
  // `${doc.id} => ${doc.data().textPosted} => ${doc.data().date} => ${
  //  doc.data().user
  // } => ${doc.data().userPic}`

  // snapShots => {
  //   this.setState({
  //     items: snapShots.docs.map(doc => {
  //      console.log(snapShots.docs);
  //     return { id: doc.id, data: doc.data() };
  //   })
  //  });
  // },

  render() {
    return (
      <div>
        <DrawTimeLine post={this.state.posts} />
      </div>
    );
  }

  //const { post } = this.state;
  //console.log('post value', post);
}

export default TimeLine;
//export { user, date, textPosted, postImg, totalPost };

/*
oc.data().user,
                doc.data().date,
                doc.data().textPosted,
                doc.data().userPic, 
                */
