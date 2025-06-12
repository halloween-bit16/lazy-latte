import './Contact.css'
import Card from './Card'
import pin from '../assets/pin.png'
import clock from '../assets/clock.png'
import phone from '../assets/telephone.png'

function Contact(){
    return(
        <>
        <div className="contct">
        <h3>Find a way to Us</h3>
        <h6>We are here when you need a moment of peace</h6>
        <Card icon={pin} >123, Lazy Lane, Coffee City</Card>
        <Card icon={clock} >Mon - Fri: 6:30am - 7:00pm<br/>Sat - Sun: 7:00am - 8:00pm</Card>
        <Card icon={phone} >9876543210 <br/> contact@lazy-latte.com</Card>
        </div>
        </>
    );
}
export default Contact