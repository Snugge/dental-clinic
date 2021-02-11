import React from 'react'

export const Appointment = () => {
    return (
        <footer className="bgfot text-center text-xl-start">
            <div className="container p-4 pb-0">
                <form action="">
                    <div className="row">
                        <div className="col-auto mb-4 mb-md-0  text-white">
                        <p className="pt-2"><strong>Do not wait and make an appointment today!</strong></p>
                        </div>
                        <div className="col-md-5 col-12 mb-4 mb-md-0">
                        </div>
                        <div className="col-auto mb-4 mb-md-0">
                        <button type="submit" className="btn btn-light text-info mb-4 px-5 py-3">Book an appointment</button>
                        </div>
                    </div>
                </form>
            </div>
        </footer>
    )
}