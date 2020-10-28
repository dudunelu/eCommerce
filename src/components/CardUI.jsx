import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import img1 from '../images/img1.jpg'
import './Cards.css'

const Card = props =>{
    return(
    <div className="card text-center">
        <div className="card-img">
           
            
            <Link className="card-img" to="/productPage1">
                <img className="card-img" src={img1} alt="imag 1"/>
            </Link>

        </div>
        <div className="card-body ">
            <h4 className="card-title">Card <title></title></h4>
            <p className="card-text ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, doloribus!
            </p>
            
        </div>
    </div>

    )


}

export default Card