import React from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import MainHeader from './Components/MainContent/MainContent';

class App extends React.Component{

    render(){
        return ( 
            <div>
                <Header/>
                <MainHeader/>
                <Footer/>
            </div>
            
        )
    }
}

export default App;