import { IconHomeSearch } from "@tabler/icons-react";
import React from "react";

const Benefit = () => {
  return (
    <>
      <div className="">
        <div className="max-w-7xl mx-auto py-28">
          <div className="font-bold text-5xl md:text-6xl max-w-3xl text-center mx-auto">
            Your Employee can leave like a King 👑
          </div>
          <div className="grid md:grid-cols-2 gap-10 mt-20 px-4 md:px-0">
            <div className="bg-slate-200 rounded-xl p-10 space-y-4">
              <img
                src="/assets/images/companies/1.svg"
                alt=""
                className="w-16"
              />
              <h4 className="font-bold text-2xl">
                Hassle-free application process.
              </h4>
              <div>
                We've streamlined our application process to ensure a seamless
                experience for your employees.{" "}
              </div>
            </div>
            <div className="bg-slate-200 shadow rounded-xl p-10 space-y-4">
              <img
                src="/assets/images/companies/2.svg"
                alt=""
                className="w-16"
              />
              <h4 className="font-bold text-2xl">
                Wide range of rental options.
              </h4>
              <div>
                We partner with various landlords and property managers to offer
                a wide selection of rental properties across different
                locations.{" "}
              </div>
            </div>
            <div className="bg-slate-200 rounded-xl p-10 space-y-4">
              <img
                src="/assets/images/companies/3.svg"
                alt=""
                className="w-16"
              />
              <h4 className="font-bold text-2xl">
                Dedicated Customer support.
              </h4>
              <div>
                Our team is committed to providing excellent customer service
                and support throughout the rental loan process.{" "}
              </div>
            </div>
            <div className="bg-slate-200 shadow rounded-xl p-10 space-y-4">
              <IconHomeSearch size={55}/>
              <h4 className="font-bold text-2xl">Wide range of Property Listings.</h4>
              <div>
                Browse our well curated listings of over 100k+
                properties across the africa .{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Benefit;
