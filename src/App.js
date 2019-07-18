import React,{Component} from 'react';
import Recherche from './recherche';
import './App.css';
import Rattingfilter from './retingfilter'
import MoviList from './movielist'


const inception={
  id:"32",
  titre:"AZERT",
  rate:"4",
  image:"https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg",
  ans:1998
}
const inception1={
  id:"123",
  titre:"zied",
  rate:"5",
  image:"https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg",
  ans:1998
}
const inception2={
  id:"1234",
  titre:"QUATRE",
  rate:"4",
  image:"https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg",
  ans:1998
}
const inception3={
  id:"10",
  titre:"LOST",
  rate:"3",
  image:"https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg",
  ans:1998
}
const inception4={
  id:"11",
  titre:"zizo",
  rate:"3",
  image:"https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg",
  ans:1998
}
const movie=[inception,inception1,inception2,inception3,inception4]

class App extends Component {
  constructor(props){
    super(props)
     this.state={
      MinRate:1,
       namefilter:'',
       movies:movie
     }
     
  }

  addnew(newMovie){
    this.setState({
        movies:this.state.movies.concat(newMovie)
    })
  }
  getVisibleMovies(){
   return this.state.movies.filter(
   el=>
     el.rate >=this.state.MinRate && 
     el.titre.toUpperCase().includes(this.state.namefilter.toUpperCase().trim())
   )
 }

  render()
  {
    return (
    <div className="App">
         <header className="movie-app-header">
              <Recherche 
               value={this.state.namefilter} 
               onChange={(newnamefilter)=>{
               this.setState({
                namefilter:newnamefilter
               })}

               }
              />    
              <Rattingfilter 
                    nbr= {this.state.MinRate}
                    onChange={(newRating)=>
                   this.setState({
                    MinRate:newRating
                   
                   })
                   }/>
        </header>
        <main className="movie-app-main">
               <MoviList movies={
                this.getVisibleMovies()
                } 
                onAddMovie={(newMovie) => this.addnew(newMovie)} />
         </main>
        </div>
  );
}}




export default App;
