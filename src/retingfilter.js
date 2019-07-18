import React from 'react'
import Rating from './reting'

const Rattingfilter=({onChange, nbr})=>{
   return( 
      <div className="rating-filter">
           <span className="rating-filter-text">Minimum rating</span>
           <Rating 
            nbr={nbr}
            onChangeRating={(newRating) =>{
            onChange(newRating)
        }}  />
      </div>
)}
   export default Rattingfilter