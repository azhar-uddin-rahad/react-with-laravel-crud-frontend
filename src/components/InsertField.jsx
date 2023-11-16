import React, { useState } from "react";
import Api from "./Api";
import axios from "axios";

const InsertField = () => {
  const [info, setInfo] = useState({
    title: "",
    description: "",
  });
  const [error, setError] = useState({});


  const handleValues=(e)=>{
    setInfo({...info,
      [ e.target.name] : e.target.value})

}
const handleSubmit=()=>{
   console.log(info)
  const data={
    title:info.title,
    description:info.description
  }
  axios.post(`http://127.0.0.1:8000/api/createpost`,data).then(res=>{
    alert(res.data.message)
  })
 .catch(function(error){
      if(error.response){
          if(error.response.status === 422){
            setError(error.response.data.errors);
          }   
          if(error.response.status === 500){
            alert(error.response.error);
            
          }   
      }
  }) 
  
} 
  return (
    <div className="max-w-[500px] mx-auto">
      <input
        onChange={handleValues}
        name="title"
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full  mb-3"
      />
      <span className='text-red-500 text-xs mb-2'>{error.title}</span> 
      <br />
      <textarea
        onChange={handleValues}
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
  );
};

export default InsertField;
