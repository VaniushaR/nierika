import React, { Component } from 'react';
import { Accordion, Icon, Button } from 'semantic-ui-react';
import Publish from './Publish';

export default class AccordionExampleStandard extends Component {
  state = { activeIndex: 0 };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex } = this.state;

    return (
      <Accordion>
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={this.handleClick}
        >
          <div className="btn-background">
            <Button color="green">
              <Icon name="dropdown" />
              Publicar
            </Button>
          </div>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <Publish />
        </Accordion.Content>
      </Accordion>
    );
  }
}

//WORKING
// import PropTypes from 'prop-types';
// import React, { Component } from 'react';
// import {
//   Button,
//   Checkbox,
//   Grid,
//   Header,
//   Icon,
//   Image,
//   Menu,
//   Segment,
//   Sidebar
// } from 'semantic-ui-react';
// import Publish from './Publish';
// import TimeLine from './TimeLine';

// let buttonNew = 'Nueva Publicación';

// const HorizontalSidebar = ({ animation, direction, visible }) => (
//   <Sidebar animation={animation} direction={direction} visible={visible}>
//     <Publish />
//   </Sidebar>
// );

// HorizontalSidebar.propTypes = {
//   animation: PropTypes.string,
//   direction: PropTypes.string,
//   visible: PropTypes.bool
// };

// export default class SidebarTransitions extends Component {
//   state = {
//     animation: 'overlay',
//     direction: 'top',
//     dimmed: false,
//     visible: false,
//     button: 'Nueva Publicación'
//   };

//   handleAnimationChange = animation => () =>
//     this.setState(prevState => ({
//       animation,
//       visible: !prevState.visible
//     }));

//   //       handleClick = () => {
//   //       console.log(this.button, this.visible);
//   //        if (this.state.visible == false) {
//   //             console.log(this.button, this.visible)
//   //           this.setState(this.button: 'Cerrar')} else this.setState(this.button: 'Nueva Publicación');

//   //     };

//   handleDimmedChange = (e, { checked }) => this.setState({ dimmed: checked });

//   //   handleDirectionChange = direction => () =>
//   //     this.setState({ direction, visible: false });

//   render() {
//     const { animation, dimmed, direction, visible } = this.state;
//     const vertical = direction === 'bottom' || direction === 'top';

//     return (
//       <div>
//         <div className="btn-background">
//           <Button color="green" onClick={this.handleAnimationChange('overlay')}>
//             {this.state.button}
//           </Button>
//         </div>
//         <Sidebar.Pushable>
//           {vertical ? (
//             <HorizontalSidebar
//               animation={animation}
//               direction={direction}
//               visible={visible}
//               // button={button}
//             />
//           ) : null}

//           <Sidebar.Pusher dimmed={dimmed && visible}>
//             <TimeLine />
//           </Sidebar.Pusher>
//         </Sidebar.Pushable>
//       </div>
//     );
//   }
// }
