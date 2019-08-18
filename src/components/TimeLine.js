import React, { Component } from 'react';
import { db } from './Credentials';
import NewPublication from './NewPublication';
import DrawTimeLine from './DrawTimeLine';

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
  }
  render() {
    return (
      <div>
        <NewPublication />
        <DrawTimeLine post={this.state.posts} />
      </div>
    );
  }
}

export default TimeLine;
