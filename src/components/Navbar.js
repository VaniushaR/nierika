//Crear componente de barra de navegación con bootstrap
import React, { Component } from 'react';
import {
  Button,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar
} from 'semantic-ui-react';

class Navbar extends Component {
  // state = { visible: false };

  // handleHideClick = () => this.setState({ visible: false });
  // handleShowClick = () => this.setState({ visible: true });
  // handleSidebarHide = () => this.setState({ visible: false });

  render() {
    // const { visible } = this.state;

    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand">NIERIKA</a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a
                // className="nav-link"
                // disabled={visible}
                // onClick={this.handleShowClick}
                >
                  Mi perfil
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Usuarios</a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Buscar post sobre..."
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Buscar
              </button>
            </form>
          </div>
        </nav>

        {/* <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation="overlay"
            icon="labeled"
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={visible}
            width="thin"
          >
            <Menu.Item as="a">
              <Icon name="home" />
              Home
            </Menu.Item>
            <Menu.Item as="a">
              <Icon name="gamepad" />
              Games
            </Menu.Item>
            <Menu.Item as="a">
              <Icon name="camera" />
              Channels
            </Menu.Item>
            <Sidebar.Pusher>
              <Segment className="sidebar-profile" />
            </Sidebar.Pusher>
          </Sidebar>
        </Sidebar.Pushable> */}
      </div>
    );
  }
}

export default Navbar;
