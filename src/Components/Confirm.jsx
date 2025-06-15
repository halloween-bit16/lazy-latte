import Navigation from './Navigation';
import Footer from './Footer';

function Confirm() {
  return (
    <>
      <Navigation />
      <section className="book">
        <h3>Thank You!</h3>
        <p style={{ textAlign: 'center', fontSize: '1.2rem', color: 'rgb(50,36,26)' }}>
          Your reservation has been submitted. We’ll get in touch soon!
        </p>
      </section>
      <Footer />
    </>
  );
}

export default Confirm;
