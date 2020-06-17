import React, { Component } from 'react'
import { get_user_info, get_album_info, get_album_photos } from '../../Functions/Functions'
import $ from 'jquery';

class Photos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: [],
            album: [],
            user: [],
            isLoaded_photos: false,
            isLoaded_album: false,
            isLoaded_user: false,
            error: null
        };
    }

    componentDidMount() {
        const params = window.location.search;
        const urlParams = new URLSearchParams(params);
        const album_id = urlParams.get('albumId');
        const user_id = urlParams.get('userId');

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
        get_album_info(album_id)
            .then(
                (result) => {
                    this.setState({
                        isLoaded_album: true,
                        album: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded_album: false,
                        error
                    });
                }
            )
        get_album_photos(album_id)
            .then(
                (result) => {
                    this.setState({
                        isLoaded_photos: true,
                        photos: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded_photos: false,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded_user, isLoaded_album, isLoaded_photos, photos, album, user } = this.state;
        $("title").html("Photos | " + user.name + "")
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded_user || !isLoaded_album || !isLoaded_photos) {
            return <p className="loading-data">Loading...</p>;
        } else {
            return (
                <div className="album-photos">
                    <div className="user-name">
                        <span><i className="fa fa-user" aria-hidden="true">&emsp;<b>{user.name}</b>, @{user.username}</i></span>
                    </div><br />
                    <div className="album-info">
                        <h5>Album:</h5>
                        <span className="album-title">{album.title}</span><br />
                    </div><br />
                    <div className="Photos">
                        <h5>Photos:</h5><br />
                        <div className="row">
                            {photos.map(photo => (
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                    <img className="photo" src={photo.thumbnailUrl} alt="Loading" style={{ marginBottom: "20px" }} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default Photos