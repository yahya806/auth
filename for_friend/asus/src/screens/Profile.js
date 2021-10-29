import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { logout } from '../js/userSlice/userSlice';

const Profile = () => {
    const user = useSelector((state) => state.user.user)
    console.log(user);
    const history = useHistory();
    const dispatch = useDispatch()
    const handlelogout=()=>{
        dispatch(logout())
        history.push("/login");
    }
    return (
        <div>
            <h1>{user?user.name:<img src="https://brokerportal.anthem.com/ehb-portlet/images/loading.gif" alt=""/>}</h1>
       
            <button onClick={handlelogout}>
                logout
            </button>
       
        </div>
    )
}

export default Profile;
