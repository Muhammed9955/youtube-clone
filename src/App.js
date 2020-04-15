import React, { Component } from 'react';
import './App.css';
import { Grid, Paper, TextField } from '@material-ui/core';
import youtube from './api/youtube';
import SearchBar from './components/SearchBar';
import VideoDetials from './components/VideoDetials';
import VideoList from './components/VideoList';

export default class App extends Component {
  state = {
    videos: [],
    selectedVideo: null,
  }

  componentDidMount() {
    this.handelSubmit('react')
  }

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video })
  }

  handelSubmit = async (searchTerm) => {
    const response = await youtube.get('search',
      {
        params: {
          part: 'snippet',
          maxResults: 5,
          key: 'AIzaSyCG-fuvAnezS3KNxUW6MbI-tkD3OOAsSnw',
          q: searchTerm
        }
      });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    })
  }


  render() {
    const { selectedVideo, videos } = this.state;


    return (
      <Grid justify="center" container spacing={10}>
        <Grid item xs={12}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={this.handelSubmit} />
              {/* <searchBar /> */}
            </Grid>
            <Grid item xs={8}>
              <VideoDetials video={selectedVideo} />
            </Grid>
            <Grid item xs={4}>
              <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}
