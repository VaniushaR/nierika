import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Button,
  Checkbox,
  Grid,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar
} from 'semantic-ui-react';
import Publish from './Publish';
import TimeLine from './TimeLine';

const HorizontalSidebar = ({ animation, direction, visible }) => (
  <Sidebar
    //     as={Segment}
    animation={animation}
    direction={direction}
    visible={visible}
  >
    {/* <Grid textAlign="center">
      <Grid.Row columns={1}>
        <Grid.Column> */}
    <Publish />
    {/* </Grid.Column>
      </Grid.Row>
    </Grid> */}
  </Sidebar>
);

HorizontalSidebar.propTypes = {
  animation: PropTypes.string,
  direction: PropTypes.string,
  visible: PropTypes.bool
};

// const VerticalSidebar = ({ animation, direction, visible }) => (
//   <Sidebar
//     as={Menu}
//     animation={animation}
//     direction={direction}
//     icon="labeled"
//     inverted
//     vertical
//     visible={visible}
//     width="thin"
//   >
//     <Menu.Item as="a">
//       <Icon name="home" />
//       Home
//     </Menu.Item>
//     <Menu.Item as="a">
//       <Icon name="gamepad" />
//       Games
//     </Menu.Item>
//     <Menu.Item as="a">
//       <Icon name="camera" />
//       Channels
//     </Menu.Item>
//   </Sidebar>
// );

// VerticalSidebar.propTypes = {
//   animation: PropTypes.string,
//   direction: PropTypes.string,
//   visible: PropTypes.bool
// };

export default class SidebarExampleTransitions extends Component {
  state = {
    animation: 'overlay',
    direction: 'top',
    dimmed: false,
    visible: false
  };

  handleAnimationChange = animation => () =>
    this.setState(prevState => ({ animation, visible: !prevState.visible }));

  handleDimmedChange = (e, { checked }) => this.setState({ dimmed: checked });

  handleDirectionChange = direction => () =>
    this.setState({ direction, visible: false });

  render() {
    const { animation, dimmed, direction, visible } = this.state;
    const vertical = direction === 'bottom' || direction === 'top';

    return (
      <div>
        <div className="btn-background">
          <Button color="green" onClick={this.handleAnimationChange('overlay')}>
            Nueva Publicación
          </Button>
        </div>
        <Sidebar.Pushable>
          {vertical ? (
            <HorizontalSidebar
              animation={animation}
              direction={direction}
              visible={visible}
            />
          ) : null}

          <Sidebar.Pusher dimmed={dimmed && visible}>
            <TimeLine />{' '}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}
