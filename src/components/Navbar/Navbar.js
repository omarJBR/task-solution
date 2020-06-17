import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link to="/" className="navbar-brand">
                        Home
                </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to="/users-posts" className="nav-link">
                                    Posts
                            </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/users-albums" className="nav-link">
                                    Albums
                            </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default withRouter(Navbar)
