import React from 'react'
import Items from './movieitem'
const  MoviList=({movies=[],onAddMovie=()=>{}})=> {
    
    return (<div className="movie-list">
          {
              movies.map(el =><Items key={el.id} movie={el} />)
          }
            <div
                  className="new-movie-card"
                    onClick={() => 
                      {
                        onAddMovie({
                            id: prompt('id:'),
                            titre: prompt('titre:'),
                            rate: Number(prompt('rating:')),
                            ans: Number(prompt('ans:'))
                          })}
                   } 
              >
            +
             </div>
         </div>
    )  
}


 
export default MoviList;
