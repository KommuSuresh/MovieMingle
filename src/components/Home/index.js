import React, {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      videos: [],
      error: null, // Add an error state to handle fetch errors
    }
  }

  componentDidMount() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken) {
      this.fetchVideos()
    }
  }

  fetchVideos = async () => {
    try {
      console.log('Fetching videos...')
      const response = await fetch(
        'https://videos-data-api.vercel.app/videos/all',
      )
      console.log('Response received:', response)
      if (!response.ok) {
        throw new Error('Failed to fetch videos')
      }
      const data = await response.json()
      console.log('Data received:', data)
      this.setState({videos: data.videos, error: null})
    } catch (error) {
      console.error('Error fetching data:', error)
      this.setState({error: error.message})
    }
  }

  handleLogout = () => {
    // Remove the jwt_token cookie
    Cookies.remove('jwt_token')
    // Redirect to login page after logout
    return <Redirect to='/login' />
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (!jwtToken) {
      return <Redirect to='/login' />
    }

    const {videos, error} = this.state

    return (
      <>
        <h1>Welcome to the Home page</h1>
        <button onClick={this.handleLogout}>Logout</button>
        <div>
          {error && <p>Error: {error}</p>} {/* Display error message if any */}
          <h2>Videos</h2>
          <ul>
            {videos.map(video => (
              <li key={video.id}>{video.title}</li>
            ))}
          </ul>
        </div>
      </>
    )
  }
}

export default Home
