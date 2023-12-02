import React, {useState, useEffect} from 'react'
import SimpleImageSlider from 'react-simple-image-slider'
import axios from 'axios'
import { API, PATH } from '../../../util/API'

const Slider = () => {

    let [images, setImages] = useState([]);
    useEffect(()=>{
        axios.get(`${API}/slider`).then(response=>{
            console.log(response.data);
            let data = [];
            response.data.forEach(value=>{
                let obj = { url : `${PATH}/slider/${value.image}` }
                data.push(obj);
            })
            
            setImages(data);
        })
    }, [])
    
    /*

    data = [
        {
            url : 
        },
        {
            url : 
        }
    ]

    */

  return (
    <div>
        <SimpleImageSlider width={"100%"} height={400} images={images} showBullets={true} showNavs={true} slideDuration={1} autoPlayDelay={0.5} autoPlay={true} >
            <h2>Hello</h2>
        </SimpleImageSlider>
    </div>
  )
}

export default Slider