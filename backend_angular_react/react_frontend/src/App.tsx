import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div>
            <div className='Box'>
                <h2>Login Form</h2>
                <input type="text" placeholder='enter user name' /><br /><br />
                <input type="password" placeholder='enter user pass' /><br /><br />
                <input type="button" value="login" />
            </div>
        </div>
    );
}

export default App;
