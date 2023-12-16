import React, {useState, useRef} from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { save } from '../../redux/ResultSlice'

const OnlineTest = () => {

    let disp = useDispatch();

    let btn1 = useRef();
    let btn2 = useRef();
    let btn3 = useRef();
    let btn4 = useRef();



    let [startTest, setStartTest] = useState(false);
    let [numArr, setNumArr] = useState([]);
    let [data, setData] = useState({});
    let [count, setCount] = useState(1);
    let [ansData, setAnsData] = useState([]);
    let [button, setButton] = useState(true);
    let [tempObj, setTempObj] = useState({});


    let starttest = ()=>{
        axios.get("http://localhost:8080/api/question/getids").then(response=>{
            setNumArr(response.data.ids)
            
            let url = "http://localhost:8080/api/question/quenum/"+response.data.ids[0];
            axios.get(url).then(response2=>{    
                
                setData(response2.data.data);
                setStartTest(true);
            })
        })
    }

    let nextque = ()=>{
        if(count < 5){
            setAnsData([...ansData, tempObj]);
        btn1.current.checked = false;
        btn2.current.checked = false;
        btn3.current.checked = false;
        btn4.current.checked = false;
        setButton(true);
        
        let url = "http://localhost:8080/api/question/quenum/"+numArr[count];
        
        
        axios.get(url).then(response2=>{    
            // console.log(response2.data.data)
            setData(response2.data.data);
            setCount(count+1);
        })   
        }
        else{
            // console.log(ansData);
            setAnsData([...ansData, tempObj]);
            disp(save(ansData));

        }
        
    }

    let ans = (value, quenum)=>{
        let obj = { ans : value, quenum : quenum };
        setTempObj(obj);
        setButton(false);
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
                            <p>Ans A : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='radio' name='ans' ref={btn1} value='1' onChange={(event)=>ans(event.target.value, numArr[count])} />&nbsp;&nbsp;{data.ans1}</p>
                            <br />
                            <p>Ans B : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='radio' name='ans' ref={btn2} value='2' onChange={(event)=>ans(event.target.value, numArr[count])} />&nbsp;&nbsp;{data.ans2}</p>
                            <br />
                            <p>Ans C : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='radio' name='ans' ref={btn3} value='3' onChange={(event)=>ans(event.target.value, numArr[count])} />&nbsp;&nbsp;{data.ans3}</p>
                            <br />
                            <p>Ans D : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='radio' name='ans' ref={btn4} value='4' onChange={(event)=>ans(event.target.value, numArr[count])} />&nbsp;&nbsp;{data.ans4}</p>
                        </div>
                        <div className='card-footer'>
                            <button className='btn btn-success' disabled={button} onClick={nextque}>Next</button>
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