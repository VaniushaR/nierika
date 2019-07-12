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
  Input,
  Header,
  List
} from 'semantic-ui-react';

const sizes = ['mini', 'tiny', 'small', 'large', 'big', 'huge', 'massive'];

const posting = textPosted => {
  const postDate = new Date();

  const locationOptions = [
    { name: 'Baja California Sur, San Pancho' },
    { name: 'Puebla, San Andrés' },
    { name: 'Veracruz, Tlacotalpan' }
  ];

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
                    <Input
                      className="input-form"
                      value={this.state.value}
                      onChange={this.handleChange.bind(this)}
                      placeholder="A bird in a branch have not fear because it is confidence is on its wings"
                    />
                  </Segment>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <Segment padded>
                    <Label attached="top">
                      Agrega la traducción al español
                    </Label>
                    <Input
                      className="input-form"
                      placeholder="Los usuarios validarán la traducción de tu texto..."
                    />
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
