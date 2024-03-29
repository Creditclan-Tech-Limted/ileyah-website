import { capitalizeFirstLetter, formatCurrency } from "@/lib/utils";
import useSignupStore from "@/store/signup";
import React from "react";

function MiniSummary({ onBack, onNext, onPending}) {
  const { data, updateData } = useSignupStore((state) => state);
  return (
    <>
      <div>
        <button
          style={{ marginBottom: "0px" }}
          className="back"
          type="button"
          onClick={onBack}
          //   disabled={isRentRequestLoading}
        >
          <span aria-hidden="true">
            <i
              style={{ fontSize: "1rem !important" }}
              className="fa-solid fa-angle-left"
            ></i>
          </span>
        </button>
      </div>
      <div className="pt-5 pb-3">
        <h2 className="text-deep-blue font-bold text-4xl mt-20">
          Rent request already exists for this user.
        </h2>
      </div>
      <div className="font-17">
        <ul className="list-group space-y-6">
          <li className="list-group-item flex justify-between items-center">
            Rent :
            <span className=" text-right">
              {formatCurrency(data?.request.amount ?? 0)}
            </span>
          </li>
          <li className="list-group-item flex justify-between items-center">
            Type of house:
            <span className=" text-right">
              {capitalizeFirstLetter(data?.request.house_type)}
            </span>
          </li>
        </ul>
      </div>
      <div className="font-17 mt-6">
        <button onClick={() => onPending("existing")} className="btn btn-block btn-blue-full">View full request</button>
        <button
          onClick={() => onNext()}
          type="submit"
          className="btn btn-block btn-outline-gray btn-xs mt-3 ml-5"
        >
          Cancel request
        </button>
      </div>
    </>
  );
}

export default MiniSummary;
