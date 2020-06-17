import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import UsersPosts from './components/Posts/UsersPosts/UsersPosts'
import Posts from './components/Posts/Posts/Posts'
import Comments from './components/Posts/Comments/Comments'
import UsersAlbums from './components/Albums/UsersAlbums/UsersAlbums'
import Photos from './components/Albums/Photos/Photos'
import Albums from './components/Albums/Albums/Albums'
import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <div className="App container">
          <Route exact path="/" component={Home} />
          <Route exact path="/users-posts" component={UsersPosts} />
          <Route exact path="/posts" component={Posts} />
          <Route exact path="/comments" component={Comments} />
          <Route exact path="/users-albums" component={UsersAlbums} />
          <Route exact path="/albums" component={Albums} />
          <Route exact path="/photos" component={Photos} />
        </div>
      </Router>
    )
  }
}

export default App