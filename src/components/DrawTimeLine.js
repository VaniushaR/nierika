import React, { Component } from 'react';
import {
  Grid,
  Icon,
  Button,
  Segment,
  Label,
  Rating,
  GridColumn,
  Accordion,
  Header
} from 'semantic-ui-react';
import Comments from './Comments';
//simport { currenUser, picCurrenUser } from './Login';

class DrawTimeLine extends Component {
  // toStrDate => (
  //   console.log(this.props.post);
  //       this.props.post.map(item =>
  //         let timeSta = item.date;
  //         let toDat = toDate(timeSta)
  //         console.log(toDat));
  // );
  state = { activeIndex: 0 };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    console.log(this.props.post);
    const { activeIndex } = this.state; //ACCORDION

    return (
      <div>
        {this.props.post.map(item => (
          <div key={item.date} className="main">
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
                      <p>{item.date}</p>
                      <Button as="div" labelPosition="left">
                        <Label as="a" basic color="red" pointing="right">
                          2,048
                        </Label>
                        <Button color="red">
                          <Icon name="heart" />
                        </Button>
                      </Button>
                      <div className="publisher-btns">
                        <Button circular color="green" icon="edit" />
                        <Button
                          circular
                          inverted
                          color="grey"
                          icon="trash alternate"
                        />
                      </div>
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
                    <Grid.Column width={12}>
                      <Accordion>
                        <Accordion.Title
                          active={activeIndex === 0}
                          index={0}
                          onClick={this.handleClick}
                        >
                          <Header as="h3" dividing className="accordion-com">
                            Comentarios <Icon name="dropdown" />
                          </Header>
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === 0}>
                          <Comments />
                        </Accordion.Content>

                        {/* <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
          What kinds of dogs are there?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <p>
            There are many breeds of dogs. Each breed varies in size and
            temperament. Owners often select a breed of dog that they find to be
            compatible with their own lifestyle and desires from a companion.
          </p>
        </Accordion.Content> */}
                      </Accordion>
                    </Grid.Column>
                    <Grid.Column width={4}>
                      <h3>Compartir</h3>
                      <div>
                        <Button circular color="blue" icon="facebook" />
                        <Button circular color="twitter" icon="twitter" />
                        <Button circular color="linkedin" icon="linkedin" />
                        <Button circular color="teal" icon="share" />
                      </div>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
                {/*  

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
