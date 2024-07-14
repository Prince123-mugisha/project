import React from "react"
import './hero.css'
import next from '../../assets/right-arrow.png'

function Hero () {

return(

<div className="hero container">
  <div className="text">
<h1>"education is the most powerful weapon which you can use to change the world" Nelson Mandela</h1>
<p>Our mission is to give south sudan a quality education and 
    decrease the number of drop out and literacy and encrease inequality in education in south
    sudan in terms of to make good africa.
</p>

<button className="btn">exprore more <img src={next} alt="" /></button>


  </div>


</div>


)


}


export default Hero