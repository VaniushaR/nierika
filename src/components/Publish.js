import React, { Component } from 'react';
import { db } from './Credentials';
import { currenUser, picCurrenUser } from './Login';
import LanguagesOptions from './Languages';
import TextTypes from './TextTypes';
import {
  Icon,
  Button,
  Segment,
  Checkbox,
  Grid,
  Label,
  Header,
  TextArea,
  Form
} from 'semantic-ui-react';
import { language, location } from './Languages';

const posting = (
  originalLangTitle,
  originalLangPost,
  spanishTitle,
  spanishPost
) => {
  const d = new Date();
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  const postDate = d.toLocaleDateString('es-ME', options);
  let allowInv = true;

  db.collection('timeLine')
    .add({
      date: postDate,
      user: currenUser,
      userPic: picCurrenUser,
      language: language,
      language_location: location,
      originalLangTitle: originalLangTitle,
      originalLangPost: originalLangPost,
      spanishTitle: spanishTitle,
      spanishPost: spanishPost,
      textTag: '',
      img: '',
      allow_inv: allowInv
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
      originalLangTitle: '',
      originalLangPost: '',
      spanishTitle: '',
      spanishPost: '',
      language: '',
      langLocation: '',
      contentType: '',
      postImg: '',
      allowInv: ''
    };
  }

  handleChange(e) {
    // this.setState({ value: e.target.value });
    // console.log(this.state.value);
    console.log(language, location);
    this.setState({ language: language, langLocation: location });
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(
      ' titulo en esp ' + this.state.spanishTitle,
      ' titulo en LI ' + this.state.originalLangTitle,
      ' lang: ' + this.state.language,
      ' loc ' + this.state.langLocation
    );
  }

  handleClick() {
    console.log(this.state.originalLangTitle, this.state.spanishTitle);
    // this.setState({
    //   originalLangPost: this.state.value,
    //   spanishPost: this.state.value1
    // });
    posting(
      this.state.originalLangTitle,
      this.state.originalLangPost,
      this.state.spanishTitle,
      this.state.spanishPost
    );
    db.collection('timeLine')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {});
      });
  }

  render() {
    return (
      <div className="newPost">
        <section className="timeLine">
          <Segment raised>
            <Grid columns="equal">
              <Grid.Row>
                <Grid.Column>
                  <Header as="h2">
                    <img
                      src={picCurrenUser}
                      alt={currenUser}
                      className="profile"
                    />
                    {currenUser}
                  </Header>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <Segment>
                    <h4>
                      ¡Comparte con la comunidad una frase o texto en una lengua
                      originaria!{' '}
                      <span role="img" alt="happy emoji face">
                        {' '}
                        😄
                      </span>
                    </h4>
                  </Segment>
                </Grid.Column>
              </Grid.Row>
              <LanguagesOptions />
              <Grid.Row>
                <Grid.Column>
                  <Segment padded>
                    <Label attached="top">
                      {' '}
                      <Icon name="pencil alternate" />
                      Escribe en Lengua Originaria{' '}
                    </Label>
                    <Form>
                      <Segment secondary>
                        <Form.Input
                          label="Título en Lengua Original"
                          name="originalLangTitle"
                          value={this.state.originalLangTitle}
                          onChange={this.handleChange.bind(this)}
                          placeholder="Escribe el Título"
                        />
                        <TextArea
                          name="originalLangPost"
                          value={this.state.originalLangPost}
                          onChange={this.handleChange.bind(this)}
                          placeholder="A bird in a branch have not fear because it is confidence is on its wings"
                        />
                      </Segment>
                    </Form>
                  </Segment>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <Segment padded>
                    <Label attached="top">
                      {' '}
                      <Icon name="pencil alternate" />
                      Agrega la traducción al español
                    </Label>
                    <Form className="text-al">
                      <Segment secondary>
                        <Form.Input
                          label="Título en español"
                          name="spanishTitle"
                          value={this.state.spanishTitle}
                          onChange={this.handleChange.bind(this)}
                          placeholder="Escribe el Título en español"
                        />

                        <TextArea
                          name="spanishPost"
                          value={this.state.spanishPost}
                          onChange={this.handleChange.bind(this)}
                          placeholder="Los usuarios validarán la traducción de tu texto..."
                        />
                      </Segment>
                    </Form>
                  </Segment>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <Segment padded>
                    <Label attached="top right">
                      {' '}
                      <Icon name="camera retro" />
                      Si quieres agrega una imagen
                    </Label>
                    <Button color="teal">Buscar en mis archivos</Button> &nbsp;
                    <Button color="orange">Acceder a la cámara</Button>
                  </Segment>
                </Grid.Column>
                <Grid.Column>
                  <Segment>
                    <Label attached="top right">
                      {' '}
                      <Icon name="tags" />
                      Selecciona el tipo de contenido
                    </Label>
                    <TextTypes />
                  </Segment>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row />
              <Grid.Row>
                <Grid.Column>
                  <Segment>
                    <Checkbox toggle />
                    <h4>
                      Permitir que mi publicación y mis datos de hablante sean
                      utilizados para investigación y fomento al conocimiento de
                      las Lenguas Originarias
                    </h4>
                  </Segment>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <Button
                    icon
                    labelPosition="right"
                    onClick={this.handleClick.bind(this)}
                    color="green"
                  >
                    <Icon name="paper plane outline" /> Publicar{' '}
                  </Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>

          <div className="card-footer text-muted"> </div>
        </section>
      </div>
    );
  }
}

export default Publish;

//TODO: Allow investigation prechecked value to true, allow turn it to false with a e listenner
//TODO: Allow img posting to DB
//TODO: Allow the array creation for tags selection and get the logic for draw it on the post
