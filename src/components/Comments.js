import React from 'react';
import { Comment } from 'semantic-ui-react';

const Comments = () => (
  <Comment.Group>
    <Comment>
      <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/matt.jpg" />
      <Comment.Content>
        <Comment.Author as="a">Matt</Comment.Author>
        <Comment.Metadata>
          <div>Hoy a las 5:42PM</div>
        </Comment.Metadata>
        <Comment.Text>Gran aporte!</Comment.Text>
        <Comment.Actions>
          <Comment.Action>Responder</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>

    <Comment>
      <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg" />
      <Comment.Content>
        <Comment.Author as="a">Elliot Fu</Comment.Author>
        <Comment.Metadata>
          <div>Yesterday at 12:30AM</div>
        </Comment.Metadata>
        <Comment.Text>
          <p>This has been very useful for my research. Thanks as well!</p>
        </Comment.Text>
        <Comment.Actions>
          <Comment.Action>Responder</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
      <Comment.Group>
        <Comment>
          <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/jenny.jpg" />
          <Comment.Content>
            <Comment.Author as="a">Jenny Hess</Comment.Author>
            <Comment.Metadata>
              <div>Just now</div>
            </Comment.Metadata>
            <Comment.Text>Elliot you are always so right :)</Comment.Text>
            <Comment.Actions>
              <Comment.Action>Responder</Comment.Action>
            </Comment.Actions>
          </Comment.Content>
        </Comment>
      </Comment.Group>
    </Comment>
  </Comment.Group>
);

export default Comments;
