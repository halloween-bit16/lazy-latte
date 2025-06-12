import Navigation from "./Navigation";
import Footer from "./Footer";
import Hero from "./Hero";
import './Page1.css'
import About from "./About";
import Contact from './Contact'

function Page1(){
    return(
        <>
        <Navigation></Navigation>
        <div className="main-bg">
             <Hero></Hero>
        </div>
        <About></About>
        <Contact></Contact>
        <div className="foot-style">
            <Footer></Footer>
        </div>
        
        </>
    );
}

export default Page1;