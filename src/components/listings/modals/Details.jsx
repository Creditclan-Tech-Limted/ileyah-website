import { useEffect, useRef } from "react";
import { formatCurrency } from "@/lib/utils";
import Button from "@/components/global/Button";
import IconButton from "@/global/IconButton";
import { IconX } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import useSignupStore from "@/store/signup";

const Details = ({ property, onClose, onNext }) => {
  const swiperRef = useRef(null);
  const router = useRouter();
  const { data, updateData } = useSignupStore((state) => state)

  const scheduleInspections = async () => {
    try {
      const ileyah_token = JSON.parse(localStorage.getItem(('ileyah_token')));
      if (ileyah_token) {
        if (data?.user?.credit_score) {
          return onNext();
        }
        updateData({ user: ileyah_token, property })
        return router.push(`/dashboard/`);
      } else {
        return router.push(`/login/`)
      }
    } catch (error) {
      console.log({ error });
    }
  }

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
          <swiper-slide >
            <img src={property?.image} alt="" className="h-[500px] w-full object-cover" />
            <IconButton icon={<IconX />} rounded color='red' className="absolute z-[999] right-5 top-5" onClick={onClose} />
          </swiper-slide>
          {/* {property?.images.map((img, i) => (
          ))} */}
        </swiper-container>
      </div>
      <div className="space-y-5 p-8 flex flex-col">
        <p className="text-xl">{property?.description} ▪️ {property?.area} </p>
        <hr />
        <div>
          <p className="font-semibold text-2xl text-gray-500"> {formatCurrency(property?.price)} / mo </p>
          <p>12 month(s) installments </p>
          <p>{property?.createdAt?.slice(0, 10)}</p>
        </div>
        <hr />
        <div className="flex space-x-5">
          <Button block onClick={scheduleInspections}> Schedule Inspection </Button>
          {/* <Button block> I want this </Button> */}
        </div>
        <p className="ml-auto text-blue-600 underline">  <a target="_blank" href={property?.link} rel="noopener noreferrer"> Check Property Source</a> </p>
        <div className="border p-5 rounded">
          <p className="mb-3">Description</p>
          {property?.description}
        </div>
      </div>
    </>
  )
}

export default Details;