import React, { Component } from 'react'
import { get_user_info, get_user_posts } from '../../Functions/Functions'
import { Link } from 'react-router-dom';
import $ from 'jquery';

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            user: [],
            isLoaded_posts: false,
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
        get_user_posts(user_id)
            .then(
                (result) => {
                    this.setState({
                        isLoaded_posts: true,
                        posts: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded_posts: false,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded_posts, isLoaded_user, posts, user } = this.state;
        $("title").html("Posts | " + user.name + "")
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded_user || !isLoaded_posts) {
            return <p className="loading-data">Loading...</p>;
        } else {
            return (
                <div className="user-posts">
                    <div className="user-name">
                        <span><i className="fa fa-user" aria-hidden="true">&emsp;<b>{user.name}</b>, @{user.username}</i></span><br />
                    </div><br />
                    <ul>
                        {posts.map(post => (
                            <div className="post" key={post.id}>
                                <li className="post-title">{post.title}</li>
                                <span className="post-body">{post.body}</span><br /><br />
                                <Link to={"/comments?postId=" + post.id + "&userId=" + user.id} style={{ textDecoration: "underline" }}>
                                    <b><i>show comments</i></b>
                                </Link>
                            </div>
                        ))}
                    </ul>
                </div>
            )
        }
    }
}

export default Posts