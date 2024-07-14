import React from "react";
import './Member.css'
import group from '../../assets/ppp.jpg'



function  Member() { 

return(

<div className="member">

<div className="member-left">
<img src={group} alt="" className="member-img" />
</div>

<div className="member-right">

<h3>
        Members
    </h3>

    <h2>whats all member think about our mission</h2>


    <p>
    Our mission is to promote quality education in South Sudan by tackling critical challenges. 
    Despite the nation's low literacy rate and many out-of-school children, 
    we remain dedicated to devising sustainable solutions
    </p><br></br>

        <p>
        Poverty, civil conflict, early girl-child marriage, and entrenched cultural norms present significant obstacles. 
        By addressing these barriers, we aim to empower the youth, enhance infrastructure,
        and advance gender equality, thereby cultivating a promising future for South Sudan."
        </p>


</div>


</div>



)


}

export default Member