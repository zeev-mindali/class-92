import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function App() {
    const [userName, setName] = useState("");
    const [userPass, setPass] = useState("");

    const navigate = useNavigate();

    const myURL = "http://localhost:4000/api/user/checkLogin";

    const makeLogin = () => {
        const data = {
            "user_name": userName,
            "password": userPass
        }

        axios.post(myURL, data)
            .then(response => {
                console.log("inject login.....")
                navigate("http://www.ynet.co.il");
            })
            .catch(err => {
                console.log("oh no .....");
                navigate("https://www.pinterest.com/pin/56224695327525576/");
            });
    }

    return (
        <div style={{ marginTop: 100 }}>

            <div className='Box'>
                <h2>Login Form</h2>
                <input type="text" placeholder='enter user name' onChange={(args) => setName(args.target.value)} /><br /><br />
                <input type="password" placeholder='enter user pass' onChange={(args) => setPass(args.target.value)} /><br /><br />
                <input type="button" value="login" onClick={makeLogin} />
            </div>
        </div>
    );
}

export default App;
