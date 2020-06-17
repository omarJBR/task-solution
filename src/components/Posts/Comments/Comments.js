import React, { Component } from 'react'
import { get_user_info, get_post_info, get_post_comments } from '../../Functions/Functions'
import $ from 'jquery';

class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [],
            post: [],
            user: [],
            isLoaded_comments: false,
            isLoaded_post: false,
            isLoaded_user: false,
            error: null
        };
    }

    componentDidMount() {
        const params = window.location.search;
        const urlParams = new URLSearchParams(params);
        const post_id = urlParams.get('postId');
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
        get_post_info(post_id)
            .then(
                (result) => {
                    this.setState({
                        isLoaded_post: true,
                        post: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded_post: false,
                        error
                    });
                }
            )
        get_post_comments(post_id)
            .then(
                (result) => {
                    this.setState({
                        isLoaded_comments: true,
                        comments: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded_comments: false,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded_user, isLoaded_post, isLoaded_comments, comments, post, user } = this.state;
        $("title").html("Comments | " + user.name + "")
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded_user || !isLoaded_post || !isLoaded_comments) {
            return <p className="loading-data">Loading...</p>;
        } else {
            return (
                <div className="post-comments">
                    <div className="user-name">
                        <span><i className="fa fa-user" aria-hidden="true">&emsp;<b>{user.name}</b>, @{user.username}</i></span>
                    </div><br />
                    <div className="post-info">
                        <h5>Post:</h5>
                        <span className="post-title">{post.title}</span><br />
                        <span className="post-body">{post.body}</span>
                    </div><br />
                    <div className="comments">
                        <h5>Comments:</h5>
                        {comments.map(comment => (
                            <div className="comment" key={comment.id}>
                                <span><i className="fa fa-user" aria-hidden="true">&nbsp;<b>{comment.name}</b>,</i></span><br />
                                <span><i className="fa fa-envelope-o" aria-hidden="true">&nbsp;{comment.email}</i></span><br />
                                <span className="comment-body"><i className="fa fa-comment" aria-hidden="true">&nbsp;{comment.body}</i></span><br />
                            </div>
                        ))}
                    </div>
                </div>
            )
        }
    }
}

export default Comments