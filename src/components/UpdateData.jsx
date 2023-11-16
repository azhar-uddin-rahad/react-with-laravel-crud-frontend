import { data } from 'autoprefixer';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const UpdateData = () => {
    const {id}=useParams();
    const [info, setInfo] = useState({ });
    const [error, setError] = useState({});
    const [student,setStudent]=useState('')
    console.log(id);
    useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/api/student/${id}/edit`).then(res=>{
          console.log(res.data)
          setInfo(res.data.msg)
        })
    },[id])
    
 const handleValues=(e)=>{
        setInfo({...info,
          [ e.target.name] : e.target.value})
    
    }
    const handleSubmit=()=>{
      
      const data={
        title:info.title,
        description:info.description
      }
      axios.put(`http://127.0.0.1:8000/api/student/${id}/edit`,data).then(res=>{
        alert(res.data.message,'hggfhfghy')
      })
     .catch(function(error){
          if(error.response){
           // console.log(error.response)
             if(error.response.status === 422){
              console.log(error.response.data.error)
                setError(error.response.data.error);
              }   
              if(error.response.status === 400){
                setError(error.response.data.errors);
                alert("not update 1")
              }  

              if(error.response.status === 500){
                console.log()
                alert(error.response.data.message )
               // alert(error.response.data.error);
                
              }  
          }
      }) 
      
    } 
  return (
    <div>
      <div className="max-w-[500px] mx-auto">
      <input
        onChange={handleValues}
        name="title"
        value={info.title}
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full  mb-3"
      />
      <span className='text-red-500 text-xs mb-2'>{error.title}</span> 
      <br />
      <textarea
        onChange={handleValues}
        value={info.description}
        className="textarea textarea-bordered w-full"
        name="description"
        placeholder="Bio"
      ></textarea>
     <span className='text-red-500 text-xs mb-2'>{error.description}</span> 
      <div className="flex justify-center items-center">
        <button
          onClick={handleSubmit}
          className="btn btn-info text-center px-5 mt-2"
        >
          Submit
        </button>
      </div>
    </div>
    </div>
  )
}

export default UpdateData
