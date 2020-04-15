import React from 'react';
import { Grid } from '@material-ui/core';
import VideoItem from './VideoItem'


export default function VideoList({ videos, onVideoSelect }) {
    // vidoes ? console.log(vidoes) : '';

    const listOfVideos = videos.map((video, id) => <VideoItem key={id} onVideoSelect={onVideoSelect} video={video} />)


    return (
        <Grid container spacing={3}>
            {listOfVideos}
        </Grid>
    )
}
