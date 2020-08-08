import React from 'react'

const { Link } = require("react-router-dom")


export const HomePage = () => (
    <div>
   <h1>Home Page</h1>
    <Link to='/login'>Login</Link>
    </div>
 
);