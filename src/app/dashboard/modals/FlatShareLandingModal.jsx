import { useEffect } from "react";
import Button from "@/components/global/Button.jsx";
import { IconArrowNarrowRight, IconCircleX } from "@tabler/icons-react";

const FlatShareLanding = ({
  toggleModal,
  setToggleModal,
  setOpenFlatShareModal,
}) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setToggleModal(false);
      }
    };

    if (toggleModal) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [toggleModal]);

  return (
    <>
      <div className="text">
        {toggleModal && (
          <div
            className="fixed inset-0 flex items-center justify-center z-50 overflow-y-auto overflow-x-hidden bg-gray-800 bg-opacity-70"
            onClick={() => setToggleModal(false)}
          >
            <div
              id="modal-content"
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-lg shadow-lg w-[80vw] md:w-[60vw] h-[80vh] md:h-[70vh] overflow-auto no-scrollbar"
            >
              <div className="grid grid-cols-1 md:grid-cols-[550px_1fr]">
                <div className="w-full flex justify-center hidden md:block">
                  <img className="" src="/assets/modal.jpg" alt="Flatshare" />
                </div>
                <div className="flex flex-col px-8 py-6">
                  <IconCircleX
                    className="ml-auto cursor-pointer"
                    color="red"
                    onClick={() => setToggleModal(false)}
                  />
                  <p className="text-2xl font-bold mt-4 leading-none">
                    Co-living made easy
                  </p>
                  <p className="text-base text-gray-600 mt-4">
                    At Ileyah, we believe in creating a vibrant and inclusive
                    living experience. Whether you're new to the city or looking
                    to make new connections, our platform is designed to help
                    you find the perfect living arrangement and build meaningful
                    relationships with like-minded individuals.
                  </p>
                  <div className="mt-10">
                    <Button
                      onClick={() => {
                        setToggleModal(false);
                        setOpenFlatShareModal(true);
                      }}
                    >
                      Join waitlist now
                    </Button>
                  </div>
                </div>
                <div className="w-full flex justify-center md:hidden ">
                  <img className="" src="/assets/modal.jpg" alt="Flatshare" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default FlatShareLanding;
