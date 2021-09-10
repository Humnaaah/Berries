import React, {useContext, useState, useEffect} from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logo from '../../Assets/desktop/Logo_BD.png';
import CloseIcon from '@material-ui/icons/Close';
import Menu from '../../Assets/menu.svg'
import { GlobalContext } from '../../Context/GlobalContext';

const NavbarUi=(props)=>{
    const {active,setActive} = useContext(GlobalContext);
    const [activeLink,setActiveLink] = useState(localStorage.getItem('active'));
    const [collapsed, setIsCollapsed] = useState(false)
    const handleNavCollapse = () => setIsCollapsed(!collapsed);
    const maintainLink=(value)=>{
        setActive(value)
        setActiveLink(value)
        console.log("Active state is",value)
        localStorage.setItem('active', value )
    }
  
    useEffect(() => {
       maintainLink(activeLink)
       },[activeLink]);

    return(
        <Navbar collapseOnSelect expand="lg" variant='light' className={props.scroll ? "header2": `navbar navbar-expand-lg navbar-light`}>
            <Container>
                <Navbar.Brand> <Link to="/" onClick={()=>maintainLink("home")} > <img src={Logo} alt="BerryDirect"/> </Link>  </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={handleNavCollapse}>{collapsed ?  <CloseIcon className='nav-Togle'/> : <img src={Menu} className='nav-Togle-img'/>}  </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav ml-auto" className={props.scroll? "mt-10-per mt-nav": "mt-10-per"}>
                    <Nav className="justify-content-end">
                        <Nav.Item >
                            <Link to="/about" className={activeLink=== "about" ? ' nav-link active':'nav-link'}  onClick={()=>maintainLink("about")}> About Us </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="/solutions" className={activeLink=== "solutions" ? 'nav-link active ':'nav-link'}  onClick={()=>maintainLink("solutions")} > Solutions </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="/values" className={activeLink === "values" ? 'nav-link active ':'nav-link'} onClick={()=>maintainLink("values")}> Value Added </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="http://berrydirect.com/catalog/"  > Catalogs </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="/contact" className={activeLink===  "contact"  ? 'nav-link active':'nav-link'} onClick={()=>maintainLink("contact")}> Contact Us </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="/terms" className={activeLink===  "terms"  ? 'nav-link active navdis':'nav-link navdis'} onClick={()=>maintainLink("terms")}> Terms of Use </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="/privacy" className={activeLink===  "privacy"  ? 'nav-link active navdis':'nav-link navdis'} onClick={()=>maintainLink("privacy")}> Privacy Policy </Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarUi