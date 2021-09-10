import React from 'react'
import {BrowserRouter,Switch, Route} from 'react-router-dom'
import {Container} from 'react-bootstrap';
import AppBar from '../components/AppBar/AppBar';
import Navbar from '../components/Navbar/Container/Navbar';
import Home from '../components/Home/Container/Home';
import Footer from '../components/Footer/Container/Footer';
import About from '../components/About/Container/About';
import { GlobalProvider } from '../components/Context/GlobalContext';
import Contact from '../components/Contact/Container/Contact';
import Services from '../components/Services/Container/Services';
import ValuesAdded from '../components/Values/Container/ValuesAdded';

const Routes=()=>{
    return(
        <div>
             <BrowserRouter>
                <Container fluid> 
                    <GlobalProvider> 
                        <AppBar/>
                        <Navbar/>
                        <Switch>
                            <div className="mainDiv">
                                <Route exact path="/" component={Home} />
                                <Route path='/about' component={About}/>
                                <Route path='/contact' component={Contact}/>
                                <Route path='/solutions' component={Services}/>
                                <Route path="/values" component={ValuesAdded}/>
                            </div>
                        </Switch>
                        <Footer/>
                    </GlobalProvider>
                </Container>
            </BrowserRouter>
        </div>
    
    )
}


export default Routes