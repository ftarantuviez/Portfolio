import React from 'react'
import CardProject from './Card'
import './Styles.css'
import iphone from '../../images/iphone.png'
import mac from '../../images/mac.png'

function ListOfCards() {
    return (
        <div className="container card-container">
            <h4>Complex projects</h4>
            <div className="row listOfCards-row">
                {
                    [iphone, mac, iphone, mac, iphone, mac].map(card => (
                        <div key={Math.random() * 100} className="col-4">
                            <CardProject 
                                imag={card}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ListOfCards
