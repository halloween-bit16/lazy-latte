import CoffeeImg from '../assets/start-coffee-img.png'
import './Start.css'
import { useNavigate } from 'react-router-dom';
import React from 'react';

function Start(){

    const navigate = useNavigate();

    const Click = () => {
        navigate('/page1');
    }

    return(
        <div className='div-img'>
        <img className='start-img' src={CoffeeImg} alt="Image of Coffee" onClick={Click}></img>
        </div>
    );
}

export default Start