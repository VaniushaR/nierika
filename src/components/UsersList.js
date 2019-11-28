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
          console.log('lista de usuarios: ', dataUsers.name);
        });
        this.setState({ usersList: usersListToday });
        console.log(this.state.usersList);
      });
  }

  render() {
    return (
      <div>
        <h1>Users List</h1>
        <Segment className="usersList">
          <Grid relaxed columns={4}>
            {this.state.usersList.map((item, key) => (
              <Grid.Column key={key}>
                <Card>
                  <Image src={item.picture} wrapped ui={false} />
                  <Card.Content>
                    <Card.Header>Mat</Card.Header>
                    <Card.Meta>
                      <span className="date">Joined in 2015</span>
                    </Card.Meta>
                    <Card.Description>
                      Matthew is a musician living in Nashville.
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <a>
                      <Icon name="user" />
                      22 Friends
                    </a>
                  </Card.Content>
                </Card>
                <br />
                <Image src="https://junkmailimages.blob.core.windows.net/large/0208943baf854e878083b11387037936.jpg" />
              </Grid.Column>
            ))}
          </Grid>
        </Segment>
      </div>
    );
  }
}

export default UsersList;
