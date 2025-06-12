import './Explore.css';
import Footer from './Footer';
import Navigation from './Navigation';

function Explore(){

    const bev = [
        {name: 'Espresso', calories:5, price:120},
        {name:'Chai Latte',calories:160,price:150},
        {name: 'Cappuccino', calories:150, price:180},
        {name:'Latte',calories:190,price:200},
        {name:'Mocha',calories:250,price:220},
    ];

    const tre = [
        {name:'Chocolate Chip Cookie',calories:180,price:90},
        {name:'Butter Croissant',calories:230,price:110},
        {name:'Banana Bread Slice',calories:250,price:100},
        {name:'Brownies',calories:320,price:130},
        {name:'Cinnamon Rolls',calories:350,price:140},
    ];

    return(
    <div className='menu-product'>
    <Navigation></Navigation>
    <h1 className='menu'>Our Menu</h1><br></br>
    <h5 className='menu-txt'>Designed to keep you energized and happy all day</h5>
    
    <section className='Menu'>
        <div className='ctc'>
            <h4>Beverages</h4>
            {bev.map((item,index) => (
                <div className='bev-row'>
                <div key={index} className="menu-item">
                    <span className="item-name">{item.name}</span>
                    <span className="item-price">₹ {item.price}</span>
                </div><h6 className="item-calories"><i>{item.calories} kcal</i></h6>
                </div>
            ))}
        </div>
        <div className='ctc'>
            <h4>Treats</h4>
            {tre.map((item,index) => (
                <div className="tre-row">
                    <div className="menu-item" key={index}>
                        <span className="item-name">{item.name}</span>
                        <span className="item-price">₹{item.price}</span>
                    </div>
                    <h6 className="item-calories"><i>{item.calories} kcal</i></h6>
                </div>
            ))}
        </div>
    </section>
    <Footer></Footer>
    </div>
    );
}
export default Explore