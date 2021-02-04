  import React from 'react'
  import PropTypes from "prop-types";


  const foodIlike = [{
    id:1,
    name: "Kimchi",
    image: "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
    rating:1.2
  },
  {
    id:2,
    name: "Samgyeopsal",
    image: "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
      rating:2.4
  },
  {
    id:3,
    name: "Bibimbap",
    image:"http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
    rating:3.8
  },
  {
    id:4,
    name: "Doncasu",
    image: "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
    rating:4.7
  },
  {
    id:5,
    name: "Kimbap",
    image: "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
    rating:5.5
  }]

  function Food({name,pic,rating}){
    return(
      <div>
        <h2>I like {name}</h2>
        <h4>{rating}/5.0</h4>
        <img src={pic} alt={name}/>
      </div>
    )
  }
  Food.propTypes = {
    name:PropTypes.string.isRequired,
    pic:PropTypes.string.isRequired,
    rating:PropTypes.number.isRequired
  }
  function App() {
    return (
     <div>
      {foodIlike.map((dish) => (
       <Food
        key={dish.id}
        name={dish.name}
        pic={dish.image}
        rating={dish.rating}
       />
      ))}
     </div>
    );
  }

  export default App;
 