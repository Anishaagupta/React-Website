import React from 'react';
import CardItem from './CardItem';
import './index.css';

const cards = () => {
    return (
        <div className="cards">
            <h1>Amazing Places TO Visit In 2020</h1>
             <div className="cards__container">
                 <div className="cards__wrapper">
                   <ul className="cards__items">
                       <CardItem
                           src='/images/img-9.jpg'
                           text='Explore something there, and enjoy your life.Explore something there, and enjoy your life.'
                           label='Adventure Trip'
                           path='/services'
                       />
                       <CardItem
                           src='/images/img-2.jpg'
                           text='Explore something there, and enjoy your life.Explore something there, and enjoy your life.'
                           label='Adventure Trip'
                           path='/services'
                       />
                       <CardItem
                           src='/images/img-3.jpg'
                           text='Explore something there, and enjoy your life.Explore something there, and enjoy your life.'
                           label='Adventure Trip'
                           path='/products'
                       />
                       
                   </ul>
                   <ul className="cards__items">
                   <CardItem
                           src='https://c4.wallpaperflare.com/wallpaper/631/683/713/nature-bridge-sky-city-wallpaper-preview.jpg'
                           text='Explore something there, and enjoy your life.Explore something there, and enjoy your life.'
                           label='Adventure Trip'
                           path='/services'
                       />
                       <CardItem
                           src='/images/img-5.jpg'
                           text='Explore something there, and enjoy your life.Explore something there, and enjoy your life.'
                           label='Adventure Trip'
                           path='/products'
                       />
                                          
                   </ul>
                   <ul className="cards__items">
                   <CardItem
                           src='/images/img-4.jpg'
                           text='Explore something there, and enjoy your life.Explore something there, and enjoy your life.'
                           label='Adventure Trip'
                           path='/services'
                       />
                       <CardItem
                           src='https://images.all-free-download.com/images/graphicthumb/travel_the_journey_of_picture_167829.jpg'
                           text='Explore something there, and enjoy your life.Explore something there, and enjoy your life.'
                           label='Adventure Trip'
                           path='/products'
                       />
                          <CardItem
                           src='/images/img-6.jpg'
                           text='Explore something there, and enjoy your life.Explore something there, and enjoy your life.'
                           label='Adventure Trip'
                           path='/products'
                       />                
                   </ul>
                 </div>
             </div>
        </div>
    )
}

export default cards
