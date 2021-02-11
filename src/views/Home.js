import React from 'react'
import { ShowCase } from '../components/ShowCase';
import { AboutUs } from '../components/About/AboutUs';
import { Services } from '../components/Services';

export const Home = () => {
    return (
        <div className="">   
            <ShowCase/>
            <AboutUs/>
            <Services/>
        </div>
    )
}
