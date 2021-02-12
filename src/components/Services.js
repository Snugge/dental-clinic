import React from 'react'

export const Services = () => {
    return (
        <div className="my-5 " >
            <div className="mb-5">
                <h3 className="text-center" >Our Services</h3>
                <hr className="underLine w-25 mx-auto" />
            </div>
            <div className="card-group container">
                <div className="card m-2 col-md-3 shadow-5-strong rounded-3 text-center">
                    <div className="card-body my-4">
                        <img src={ process.env.PUBLIC_URL + "/image/icons/icon-1.svg" } alt="Icon" className="service-icon mb-4" />
                        <h5 className="card-title">Tooth inspection</h5>
                        <p className="card-text">
                            Comprehensive review of the mouth and detection of broken teeth and other threats.
                        </p>
                    </div>
                </div>

                <div className="card m-2 col-md-3 shadow-5-strong rounded-3 text-center">
                    <div className="card-body my-4">
                        <img src={ process.env.PUBLIC_URL + "/image/icons/icon-2.svg" } alt="Icon" className="service-icon mb-4" />
                        <h5 className="card-title">Tooth removal</h5>
                        <p className="card-text">
                            Any broken tooth is a threat to the body, so this danger should be removed from the mouth.
                        </p>
                    </div>
                </div>

                <div className="card m-2 col-md-3 shadow-5-strong rounded-3 text-center">
                    <div className="card-body my-4">
                        <img src={ process.env.PUBLIC_URL + "/image/icons/icon-3.svg" } alt="Icon" className="service-icon mb-4" />
                        <h5 className="card-title">Removal of tartar</h5>
                        <p className="card-text">
                            Tartar is the enemy of every human being, because through his presence we have unpleasant breath.
                        </p>
                    </div>
                </div>

            </div>
            <div className="card-group container">
                <div className="card m-2 col-md-3 shadow-5-strong rounded-3 text-center">
                    <div className="card-body my-4">
                        <img src={ process.env.PUBLIC_URL + "/image/icons/icon-4.svg" } alt="Icon" className="service-icon mb-4" />
                        <h5 className="card-title">Polishing and cleaning</h5>
                        <p className="card-text">
                            A simple and safe polishing treatment improves the health of teeth that will get a better look.
                    </p>
                    </div>
                </div>

                <div className="card m-2 col-md-3 shadow-5-strong rounded-3 text-center">
                    <div className="card-body my-4">
                        <img src={ process.env.PUBLIC_URL + "/image/icons/icon-5.svg" } alt="Icon" className="service-icon mb-4" />
                        <h5 className="card-title">Dental implants</h5>
                        <p className="card-text">
                            The best solution when you can not save a healthy tooth and you need to apply artificial solutions.
                    </p>
                    </div>
                </div>

                <div className="card m-2 col-md-3 shadow-5-strong rounded-3 text-center">
                    <div className="card-body my-4">
                        <img src={ process.env.PUBLIC_URL + "/image/icons/icon-6.svg" } alt="Icon" className="service-icon mb-4" />
                        <h5 className="card-title">Effective protection</h5>
                        <p className="card-text">
                            The cheapest tooth protection is their cleaning and a regular visit to the dentist.
                    </p>
                    </div>
                </div>

            </div>
        </div>
    )
}