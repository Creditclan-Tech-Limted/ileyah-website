import React from 'react'

function NoRequest({ onBack, onDone }) {
    return (
        <>
            <div>
                <button style={{ marginBottom: "0px" }} className="back" type="button" onClick={onBack}>
                    <span aria-hidden="true"><i style={{ fontSize: "1rem !important" }} className="fa-solid fa-angle-left"></i></span>
                </button>
            </div>
            <div className="pt-70 text-center">
                <img style={{ width: "400px" }} src="/assets/images/Living room-bro.svg" alt="" />
                <div className="text-center">
                    <p className="mb-1 redirect-text text-deep-blue font-weight-bold font-22 mt-3 mb-3">
                        Oops, No rent <br /> request found
                    </p>
                </div>
                <button onClick={ onDone } className="px-5 btn btn-blue-full">
                    Rent now
                </button>
            </div>
        </>
    )
}

export default NoRequest