
import React from 'react';
import '../styles/FeatureStrip.css'
import { FiHeadphones } from "react-icons/fi";
import { MdAccountBalanceWallet,MdHeadsetMic ,MdLocationPin  } from "react-icons/md"

const Feature=({imgsign})=>{
    return(
        <div className="Feature" >
            <div className="imageHolder">
                <span><imgsign size='30px'/></span>
            </div>
        
        </div>
    )

}
const FeatureStrip=()=>{
    return (
        <div className="FeatureStrip">
            <div className="Feature" >
                <div className="imageHolder">
                    <span><MdLocationPin size='30px' color='#4CC3B4'/></span>
                </div>
                <div className="titleHolder">
                    <h3>Handpicked Destinations</h3>
                </div>
                <div className="textHolder">
                    <p>Our strict screening process means you’re only seeing the best quality treks</p>
                </div>
        
            </div>

            <div className="Feature" >
                <div className="imageHolder">
                    <span><MdAccountBalanceWallet size='30px' color='#4CC3B4'/></span>
                </div>
                <div className="titleHolder">
                    <h3>Best Price Guaranteed</h3>
                </div>
                <div className="textHolder">
                    <p>Our Best Price Guarantee means that you can be sure of booking at the best rate.</p>
                </div>
        
            </div>

            <div className="Feature" >
                <div className="imageHolder">
                    <span><MdHeadsetMic size='30px' color='#4CC3B4'/></span>
                </div>
                <div className="titleHolder">
                    <h3>24/7 Customer Surpport</h3>
                </div>
                <div className="textHolder">
                    <p>Our customer are standing by 24/7 to make your experience incredible.</p>
                </div>
        
            </div>
        
        </div>
    )
}


export default FeatureStrip