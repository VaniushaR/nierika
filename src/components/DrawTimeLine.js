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

class DrawTimeLine extends Component {
  state = { activeIndex: 0 };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  handlePythonScripts = (e, postClicked) => {
    console.log('python func from react');
    fetch(
      '../../NLP/bilingual.json'
      // {
      // headers: {
      //   'Content-Type': 'application/json',
      //   Accept: 'application/json'
      // }
      // }
    ).then(
      res => console.log(res.json()),

      error => {
        console.log(error);
      }
    );
  };

  render() {
    console.log(this.props.post);

    const { activeIndex } = this.state; //ACCORDION

    let x;

    return (
      <div>
        {this.props.post.map((item, key) => (
          <div key={key} className="main">
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
                      <h6>
                        {item.language} de {item.language_location}.
                      </h6>
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
                      {item.textTag.map(color => (
                        <Label key={color} tag>
                          {color}
                        </Label>
                      ))}
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column width={16}>
                      <Segment>
                        <img src={item.img} />
                      </Segment>
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
                      <Segment>
                        <button onClick={this.handlePythonScripts}>
                          Aprender
                        </button>
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
