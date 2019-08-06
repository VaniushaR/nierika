import React, { Component } from 'react';
import { db } from './Credentials';
import { currenUser, picCurrenUser } from './Login';
import LanguagesOptions from './Languages';
import TextTypes from './TextTypes';
import {
  Feed,
  Icon,
  Button,
  Divider,
  Segment,
  Checkbox,
  Grid,
  Label,
  Select,
  Header,
  List,
  TextArea,
  Form,
  Input
} from 'semantic-ui-react';

//sconst sizes = ['mini', 'tiny', 'small', 'large', 'big', 'huge', 'massive'];

const posting = (
  originalLangTitle,
  originalLangPost,
  spanishTitle,
  spanishPost
) => {
  const d = new Date();
  const postDate = d.toDateString();

  db.collection('timeLine')
    .add({
      date: postDate,
      user: currenUser,
      userPic: picCurrenUser,
      originalLangTitle: originalLangTitle,
      originalLangPost: originalLangPost,
      spanishTitle: spanishTitle,
      spanishPost: spanishPost
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
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(
      'estados ' + this.state.spanishTitle,
      ' y ' + this.state.originalLangTitle
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
                      originaria! 😄
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

/* Notes:
import React, { Component } from 'react';
import { db } from './Credentials';
import { currenUser, picCurrenUser } from './Login';
import LanguagesOptions from './Languages';
import LocationOptions from './Locations';
import TextTypes from './TextTypes';
import {
  Feed,
  Icon,
  Button,
  Divider,
  Segment,
  Checkbox,
  Grid,
  Label,
  Select,
  Header,
  List,
  TextArea,
  Form
} from 'semantic-ui-react';

const sizes = ['mini', 'tiny', 'small', 'large', 'big', 'huge', 'massive'];

const posting = originalLangPost => {
  const postDate = new Date();

  const locationOptions = [
    { name: 'Baja California Sur, San Pancho' },
    { name: 'Puebla, San Andrés' },
    { name: 'Veracruz, Tlacotalpan' }
  ];

  db.collection('timeLine')
    .add({
      originalLangPost,
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
      originalLangPost: '',
      language: ''
    };
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleClick() {
    this.setState({ originalLangPost: this.state.value });
    posting(this.state.value);
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
                      originaria! 😄
                    </h4>
                  </Segment>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <Segment>
                    <Label attached="top">
                      Selecciona la Lengua Originaria
                    </Label>
                    <LanguagesOptions />
                  </Segment>
                </Grid.Column>
                <Grid.Column>
                  <Segment>
                    <Label attached="top">Selecciona su localidad</Label>
                    <LocationOptions />
                  </Segment>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <Segment padded>
                    <Label attached="top">Escribe en Lengua Originaria </Label>
                    <Form>
                      <TextArea
                        value={this.state.value}
                        onChange={this.handleChange.bind(this)}
                        placeholder="A bird in a branch have not fear because it is confidence is on its wings"
                      />
                    </Form>
                  </Segment>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <Segment padded>
                    <Label attached="top">
                      Agrega la traducción al español
                    </Label>

                    <Form>
                      <TextArea placeholder="Los usuarios validarán la traducción de tu texto..." />
                    </Form>
                  </Segment>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <Segment padded>
                    <Label attached="top right">
                      Si quieres agrega una imagen
                    </Label>
                    <Button color="teal">Buscar en mis archivos</Button> &nbsp;
                    <Button color="orange">Acceder a la cámara</Button>
                  </Segment>
                </Grid.Column>
                <Grid.Column>
                  <Segment>
                    <Label attached="top right">
                      Selecciona el tipo de contenido
                    </Label>
                    <TextTypes />
                  </Segment>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row />
              <Grid.Row>
                <Grid.Column>
                  <Segment.Group horizontal>
                    <Segment>
                      <Checkbox toggle />
                    </Segment>
                    <Segment>
                      <h4>
                        Permitir que mi publicación y mis datos de hablante sean
                        utilizados para investigación y fomento al conocimiento
                        de las Lenguas Originarias
                      </h4>
                    </Segment>
                    <Segment>
                      <Button
                        onClick={this.handleClick.bind(this)}
                        color="green"
                      >
                        Publicar{' '}
                      </Button>
                    </Segment>
                  </Segment.Group>
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
*/
