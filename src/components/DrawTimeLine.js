import React, { Component } from 'react';
import {
  Feed,
  Grid,
  Icon,
  Button,
  Comment,
  Form,
  Flag,
  Segment,
  Image,
  Label,
  Rating,
  GridColumn
} from 'semantic-ui-react';
import Coments from './Coments';
import { currenUser, picCurrenUser } from './Login';

class DrawTimeLine extends Component {
  // toStrDate => (
  //   console.log(this.props.post);
  //       this.props.post.map(item =>
  //         let timeSta = item.date;
  //         let toDat = toDate(timeSta)
  //         console.log(toDat));
  // );

  render() {
    console.log(this.props.post);

    return (
      <div>
        {this.props.post.map(item => (
          <div className="main">
            <section className="timeLine">
              <Segment>
                <Grid celled="internally">
                  <Grid.Row>
                    <Grid.Column width={3}>
                      <img
                        className="profile"
                        alt={item.user}
                        src={item.userPic}
                      />
                      <h5>{item.user}</h5>
                    </Grid.Column>
                    <Grid.Column width={10}>
                      <h2>{item.originalLangTitle}</h2>
                      <h3>{item.spanishTitle}</h3>
                      <h6>Lengua Originaria, localidad, Municipio, País</h6>
                    </Grid.Column>
                    <Grid.Column width={3}>
                      <p>13 de julio de 2019</p>
                      <Button as="div" labelPosition="left">
                        <Label as="a" basic color="red" pointing="right">
                          2,048
                        </Label>
                        <Button color="red">
                          <Icon name="heart" />
                          Like
                        </Button>
                      </Button>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <GridColumn width={2}>Etiquetas</GridColumn>
                    <Grid.Column width={14}>
                      <Label as="a" color="blue">
                        Narración Verídica
                      </Label>
                      <Label as="a" color="orange" key="orange">
                        Cuento
                      </Label>
                      <Label as="a" color="green" key="green">
                        Vocabulario
                      </Label>
                      <Label as="a" color="red" key="red">
                        Gramática
                      </Label>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column width={16}>
                      <Segment>
                        <p>{item.originalLangPost}</p>
                        <Segment.Group horizontal>
                          <Segment>
                            Valoración{' '}
                            <Rating
                              maxRating={5}
                              defaultRating={3}
                              icon="star"
                            />
                          </Segment>
                        </Segment.Group>
                      </Segment>
                      <Segment>
                        <p>{item.spanishPost}</p>
                        <Segment.Group horizontal>
                          <Segment>
                            Valoración{' '}
                            <Rating
                              maxRating={5}
                              defaultRating={3}
                              icon="star"
                            />
                          </Segment>
                        </Segment.Group>
                      </Segment>
                    </Grid.Column>
                  </Grid.Row>

                  <Grid.Row>
                    <Grid.Column width={8}>
                      <h3>Compartir</h3>
                      <div>
                        <Button circular color="blue" icon="facebook" />
                        <Button circular color="twitter" icon="twitter" />
                        <Button circular color="linkedin" icon="linkedin" />
                        <Button circular color="teal" icon="share" />
                      </div>
                    </Grid.Column>

                    <Grid.Column width={8}>
                      <h3>Comentar</h3>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
                {/*    <Grid columns="equal">
                  <Grid.Row>
                  <Grid columns="3">
<Grid.Column>

</Grid.Column>
                  </Grid>
                    <Grid.Column>
                      <img
                        className="profile"
                        alt={item.user}
                        src={item.userPic}
                      />

                      <h2>{item.originalLangTitle}</h2>
                      <h5 className="card-title">
                        Publicado por: {item.user}{' '}
                      </h5>
                      <p className="date-post" />
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Segment>
                      <p>{item.originalLangPost}</p>
                    </Segment>
                    <Segment>
                      <p>{item.spanishPost}</p>
                    </Segment>
                  </Grid.Row> */}

                {/* <Form reply>
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
                  <a className="btn btn-Success" /> */}

                {/* <Feed>
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
                  </div> */}
                {/* </Grid> */}
              </Segment>
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
