import React from 'react';
import './Footer.css';
import Twitter from '../../assets/Twitter.svg';
import Facebook from '../../assets/Facebook.svg';
import YouTube from '../../assets/YouTube.svg';
import Logo from '../../assets/LogoCopyRight.png';

function Footer() {
    return (
        <footer className="">
            <div className="container">
            <div className="first-footer">
                <a href="/results/on-show/">On Show</a> | 
                <a href="/results/featured-properties/">Featured Properties</a> | 
                <a href="/results/residential/for-sale/">Residential For Sale [8205]</a> | 
                <a href="/results/estate/residential/">Residential Estate [8]</a> | 
                <a href="/results/new-development/residential/">Residential New Developments [12]</a> | 
                <a href="/results/commercial/for-sale/">Commercial For Sale [236]</a> | 
                <a href="/results/industrial/for-sale/">Industrial For Sale [89]</a> | 
                <a href="/results/retail/for-sale/">Retail For Sale [70]</a> | 
                <a href="/results/mixed-use/for-sale/">Mixed Use For Sale [29]</a> | 
                <a href="/results/agricultural/for-sale/">Agricultural For Sale [7]</a> | 
                <a href="/results/vacant-land/">Vacant Land [1628]</a> | 
                <a href="/results/farms-and-small-holdings/">Farms &amp; Small Holdings [741]</a> | 

            </div>
            <div className="second-footer">
                <a href="/results/on-show/">On Show</a> | 
                <a href="/results/featured-properties/">Featured Properties</a> | 
                <a href="/results/residential/for-sale/">Residential For Sale [8205]</a> | 
                <a href="/results/estate/residential/">Residential Estate [8]</a> | 
                <a href="/results/new-development/residential/">Residential New Developments [12]</a> | 
                <a href="/results/commercial/for-sale/">Commercial For Sale [236]</a> | 
                <a href="/results/industrial/for-sale/">Industrial For Sale [89]</a> | 
                <a href="/results/retail/for-sale/">Retail For Sale [70]</a> | 
                <a href="/results/mixed-use/for-sale/">Mixed Use For Sale [29]</a> | 
                <a href="/results/agricultural/for-sale/">Agricultural For Sale [7]</a> | 
                <a href="/results/vacant-land/">Vacant Land [1628]</a> | 
                <a href="/results/farms-and-small-holdings/">Farms &amp; Small Holdings [741]</a> |
            </div>
            <div className="third-footer">
                <div className="left">
                    <img src={Logo} alt="" srcset=""/>
                    <p></p>
                </div>
                <div className="right">
                    <img src={Facebook} alt="" srcset=""/>
                    <img src={Twitter} alt="" srcset=""/>
                    <img src={YouTube} alt="" srcset=""/>
                </div>

            
            </div>
            </div>
            
        </footer>
    )
}

export default Footer
