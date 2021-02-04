  import React from 'react'
  import axios from 'axios'
  import Movies from './Movies'
  import "./App.css"

class App extends React.Component {
  state = {
    isLoading : true,
    movies:[]
  };
  getMovies = async () => {
   const {
    data: {
     data: { movies }
    }
   } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
  // this.setState({ movies: movies });
  // 첫번째 movies는 state 두번째 movies는 axios
  // 자바스크립트는 똑똑해서 movies하나만 써도 된다
   this.setState({ movies, isLoading:false });
  };

  componentDidMount(){
    this.getMovies();
  }
  render(){
    const {isLoading,movies} = this.state;
    return (<section class="container">{isLoading ?(
    <div class="loader">
      <span class="loader_text">"Loading"</span>
    </div> 
    ) : (
      <div class="movies">
        {movies.map(movies =>(     
        <Movies
          key={movies.id}
          id={movies.id}
          year={movies.year}
          title={movies.title}
          summary={movies.summary}
          poster={movies.medium_cover_image}
        />
        ))}
      </div>
    )}
    </section>
    );
  }
}

  export default App;
 