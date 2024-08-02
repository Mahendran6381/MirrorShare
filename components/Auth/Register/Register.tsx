import React, { ReactElement } from 'react'
import axios from 'axios';
const Register = () => {
    const handleSubmit = (e: ReactElement<EventTarget>) =>{
      const form: FormData = new FormData();
      const headers = {
        headers :{
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': 'true',
          'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Amz-Date, Authorization, X-Api-Key, X-Amz-Security-Token, locale',
          'Access-Control-Allow-Methods': 'GET, POST',
        }
      }
      const data = form;
      

    }
  return (
    <div>Register</div>
  )
}

export default Register