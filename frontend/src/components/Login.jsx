import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import shareVideo from '../assets/share.mp4';
import logo from '../assets/logowhite.png';
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { client } from '../client';




const Login = () => {
  const navigate = useNavigate();
  const responseGoogle = (response) => {
    console.log(response);
   
  };



const createOrGetUser = (response) => {
    const decoded = jwtDecode(response.credential);
    const user = {
        _id: decoded.sub,
        _type: 'user',
        userName: decoded.name,
        image: decoded.picture
    }   

    localStorage.setItem('user', JSON.stringify(decoded));
   
    client.createIfNotExists(user).then(() => {
      navigate('/', {replace: true});
    })
}

  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className=" relative w-full h-full">
        <video
          src={shareVideo}
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
          className="w-full h-full object-cover"
        />

        <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0    bg-blackOverlay">
          <div className="p-5">
            <img src={logo} width="130px" />
          </div>

          <div className="shadow-2xl">
            <GoogleLogin         
              onSuccess={(response) => createOrGetUser(response)}              
              onError={()=> console.log('Error')}             
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;