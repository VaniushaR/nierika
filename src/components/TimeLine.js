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
      post: []
    };
  }

  componentDidMount() {
    db.collection('timeLine')
      .get()
      .then(
        querySnapshot => {
          this.setState({
            posts: querySnapshot.forEach(doc => {
              console.log(
                'enviando data',
                doc.data().user,
                doc.data().date,
                doc.data().textPosted,
                doc.data().userPic
              );
              return (
                (user = doc.data().user),
                (date = doc.data().date),
                (textPosted = doc.data().textPosted),
                (postImg = doc.data().userPic),
                (totalPost = +1)
              );
            })
          });
        },
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
        error => {
          console.log(error);
        }
      );
  }

  render() {
    return <DrawTimeLine />;
  }

  //const { post } = this.state;
  //console.log('post value', post);
}

export default TimeLine;
export { user, date, textPosted, postImg, totalPost };
