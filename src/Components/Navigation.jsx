import React from 'react';
import './Navigation.css';
import Explore from './Explore';
import { useNavigate } from 'react-router-dom';

function Navigation(){
    const navigate = useNavigate();

    const Products = () => {
        navigate('/explore');
    }

    const Home = () => {
        navigate('/page1');
    };

    return(
        <div className='nav-bar'>
        <h1 onClick={Home}>Coffee Shop</h1>
        <div className="h-three">
        <h3><a>About</a></h3>
        <h3><a onClick={Products}>Products</a></h3>
        <h3><a>Locations</a></h3>
        <h3><a>Contact</a></h3>
        </div>
        <hr></hr>
        </div>
    );
}

export default Navigation