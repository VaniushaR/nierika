import React, { Component } from 'react';
import {
  Feed,
  Icon,
  Button,
  Comment,
  Form,
  Flag,
  Segment
} from 'semantic-ui-react';
import Coments from './Coments';
import { currenUser, picCurrenUser } from './Login';

class DrawTimeLine extends Component {
  render() {
    console.log(this.props.post);
    return (
      <div>
        {this.props.post.map(item => (
          <div className="main">
            <section className="timeLine">
              <div className="card text-center">
                <div className="card-body">
                  <h5 className="card-title">{item.user} </h5>
                  <img className="profile" alt={item.user} src={item.userPic} />
                  <Segment>
                    <Flag name="Mexico" />
                    <p>{item.textPosted}</p>
                  </Segment>

                  <Form reply>
                    <Button
                      content="Editar"
                      labelPosition="left"
                      icon="edit"
                      primary
                    />
                    <Button
                      content="Eliminar"
                      color="red"
                      labelPosition="left"
                      icon="trash alternate"
                    />
                  </Form>

                  <p className="card-text"> </p>
                  <a className="btn btn-Success" />
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
                <div className="card-header">
                  <Comment.Group>
                    <p>Comentar...</p>
                    <img
                      src={picCurrenUser}
                      alt={currenUser}
                      className="profile"
                    />
                    <h3> {currenUser}</h3>

                    <Form reply>
                      <Form.TextArea />
                      <Button
                        content="Agregar Comentario"
                        labelPosition="left"
                        icon="edit"
                        primary
                      />
                    </Form>
                  </Comment.Group>
                  <Coments />
                </div>
              </div>
            </section>
          </div>
        ))}
      </div>
    );
  }
}

export default DrawTimeLine;

/*
{post && post !== undefined
                ? post.forEach((item, key) => (
                    <div>
                      <h5 key={key} className="card-title">
                        {item.data.user} </h5>
                        </div>
                          ))
                : null}
                        */
