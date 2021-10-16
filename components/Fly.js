import React, {useState} from "react";
import Axios from "axios";

const API_KEY = "pk.eyJ1IjoiYWNlLW4iLCJhIjoiY2t1ajFsZzNvMnRyajMycTZsazNudHJuZiJ9.iz2DWwvRVnPYf1n9wf4F0w"

const Fly = ({setLat, setLon}) => {
  const [city, setCity] = useState("Kolkata");
  
  function getCoordinates (){
    Axios.get(`https://api.mapbox.com/geocoding/v5/ mapbox.places/${city}.json?access_token=${API_KEY}`).then((res)=>{
      setLon(res.data.features[0].geometry.coordinates[0]);

      setLat(res.data.features[0].geometry.coordinates[1]);
    })
  }
  return(
    <div className = "fly"> 
    <h2> Enter a City Name </h2>
    <div className = "inp-box">
    <input type = "text"
     onChange = {(e)=>{
       setCity(e.target.value)
     }}/>
     <button onClick = {()=> getCoordinates()}> Go </button>
     </div> 
     </div>
  )
}

export default Fly 