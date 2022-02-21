import React from 'react'
import Map from "./images/hollywood-district-in-portland-Google-Maps.jpg"


function HoursLocation() {
  return (
    
    <div className="about_container" id="HoursLocation">
    
    <div className="about_text">
      <h3>HOURS AND LOCATION</h3>
      <br></br>
      <ul>
        <li>Sunday-Thursday 11-9</li>
        <li>Friday-Saturday 11-11</li>
      </ul>
      <br></br>
      <ul>
        <li>Thai Restaurant</li>
        <li>5769 NW 23rd Ave</li>
        <li>Portland, OR 97210</li>
        <li>(503) 222-2222</li>
       </ul>
    </div>
    <div>
      <img src={Map} alt="thai food on cutting board" />
    </div>
  </div>  
    
    // <div className='about-text' id="HoursLocation">
    //     <img src="https://goo.gl/maps/Gk2EeEyd7UVvirom9" />
    //  <h3>Hours and Location</h3>
    //  <ul>
    //      <li>Thai Restaurant</li>
    //      <li>5769 NW 23rd Ave</li>
    //      <li>Portland, OR 97210</li>
    //     </ul>
    // </div>
  )
}

export default HoursLocation
