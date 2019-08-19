//Lista de Usuarios que se han logeado y sus datos de hablantes
import React, { Component } from 'react';
import { Grid, Image, Card, Icon, Segment } from 'semantic-ui-react';

class UsersList extends Component {
  render() {
    return (
      <div>
        <h1>Users List</h1>
        <Segment className="usersList">
          <Grid relaxed columns={4}>
            <Grid.Column>
              <Card>
                <Image
                  src="https://junkmailimages.blob.core.windows.net/large/0208943baf854e878083b11387037936.jpg"
                  wrapped
                  ui={false}
                />
                <Card.Content>
                  <Card.Header>Matthew</Card.Header>
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
            <Grid.Column>
              <Image src="https://junkmailimages.blob.core.windows.net/large/0208943baf854e878083b11387037936.jpg" />
            </Grid.Column>
            <Grid.Column>
              <Image src="https://junkmailimages.blob.core.windows.net/large/0208943baf854e878083b11387037936.jpg" />
            </Grid.Column>
            <Grid.Column>
              <Image src="https://junkmailimages.blob.core.windows.net/large/0208943baf854e878083b11387037936.jpg" />
            </Grid.Column>
          </Grid>
        </Segment>
      </div>
    );
  }
}

export default UsersList;
