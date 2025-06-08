import Navigation from "./Navigation";
import Footer from "./Footer";
import Hero from "./Hero";
import './Page1.css'

function Page1(){
    return(
        <>
        <Navigation></Navigation>
        <div className="main-bg">
             <Hero></Hero>
        </div>
        <div className="foot-style">
            <Footer></Footer>
        </div>
        
        </>
    );
}

export default Page1;