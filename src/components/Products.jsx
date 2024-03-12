import {
  IconHeadset,
  IconHomeSearch,
  IconListSearch,
} from "@tabler/icons-react";
import Button from "./global/Button";
import useGlobalStore from "@/store/global";
import Link from "next/link";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

const Products = ({ call }) => {
  const toggleIsSignupOpen = useGlobalStore(
    (state) => state.toggleIsSignupOpen
  );
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Monthly Subscription", "Weekly Subscription"],
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
      <div className="mt-[600px] md:mt-0 py-20 md:py-32 w-full bg-gray-900 text-white">
        <div className="container">
          <h2 className="text-5xl md:text-6xl font-bold max-w-4xl">
            Experience peace. Pay your rent in{" "}
            <span className="text-primary-500" ref={el} /> forever.
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="px-12 py-16 bg-gray-800 rounded-3xl relative">
              <div className="flex mb-8">
                <div className="w-16 h-16 rounded-full flex justify-center items-center bg-blue-500 text-white">
                  <IconListSearch size="32" />
                </div>
              </div>
              <h2 className="text-xl font-medium">Browse Listings</h2>
              <p className="mt-4 text-[.95rem] text-white">
                Let's connect you with 10,000+ agents and landlords who fastrack
                your monthly tenancy.
              </p>
              <Link href="/listings">
                <Button className="mt-8" variant="outlined" color="white">
                  Get started
                </Button>
              </Link>
            </div>
            <div className="px-12 py-16 bg-gray-800 rounded-3xl relative">
              <div className="flex mb-8">
                <div className="w-16 h-16 rounded-full flex justify-center items-center bg-red-500 text-white">
                  <IconHomeSearch size="32" />
                </div>
              </div>
              <h2 className="text-xl font-medium">Find me a House</h2>
              <p className="mt-4 text-[.95rem] text-white">
                Can't find your exact requirements in our listings? Don't worry,
                post a request and we'll try to find it for you{" "}
              </p>
              <Button
                className="mt-8"
                onClick={call}
                variant="outlined"
                color="white"
              >
                Get started
              </Button>
            </div>
            {/* <div className="px-12 py-16 bg-gray-800 rounded-3xl relative">
              <div className="flex mb-8">
                <div className="w-16 h-16 rounded-full flex justify-center items-center bg-yellow-500 text-white">
                  <IconHomeSearch size="32" />
                </div>
              </div>
              <h2 className="text-xl font-medium">Get a Shop</h2>
              <p className="mt-4 text-[.95rem] text-white">
                Secure your ideal shop location with Ileyah. ILEYAH is here to help you get a shop of your choice.
              </p>
              <Button
                className="mt-8"
                onClick={call}
                variant="outlined"
                color="white"
              >
                Get started
              </Button>
            </div> */}
            <div className="px-12 py-16 bg-gray-800 rounded-3xl relative">
              <div className="flex mb-8">
                <div className="w-16 h-16 rounded-full flex justify-center items-center bg-green-500 text-white">
                  <IconHeadset size="32" />
                </div>
              </div>
              <h2 className="text-xl font-medium">Talk to an Advisor</h2>
              <p className="mt-4 text-[.95rem] text-white">
                Initate a conversation with one of our Agents. We are glad to
                assist you further in the process.
              </p>
              <Button
                className="mt-8"
                onClick={call}
                variant="outlined"
                color="white"
              >
                Get started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
