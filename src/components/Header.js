import '../styles/Header.css'
import { FiFacebook, FiInstagram, FiTwitter, FiPhone } from "react-icons/fi";
import { AiFillYoutube ,AiFillTikTok } from "react-icons/ai";

const Header = () => {
    return (
        <header className="header">
                <div className="socials">
                    <a href='https://youtube.com/@mwakaziadventures?si=-RALNb3IiW9llNVF' target='_blank' 
                    rel='noreferrer'>
                        <span><AiFillYoutube size='18px' /></span>
                    </a>
                    <a href='https://www.instagram.com/mwakazi_adventures/profilecard/?igsh=MW02dXltcGQzbndhcw==' 
                    target='_blank' rel='noreferrer'>
                        <span><FiInstagram size='16px' /></span>
                    </a>
                    <a href='https://www.tiktok.com/@mwakazi.adventure?_t=8pFsxCr22Mg&_r=1' 
                    target='_blank' rel='noreferrer'>
                        <span><AiFillTikTok size='17px' /></span>
                    </a>
                   
                </div>

                <div className="contacts">
                    <span className="phone"><FiPhone size='14px' /> +25423595924</span>
                    <span>contact@mwakaziadventures.com</span>

                </div>
        </header>
    )
}

export default Header