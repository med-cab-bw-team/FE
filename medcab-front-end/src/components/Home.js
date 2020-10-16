import React from 'react';
import {CarouselImg} from "./carousel"
import { render } from '@testing-library/react';
import HeaderAuth from './HeaderAuth'

export const Home = () => {


    return (
        <div>
            <HeaderAuth/>
            <CarouselImg /> 
        </div>
    )
}