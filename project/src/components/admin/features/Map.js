import React, {useEffect, useState} from 'react'
import axios from 'axios'


const Map = () => {

    let [data, setData] = useState({});
    let [city, setCity] = useState([]);

   

    let [temp, setTemp] = useState(0);

    useEffect(()=>{
        

        axios.get("http://localhost:8080/api/city/newcity").then(response=>{
            setCity(response.data);
            
        })
    }, [])

    let getTemp = (event)=>{
        let id = event.target.value;
        let info = {};
        city.forEach((value)=>{
            if(value._id == id)
            {
                info = value;
            }
        })
        
        

        axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${info.lat}&longitude=${info.lon}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`).then(response=>{
            // console.log(response.data.current);
            if(response.data.current){

                setTemp(response.data.current.temperature_2m)
            }
        })
    }
    
  return (
    <div className='container my-5'>
        <div className="row">
            <div className="col-md-12">
                <label>Select Your City</label>
                <select onChange={(event)=>getTemp(event)} className='form-control'>
                    <option>Select</option>
                    {
                        city.map((value)=>{
                            return(
                                <option value={value._id}>{value.name}</option>
                            )
                        })
                    }
                </select>
                <br />
                <br />
                <h1>Current Temp of City is : {temp}</h1>
            </div>
        </div>
    </div>
  )
}

export default Map