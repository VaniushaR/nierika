import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/nierika">
          <a
            className="navbar-brand"
            href="https://vaniushar.github.io/nierika/"
          >
            NIERIKA
          </a>
        </Link>
        {/* <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        > */}
        {/* <span className="navbar-toggler-icon" />
        </button> */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/perfil">
                <a
                  className="nav-link"
                  // disabled={visible}
                  // onClick={this.handleShowClick}
                >
                  Mi perfil
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/usuarios">
                <a className="nav-link">Usuarios</a>
              </Link>
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
    );
  }
}

export default Nav;
