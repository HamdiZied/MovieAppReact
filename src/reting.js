import React from 'react'




const Rating =({nbr ,onChangeRating=()=>{}})=>
{
     let starsHtml=[]
    for(let i=0;i<5;i++)
    {
       if (i<nbr)
       {
        starsHtml.push(<span onClick={()=>onChangeRating(i+1)} key={i}>★</span>)
       }
       else
       {
        starsHtml.push(<sapn onClick={()=>onChangeRating(i+1)} key={i}>☆</sapn>)
       }
       
    }
return (<div>{starsHtml}</div>)
}
export default Rating