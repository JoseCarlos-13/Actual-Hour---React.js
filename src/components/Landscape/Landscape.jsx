import React from 'react'
import './Landscape.css'

export default (props) => {
  return(
    <>
      <div className="landscape">
        {/* eslint-disable-next-line */}
        <img src={props.image} />
      </div>
    </>
  )
}