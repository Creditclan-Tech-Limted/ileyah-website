import { useEffect, useRef } from "react";
import { formatCurrency } from "@/lib/utils";
import Button from "@/components/global/Button";
import IconButton from "@/global/IconButton";
import { IconX } from "@tabler/icons-react";

const Details = ({ property, onClose, onNext }) => {
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
      <div className="relative">
        <swiper-container slides-per-view="1" speed="500" loop="true" css-mode="true" navigation='true' pagination='true'>
          {property?.images.map((img, i) => (
            <swiper-slide key={i}>
              <img src={img} alt="" key={i} className="h-[500px] w-full object-cover" />
              <IconButton icon={<IconX />} rounded color='red' className="absolute z-[999] right-5 top-5" onClick={onClose} />
            </swiper-slide>
          ))}
        </swiper-container>
      </div>
      <div className="space-y-5 p-8">
        <p className="text-xl">{property?.name} ▪️ {property?.Area} </p>
        <hr />
        <div>
          <p className="font-semibold text-2xl text-gray-500"> {formatCurrency(property?.amount)} / mo </p>
          <p>12 month(s) installments </p>
        </div>
        <hr />
        <Button block onClick={onNext}> Schedule Inspection </Button>
        <div className="border p-5 rounded">
          <p className="mb-3">Description</p>
          {property?.description}
        </div>
      </div>
    </>
  )
}

export default Details;