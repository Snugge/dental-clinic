import React from 'react';
import { Link } from 'react-router-dom';

export const ShowCase = () => {
    return (
        <div className="bgCarousel">
            <div className="container">
                <div className="row g-0">
                    <div
                        id="carouselBasicExample"
                        className="carousel slide carousel-fade  col-lg-6"
                        data-mdb-ride="carousel"
                    >
                        {/* <!-- Indicators --> */}
                        <ol className="carousel-indicators ">
                            <li data-mdb-target="#carouselBasicExample" data-mdb-slide-to="0" className="active"></li>
                            <li data-mdb-target="#carouselBasicExample" data-mdb-slide-to="1"></li>
                            <li data-mdb-target="#carouselBasicExample" data-mdb-slide-to="2"></li>
                        </ol>

                        {/* <!-- Inner --> */}
                        <div className="carousel-inner carouselHome img-fluid " >
                            {/* <!-- Single item --> */}
                            <div className="carousel-item active " >
                                <img
                                    src="https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                                    className="d-block w-100"
                                    alt="..."
                                />
                            </div>

                            {/* <!-- Single item --> */}
                            <div className="carousel-item">
                                <img
                                    src="https://images.unsplash.com/photo-1588069362198-8b64638b9a6e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
                                    className="d-block w-100"
                                    alt="..."
                                />
                            </div>

                            {/* <!-- Single item --> */}
                            <div className="carousel-item">
                                <img
                                    src="https://images.unsplash.com/photo-1591283261401-c76eba2d369a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80"
                                    className="d-block w-100"
                                    alt="..."
                                />
                            </div>
                        </div>
                        {/* <!-- Inner -->

            <!-- Controls --> */}
                        <a
                            className="carousel-control-prev"
                            href="#carouselBasicExample"
                            role="button"
                            data-mdb-slide="prev"
                        >
                            <span className="carousel-control-prev-icon"></span>
                            <span className="visually-hidden">Previous</span>
                        </a>
                        <a
                            className="carousel-control-next"
                            href="#carouselBasicExample"
                            role="button"
                            data-mdb-slide="next"
                        >
                            <span className="carousel-control-next-icon"></span>
                            <span className="visually-hidden">Next</span>
                        </a>

                    </div>
                    <div className="col-lg-6">
                        <div className="m-5">
                            <h2 className="mb-4">Modern technologies <br />ensure safety</h2>
                            <p className="mb-5">our clinic is equipped with the highest quality medical and dental equipment, which allows for quick and effective treatment of the patient</p>
                            
                            <Link className="btn btnColor text-white px-5 py-3" exact to="/about">About our clinic</Link>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
