import React from 'react'

import './World.css'

const Sky = () => {
  return (
    <div className="Sky-Container">
        <img src={require('../../Assets/Images/Suns/Sun-Type-2.webp')} alt="" className="Sun Rotate-Sun" />


        <img src={require('../../Assets/Images/Clouds/Cloud-Type-2.webp')} alt="" className="Cloud-1 Cloud-Left-Right-Cloud-1" />

        <img src={require('../../Assets/Images/Clouds/Cloud-Type-2.webp')} alt="" className="Cloud-2 Cloud-Left-Right-Cloud-2" />

        {/* <img src={require('../../Assets/Images/Clouds/Cloud-Type-1.webp')} alt="" className="Cloud-3 Cloud-Left-Right-Cloud-2" />

        <img src={require('../../Assets/Images/Clouds/Cloud-Type-1.webp')} alt="" className="Cloud-4 Cloud-Left-Right-Cloud-3" />

        <img src={require('../../Assets/Images/Clouds/Cloud-Type-1.webp')} alt="" className="Cloud-5 Cloud-Left-Right-Cloud-4" /> */}
    </div>
  )
}

export default Sky