import React from 'react'
import Rating from './reting'

const Items =(props)=>{
    const {movie={}}=props
        const {
              titre='',
              ans='',
              image='https://www.mearto.com/assets/no-image-83a2b680abc7af87cfff7777d0756fadb9f9aecd5ebda5d34f8139668e0fc842.png',
              Rate=2
          }=movie

    return(
        <div className="movie-card">
             <div className="movie-rating"><Rating nbr={Rate} /></div>
             <div
                  className="movie-image"
                  style={{
                    backgroundImage:
                      `url('${image}')`
                  }}
                />
              <div className="movie-description">{titre} - {ans}</div>
      </div>
    )
}
export default Items