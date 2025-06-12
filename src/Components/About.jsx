import './About.css';
import cafe1 from '../assets/freshly-baked-pastry-with-cup-coffee-wooden-table.jpg';

function About() {
  return (
    <div className="about-stc">
      <div className="about-text">
        <h3>About Lazy Latte ☕</h3>
      
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
  );
}

export default About;
