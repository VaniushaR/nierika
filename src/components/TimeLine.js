import React, { Component } from 'react';
import { db } from './Credentials';
import NewPublication from './NewPublication';
import DrawTimeLine from './DrawTimeLine';
import { currentUser } from './Login';

console.log(currentUser);
class TimeLine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      user: this.props
    };
  }

  componentDidMount() {
    console.log(this.props.user);
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
