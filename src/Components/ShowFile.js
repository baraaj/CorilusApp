
import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function ShowFile() {
    const [result, setResult] = useState('');
    useEffect(()=>{
        const requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };
      
        fetch("https://localhost:7059/api/FileAPI/1", requestOptions)
          .then(response => response.text())
          .then(result => setResult(result))
          .catch(error => console.log('error', error));
      }, []);
  return (
    <div>  {result}</div>
  )
}
