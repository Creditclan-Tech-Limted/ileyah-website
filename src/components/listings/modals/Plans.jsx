import Drawer from "@/components/Drawer";
import Button from "@/components/global/Button";
import { useToast } from "@/lib/use-toast";
import { IconCheck, IconHeart, IconStar, IconX } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { register } from "swiper/element/bundle";
import { useState } from "react";
import { formatCurrency } from "@/lib/utils";
import Collapsible from "@/components/global/Collapsible";
import useSignupStore from "@/store/signup";
import { useForm } from "react-hook-form";
import Input from "@/global/Input";
import Select from "@/global/Select";
import classNames from "classnames";
register();

const house_types = [
  { value: "room-only", text: "Room only" },
  { value: "room-parlour", text: "Room and parlour" },
  { value: "two-bedroom", text: "Two bedroom" },
  { value: "three-bedroom", text: "Three bedroom" },
  { value: "four-bedroom", text: "Four bedroom" },
  { value: "bungalow", text: "Bungalow" },
  { value: "duplex", text: "Duplex" },
];

const Plans = ({ isOpen, onClose, property, onNext, isIleyahProperty }) => {
  const array = [];
  const toast = useToast();
  const router = useRouter();
  const [plans, setPlans] = useState();
  const [views, setViews] = useState("charges");
  const { data, updateData } = useSignupStore((state) => state);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const add = async (item) => {
    try {
      toast.success(`${item?.name} has been added`);
      array.push(item?.name);
      console.log(array);
    } catch (error) {
      console.log(error);
    }
  };

  const signUp = async () => {
    try {
      const ileyah_token = JSON.parse(localStorage.getItem("ileyah_token"));
      console.log(ileyah_token);
      if (ileyah_token) {
        if (data?.user?.credit_score) {
          return onNext();
        }
        updateData({ user: ileyah_token, property });
        return router.push(`/dashboard`);
      } else {
        return router.push(`/register`);
      }
    } catch (error) {
      console.log({ error });
    }
  };

  const scheduleInspections = async () => {
    try {
      const ileyah_token = JSON.parse(localStorage.getItem("ileyah_token"));
      if (ileyah_token) {
        updateData({ user: ileyah_token, property });
        return onNext();
      } else {
        updateData({ user: ileyah_token, property });
        return router.push(`/register`);
      }
    } catch (error) {
      console.log({ error });
    }
  };

  const onSubmit = async (values) => {
    // const res = await axios.post('https://kuda-creditclan-api.herokuapp.com/agents/createFindHouse', { ...values, landlordAgentId: data?.user.id });
  };

  const _plans = [
    {
      amount: "10,000",
      items: [
        { id: 1, name: "Caepentry Services" },
        { id: 2, name: "Basic Fixes" },
      ],
    },
    {
      amount: "25,000",
      items: [
        { id: 1, name: "Fumigation Services (Indoor)" },
        { id: 2, name: "Carpentry Services (Basic Fix and Door Lock Change)" },
        {
          id: 3,
          name: "Electrical Services (Swtich box repair / Change of light switch)",
        },
      ],
    },
    {
      amount: "50,000",
      items: [
        { id: 1, name: "Washing Machine Servicing / Installation" },
        { id: 2, name: "Generator Servicing" },
        { id: 3, name: "Change of light switches" },
        { id: 4, name: "TV Installation" },
        { id: 5, name: "Fumigation" },
        { id: 6, name: "Carpentry Services" },
      ],
    },
    {
      amount: "75,000",
      items: [
        { id: 1, name: "Fumigation (Indoor)" },
        { id: 2, name: "Carpentry Services" },
        { id: 3, name: "Electrical Services / Installations" },
        { id: 4, name: "Plumbing Services and repairs" },
        { id: 5, name: "AC Repairs and Services" },
        { id: 6, name: "AC Gas Charging (Top Up / Complete fill up)" },
      ],
    },
    {
      amount: "100,000",
      items: [
        { id: 1, name: "Fumigation (Indoor & Outdoor)" },
        { id: 2, name: "Basic Home Cleaning" },
        { id: 3, name: "Carpentry Services" },
        { id: 4, name: "Electrical Services / Installations" },
        { id: 5, name: "Plumbing Repairs and Services" },
        { id: 6, name: "AC Repairs and Services" },
        { id: 7, name: "AC Gas Charging (Top Up / Complete fill up)" },
      ],
    },
  ];

  return (
    <>
      <Drawer isOpen={isOpen} onClose={onClose} smLonger={true}>
        <>
          {views === "charges" && (
            <>
              <div className="flex items-center justify-between mb-10">
                <h3 className="text-xl font-semibold">Charges</h3>
                <Button
                  onClick={onClose}
                  rounded
                  icon={<IconX size="20" />}
                  size="sm"
                  color="red"
                  variant="outlined"
                >
                  {" "}
                  <IconX />{" "}
                </Button>
              </div>
              <div
                className="flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50"
                role="alert"
              >
                <svg
                  className="flex-shrink-0 inline w-4 h-4 me-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
                <span className="sr-only">Info</span>
                <div>
                  <span className="font-medium">Note!</span> Please note the
                  amount below is subject to increase or decrease.
                </div>
              </div>

              <div className="border border-gray-300 p-5 rounded-2xl">
                <div className="text-3xl font-bold">
                  {isIleyahProperty
                    ? formatCurrency(
                        +property.agreeement +
                          +property.agency_commision +
                          +property.service_charge +
                          +property.caution
                      )
                    : formatCurrency(property.price * 0.42)}
                </div>
                <div className="mt-6">
                  The above amount is to be paid as (Agreement | Commision |
                  Security Charges) to the Landlord / Agents of the property!
                </div>
              </div>

              <div className="mt-10">
                <Button color="black" onClick={() => setViews("plans")}>
                  Accept and Continue
                </Button>
              </div>
            </>
          )}
        </>

        <>
          {views === "plans" && (
            <>
              <div className="flex items-center justify-between mb-10">
                <h3 className="text-xl font-semibold">Choose Plan</h3>
                <Button
                  onClick={onClose}
                  rounded
                  icon={<IconX size="20" />}
                  size="sm"
                  color="red"
                  variant="outlined"
                >
                  {" "}
                  <IconX />{" "}
                </Button>
              </div>
              <p>
                Your Monthly Repayment is{" "}
                <span className="font-bold">
                  {isIleyahProperty
                    ? formatCurrency(property.total_paid / 12)
                    : formatCurrency(property.price)}{" "}
                </span>{" "}
                /mo
              </p>
              <p className="mb-5">Please select plan a subscription services</p>
              <div className="border border-slate-300 rounded-xl">
                <Collapsible
                  defaultIsOpen={true}
                  header={
                    <h5 className="md:text-lg font-medium inline-flex">
                      <div className="my-auto font-bold">
                        <span>Move in Service</span>
                      </div>
                    </h5>
                  }
                  content={
                    <div className="opacity-80 pb-6 px-6">
                      <swiper-container
                        slides-per-view="1.7"
                        space-between="20"
                      >
                        <swiper-slide>
                          <div className="flex">
                            <div className="border-green-500 border shadow rounded-2xl my-auto p-10 space-y-3 h-full w-full">
                              <IconHeart
                                size={26}
                                className="bg-gray-200 p-1 rounded-full"
                              />
                              <p className="text-4xl font-bold">No Plans</p>
                              <div className="mt-auto">
                                <Button
                                  block
                                  className="mt-10"
                                  onClick={() => {
                                    setPlans(5000);
                                    setViews("details");
                                  }}
                                >
                                  Continue
                                </Button>
                              </div>
                            </div>
                          </div>
                        </swiper-slide>
                        {_plans.map((p, i) => (
                          <swiper-slide key={i}>
                            <div className="flex">
                              <div
                                className={classNames(
                                  "border-gray-200 border shadow rounded-2xl my-auto p-10 space-y-3 bg-slate-800 text-white",
                                  { "!bg-gray-100 !text-black": i % 2 === 1 }
                                )}
                              >
                                <IconStar
                                  size={26}
                                  color="blue"
                                  className="bg-gray-200 p-1 rounded-full"
                                />
                                <p className="font-bold">Starter</p>
                                <p className="text-gray-500 text-sm">
                                  Subscribe and enjoy the below services
                                  optimally.
                                </p>
                                <p className="text-4xl font-bold">{p.amount}</p>
                                <p className="font-bold text-sm">
                                  What's included:
                                </p>
                                <div
                                  className={classNames("!text-white bg-blue-500", {
                                    "!text-black bg-red-500": i % 2 === 1,
                                  })}
                                >
                                  {p.items.map((item, i) => (
                                    <div key={i}>
                                      <p className="inline-flex">
                                        <IconCheck
                                          size={15}
                                          color="green"
                                          className="bg-green-200 p-1 rounded-full mt-1 mr-3"
                                        />{" "}
                                        <span
                                          className="text-sm"
                                        >
                                          {item.name}
                                        </span>
                                      </p>{" "}
                                      <br />
                                    </div>
                                  ))}
                                </div>
                                <div className="mt-10">
                                  <Button
                                    block
                                    className="mt-10"
                                    onClick={() => {
                                      setPlans(10000);
                                      setViews("details");
                                    }}
                                  >
                                    Choose Plan
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </swiper-slide>
                        ))}
                      </swiper-container>
                    </div>
                  }
                />
              </div>
            </>
          )}

          {views === "vehicle-movement" && (
            <>
              <div className="flex items-center justify-between mb-10">
                <h3 className="text-xl font-semibold">Vehicle Movement</h3>
                <Button
                  onClick={() => setViews("plans")}
                  rounded
                  icon={<IconX size="20" />}
                  size="sm"
                  color="red"
                  variant="outlined"
                >
                  {" "}
                  <IconX />{" "}
                </Button>
              </div>
              <div>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
                  <div className="space-y-3">
                    <div>
                      <p>Moving From</p>
                      <div className="border-2 mt-3 border-gray-300 p-5 rounded-2xl space-y-10 border-dashed">
                        <Input
                          type="text"
                          label="Area"
                          bordered
                          {...register("area", {
                            required: {
                              value: true,
                              message: "Area is required",
                            },
                          })}
                          error={errors?.area?.message}
                        />

                        <Select
                          options={house_types}
                          label="House Type"
                          bordered
                          {...register("house_types", {
                            required: {
                              value: true,
                              message: "House Type is required",
                            },
                          })}
                          error={errors?.house_types?.message}
                        />
                      </div>
                    </div>
                    <div>
                      <p>Moving To</p>
                      <div className="border-2 border-gray-300 p-5 rounded-2xl space-y-10 border-dashed mt-3">
                        <Input
                          type="text"
                          label="Area"
                          bordered
                          {...register("area", {
                            required: {
                              value: true,
                              message: "Area is required",
                            },
                          })}
                          error={errors?.area?.message}
                        />

                        <Select
                          options={house_types}
                          label="House Type"
                          bordered
                          {...register("house_types", {
                            required: {
                              value: true,
                              message: "House Type is required",
                            },
                          })}
                          error={errors?.house_types?.message}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between mt-10">
                    <Button color="black" type="submit">
                      {" "}
                      Get Total{" "}
                    </Button>
                    <Button
                      variant="outlined"
                      onClick={() => setViews("details")}
                    >
                      {" "}
                      Skip{" "}
                    </Button>
                  </div>
                </form>
              </div>
            </>
          )}

          {views === "details" && (
            <>
              <div className="flex items-center justify-between mb-10">
                <h3 className="text-xl font-semibold">Summary</h3>
                <Button
                  onClick={onClose}
                  rounded
                  icon={<IconX size="20" />}
                  size="sm"
                  color="red"
                  variant="outlined"
                >
                  {" "}
                  <IconX />{" "}
                </Button>
              </div>
              <p className="mb-3">Below is the summary of your transactions</p>
              <div className="border border-gray-300 divide-y rounded-xl">
                <div className="flex justify-between p-3">
                  <p>Rent:</p>
                  {isIleyahProperty
                    ? formatCurrency(property.total_paid / 12)
                    : formatCurrency(property.price)}
                  /mo
                </div>
                <div className="flex justify-between p-3">
                  <p>Selected Plan:</p>
                  {formatCurrency(plans)}
                </div>
                <div className="flex justify-between p-3">
                  <p>Management Fees:</p>
                  {isIleyahProperty
                    ? formatCurrency(property.total_paid * 0.05)
                    : formatCurrency(property.price * 0.05)}{" "}
                </div>
                <div className="flex justify-between p-3">
                  <p>Upfront Payments:</p>
                  {formatCurrency(
                    +property.agreeement +
                      +property.agency_commision +
                      +property.service_charge +
                      +property.caution
                  )}
                </div>
              </div>

              <Button
                className="mt-10"
                color="black"
                onClick={scheduleInspections}
              >
                Continue and Schedule Inspection
              </Button>
            </>
          )}
        </>
      </Drawer>
    </>
  );
};

export default Plans;
