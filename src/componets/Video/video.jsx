import React from "react";
import './video.css'
import chris from '../../assets/video.mp4'

function Video ({playState, setPlaystate}){
return (

<div className={`video ${playState?'':'video'}`}>
<video src={chris} autoPlay muted controls></video>

</div>

)



}

export default Video 