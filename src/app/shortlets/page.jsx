"use client";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollToTopBtn from "@/components/ScrollToTpBtn";
import {
  IconAirConditioning,
  IconBrowser,
  IconBulb,
  IconCar,
  IconDeviceDesktop,
  IconDoor,
  IconHeading,
  IconKeyboard,
  IconLock,
  IconMapPinFilled,
  IconMedal,
  IconStar,
  IconToolsKitchen2,
  IconUsers,
  IconWifi,
} from "@tabler/icons-react";
import React, { useEffect, useState } from "react";
import ShortletGallery from "./gallery";
import {
  Calendar,
  DateRangePicker,
  Modal,
  ModalBody,
  ModalContent,
  useDisclosure,
} from "@nextui-org/react";
import Input from "@/global/Input";
import { useForm } from "react-hook-form";
import Button from "@/components/global/Button";
import Footer from "@/components/Footer";

const offers = [
  { icon: <IconBulb />, title: "24/7 electricity" },
  { icon: <IconLock />, title: "24/7 security" },
  { icon: <IconToolsKitchen2 />, title: "Fully fitted and furnished kitchen" },
  { icon: <IconHeading />, title: "Heat extractor" },
  { icon: <IconWifi />, title: "Free Wifi" },
  { icon: <IconKeyboard />, title: "Deicated WorkSpace" },
  { icon: <IconCar />, title: "Free parking on premises" },
  { icon: <IconDeviceDesktop />, title: "Smart TV" },
  { icon: <IconBrowser />, title: "Washer" },
  { icon: <IconAirConditioning />, title: "Fullt Air-conditioned rooms" },
  { icon: <IconUsers />, title: "Personal balcony" },
  { icon: <IconDeviceDesktop />, title: "Water treatment system" },
];

