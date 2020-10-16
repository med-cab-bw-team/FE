import Carousel from 'styled-components-carousel';
import React from 'react';



export const CarouselImg = () => (
    <div className="carousel">
     <h3> Gotta smoke them all </h3>
    <Carousel
        center
        swipeable
        infinite
        showArrows
        showIndicator
        slidesToShow={3}
        scaleOnFocus={1}
        centerPadding={1}
    >
       
        <img src="https://images.unsplash.com/photo-1536819114556-1e10f967fb61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"/>
        <img src="https://images.unsplash.com/photo-1503262028195-93c528f03218?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80"/>
        <img src="https://images.unsplash.com/photo-1599227681056-f384c88d3593?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"/>
        <img src="https://images.unsplash.com/photo-1599227705778-6427976abdc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"/>
     
    </Carousel>
    </div>
);
