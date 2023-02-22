import React, { useState } from 'react'
import axios from 'axios'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Register() {
  const [inputReg ,setinputs]=useState([]);
  
  const changeInput=(event)=>{
      const name=event.target ;
      const value=event.target ;
      setinputs(values=> ({...values,[name]:value}));
      
    }
    console.log(inputReg,"setInput");

  const changeSubmit=(event)=>{
        event.preventDefault();  
        let name=event.target.name;
        let address=event.target.address;
        let phone=event.target.phone;

            axios.post(`http://localhost/crud_function/Backend/create.php`,inputReg).then (function(response){
            console.log(response,"kkkkkkkk");  
            // window.location("/");

            })
          
       
          }
          // ?name=${name}&address=${address}&phone=${phone}
  return (
<Container>
    <Form onClick={changeSubmit}>
      <Form.Group className="mb-3 mt-5" controlId="formBasicEmail">
      <Form.Label>User Name</Form.Label>
        <Form.Control type="text"  name="name" placeholder="Enter Name" onChange={changeInput}/>

      </Form.Group>
      <Form.Group className="mb-3 mt-5" controlId="formBasicEmail">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text"  name="address" placeholder="Enter address" onChange={changeInput} />
      </Form.Group>

      <Form.Group className="mb-3 mt-5" controlId="formBasicPassword">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="text" name="phone" placeholder="Enter Phone" onChange={changeInput}/>
      </Form.Group>
     
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Container>
  );
}

export default Register;