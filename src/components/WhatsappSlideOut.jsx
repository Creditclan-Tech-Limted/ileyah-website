"use client";
import { useEffect, useState } from "react";
import CancelRequest from "./sign-up/CancelRequest";
import NoRequest from "./sign-up/NoRequest";
import RequestDetails from "./sign-up/RequestDetails";
import UserDetails from "./sign-up/UserDetails";
import FindHouse from "./sign-up/find-me-house/FindHouse";
import FoundHouse from "./sign-up/found-house/FoundHouse";
import RenewRent from "./sign-up/renew-rent/RenewRent";
import MenuView from "./sign-up/MenuView";
import classNames from "classnames";

function WhatsappSlideOut({ isActive, handleToggle }) {
  const [view, setView] = useState("menu-view");

  useEffect(() => {
    if (isActive) document.scrollingElement.style.overflow = "hidden";
    else document.scrollingElement.style.overflowY = "auto";
  }, [isActive]);

  return (
    <>
      <div
        onClick={handleToggle}
        className={classNames("main-overlay", { visible: isActive })}
      ></div>
      <div className={`dotted-bg sidebar ${isActive ? "active" : ""}`}>
        {view === "menu-view" && (
          <MenuView onNext={(v) => setView(v)} handleToggle={handleToggle} />
        )}
        {view === "user-details" && (
          <UserDetails
            onBack={() => setView("menu-view")}
            onNext={() => setView("existing")}
          />
        )}
        {view === "existing" && (
          <RequestDetails
            onBack={() => setView("user-details")}
            onNext={(v) => setView(v)}
          />
        )}
        {view === "no-request" && (
          <NoRequest
            onBack={() => setView("user-details")}
            onDone={() => setView("menu-view")}
          />
        )}
        {view === "cancel-request" && (
          <CancelRequest
            onBack={() => setView("existing")}
            onDone={() => setView("menu-view")}
          />
        )}
        {view === "renew-rent" && (
          <RenewRent
            onBack={() => setView("menu-view")}
            onDone={() => setView("existing")}
            onPending={(v) => setView(v)}
          />
        )}
        {view === "found-house" && (
          <FoundHouse
            onBack={() => setView("menu-view")}
            onDone={() => setView("existing")}
            onPending={(v) => setView(v)}
          />
        )}
        {view === "find-house" && (
          <FindHouse
            onBack={() => setView("menu-view")}
            onPending={(v) => setView(v)}
          />
        )}
      </div>
    </>
  );
}

export default WhatsappSlideOut;
