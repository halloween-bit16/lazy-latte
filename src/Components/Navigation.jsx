import React from 'react';
import './Navigation.css';
import { useNavigate } from 'react-router-dom';

function Navigation(){
    const navigate = useNavigate();

    const Products = () => {
        navigate('/explore');
    }

    const Home = () => {
        navigate('/home');
    };

    const Locate = () => {
        navigate('/locations');
    }

    const Book = () => {
        navigate('/book')
    }

    return(
        <div className='nav-bar'>
        <h1 onClick={Home}>Lazy Latte</h1>
        <div className="h-three">
        <h3><a onClick={Products}>Products</a></h3>
        <h3><a onClick={Locate}>Locations</a></h3>
        <h3><a onClick={Book}>Book</a></h3>
        </div>
        <hr></hr>
        </div>
    );
}

export default Navigation