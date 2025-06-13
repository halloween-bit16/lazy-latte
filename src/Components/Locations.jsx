import './Locations.css'
import Navigation from './Navigation';
import Footer from './Footer';

function Locations(){

    const locationData = [
  {
    name: 'Downtown Branch',
    description: '123 Maple St, QC 456789',
    hours: 'Mon - Fri: 6:30am - 7:00pm',
    contact: '555-LATTE',
  },
  {
    name: 'Riverwalk Branch',
    description: '88 River Rd, QC 456789',
    hours: 'Sat - Sun: 7:00am - 8:00pm',
    contact: '555-RWALK',
  },
  {
    name: 'Uptown Rooftop',
    description: '45 Sunset Blvd, QC 456789',
    hours: 'Everyday: 7:00am - 10:00pm',
    contact: '555-UPTWN',
  },
  {
    name: 'Garden View Café',
    description: '10 Greenway Lane, QC 456789',
    hours: 'Mon - Fri: 8:00am - 6:00pm',
    contact: '555-GVIEW',
  },
  {
    name: 'University Nook',
    description: '7 Knowledge Ave, QC 456789',
    hours: 'Mon - Sat: 7:30am - 9:00pm',
    contact: '555-UNIIT',
  },
  {
    name: 'Seaside Escape',
    description: '22 Coastal Road, QC 456789',
    hours: 'Fri - Sun: 9:00am - 11:00pm',
    contact: '555-SCAPE',
  }
];


    return(<>
    <Navigation></Navigation>

    <section className="locations">
        <h3>Locations</h3>
        <div className="location">
            {locationData.map((item, index) => (
                <div className="item" key={index}>
                    <span className="item-name">{item.name}</span>
                    <br></br>
                    <span className="item-desp"> 𓍙  {item.description}</span>
                    <br></br>
                    <span className="item-hrs"> ⏲ {item.hours}</span>
                    <br></br>
                    <span className="item-ctc"> 🕻 {item.contact}</span>
                </div>
            ))}
        </div>
   </section>

    <Footer></Footer>
    </>);
}
export default Locations;