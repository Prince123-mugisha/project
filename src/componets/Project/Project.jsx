import React from "react";
import './Project.css'
import project1 from '../../assets/education.jpg'
import project2 from '../../assets/tech.jpg'
import project3 from '../../assets/photo.jpg'

function Project () {

return (

<div className="projects">

<div className="project">
<div className="p1">
  <img src={project1} alt="" />
</div>
</div>
<div className="project">
<div className="p2">
  <img className src={project2} alt="" />
</div>
</div>
<div className="project">
<div className="p3">
  <img src={project3} alt="" />
</div>

</div>

</div>


)



}

export default Project