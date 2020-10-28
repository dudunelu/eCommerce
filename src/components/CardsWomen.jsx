import React,{Component} from 'react'
import Card from './CardUI'
import './Cards.css'

class CardsWomen extends Component{
    render(){
        
        
        return(
            
            <div className="container justify center">
                Browse
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
        
            
        )
        
    }
}
export default CardsWomen