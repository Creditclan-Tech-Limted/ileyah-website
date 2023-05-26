import { useState } from "react";
import CancelFoundHouseRentRequest from "./CancelFoundHouseRentRequest.jsx";
import PictureUpload from "./PictureUpload.jsx";
import StepFive from "./StepFive.jsx";
import StepFour from "./StepFour.jsx";
import StepOne from "./StepOne.jsx";
import StepThree from "./StepThree.jsx";
import StepTwo from "./StepTwo.jsx";
import Success from "./Success.jsx";
import Summary from "./Summary.jsx";
import UserDetails from "./UserDetails.jsx";
import MiniSummary from "../MiniSummary.jsx";

function FoundHouse({ onBack, onDone, onPending }) {
  const [view, setView] = useState("step-one");

  return (
    <>
      {view === "step-one" && (
        <StepOne onBack={onBack} onNext={() => setView("request-details")} />
      )}
      {view === "request-details" && (
        <UserDetails
          onBack={() => setView("step-one")}
          onNext={(v) => setView(v)}
        />
      )}
      {view === "mini-summary" && (
        <MiniSummary
          onBack={() => setView("request-details")}
          onNext={() => setView("cancel-request")}
          onPending={onPending}
        />
      )}
      {view === "step-two" && (
        <StepTwo
          onBack={() => setView("request-details")}
          onNext={() => setView("step-three")}
        />
      )}
      {view === "step-three" && (
        <StepThree
          onBack={() => setView("step-two")}
          onNext={() => setView("step-four")}
        />
      )}
      {view === "step-four" && (
        <StepFour
          onBack={() => setView("step-three")}
          onNext={() => setView("picture-upload")}
        />
      )}
      {view === "picture-upload" && (
        <PictureUpload
          onBack={() => setView("step-four")}
          onNext={() => setView("step-five")}
        />
      )}
      {view === "step-five" && (
        <StepFive
          onBack={() => setView("picture-upload")}
          onNext={() => setView("summary")}
        />
      )}
      {view === "summary" && (
        <Summary
          onBack={() => setView("step-five")}
          onNext={() => setView("success")}
        />
      )}
      {view === "success" && <Success onDone={onDone} />}
      {view === "cancel-request" && (
        <CancelFoundHouseRentRequest
          onBack={() => setView("mini-summary")}
          onNext={() => setView("step-two")}
        />
      )}
    </>
  );
}

export default FoundHouse;
