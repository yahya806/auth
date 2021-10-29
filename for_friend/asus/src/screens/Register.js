import React,{useState} from 'react';
import {Form,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {registerUser} from "../js/userSlice/userSlice"

const Register = () => {
     const [register, setregister] = useState({
         name:"",
         lastname:"",
         email: "",
         password:"",
     });
     const dispatch = useDispatch();
     const handleRegister=(e)=>{
       e.preventDefault();
         dispatch(registerUser(register))
     };

    return (
        <div className='logscreen'>
            <Form>
                <h1>Sign up</h1>
                 
     <Form.Group className="mb-3" >
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter name" 
    onChange={(e)=> setregister({...register,name: e.target.value})} />
  </Form.Group>

  <Form.Group className="mb-3" >
    <Form.Label>Last name</Form.Label>
    <Form.Control type="text" placeholder="Enter last name" 
        onChange={(e)=> setregister({...register,lastname: e.target.value})} />
        
  </Form.Group>

  <Form.Group className="mb-3" >
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" 
        onChange={(e)=> setregister({...register,email: e.target.value})} />
        
    <Form.Text className="text-muted">
      share your email no one care.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" >
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" 
        onChange={(e)=> setregister({...register,password: e.target.value})} />
        
  </Form.Group>
  
  <Button variant="primary" onClick={handleRegister}>
    Submit
  </Button>
  <h5>If you have account you can <Link to='/login'>Log in</Link> </h5>
</Form>
        </div>
    )
}

export default Register
