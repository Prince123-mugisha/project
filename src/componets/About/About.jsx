import React from "react";
import './About.css'
import mugisha from '../../assets/pitch.mp4'

function About ({setPlaystate}) {
return(

<div className="about">

<div className="about-left">
    <video src={mugisha} autoPlay muted controls className="about-img"></video>
</div>

<div className="about-right">

    <h3>
        About us
    </h3>

    <h2>Nurtuting Tomorrow's Techers Today</h2>

    <p>
    We are African-based organization fueled by the belief that education, 
    especially tech education, can empower young people who have left formal schooling behind.
    We develop engaging tech-based learning experiences to equip them with the skills they need to succeed in the digital age. 
    Our goal is to bridge the educational gap and unlock their potential to contribute to South Sudan's future as tech-savvy innovators.
    </p>

        <p>

        By equipping young minds with relevant tech skills like coding and digital literacy,
        we aim to open doors to new career paths, bridge the digital divide in South Sudan, 
        and foster a generation of young leaders who can drive innovation and positive change within their communities. 
        We believe in the power of collaboration and welcome anyone who shares our vision to join us on this journey. Together, let's empower South Sudan's youth to build a brighter future.

        </p>


</div>


</div>

)


}


export default About