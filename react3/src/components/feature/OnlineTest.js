import React, {useState} from 'react'
import axios from 'axios'

const OnlineTest = () => {
    let [startTest, setStartTest] = useState(false);
    let [numArr, setNumArr] = useState([]);
    let [data, setData] = useState({});
    let [count, setCount] = useState(1);

    let starttest = ()=>{
        axios.get("http://localhost:8080/api/question/getids").then(response=>{
            setNumArr(response.data.ids)
            
            let url = "http://localhost:8080/api/question/quenum/"+response.data.ids[0];
            axios.get(url).then(response2=>{    
                console.log(response2.data.data);
                setData(response2.data.data);
                setStartTest(true);
            })
        })
    }

    let nextque = ()=>{

        let url = "http://localhost:8080/api/question/quenum/"+numArr[count];
        
        
        axios.get(url).then(response2=>{    
            console.log(response2.data.data)
            setData(response2.data.data);
            setCount(count+1);
        })   
    }


  return (
    <div className="container my-5">
        <div className="row">
            <div className="col-md-8 offset-md-2">
                <p className='text-danger'>Plese do not refrect the page, if you refrect the page then Test Will Reset</p>
                {
                    !startTest  ? <div>
                    <h3>Start Your Online Test</h3>
                    <button className='btn btn-primary' onClick={starttest}>Start</button>
                    </div> : ''
                }
                

                {
                    startTest ? <div>
                    <div className='card my-5'>
                        <div className='card-header'>
                            Question Number : {count}
                        </div>
                        <div className='card-body'>
                            <p><b>{data.que}</b></p>
                            <p>Ans A : <input type='radio' />{data.ans1}</p>
                            <p>Ans B : <input type='radio' />{data.ans2}</p>
                            <p>Ans C : <input type='radio' />{data.ans3}</p>
                            <p>Ans D : <input type='radio' />{data.ans4}</p>
                        </div>
                        <div className='card-footer'>
                            <button className='btn btn-success' onClick={nextque}>Next</button>
                        </div>
                    </div>
                    </div> : ''
                }
            </div>
        </div>
    </div>
  )
}

export default OnlineTest