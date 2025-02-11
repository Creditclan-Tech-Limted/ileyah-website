import { cn } from "@/lib/utils";
import classNames from "classnames";
import React from "react";

const Steppers = ({ views, className, handleSetViews }) => {
  return (
    <ol
      className={cn(
        "flex items-center w-full p-3 space-x-2 text-sm font-medium text-center text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm sm:text-base  sm:p-4 sm:space-x-4 rtl:space-x-reverse",
        className
      )}
    >
      <li
        className={classNames(
          "flex items-center text-gray-600",
          views === "personal-information" && "!text-blue-600"
        )}
        onClick={() => handleSetViews("personal-information")}
      >
        <span
          className={classNames(
            "flex items-center justify-center w-5 h-5 me-2 text-xs border rounded-full shrink-0",
            views === "personal-information" &&
              "border !bg-blue-600 !text-white"
          )}
        >
          1
        </span>
        Personal
        {/* <span className="hidden sm:inline-flex sm:ms-2">Info</span> */}
        <svg
          className="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 12 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m7 9 4-4-4-4M1 9l4-4-4-4"
          />
        </svg>
      </li>
      <li
        className={classNames(
          "flex items-center text-gray-600",
          views === "housing-preferences" && "!text-blue-600"
        )}
        onClick={() => handleSetViews("housing-preferences")}
      >
        <span
          className={classNames(
            "flex items-center justify-center w-5 h-5 me-2 text-xs border rounded-full shrink-0",
            views === "housing-preferences" && "border !bg-blue-600 !text-white"
          )}
        >
          2
        </span>
        Housing
        {/* Housing <span className="hidden sm:inline-flex sm:ms-2">Info</span> */}
        <svg
          className="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 12 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m7 9 4-4-4-4M1 9l4-4-4-4"
          />
        </svg>
      </li>
      <li
        className={classNames(
          "flex items-center text-gray-600",
          views === "flatmate-preferences" && "!text-blue-600"
        )}
        onClick={() => handleSetViews("flatmate-preferences")}
      >
        <span
          className={classNames(
            "flex items-center justify-center w-5 h-5 me-2 text-xs border rounded-full shrink-0",
            views === "flatmate-preferences" &&
              "border !bg-blue-600 !text-white"
          )}
        >
          3
        </span>
        Flatmate
        {/* Housing <span className="hidden sm:inline-flex sm:ms-2">Info</span> */}
        <svg
          className="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 12 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m7 9 4-4-4-4M1 9l4-4-4-4"
          />
        </svg>
      </li>

      <li
        className={classNames(
          "flex items-center text-gray-600",
          views === "summary" && "!text-blue-600"
        )}
        onClick={() => handleSetViews("summary")}
      >
        <span
          className={classNames(
            "flex items-center justify-center w-5 h-5 me-2 text-xs border rounded-full shrink-0",
            views === "summary" && "border !bg-blue-600 !text-white"
          )}
        >
          4
        </span>
        Summary
      </li>
    </ol>
  );
};

export default Steppers;
