
// const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
import axios from 'axios';
import { jwtDecode } from "jwt-decode";

export const createOrGetUser = async (response) => {
    const decoded = jwtDecode(response.credential);
    const user = {
        _id: decoded.sub,
        _type: 'user',
        userName: decoded.name,
        image: decoded.picture
    }
    // await axios post(`http://localhost:3000`)
}
//   const base64Url = response.credential.split('.')[1];
//   const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
//   const jsonPayload = decodeURIComponent(
//     atob(base64)
//       .split('')
//       .map(function (c) {
//         return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
//       })
//       .join('')
//   );

//   const { name, picture, sub } = JSON.parse(jsonPayload);

//   const user = {
//     _id: sub,
//     _type: 'user',
//     userName: name,
//     image: picture,
//   };

//   addUser(user);

//   await axios.post(`${BASE_URL}/api/auth`, user);
//};