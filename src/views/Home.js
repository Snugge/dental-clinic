import React from 'react'
import { ShowCase } from '../components/ShowCase';
import { AboutUs } from '../components/About/AboutUs';
import ServicesComp from '../components/ServicesComp';

export const Home = () => {
    return (
        <div>   
            <ShowCase/>
            <AboutUs/>
            <ServicesComp />
        </div>
    )
}
