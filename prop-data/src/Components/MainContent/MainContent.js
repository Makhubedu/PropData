import { Button, Card, Slide } from '@material-ui/core';
import { AddToQueue, AppsOutlined, Home, PhotoCamera, Print, Room, Share, Facebook, HomeOutlined } from '@material-ui/icons';
import Prop1 from '../../assets/property1.jpg';
import Prop2 from '../../assets/property2.jpg';
import React from 'react';
import {Fade, Flip} from 'react-reveal';
import './MainContent.css'

function MainContent() {
    return (
        <div>
            <Fade bottom duration={2000} distance="40px" enter>
                
            <section className="container first">
                    <div className="intro"><p>You are here: Kinetic/ Homepage</p></div>
                    <div className="heading">
                        <div className="heading__title">
                            <h4>Prop Date</h4>
                            <div className="more">
                                <h1>
                                    <Print fontSize="large" />
                                </h1>
                                <h1>
                                    <Share fontSize="large"/>
                                </h1>
                            </div>
                        </div>
                        
                        <div className="middle">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                                laborum.
                            </p>
                        </div>
                        <div className="bottom">
                            <Button variant="contained"  className="read-more">Read More</Button>
                        </div>
                        
                    </div>
                </section>
            </Fade>
           
            <section className="property container">
                <h4>Featured Properties</h4>
                <div className="cards">
                <Fade  left duration={2000} distance="50px" enter>
                    <div className="card">
                            <div className="image-holder" style={{backgroundImage : `url(${Prop1})`}}>
                            <p className="new">New</p>
                            <div className="img-bottom">
                            
                                <p><PhotoCamera/> 20 Photos</p>
                                <p><Room/> Map</p>
                                <p><AddToQueue/>Plans</p>
                            </div>
                            <div className="card-end">
                            <h1>R1 590 000</h1>
                                    <h3>1 Bedroom Apartment for sale in Santon</h3>
                                </div>
                            
                            </div>       
                    </div>
                </Fade>
                <Fade right duration={2000} distance="50px" enter>
                    <div className="card">
                            <div className="image-holder" style={{backgroundImage : `url(${Prop2})`}}>
                            <p className="new">New</p> 
                            <div className="img-bottom">
                                <p><PhotoCamera/> 20 Photos</p>
                                <p><Room/> Map</p>
                                <p><AddToQueue/>Plans</p>
                            </div>
                            <div className="card-end">
                                <h1>R2 750 000</h1>
                                <h3>2 Bedroom Apartment for sale in Santon</h3>
                            </div>

                            </div>

                        </div>
                    
                    </Fade>
                </div>
                    

            </section>  
        
            <section className="container last">
                <Flip left>
                    <div className="main">
                        <h1>< HomeOutlined className="icon"/></h1>
                        <h2>On Show</h2>
                        <p>Click here for the directions and details for this weekends houses</p>
                    </div>
                </Flip>
                <Fade bottom>
                    <div className="main">
                        <h1><Facebook className="icon"/></h1>
                        <h2>Facebook</h2>
                        <p>View the lasted and the most valuable information in the property market</p>
                    </div>
                </Fade>
                <Flip right>
                    <div className="main">
                        <h1><AppsOutlined className="icon"/></h1>
                        <h2>Calculator</h2>
                        <p>Find out what your costs will be before searching for a new home</p>
                    </div>
                </Flip>
               
                
                
            </section>
            </div>
        
        
    )
}

export default MainContent
