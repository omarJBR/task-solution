import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import $ from 'jquery';

class Home extends Component {
    render() {
        $("title").html("Home")
        return (
            <div className="home">
                <div>
                    <Link to="/users-posts">
                        <button className="users-posts">
                            Show users posts
                        </button>
                    </Link>
                </div><br />
                <div>
                    <Link to="/users-albums">
                        <button className="users-albums">
                            Show users albums
                        </button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Home