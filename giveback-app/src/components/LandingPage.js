import '../css/LandingPage.css'
import { Bounce, Slide } from 'react-awesome-reveal'

const LandingPage = () => {
    return ( 
    <div className="landing-page-container">
           <Slide><h1 className="good-karma-landing-title">Good Karma</h1></Slide> 
            <img className="landing-page-image" src="https://i.imgur.com/QpzScGC.jpg" alt="landingpage"/>
            <Bounce><h3 className="good-karma-tagline"> Give your gently loved items to those in need...</h3></Bounce>
           

        </div>
    );
}
 
export default LandingPage;