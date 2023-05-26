import React, { useState } from 'react'
import CancelFindHouseRentRequest from './CancelFindHouseRentRequest.jsx';
import StepOne from './StepOne.jsx'
import StepThree from './StepThree.jsx';
import StepTwo from './StepTwo.jsx';
import Success from './Success.jsx';
import UserDetails from './UserDetails.jsx';
import MiniSummary from '../MiniSummary.jsx';

function FindHouse({ onBack, onPending }) {
  const [view, setView] = useState("request-details");

  return (
    <>
      {
        view === "request-details" && (
          <UserDetails
            onBack={onBack} onNext={(v) => setView(v)}
          />
        )
      }
      {
        view === "mini-summary" && (
          <MiniSummary onBack={()=> setView("request-details")} onNext={() => setView("cancel-request")} onPending={onPending} />
        )
      }
      {
        view === "step-one" && (
          <StepOne
            onBack={() => setView("request-details")}
            onNext={() => setView("step-two")} />
        )
      }
      {
        view === "step-two" && (
          <StepTwo onBack={() => setView("step-one")} onNext={() => setView("step-three")} />
        )
      }
      {
        view === "step-three" && (
          <StepThree onBack={() => setView("step-two")} onNext={() => setView("success")} />
        )
      }
      {
        view === "success" && (
          <Success />
        )
      }
      {
        view === "cancel-request" && (
          <CancelFindHouseRentRequest onBack={ () => setView("mini-summary") } onNext={() => setView("step-one")}  />
        )
      }
    </>
  )
}

export default FindHouse
