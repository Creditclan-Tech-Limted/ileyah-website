import { useEffect, useRef, useState } from "react";
import { formatCurrency } from "@/lib/utils";
import Button from "@/components/global/Button";
import IconButton from "@/global/IconButton";
import { IconBookmark, IconBoxMultiple, IconX } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import useSignupStore from "@/store/signup";
import WantThis from "./WantThis";
import Plans from "./Plans";

const Details = ({ property, onClose, onNext }) => {
  const swiperRef = useRef(null);
  const router = useRouter();
  const { data, updateData } = useSignupStore((state) => state)
  const [openWantThis, setOpenWantThis] = useState(false);
  const [openViewPlans, setopenViewPlans] = useState(false)

  const scheduleInspections = async () => {
    try {
      const ileyah_token = JSON.parse(localStorage.getItem(('ileyah_token')));
      if (ileyah_token) {
        // if (data?.user?.credit_score) {
        //   return onNext();
        // }
        // updateData({ user: ileyah_token, property })
        // return router.push(`/dashboard`);
      } else {
        return router.push(`/login`)
      }
    } catch (error) {
      console.log({ error });
    }
  }

  const chooseProperty = async () => {
    try {
      updateData({ ...data, user: { ...data?.user }, want_property: property });
      setOpenWantThis(true);
      // return router.push(`/dashboard`);
    } catch (error) {
      console.log({ error });
    }
  }

  const viewPlans = async () => {
    try {
      updateData({ ...data, user: { ...data?.user }, signUpAndCreate: property });
      setopenViewPlans(true)
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
          {property?.image.map((img, i) => (
            <swiper-slide key={i}>
              <img src={img} alt="" className="h-[500px] w-full object-cover" />
              <IconButton icon={<IconX />} rounded color='red' className="absolute z-[999] right-5 top-5" onClick={onClose} />
            </swiper-slide>
          ))}
        </swiper-container>
      </div>
      <div className="space-y-5 p-8 flex flex-col">
        <p className="text-xl">{property?.description} ▪️ {property?.area || property?.Area} </p>
        <hr />
        <div className="flex justify-between">
          <p className="font-semibold text-2xl text-gray-500"> 
                     {/* {(property?.price)} */}
                     {formatCurrency((Number(property?.price.slice(1).replaceAll(',', ''))) / 12)}
                     <span className="text-sm text-black">/mo</span>  
           </p>
          <IconBookmark className="cursor-pointer" />
        </div>
        <p className="-pt-10">{property?.createdAt?.slice(0, 10)}</p>
        <hr />
        <div className="flex space-x-5">
          <Button block onClick={scheduleInspections} variant='outlined' color='blue'  > Schedule Inspection </Button>
          {/* <Button block onClick={chooseProperty}> I want this </Button> */}
          <Button block onClick={viewPlans} > View Plans </Button>
        </div>
        <p className="ml-auto text-blue-600 underline">
          {/* <a target="_blank" href={`https://${property?.link}`} rel="noopener noreferrer"> Check Property Source...</a> */}
        </p>
        <div className="border p-5 rounded">
          <p className="mb-3">Description</p>
          {property?.description}
        </div>
        <div className="mt-5 border p-5 rounded flex justify-between">
          <p className="mb-3 mt-5">Property Source</p>
          <div className=" p-3 rounded-full">
            <img src="https://static.wixstatic.com/media/af4a76_170dbc341f2d462884c99fcebf247880~mv2.png" width={100} alt="" />
          </div>
          {/* {property?.source || 'Nigeria Property Center'} */}
        </div>
      </div>

      {openWantThis && (
        <WantThis onClose={() => setOpenWantThis(false)} />
      )}
      <Plans isOpen={openViewPlans} onClose={() => setopenViewPlans(false)} />
    </>
  )
}

export default Details;