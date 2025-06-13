import Navigation from "./Navigation";
import Footer from "./Footer";
import './Home.css'
import cafe1 from '../assets/freshly-baked-pastry-with-cup-coffee-wooden-table.jpg';
import pin from '../assets/pin.png'
import clock from '../assets/clock.png'
import phone from '../assets/telephone.png'
import { useNavigate } from 'react-router-dom';


function Home(){

    const navigate = useNavigate();

    const Click = () => {
        navigate('/explore');
    }

    const det = [
        {img:pin,name:'Location',desp1:'123, Maple Street',desp2:'Quiet Corner, QC 456789'},
        {img:clock,name:'Hours',desp1:'Mon - Fri: 6:30am - 7:00pm',desp2:'Sat - Sun: 7:00am - 8:00pm'},
        {img:phone,name:'Contact',desp1:'555-LATTE ',desp2:'hello@lazylatte.com'},
    ];

    return(
        <>
        <Navigation></Navigation>
        <div className="main-bg">
            <section className="hero">
                <div>
                <p className="hero-p">
                <h1 className="hero-h1">Brewed for the Soul, Sipped from the Stars</h1>
                <br></br>
                Step in for a brew, stay for  a taste of paradise.
                <br></br><br></br><br></br>
                <button className="hero-btn" onClick={Click}>Explore</button>
                </p>
        </div>
            </section>
        </div>

        <section className="about">
            <div className="about-stc">
                  <div className="about-text">
                    <h3>About Lazy Latte ☕</h3>
                    <br></br>
                    <p>
                      At Lazy Latte, we believe coffee isn’t just a drink — it’s a moment. A pause. A deep breath in the middle of a chaotic day. 
                      Nestled in the heart of the city, Lazy Latte is your cozy escape, where comfort meets craft.
                      <br /><br />
                      We serve thoughtfully brewed coffee, delicious bites, and cozy vibes — perfect for slow mornings, lazy afternoons, and unhurried conversations. 
                      Whether you're here to work, unwind, or just people-watch with a latte in hand, our space is designed to feel like your second home.
                      <br /><br />
                      Come sip, sit back, and savor the slow life — one lazy latte at a time.
                    </p>
                  </div>
                  <div className="about-img">
                    <img src={cafe1} alt="Cafe with pastry and coffee" />
                  </div>
                </div>

                <br></br><br></br>
       
            <div className="contct">
        <h3>Find a way to Us</h3>
        <br></br>
        <h6>We are here when you need a moment of peace</h6>
        <br></br>
        <div className="detai">
            <div className="dett">
           {det.map((item, index) => (
            <div key={index} className="detail">
                <img src={item.img} alt="" className="img" />
                <span className="item-title">{item.name}</span>
                <span className="item-desp">{item.desp1}</span>
                <span className="item-desp">{item.desp2}</span>
            </div>

           ))}
        </div>
           </div>
        </div>
        
        </section>

        <div className="foot-style">
            <Footer></Footer>
        </div>
        
        </>
    );
}

export default Home;