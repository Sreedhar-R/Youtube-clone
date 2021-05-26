import React from 'react';
import '../styles/App.css';

 const Videodetails = ({video}) => {
    if (!video) {
        return <div>
                    <h1>Enter search keyword to load...</h1>
                    <br></br>
                    <p style={{fontSize:'25px'}}>
                    Use the API to search for videos matching specific search terms, topics, locations, publication dates, and much more. The APIs search.list method also supports searches for playlists and channels.
                
                    With the YouTube Data API, you can add a variety of YouTube features to your application. Use the API to upload videos, manage playlists and subscriptions, update channel settings, and more.        
                
                    </p>
                </div>;
      }

      const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
            <div className="card mb-3 card-height">
                <iframe src={videoSrc} allowFullScreen title="Video player" />
            <div className="card-body">
                <h2 >{video.snippet.channelTitle}</h2>
                <h4 className="card-title">{video.snippet.title}</h4>
                <p className="card-text">{video.snippet.description}</p>
            </div>
        </div>
    )
}
export default Videodetails;