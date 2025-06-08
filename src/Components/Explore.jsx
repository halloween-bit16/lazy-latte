import './Explore.css';
import Footer from './Footer';
import Navigation from './Navigation';

function Explore(){
    return(
    <div className='menu-product'>
    <Navigation></Navigation>
    <h1 className='menu'>Our Menu</h1><br></br>
    <h5 className='menu-txt'>Designed to keep you energized and happy all day</h5>
    <Footer></Footer>
    </div>
    );
}
export default Explore