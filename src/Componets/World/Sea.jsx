import React from 'react'

import './World.css'

const Sea = () => {
  return (
    <div className="Sea-Container Float">

        {/* ISLANDS */}
        
        <img src={require('../../Assets/Images/Islands/Island-1.webp')} alt="" className="Island-1" />

        {/* <img src={require('../../Assets/Images/Islands/Island-2.webp')} alt="" className="Island-2" /> */}

        {/* ISLANDS */}


        {/* BOATS */}

        <img src={require('../../Assets/Images/Viking-Boat-2.webp')} alt="" className="Boat Boat-1-Right-Left" />

        {/* BOATS */}


    </div>
  )
}

export default Sea