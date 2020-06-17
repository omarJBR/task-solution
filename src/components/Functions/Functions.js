import axios from 'axios'

// for users
export const get_user_info = (user_id) => {
    return axios
        .get("https://jsonplaceholder.typicode.com/users/" + user_id + "")
        .then(response => {
            return response.data
        })
        .catch(err => {
            console.log(err)
        })
}
export const get_users_info = () => {
    return axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then(response => {
            return response.data
        })
        .catch(err => {
            console.log(err)
        })
}

// for posts
export const get_post_info = (post_id) => {
    return axios
        .get("https://jsonplaceholder.typicode.com/posts/" + post_id + "")
        .then(response => {
            return response.data
        })
        .catch(err => {
            console.log(err)
        })
}
export const get_user_posts = (user_id) => {
    return axios
        .get("https://jsonplaceholder.typicode.com/posts?userId=" + user_id + "")
        .then(response => {
            return response.data
        })
        .catch(err => {
            console.log(err)
        })
}

// for comments
export const get_post_comments = (post_id) => {
    return axios
        .get("https://jsonplaceholder.typicode.com/posts/" + post_id + "/comments")
        .then(response => {
            return response.data
        })
        .catch(err => {
            console.log(err)
        })
}

// for albums
export const get_album_info = (album_id) => {
    return axios
        .get("https://jsonplaceholder.typicode.com/albums/" + album_id + "")
        .then(response => {
            return response.data
        })
        .catch(err => {
            console.log(err)
        })
}
export const get_user_albums = (user_id) => {
    return axios
        .get("https://jsonplaceholder.typicode.com/albums?userId=" + user_id + "")
        .then(response => {
            return response.data
        })
        .catch(err => {
            console.log(err)
        })
}
export const get_album_photos = (album_id) => {
    return axios
        .get("https://fixlance.com/jsonplaceholder/photos?albumId=" + album_id + "")
        .then(response => {            
            return response.data
        })
        .catch(err => {
            console.log(err)
        })
}