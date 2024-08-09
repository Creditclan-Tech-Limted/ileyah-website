import React, { useState } from "react";

const ShortletGallery = () => {
  const [selectedImageUrl, setSelectedImageUrl] = useState(null);

  const handleImageClick = (imageUrl) => {
    setSelectedImageUrl(imageUrl);
  };

  const handleOverlayClick = () => {
    setSelectedImageUrl(null);
  };
  return (
    <div>
      <div className="">
        <img src="/assets/images/shortlet/curtains.jpeg" alt="shortlet" className="sm:block md:hidden" />
        <p className="text-xl md:text-3xl font-medium container hidden md:block">
          Ileyah Luxury Gem: New Fully Automated Home with Free Wifi
        </p>
        <div className="grid-cols-2 gap-2 mt-4 hidden md:grid container">
          <div>
            <img
              src="/assets/images/shortlet/curtains.jpeg"
              className="rounded-tl-xl rounded-bl-xl cursor-pointer"
              alt=""
              onClick={() =>
                handleImageClick("/assets/images/shortlet/curtains.jpeg")
              }
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <img
                src="/assets/images/shortlet/living_room_1.jpeg"
                alt=""
                onClick={() =>
                  handleImageClick("/assets/images/shortlet/living_room_1.jpeg")
                }
              />
            </div>
            <div>
              <img
                src="/assets/images/shortlet/step.jpeg"
                className="rounded-tr-xl"
                alt=""
                onClick={() =>
                  handleImageClick("/assets/images/shortlet/step.jpeg")
                }
              />
            </div>
            <div>
              <img
                src="/assets/images/shortlet/parlour_step.jpeg"
                alt=""
                onClick={() =>
                  handleImageClick("/assets/images/shortlet/parlour_step.jpeg")
                }
              />
            </div>
            <div>
              <img
                src="/assets/images/shortlet/living_room_tv.jpeg"
                className="rounded-br-xl"
                alt=""
                onClick={() =>
                  handleImageClick(
                    "/assets/images/shortlet/living_room_tv.jpeg"
                  )
                }
              />
            </div>
          </div>
        </div>
        {selectedImageUrl && (
          <div
            className="absolute top-0 left-0 w-full h-full bg-opacity-80 flex justify-center items-center"
            onClick={handleOverlayClick}
          >
            <img
              src={selectedImageUrl}
              alt="Magnified"
              className="max-w-[80%] max-h-[80%] object-contain"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ShortletGallery;
