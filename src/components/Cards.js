import React from 'react';
import CardItem from './CardItem';
import './Cards.css';



function Cards() {
  return (
    <div className='cards'>
        <h1>Visit us</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem
                    src= 'images/menu.jpeg'
                    text= 'Explore our second restaurant in La Alcaidesa'
                    label= 'Page 1'
                    path='/' 
                    />
                    <CardItem
                    src= 'images/menu2.jpeg'
                    text= 'Galerías Paniagua 1, local 1-2, Sotogrande 113 12, Cádiz SPAIN'
                    label= 'Page 2'
                    path='/' 
                    />
                </ul>

                <ul className='cards__items'>
                    
                    <CardItem
                    src= 'images/bengal.jpeg'
                    text= 'Explore our second restaurant in La Alcaidesa'
                    label= 'Taste of Bengal'
                    path='/bengal' 
                    />
    
                    
                </ul>

            </div>
        </div>
    </div>
  );
}

export default Cards;