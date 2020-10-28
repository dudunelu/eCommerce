import React from 'react'
import Cards from './Cards'
import {Link} from 'react-router-dom'


import manImg from '../images/man.jpg'
import womanImg from '../images/woman.jpg'

export default function work() {
    return (
        <div className="landingPage">
           <Link className="LinkMenClothes" to='/cardMen'>Men Clothes</Link>
           
           <img className="manImg" src={manImg} alt="img1"/>
           <Link className="LinkWomenClothes" to='/cardWomen'>Women Clothes</Link>
           <img className="womanImg" src={womanImg} alt="img1"/>
 
        </div>
    )
}
