import Drawer from "@/components/Drawer";
import Button from "@/components/global/Button";
import {
  IconBedFilled,
  IconHome,
  IconMapPinBolt,
  IconX,
} from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const ileyahImages = [
  "https://images.unsplash.com/photo-1524292691042-82ed9c62673b?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1448630360428-65456885c650?q=80&w=3267&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?q=80&w=3273&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1576941089067-2de3c901e126?q=80&w=3378&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1622015663084-307d19eabbbf?q=80&w=3284&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8",
];

const ApartmentDetailsModal = ({ isOpen, onClose, selectedApartment }) => {
  const swiperRef = useRef(null);

  const [isModalOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    // setIsOpen(true);
    setCurrentIndex(index);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? ileyahImages.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === ileyahImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const swiperContainer = swiperRef.current || {};
    const params = {
      navigation: true,
      pagination: true,
    };

    Object.assign(swiperContainer, params);
    swiperContainer?.initialize?.();
  }, [swiperRef]);

  return (
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      longer={true}
      title={"Apartment Details"}
    >
      <div className="relative">
        <div className="grid grid-cols-3 gap-2">
          <div className="space-y-2">
            <img src={ileyahImages[0]} alt="" onClick={() => handleClick(0)} />
            <img src={ileyahImages[5]} alt="" onClick={() => handleClick(5)} />
          </div>
          <div className="space-y-4 mt-5">
            <img src={ileyahImages[1]} alt="" onClick={() => handleClick(1)} />
            <img src={ileyahImages[6]} alt="" onClick={() => handleClick(6)} />
            <img src={ileyahImages[1]} alt="" onClick={() => handleClick(1)} />
          </div>
          <div className="space-y-6">
            <img src={ileyahImages[3]} alt="" onClick={() => handleClick(3)} />
            <img src={ileyahImages[7]} alt="" onClick={() => handleClick(7)} />
          </div>
        </div>

        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className="relative max-w-full max-h-full"
              >
                <button
                  className="absolute top-4 right-4 text-white z-10 hover:text-gray-300"
                  onClick={handleClose}
                >
                  <IconX />
                </button>
                <div className="relative">
                  <img
                    src={ileyahImages[currentIndex]}
                    alt={`Image ${currentIndex + 1}`}
                    className="mx-auto max-h-screen"
                  />
                  <button
                    className="absolute top-1/2 left-4 -translate-y-1/2 text-white hover:text-gray-300"
                    onClick={handlePrev}
                  >
                    Prev
                  </button>
                  <button
                    className="absolute top-1/2 right-4 -translate-y-1/2 text-white hover:text-gray-300"
                    onClick={handleNext}
                  >
                    Next
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-10 flex space-x-5 border p-4 rounded shadow">
          <div className="flex">
            <IconHome size="55" />
          </div>
          <div>
            <p className="font-bold text-3xl inline-flex">Ileyah Apartment 2</p>
            <p className="text-gray-500 italic flex space-x-2">
              <IconMapPinBolt size={20} className="mt-1" /> <p> Lekki, Lagos</p>
            </p>
          </div>
        </div>

        <div className="mt-10 ">
          <p className="mb-3">House Information</p>
          <div className="space-y-5 border p-6 rounded shadow">
            <div className="flex justify-between">
              <div>Rent amount</div>
              <div>Lorem</div>
            </div>
            <div className="flex justify-between">
              <div>Date available</div>
              <div>Lorem</div>
            </div>
            <div className="flex justify-between">
              <div>Bedroom size</div>
              <div>Large bedroom (queen bed size)</div>
            </div>
            <div className="flex justify-between">
              <div>Bedroom furniture</div>
              <div>Lorem</div>
            </div>
            <div className="flex justify-between">
              <div>Features</div>
              <div>Shared bathroom - Ceiling fan</div>
            </div>
            <div className="flex justify-between">
              <div>Security bond</div>
              <div>1 Month</div>
            </div>
            <div className="flex justify-between">
              <div>Other information</div>
              <div>Large bedroom - can easily fit a king bed.</div>
            </div>
          </div>
        </div>

        <div className="mt-10 ">
          <p className="mb-3">House Description</p>
          <div className="space-y-5 border p-6 rounded shadow"></div>
        </div>
        <div className="mt-10 ">
          <p className="mb-3">Occupants Description</p>
          <div className="space-y-5 border p-6 rounded shadow"></div>
        </div>
        <div className="mt-10 ">
          <p className="mb-3">Flatmate Preferences</p>
          <div className="space-y-5 border p-6 rounded shadow"></div>
        </div>

        {/* <swiper-container
          slides-per-view="1"
          speed="500"
          loop="true"
          css-mode="true"
          navigation="true"
          pagination="true"
        >
          {ileyahImages.map((img, i) => (
            <swiper-slide key={i}>
              <img src={img} alt="" className="h-[700px] w-full object-cover" />
              <IconButton
                icon={<IconX />}
                rounded
                color="red"
                className="absolute z-[999] right-5 top-5"
                onClick={onClose}
              />
            </swiper-slide>
          ))}
        </swiper-container> */}
        <Button color='black' className='mt-10'>Apply</Button>
      </div>
    </Drawer>
  );
};

export default ApartmentDetailsModal;
