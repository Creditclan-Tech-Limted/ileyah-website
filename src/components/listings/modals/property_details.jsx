'use client'
import Drawer from "@/components/Drawer"
import Button from "@/components/global/Button";
import { formatCurrency } from "@/lib/utils";
import { useEffect, useRef } from "react";
import { register } from 'swiper/element/bundle';

register();

const ProDetails = ({ isOpen, onClose, property }) => {
  const swiperRef = useRef(null);

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
    <>
      <Drawer isOpen={isOpen} onClose={onClose} title='Property Details'>
        <div>
          <swiper-container slides-per-view="1" speed="500" loop="true" css-mode="true" navigation='true' pagination='true'>
            {property?.images.map((img, i) => (
              <swiper-slide>
                <img src={img} alt="" key={i} className="h-[500px] w-full object-cover" />
              </swiper-slide>
            ))}
          </swiper-container>
        </div>
        <div className="mt-5 space-y-5">
          <p className="text-xl">{property?.name} ▪️ {property?.Area} </p>
          <hr />
          <div>
            <p className="font-semibold text-2xl text-gray-500"> {formatCurrency(property?.amount)} / mo </p>
            <p>12 month(s) installments </p>
          </div>
          <hr />
          <Button block> Schedule Inspection </Button>

          <div className="border p-5 rounded">
            <p className="mb-3">Description</p>
            {property?.description}
          </div>
        </div>

      </Drawer>
    </>
  )
}

export default ProDetails