import React from 'react'
import ImageLoadingAnimation from './LoadingAnimation'

const imgSrc = `https://images.unsplash.com/photo-1530412254853-ee708387a8ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80`

function Success() {
  return (
    <>
      <div className="pt-70">
      <img style={ { width: "350px", marginLeft: "-5rem", marginBottom: "-3rem" } } src="/assets/images/Young and happy-bro.svg" alt=""/>
        <div className="pt-2">
          <p className="mb-1 redirect-text text-deep-blue font-weight-bold font-22">
            Thank you very much, <br/> we will contact you shortly.
          </p>
          <p className="font-17 text-cc-dark font-17">You can also reach us on +234 905 555 2255</p>
          <a href="tel:+2349055552255" className="btn btn-blue-full font-17">
            <span className="mr-3"><i className="fa-solid fa-phone"></i></span>
            Call +234 905 555 2255
          </a>
          <ImageLoadingAnimation src={imgSrc} />
        </div>
      </div>
    </>
  )
}

export default Success
