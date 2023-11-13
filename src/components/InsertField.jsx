import React, { useState } from 'react'
import Api from './Api';
import axios from 'axios';

const InsertField = () => {
  const {http}=Api();
  const [info,setInfo]=useState({
    title:"",
    description: ""
  })

  const [titleError,setTitleError]=useState("");
  const [desError,setDesError]=useState("");

const handleValues=(e)=>{
 setInfo({...info,
 [ e.target.name] : e.target.value}
  )
}
const handleSubmit=()=>{
  /* http.post('/createpost',{
    title:info.title,
    description:info.description
  }).then(res=>{
    console.log(res)
    if(res.data.status === '422'){
      setTitleError(res.data.error.title);
      setDesError(res.data.error.description);
    }
  }) */
  const data={
    title:info.title,
    description:info.description
  }
  axios.post(`http://127.0.0.1:8000/api/createpost`)
}
  return (
    <div className='max-w-[500px] mx-auto'>
      <input onChange={handleValues} name="title" type="text" placeholder="Type here" className="input input-bordered w-full  mb-3" />
      {/* {titleError ? <span className='text-red-500 text-xs mb-2'>"Title Field is Require"</span> :""} */}
      <br />
      <textarea onChange={handleValues} className="textarea textarea-bordered w-full" name='description' placeholder="Bio"></textarea>
      {/* {desError ? <span className='text-red-500 text-xs mb-2'>"Title Field is Require"</span> :""} */}
       <div className='flex justify-center items-center'>
       <button onClick={handleSubmit} className="btn btn-info text-center px-5 mt-2">Submit</button>
       </div>
    </div>
  )
}

export default InsertField

