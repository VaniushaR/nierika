//Lista de Usuarios que se han logeado y sus datos de hablantes
import React, { Component } from 'react';
import { Grid, Image, Card, Icon, Segment } from 'semantic-ui-react';
import { db } from './Credentials';
import { currentUser } from './Login';
console.log(currentUser);

class UsersList extends Component {
  constructor() {
    super();
    this.state = {
      usersList: []
    };
  }

  componentDidMount() {
    db.collection('users')
      .orderBy('lastLogin', 'desc')
      .onSnapshot(querySnapshot => {
        const usersListToday = [];
        querySnapshot.forEach(doc => {
          const dataUsers = doc.data();
          usersListToday.push(dataUsers);
          //   console.log('lista de usuarios: ', dataUsers.name);
        });
        this.setState({ usersList: usersListToday });
        // console.log(this.state.usersList);
      });
  }

  render() {
    return (
      <div>
        <h1>Usuarios Registrados</h1>
        <Segment className="usersList">
          <Grid relaxed columns={4}>
            {this.state.usersList.map((item, key) => (
              <Grid.Column key={key}>
                <Card>
                  <Image src={item.picture} wrapped ui={false} />
                  <Card.Content>
                    <Card.Header>{item.name}</Card.Header>
                    <Card.Meta>
                      <span className="date">Lengua: ___</span>
                    </Card.Meta>
                    <Card.Description>
                      Descripción del usuario. Intereses. Mensaje
                      personalizable.
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <a>
                      <Icon name="user" />2 Amigos
                    </a>
                  </Card.Content>
                </Card>
              </Grid.Column>
            ))}
          </Grid>
        </Segment>
      </div>
    );
  }
}

export default UsersList;
