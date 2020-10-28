import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import Card from './CardUI'
import './Cards.css'
 

class Cards extends Component{
    render(){
         
        
        return(
        <div className="wholePage">
            {/*}
            <div className="heroSectionNav">
              <nav className="secondNav">
                <div className="secondNavLinks">  
                   <ul className="ulSecond" >
                      <li className="navItemSecond"><Link className="linkSecondNav"to="/work">Shoes</Link></li>
                      <li className="navItemSecond"><Link className="linkSecondNav"to="/social">Casual</Link></li>
                      <li className="navItemSecond"><Link className="linkSecondNav"to="/signin">Street-Wear</Link></li>
                      <li className="navItemSecond"><Link className="linkSecondNav" to="/signin">Suits</Link></li>
                  </ul>
                </div>
              </nav>
            </div>
        */}

            <div className="hello">
            hello   hello   hello   hello   hello   hello   hello   hello   hello   hello   hello   hello   hello   hello   hello   hello   hello   hello   hello   hello   hello   hello   hello   hello   hello   hello   hello   hello   hello   hello   hello   hello   hello   hello   hello   hello   hello   hello   hello   hello   hello   hello   hello   hello   hello   hello   hello   hello   hello   hello   hello   hello   hello   hello   hello</div>
            <div className="container-justify-center">
                <div className="row">
                    <div className="card">
                        <Card/>
                    </div>
                    <div className="card">
                        <Card/>
                    </div>
                    <div className="card"> 
                        <Card/>
                    </div>
                    <div className="card">
                        <Card/>
                    </div>
                    
                </div>
            

                <div className="row">
                    <div className="card">
                        <Card/>
                    </div>
                    <div className="card">
                        <Card/>
                    </div>
                    <div className="card"> 
                        <Card/>
                    </div>
                    <div className="card">
                        <Card/>
                    </div>
                      
                </div>


                <div className="row">
                    <div className="card">
                        <Card/>
                    </div>
                    <div className="card">
                        <Card/>
                    </div>
                    <div className="card"> 
                        <Card/>
                    </div>
                    <div className="card">
                        <Card/>
                    </div>
                     
                </div>

            </div>
        </div>
        )
        
    }
}
export default Cards