import FeatureStrip from "../components/FeatureStrip"
import FrontImage from "../components/FrontImage"
import Footer from "../components/Footer"
import ResponsiveNavbar from "../components/ResponsiveNavbar"
import ResponsiveFooter from '../components/ResponsiveFooter'
import FloatingChatButton from '../components/FloatingChatButton'
import PopularTrips from "../components/PopularTrips"
import Header from "../components/Header"

const Destinations=()=>{
    return (
        <div>
            <Header/>
            {/* <SliderComp/> */}
            <ResponsiveNavbar/>
            <h1 style={{textAlign:'center'}}>Destinations</h1>
            <PopularTrips/>
            <ResponsiveFooter/>
            <FloatingChatButton/>
            
            {/* <Navbar/> */}

        </div>
    )
}

export default Destinations