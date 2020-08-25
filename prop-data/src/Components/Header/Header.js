import React from 'react';
import Logo from '../../assets/logo.jpg';
import Carousel from 'react-material-ui-carousel';
import {Paper, Button, Grid, Typography, FormControl, Select, Input} from '@material-ui/core';
import { ExpandLess, Replay, Search } from '@material-ui/icons';
import Slider1 from '../../assets/headerimage.jpg';
import Slider2 from '../../assets/headerimage2.jpg';
import './Header.css';
const Header = () => {
    const photos = [
        {
            name : "IT'S YOUR MOVE!",
            description : "Sophisticated development super designs",
            url : Slider1
        },
        {
            name : "Mira-Lili",
            description : "Luxurious living at it's very best",
            url : Slider2
        }
    ]
    return (

            <div>
                <nav className="header ">
                    <div className="nav__right">
                        <div className="right__logo">
                            <img src={Logo} alt="The PropData Logo"/>
                        </div>
                    </div>
                    <div className="nav__left">
                        <div className="left__info">
                            <h2>(031) 266 0035 | info@propdata.net</h2>
                        </div>
                        <div className="left__naviagation">
                            <ul className="left__list">
                                    <li className="list__item">
                                        <a href="#" className="item__link">Home</a>
                                    </li>
                                    <li className="list__item">
                                        <a href="#" className="item__link">Property Search</a>
                                    </li>
                                    <li className="list__item">
                                        <a href="#" className="item__link">Calculator</a>
                                    </li>
                                    <li className="list__item">
                                        <a href="#" className="item__link">About Us</a>
                                    </li>
                                    <li className="list__item">
                                        <a href="#" className="item__link">Contact Us</a>
                                    </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="paper">
                    <Carousel
                        animation="slice"
                        timeout={800}
                        autoPlay={true}
                        navButtonsAlwaysVisible={true}
                        startAt={1}
                        activeIndicatorProps= {("current", {
                            color:"red"
                        })}
                        

                    >
                        {photos.map((photo,index)=>{
                            return(
                                <div className="images" style={{  
                                    backgroundImage  :`url(${ photo.url })`
                                        }}>
                                    <div className="image__text">
                                        <Typography variant="h4">{photo.name}</Typography>
                                        <Typography variant="body1">{photo.description}</Typography> 
                                    </div>
                                    <div className="search">
                                        <FormControl className="selectForm container">
                                            <div className="form-search">
                                                <Select
                                                    native
                                                    className="selectSize select-one"
                                                    >
                                                    <option value="">Buy</option>
                                                    <option value={10}>Ten</option>
                                                    <option value={20}>Twenty</option>
                                                    <option value={30}>Thirty</option>
                                                </Select>
                                                <Select
                                                native
                                                    className="selectSize select-two"

                                                    >
                                                    <option value="">Residential</option>
                                                    <option value={10}>Ten</option>
                                                    <option value={20}>Twenty</option>
                                                    <option value={30}>Thirty</option>
                                                    </Select>
                                                <Input
                                                native
                                                    className="selectSize select-three"
                                                    value="Type Area or Suburb Name"
                                                    />
                                            
                                            </div>

                                        </FormControl>
                                        <div className="search-bottom container">
                                            <div className="search__left">
                                                <Button className="button" variant="outlined" color="primary"><Replay/> Web Ref Number Search</Button>
                                            </div>
                                            <div className="search__right">
                                                <Typography className="prop" variant="body1">124 Properties</Typography>
                                                <Button className="button current" variant="outlined" color="light"><ExpandLess /> More Search Options</Button>
                                                <Button className="button search-button" variant="outlined" color="primary"><Search/> Search</Button>
                                            </div>
                                            
                                            
                                        </div>
                    
                    </div>

                                </div>
  
                            )
                        })}
                    </Carousel> 
                    
                </div>
            </div>
                
            

    )
}
function Item(props)
{
    return (
        <Paper>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>
 
            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}

export default Header;
