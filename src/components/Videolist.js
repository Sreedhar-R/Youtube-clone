import React from 'react'
import Videoitem from './Videoitem';
import '../styles/App.css';

 const Videolist = ({videos,handleVideoSelect}) => {
    const renderedVideos = videos.map((video) => {
        return <Videoitem key={video.id.videoId} video={video} handleVideoSelect={handleVideoSelect}/>
    });
    return (
        <div>{renderedVideos}</div>             
    )
}
export default Videolist;