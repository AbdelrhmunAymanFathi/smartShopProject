import React, { useState } from 'react'
import { toast } from 'react-toastify';
import axios from 'axios';
const Test = () => {
    const [post , setPost] = useState([]);
    const getData =()=>{
        axios.get(`http://localhost:5000/posts`)
        .then(res => setPost(res.data))
        .catch(err => toast.error(err.message))
    }
  return (
    <div>
    {
        post.map((item , index) => (
        <div key={index}>

        
        </div>


        ))
    }
      
    </div>
  )
}

export default Test
