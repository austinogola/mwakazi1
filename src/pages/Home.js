import Header from "../components/Header"
import Navbar from "../components/Navbar"
import SliderComp from "../components/SliderComp"
import FeatureStrip from "../components/FeatureStrip"
import FrontImage from "../components/FrontImage"
import Footer from "../components/Footer"
import ResponsiveNavbar from "../components/ResponsiveNavbar"
import ResponsiveFooter from '../components/ResponsiveFooter'
import FloatingChatButton from '../components/FloatingChatButton'
import PopularTrips from "../components/PopularTrips"

const Home=()=>{
    return (
        <div>
            <Header/>
            {/* <SliderComp/> */}
            <ResponsiveNavbar/>
            <FrontImage/>
            <FeatureStrip/>
            <PopularTrips/>
            <ResponsiveFooter/>
            <FloatingChatButton/>
            
            {/* <Navbar/> */}

        </div>
    )
}

export default Home