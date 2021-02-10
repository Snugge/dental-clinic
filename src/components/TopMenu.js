import React from 'react'

export const TopMenu = () => {
    return (
        <div>
            <nav className="bgtn navbar navbar-light " >
                <div className="container" >
                    <div className="hours">
                        <i className="far fa-clock text-primary"></i>
                        <span> Working Hour: Monday - Friday: 9:00 - 18:00 </span>
                    </div>
                    <div  >
                        <a href={"https://www.facebook.com"} target="_blank" className="m-2"  style={{color: "#3b5998"}} ><i class="fab fa-facebook-f"></i></a>
                        <a href={"https://www.twitter.com/"} target="_blank" className="m-2"  style={{color: "#55acee" }}><i className="fab fa-twitter"></i></a>
                        <a href={"https://www.google.com"} target="_blank" className="m-2"  style={{color: "#dd4b39" }} ><i className="fab fa-google-plus-g"></i></a>
                        <a href={"https://www.instagram.com"} target="_blank" className="m-2"  style={{color: "#ac2bac"}} ><i className="fab fa-instagram"></i></a>   
                    </div>
                </div>
            </nav>
        </div>
    )
}