const Shortlets = () => {
  const [call, setCall] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({});
  const handleScroll = (event) => {
    const scrollPosition = window.innerHeight + window.scrollY;
    const pageHeight = document.body.offsetHeight;
    const middleOfPage = pageHeight / 2;

    setScrollTop(event.target.scrollingElement.scrollTop);

    if (scrollPosition >= middleOfPage) {
    }
  };

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleOpen = () => {
    onOpen();
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [call, setCall]);

  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <div className="mt-[100px] md:mt-[140px]">
        <ShortletGallery />
        <div className="grid grid-cols-12 gap-10 mt-12 container">
          <div className="col-span-9">
            <p className="text-base md:text-2xl font-medium md:hidden">
              Ileyah Luxury Gem: New Fully Automated Home with Free Wifi
            </p>
            <p className="text-sm md:text-2xl sm:mt-4">
              Entire rental unit in Ikota GRA, Nigeria{" "}
            </p>
            <div className="flex space-x-3 mt-2">
              <p className=" text-xs md:text-base">8 Guests</p>
              <span className="text-xs md:text-base">‣</span>
              <p className=" text-xs md:text-base">4 bedrooms</p>
              <span className="text-xs md:text-base">‣</span>
              <p className=" text-xs md:text-base">4 beds</p>
              <span className="text-xs md:text-base">‣</span>
              <p className=" text-xs md:text-base">5 baths</p>
            </div>
            <div className="flex space-x-3 mt-2">
              <div className="flex">
                <IconStar size={15} />
                <IconStar size={15} />
                <IconStar size={15} />
                <IconStar size={15} />
                <IconStar size={15} />
              </div>
            </div>
            <div className="mt-10">
              <hr />
              <div className="flex space-x-6 my-4">
                <img
                  src="/assets/agent_register.jpeg"
                  alt="profile-img"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-medium">Hosted by ILEYAH</p>
                  <p className="text-sm text-gray-500">Superhost - Available</p>
                </div>
              </div>
              <hr />
              <div className="mt-10 space-y-5">
                <div className="flex space-x-4">
                  <div className="my-auto">
                    <IconDoor />
                  </div>
                  <div>
                    <p className="font-medium">Self Check in</p>
                    <p className="text-sm text-gray-500">
                      Check yourself in with Automations
                    </p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <div className="my-auto">
                    <IconMedal />
                  </div>
                  <div>
                    <p className="font-medium">Ileyah is a Superhost </p>
                    <p className="text-sm text-gray-500">
                      Ileyah is an Expereicend, highly rated Hosts
                    </p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <div className="my-auto">
                    <IconMapPinFilled />
                  </div>
                  <div>
                    <p className="font-medium">Great Location</p>
                    <p className="text-sm text-gray-500">
                      100% of recent guests gave the location a 5-start rating
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <hr className="mt-10" />
            <div className="mt-10">
              <div className="space-y-4">
                <p>
                  Picture yourself in a luxurious 4-bedroom terrace duplex
                  nestled in the heart of Ikota GRA, where every detail speaks
                  of comfort and elegance. With 24/7 electricity and a water
                  treatment system ensuring uninterrupted convenience, you'll
                  experience a stay like no other.
                </p>
                <p className="line-clamp-2">
                  The fully air-conditioned rooms and personal balconies offer a
                  perfect retreat, while smart TVs and free Wi-Fi keep you
                  connected to the world. What more could you ask for? Book now
                  and immerse yourself in a world where luxury meets
                  tranquility.
                </p>
                <p
                  className="underline cursor-pointer"
                  onClick={() => handleOpen()}
                >
                  See more
                </p>
              </div>
            </div>
            <hr className="mt-10" />
            <div className="mt-10">
              <p className="text-2xl font-medium">Where You'll Sleep</p>
              <div className="mt-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <img
                      src="https://a0.muscache.com/im/pictures/hosting/Hosting-1143468851735521752/original/00caf7fa-630d-4cd9-bb5f-bea9c5720db0.jpeg?im_w=480"
                      alt="bedroom"
                      className="rounded-lg"
                    />
                    <p className="font-medium mt-3">Bedroom 1</p>
                    <p className="text-sm">1 king bed, 1 beds</p>
                  </div>
                  <div>
                    <img
                      src="https://a0.muscache.com/im/pictures/hosting/Hosting-1143468851735521752/original/ed717e08-b2c2-40e5-9ff0-5d149866fcc8.jpeg?im_w=480"
                      alt="bedroom"
                      className="rounded-lg"
                    />
                    <p className="font-medium mt-3">Bedroom 2</p>
                    <p className="text-sm">1 king bed, 1 beds</p>
                  </div>
                </div>
              </div>
            </div>
            <hr className="mt-10" />
            <div className="mt-10">
              <p className="text-2xl font-medium">What this space offers</p>
              <p className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
                {offers.map((m, i) => (
                  <div key={i}>
                    <div className="flex items-center">
                      <p>{m.icon}</p>
                      <p className="ml-2">{m.title}</p>
                    </div>
                  </div>
                ))}
              </p>
            </div>
            <hr className="mt-10" />
            <div className="mt-10">
              <p className="text-2xl font-medium">Select check-in date</p>
              <p>Add your check-in date and check availability</p>
              <Calendar visibleMonths={2} calendarWidth={500} />
            </div>
          </div>
          <div className="bg-white shadow-xl rounded-xl p-6 col-span-3 fixed w-[300px] right-72 hidden md:block">
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4 border border-gray-400 rounded-lg">
              <DateRangePicker
                label="Check-in / Check-out Date"
                visibleMonths={2}
                pageBehavior="single"
                variant="bordered"
              />
            </div>
            <div className="mt-5">
              <Input
                type="number"
                label="No of Guest(s)"
                bordered
                {...register("house_no", {
                  required: {
                    value: true,
                    message: "House Number is required",
                  },
                })}
                error={errors?.number?.message}
              />
            </div>
            <Button color="black" className="mt-5">
              Check Availability
            </Button>
          </div>
        </div>
      </div>
      <Footer />

      <ScrollToTopBtn scrollTop={scrollTop} handleScrollTop={handleScrollTop} />
      <Modal
        size="3xl"
        isOpen={isOpen}
        onClose={onClose}
        className="bg-gray-100 p-10"
        scrollBehavior="inside"
      >
        <ModalContent>
          <ModalBody>
            <p className="text-2xl font-medium my-3">About this space</p>
            <p>
              Picture yourself in a luxurious 4-bedroom terrace duplex nestled
              in the heart of Ikota GRA, where every detail speaks of comfort
              and elegance. With 24/7 electricity and a water treatment system
              ensuring uninterrupted convenience, you'll experience a stay like
              no other. The fully air-conditioned rooms and personal balconies
              offer a perfect retreat, while smart TVs and free Wi-Fi keep you
              connected to the world. What more could you ask for? Book now and
              immerse yourself in a world where luxury meets tranquility.
            </p>
            <p className="text-2xl font-medium my-3">The space</p>
            <p>
              This fully furnished duplex boasts 4 en-suite bedrooms, a guest
              toilet, and a fully fitted kitchen equipped with modern appliances
              including a washing machine and heat extractor. Each room is a
              haven of comfort with air conditioning and water heater systems.
              The living areas are adorned with smart TVs for your entertainment
              pleasure.
            </p>
            <p className="text-2xl font-medium my-3">Guest access</p>
            Guests have access to the entire 4-bedroom terrace duplex, including
            all en-suite bedrooms, the fully equipped kitchen, and personal
            balconies.
            <p className="text-2xl font-medium my-3">Other things to note </p>
            <p>
              Prime location: Only 30 minutes drive from Victoria Island and
              less than 10 minutes from Chevron bus stop Nearby
            </p>
            <p className="text-2xl font-medium my-3">Landmarks: </p>
            <p>
              <ul class="list-disc">
                <li>Ikota Villa Mega Chicken restaurant</li>
                <li>Lekki Conservation Centre (LCC)</li>
                <li>24/7 security</li>
                <li>24/7 electricity</li>
                <li>Water treatment system</li>
                <li>Free Wi-Fi throughout the property</li>
                <li>Daily housekeeping services available (upon request)</li>
                <li>Ideal for both short-term vacations and extended stays</li>
                <li>
                  Easy access to local attractions, restaurants, and shopping
                  areas
                </li>
              </ul>
            </p>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};
export default Shortlets;
