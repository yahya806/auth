import React, { useState } from 'react';
import {Form,Button} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link,useHistory } from 'react-router-dom';
import { loginUser } from '../js/userSlice/userSlice';
const Login = () => {
  const [login, setlogin] = useState({
 
    email: "",
    password:"",
});
const history =useHistory();
const dispatch = useDispatch();
const handlelogin=(e)=>{
  e.preventDefault();
    dispatch(loginUser(login))
   setTimeout(()=>{ history.push("/Profile"); },1000);
};
    return (
        <div className='logscreen'>
            <Form>
                <h1>Log in</h1>
                 
                <Form.Group className="mb-3" >
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" 
        onChange={(e)=> setlogin({...login,email: e.target.value})} />
        
    <Form.Text className="text-muted">
      share your email no one care.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" >
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" 
        onChange={(e)=> setlogin({...login,password: e.target.value})} />
        
  </Form.Group>
  
  <Button variant="primary" onClick={handlelogin}>
    Submit
  </Button>
  <h5>If you dont have acount <Link to='/register'>Sign up</Link> </h5>
</Form>
            
        </div>
    )
}

export default Login
