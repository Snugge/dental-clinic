import React,{useState} from 'react';
import { HappyPatients } from './HappyPatients';
import { OpenClinic } from './OpenClinic';
import { PerformedTreatments } from './PerformedTreatments';
import { Link } from 'react-router-dom';

export const AboutUs = () => {
    
    const [readMore,setReadMore]=useState(false);

    const extraContent = 
        <div>
            <p>
                It was created for demanding patients who expect the highest quality of services combined with comfort and a pleasant atmosphere.
            </p>
            <p>    
                The highest-class dental equipment possessed by the Dential Clinic Center enables complicated procedures to be carried out. In our dental practice we combine passion, technology and quality. We strive to fulfill your dreams of a wonderful smile.
            </p>
        </div>
    const linkName=readMore?'Read Less << ':'Read More >> '

    return (
        <div className="aboutUsBg">
            <div className="container">
                <div className="row g-0">
                    <div className="col-lg-6 ">
                        <div className="card-body m-4">
                            <h4 className="card-title">Dential <Link className="link linkColor" to="/about"> Clinic </Link> is a Modern
                        <br />
                        medical and dental Clinic
                        </h4>

                            <hr className="underLine" />
                            <p className="card-text">
                                The Dential Clinic Center located in the city of Stockholm is one of the most modern dentistry centers in Sweden.
                                <a className="read-more-link" onClick={()=>{setReadMore(!readMore)}}><h6>{linkName}</h6></a>
                                {readMore && extraContent}
                            </p>                            
                            <div className="row numbers">
                                <div className="col-sm m-1">
                                    <HappyPatients />
                                </div>
                                <div className="col-sm m-1">
                                    <PerformedTreatments />
                                </div>
                                <div className="col-sm m-1">
                                    <OpenClinic />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 ">
                        <img
                            src="https://images.unsplash.com/photo-1612708771321-1cfe5ce5e106?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                            alt="..."
                            className="img-fluid"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}