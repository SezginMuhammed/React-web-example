import React from 'react'

export const About = (props) => {
  return (
    <div id='about'>
      <div className="about image">
        <img src={props.image} alt="" />
      </div>
      <div className="about-text">
        <h2>{props.title}</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate quasi in reprehenderit
           ipsam molestias quis, repudiandae dolorum quidem obcaecati. Laudantium veritatisillo accusamus, 
           porro nemo, itaque labore cum numquam debitis, in omnis expedita molestias consectetur!</p>
           <button>{props.button}</button>
      </div>
    </div>
  )
}
