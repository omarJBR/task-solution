import React, { Component } from 'react'
import { get_user_info, get_user_albums } from '../../Functions/Functions'
import { Link } from 'react-router-dom';
import $ from 'jquery';

class Albums extends Component {
    constructor(props) {
        super(props);
        this.state = {
            albums: [],
            user: [],
            isLoaded_albums: false,
            isLoaded_user: false,
            error: null
        };
    }

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const user_id = query.get('userId')
        get_user_info(user_id)
            .then(
                (result) => {
                    this.setState({
                        isLoaded_user: true,
                        user: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded_user: false,
                        error
                    });
                }
            )
        get_user_albums(user_id)
            .then(
                (result) => {
                    this.setState({
                        isLoaded_albums: true,
                        albums: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded_albums: false,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded_albums, isLoaded_user, albums, user } = this.state;
        $("title").html("Albums | " + user.name + "")
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded_user || !isLoaded_albums) {
            return <p className="loading-data">Loading...</p>;
        } else {
            return (
                <div className="user-posts">
                    <div className="user-name">
                        <span><i className="fa fa-user" aria-hidden="true">&emsp;<b>{user.name}</b>, @{user.username}</i></span><br />
                    </div><br />
                    <ul>
                        {albums.map(album => (
                            <div className="album" key={album.id}>
                                <li className="album-title">{album.title}</li>
                                <Link to={"/photos?albumId=" + album.id + "&userId=" + user.id} style={{ textDecoration: "underline" }}>
                                    <b><i>show photos</i></b>
                                </Link>
                            </div>
                        ))}
                    </ul>
                </div>
            )
        }
    }
}

export default Albums