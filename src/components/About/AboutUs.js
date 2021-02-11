import React from 'react'
import { HappyPatients } from './HappyPatients'
import { OpenClinic } from './OpenClinic'
import { PerformedTreatments } from './PerformedTreatments'

export const AboutUs = () => {
    return (
        <div className="card">
            <div className="row g-0">
            
            <div className="col-md-6 ">
                <div className="card-body m-4">
                    <h4 className="card-title">Dential <a href="!#" className="linkColor" >Clinic</a> is a Modern</h4>
                    <h4 className="card-title">medical and dental Clinic</h4>
                    <hr className="lineColor" />
                    <p className="card-text">
                        The DentialClinic Center located in the city of Stockholm is one of the most modern dentistry centers in Sweden. It was created for demanding patients who expect the highest quality of services combined with comfort and a pleasant atmosphere.
                    </p>
                    <p className="card-text">
                        The highest-class dental equipment possessed by the DentialClinic Center enables complicated procedures to be carried out. In our dental practice we combine passion, technology and quality. We strive to fulfill your dreams of a wonderful smile.
                    </p>
                    <div className="row container ">
                        <div className="col-sm-3 m-1">
                            <HappyPatients/> 
                        </div>
                        <div className="col-sm-3 m-1">
                            <PerformedTreatments/> 
                        </div>
                        <div className="col-sm-3 m-1">
                            <OpenClinic/> 
                        </div>  
                    </div>
                </div>
            </div>
            <div className="col-md-6 ">
                <img
                src="https://images.unsplash.com/photo-1612708771321-1cfe5ce5e106?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                alt="..."
                className="img-fluid"
                />
            </div>
            </div>
        </div>
    )
}