import React, { Component } from 'react';
import { db } from './Credentials';
import { currenUser, picCurrenUser } from './Login';
import { Feed, Icon, Button, Divider, Segment } from 'semantic-ui-react';

const posting = textPosted => {
  const postDate = new Date();

  db.collection('timeLine')
    .add({
      textPosted,
      date: postDate,
      user: currenUser,
      userPic: picCurrenUser
    })
    .then(function(docRef) {
      console.log('Document written with ID: ', docRef.id);
    })
    .catch(function(error) {
      console.error('Error adding document: ', error);
    });
};

class Publish extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      textPosted: '',
      language: ''
    };
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleClick() {
    this.setState({ textPosted: this.state.value });
    posting(this.state.value);
    db.collection('timeLine')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {});
      });
  }

  render() {
    return (
      <div className="main">
        <section className="timeLine">
          <div className="card text-center">
            <div className="card-header">
              <img src={picCurrenUser} alt={currenUser} className="profile" />
              <h3> {currenUser}</h3>
            </div>
            <div className="card-body">
              <Segment>
                <h5 className="card-title">
                  Comparte con la comunidad una frase o texto en una lengua
                  originaria
                </h5>
                <input
                  value={this.state.value}
                  onChange={this.handleChange.bind(this)}
                />
                <Divider section />
                <Button onClick={this.handleClick.bind(this)} color="green">
                  Publicar{' '}
                </Button>
                <p className="card-text" />
                <a className="btn btn-Success">
                  Añadir información adicional para colaborar a la investigación
                  de la lengua originaria
                </a>
              </Segment>
            </div>

            <Feed>
              <Feed.Event>
                <Feed.Content>
                  <Feed.Meta>
                    <Feed.Like>
                      <Icon name="like" />4 Likes
                    </Feed.Like>
                    <input
                      placeholder="¿A qué lengua pertenece?"
                      id="Language"
                    />
                  </Feed.Meta>
                </Feed.Content>
              </Feed.Event>
            </Feed>
            <div className="card-footer text-muted"> </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Publish;
