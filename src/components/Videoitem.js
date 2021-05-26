import React from 'react';
import '../styles/App.css';

 const Videoitem = ({video, handleVideoSelect}) => {
    return (
        <div className="card mb-4" onClick={() => handleVideoSelect(video)} style={{maxWidth: 540}}>
            <div className="row g-0">
                    <div className="col-md-7" >
                        <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
                    </div>
                    <div className="col-md-5">
                        <div className="card-body">
                            <h5 className="card-title">{video.snippet.channelTitle}</h5>
                            <p className="card-text">{video.snippet.title}</p>
                        </div>
                    </div>
            </div>
        </div>
    )
}
export default Videoitem;