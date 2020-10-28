import React, {useState, useEffect, useContext } from 'react'
import {BrowserRouter as Router,
Switch,
Route,
Link
}from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu';
import './navbar.css'
import burgerImg from '../images/burger.png'



 function NavBar(){
   
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    




    {/* TOOGLE SIDEBAR*/}
    const MyContext = React.createContext();

    const MyProvider = (props) => {
    const [menuOpenState, setMenuOpenState] = useState(false)
      
      return (
        <MyContext.Provider value={{
          isMenuOpen: menuOpenState,
          toggleMenu: () => setMenuOpenState(!menuOpenState),
          stateChangeHandler: (newState) => setMenuOpenState(newState.isOpen)
        }}>
          {props.children}
        </MyContext.Provider>
      )
    }
    
    const Button = () => {
      const ctx = useContext(MyContext)
      return(
        <button className="burgerbutton" onClick={ctx.toggleMenu}>
          <img className="burgerImgSrc" src={burgerImg}/>
        </button>
      )
    }

    const Navigation = () => {
      const ctx = useContext(MyContext)
    
      return (
        <Menu  
          customBurgerIcon={false}
          isOpen={ctx.isMenuOpen}
          onStateChange={(state) => ctx.stateChangeHandler(state)}
        > 
          <a className="menuItem" href="/social">Social</a>
          <a className="menuItem" href="/aboutUs">About Us</a>
          <a className="menuItem" href="/contact">Contact</a>
          <a className="menuItem" href="/social">Social</a>
        </Menu>
      )
    }

     


    return(
    <>
    <body>
      <nav className="navBar">
      
      <MyProvider>
       <div>
        <Button />
        <Navigation />
       </div>
      </MyProvider>

        
  
        <div className="navLinks">  
          <ul className={click ? "navUlActive" : "navUl"} >
            <li className="navItem"><Link to="/work" onClick={closeMobileMenu}>Work</Link></li>
            <li className="navItem"><Link to="/social" onClick={closeMobileMenu}>Social</Link></li>
            <li className="navItem"><Link to="/signin" onClick={closeMobileMenu}>Profile</Link></li>
          </ul>
        </div>
        <div className="navLogoLeft">
           <a className="siteName" href="#"><Link to="/">Site Name</Link>
           </a>

           <div className="burger">
             
           </div>
           
        <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>

        </div>
        {/*
        <Menu onClick={showSidebar}>
          <a className="menuItem" href="/social">Social</a>
          <a className="menuItem" href="/aboutUs">About Us</a>
          <a className="menuItem" href="/contact">Contact</a>
          <a className="menuItem" href="/social">Social</a>
        </Menu>
        */}
      </nav>
    </body>
    </>
    ) 
     
}

export default NavBar
