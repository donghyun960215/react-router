import React from 'react';
import {useParams} from "react-router-dom";

function VideoDetail(props) {
  const { videoId } = useParams()
  return (
    <div>VideoDetail:: {videoId}</div>
  );
}

export default VideoDetail;