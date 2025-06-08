import './Hero.css'
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function Hero(){

    const navigate = useNavigate();

    const Click = () => {
        navigate('/explore');
    }

    return(
        <>
        <div>
            <p>
                <h1>Brewed for the Soul, Sipped from the Stars</h1>
                <br></br>
                Step in for a brew, stay for  a taste of paradise.
                <br></br><br></br><br></br>
                <button onClick={Click}>Explore</button>
                </p>
        </div>
        </>
    );

}

export default Hero;