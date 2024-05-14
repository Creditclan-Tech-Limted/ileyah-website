import Button from "@/components/global/Button";
import {
  IconChevronRight,
  IconHomeCheck,
  IconHomeSearch,
} from "@tabler/icons-react";
import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import LookingForAPlace from "../modals/LookingForAPlace";

const Features = () => {
  const el = useRef(null);
  const [openLookingForAPlace, setopenLookingForAPlace] = useState(false);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Life", "Rent"],
      typeSpeed: 100,
      backSpeed: 10,
      backDelay: 2000,
      loop: true,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <>
      <div className="mt-[150px] mb-40 container mx-auto">
        <h5 className="uppercase md:text-sm text-sm mb-3.5 text-primary text-left tracking-wider">
          -- WHY ILEYAH --
        </h5>
        <h2 className="text-5xl md:text-6xl font-bold max-w-4xl">
          With Ileyah, <span className="text-blue-600" ref={el} /> has never
          been easier.
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-2  gap-10 mt-20">
          <div className="p-10 rounded-xl shadow-md bg-gray-900">
            <div className="flex mb-8">
              <div className="w-20 h-20 rounded-full flex justify-center items-center bg-slate-200 ">
                <IconHomeSearch size="38" />
              </div>
            </div>
            <h3 className=" text-lg font-bold text-white">
              Looking for a Place.
            </h3>
            <p className="mt-2 text-[.95rem] text-gray-400">
              Ileyah offers monthly, quarterly or annual payment terms to fit
              your unique budget.
            </p>
            <Button
              className="mt-5"
              color="white"
              rightIcon={<IconChevronRight size={16} />}
              onClick={() => setopenLookingForAPlace(true)}
            >
              Find a place
            </Button>
          </div>
          <div className="p-10 rounded-xl shadow-md bg-gray-900">
            <div className="flex mb-8">
              <div className="w-20 h-20 rounded-full flex justify-center items-center bg-slate-200 ">
                <IconHomeCheck size="38" />
              </div>
            </div>
            <h3 className=" text-lg font-bold text-white">Offering a place</h3>
            <p className="mt-2 text-[.95rem] text-gray-400">
              Unlock a World of Convenience - Elevate Your Lifestyle with Our
              Subscription Services
            </p>
            <Button
              className="mt-5"
              color="white"
              rightIcon={<IconChevronRight size={16} />}
            >
              List my place
            </Button>
          </div>
        </div>
      </div>

      <LookingForAPlace
        isOpen={openLookingForAPlace}
        onClose={() => setopenLookingForAPlace(false)}
      />
    </>
  );
};

export default Features;
