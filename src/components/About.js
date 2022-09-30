import React from 'react'

function About({image,about}) {
  return (
    <div>
        <aside>
            <img src={image}  alt='blog logo'></img>
        <p>{about}</p>

        </aside>
    </div>
  )
}

About.defaultProps = {
    image: "https://via.placeholder.com/215",
}

export default About