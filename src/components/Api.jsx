import axios from 'axios'
import React from 'react'

const Api = () => {

  const http = axios.create({
    baseURL: 'http://127.0.0.1:8000/api',
    timeout: 1000,
    headers: {'content-type': 'application/json'}
  });
  return{
    http
  }
}

export default Api
