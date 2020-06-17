import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { get_users_info } from '../../Functions/Functions'
import $ from 'jquery';

class UsersPosts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            isLoaded: false,
            error: null
        };
    }

    componentDidMount() {
        $("title").html("Users | Posts")
        get_users_info()
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        users: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: false,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, users } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <p className="loading-data">Loading...</p>;
        } else {
            return (
                <div className="users-info">
                    <div className="row users-row">
                        {users.map(user => (
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12 user-info" key={user.id}>
                                <div className="user-name">
                                    <span><i className="fa fa-user" aria-hidden="true">&emsp;<b>{user.name}</b>,</i></span><br />
                                    <span className="user-username">@{user.username}</span>
                                </div><br />
                                <div className="contact-information">
                                    <p><b>Contact Infromation:</b></p>
                                    <span><i className="fa fa-phone" aria-hidden="true">&emsp;{user.phone}</i></span><br />
                                    <span><i className="fa fa-envelope-o" aria-hidden="true">&emsp;{user.email}</i></span><br />
                                    <span><i className="fa fa-location-arrow" aria-hidden="true">&emsp;{user.address.city},{user.address.street}</i></span>
                                </div>
                                <div className="user-posts">
                                    <Link to={"/posts?userId=" + user.id} >
                                        <button className="posts-btn">
                                            show posts
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )
        }
    }
}

export default UsersPosts