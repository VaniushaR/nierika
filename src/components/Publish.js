import React, { Component } from 'react';
import { db, storage } from './Credentials';
import { currentUser, picCurrentUser } from './Login';
import LanguagesOptions from './Languages';
import TextTypes from './TextTypes';
import {
  Icon,
  Input,
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
import { selection } from './TextTypes';

let image;
const posting = (
  originalLangTitle,
  originalLangPost,
  spanishTitle,
  spanishPost,
  imgUpload,
  allowInv
) => {
  const d = new Date();
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  const postDate = d.toLocaleDateString('es-ME', options);
  //keep img in storage
  console.log(image);
  //call img funk
  db.collection('timeLine')
    .add({
      date: postDate,
      user: currentUser,
      userPic: picCurrentUser,
      language: language,
      language_location: location,
      originalLangTitle: originalLangTitle,
      originalLangPost: originalLangPost,
      spanishTitle: spanishTitle,
      spanishPost: spanishPost,
      textTag: selection,
      img: imgUpload,
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
      imgUpload: '',
      allowInv: true
    };
  }

  handleChange(e) {
    this.setState({ language: language, langLocation: location });
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleUpload(e) {
    image = '';
    if (e.target.files[0]) {
      image = e.target.files[0];
      this.storageImg(image);
    } else {
      image = '';
    }
  }

  handleClick() {
    console.log(this.state.originalLangTitle, this.state.spanishTitle);
    // this.validations.bind(this);
    if (
      this.state.language == '' ||
      this.state.originalLangPost == '' ||
      this.state.originalLangTitle == '' ||
      this.state.spanishTitle == '' ||
      this.state.spanishPost == ''
    ) {
      alert('Por favor llena todos los campos');
    } else {
      posting(
        this.state.originalLangTitle,
        this.state.originalLangPost,
        this.state.spanishTitle,
        this.state.spanishPost,
        this.state.imgUpload,
        this.state.allowInv
      );

      db.collection('timeLine')
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {});
        });
      //restart the values:
      this.setState({
        originalLangTitle: '',
        originalLangPost: '',
        spanishTitle: '',
        spanishPost: '',
        language: '',
        langLocation: '',
        contentType: '',
        postImg: '',
        imgUpload: '',
        allowInv: true
      });
    }
  }

  checkboxValue() {
    console.log(this.state.allowInv);
    console.log('tipo:' + typeof this.state.allowInv);
    this.setState({
      allowInv: !this.state.allowInv
    });
  }

  storageImg(image) {
    const uploadTask = storage.ref(`postImages/${image.name}`).put(image);
    uploadTask.on(
      'state_changed',
      snapshot => {
        console.log('progress');
      },
      error => {
        console.log(error);
      },
      () => {
        console.log('completed');
        storage
          .ref('postImages')
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            console.log('img-url : ', url);
            // image = url;
            return this.setState({ imgUpload: url });
            // return image;
          });
      }
    );
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
                      src={picCurrentUser}
                      alt={currentUser}
                      className="profile"
                    />
                    {currentUser}
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
                          placeholder="Escribe el Título en su lengua original"
                        />
                        <TextArea
                          name="originalLangPost"
                          value={this.state.originalLangPost}
                          onChange={this.handleChange.bind(this)}
                          placeholder="Escribe contenido en lengua original. Preferentemente utiliza puntuación para seccionar las frases en ambas lenguas. Cada aportación es muy valiosa e importante para el conocimiento de las lenguas indígenas originarias de neustro país."
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
                          placeholder="Escribe la traducción al español equivalente en frases al texto original. Preferentemente utiliza puntuación para seccionar las frases en ambas lenguas. Otros usuarios que compartan la lengua originaria podrán validar y enriquecer tu traducción."
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
                    <Input
                      type="file"
                      color="teal"
                      onChange={this.handleUpload.bind(this)}
                    />
                    &nbsp;
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
                    <Checkbox
                      toggle
                      defaultChecked
                      onChange={this.checkboxValue.bind(this)}
                    />
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
                    className="publicar-btn"
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
