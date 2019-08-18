//Lista de Usuarios que se han logeado y sus datos de hablantes
import React, { Component } from 'react';
import { Grid, Image } from 'semantic-ui-react';

class UsersList extends Component {
  render() {
    return (
      <div>
        <h1>Users List</h1>
        <Grid relaxed columns={4}>
          <Grid.Column>
            <Image src="https://junkmailimages.blob.core.windows.net/large/0208943baf854e878083b11387037936.jpg" />

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
      </div>
    );
  }
}

export default UsersList;
