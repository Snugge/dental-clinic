import React from 'react'
import { ShowCase } from '../components/ShowCase';
import { AboutUs } from '../components/AboutUs';
import { Services } from '../components/Services';

export const Home = () => {
    return (
        <div>
            <ShowCase/>
            <AboutUs/>
            <Services/>
        </div>
    )
}