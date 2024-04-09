import Drawer from "@/components/Drawer";
import Button from "@/components/global/Button";
import FormInput from "@/global/FormInput";
import Input from "@/global/Input";
import Select from "@/global/Select";
import TextArea from "@/global/TextArea";
import { useToast } from "@/lib/use-toast";
import useSignupStore from "@/store/signup";
import { LocationData } from "@/utils/locationData";
import { IconCircleCheckFilled, IconX } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { MultiSelect } from "react-multi-select-component";

const options = LocationData;

const optionss = [
  { label: "Grapes 🍇", value: "grapes" },
  { label: "Mango 🥭", value: "mango" },
  { label: "Strawberry 🍓", value: "strawberry", disabled: true },
];

const PostRequest = ({ isOpen, onClose }) => {
  const toast = useToast();
  const router = useRouter();
  const { data, updateData } = useSignupStore((state) => state);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [views, setViews] = useState("request");
  const [enterArea, setEnterArea] = useState(
    data?.find_me_house?.area
      ? typeof data?.find_me_house?.area !== "object"
      : false
  );
  const [area, setArea] = useState(
    typeof data?.find_me_house?.area === "string"
      ? data?.find_me_house?.area
      : ""
  );
  const [areas, setAreas] = useState(
    typeof data?.find_me_house?.area === "object"
      ? data?.find_me_house?.area
      : []
  );
  const [loggedIn, setLoggedIn] = useState();
  const [selected, setSelected] = useState([]);

  const house_types = [
    { value: "room-only", text: "Room only" },
    { value: "room-parlour", text: "Room and parlour" },
    { value: "two-bedroom", text: "Two bedroom" },
    { value: "three-bedroom", text: "Three bedroom" },
    { value: "four-bedroom", text: "Four bedroom" },
    { value: "bungalow", text: "Bungalow" },
    { value: "duplex", text: "Duplex" },
  ];

  const salary_range = [
    { value: "below50", text: "Below 50k" },
    { value: "50-100", text: "50 - 100k" },
    { value: "100-200", text: "100 - 250k" },
    { value: "250-500", text: "250 - 500k" },
    { value: "500-1m", text: "500 - 1m" },
    { value: "1m-2m", text: "1m - 2m" },
    { value: "2m-3m", text: "2m - 3m" },
    { value: "above em", text: "Above 3m" },
  ];

  const onSubmit = async (values) => {
    const ileyah_token = JSON.parse(localStorage.getItem("ileyah_token"));
    try {
      if (ileyah_token) {
        setViews("success");
        // setLoading(true);
        // const res = await axios.post('https://kuda-creditclan-api.herokuapp.com/agents/createFindHouse', { ...values, landlordAgentId: data?.user.id });
        // if (res?.data?.status) {
        //   console.log('Successfully created');
        //   setLoading(false);
        //   setViews('success')
        // }
      } else {
        updateData({ createPostRequest: values });
        router.push("register");
        // setViews('success');
      }
    } catch (error) {
      setLoading(false);
      console.log({ error });
    }
  };

  useEffect(() => {
    if (enterArea && areas.length) setAreas([]);
    if (!enterArea && area.length) setArea("");
  }, [enterArea, area.length, areas.length]);

  useEffect(() => {
    const ileyah_token =
      typeof window !== "undefined"
        ? localStorage?.getItem("ileyah_token")
        : false;
    setLoggedIn(ileyah_token);
  }, []);

  return (
    <>
      <Drawer isOpen={isOpen} onClose={onClose}>
        {views === "request" && (
          <>
            <div className="flex items-center justify-between mb-10">
              <h3 className="text-xl font-semibold">Fine me a House</h3>
              <Button
                onClick={onClose}
                rounded
                icon={<IconX size="20" />}
                size="sm"
                color="red"
                variant="outlined"
              >
                <IconX />
              </Button>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="space-y-6">
                <Input
                  bordered
                  label="My Monthly Budget"
                  block
                  {...register("amount", {
                    required: {
                      value: true,
                      message: "Amount is required",
                    },
                    min: {
                      value: 300000,
                      message: "Please provide an amount greater than ₦100,000",
                    },
                    max: {
                      value: 3000000,
                      message: "Please provide an amount less than ₦3million",
                    },
                  })}
                  error={errors?.amount?.message}
                />
                <Input
                  bordered
                  label="Staff ID"
                  block
                  {...register("staff_id", {
                    required: {
                      value: true,
                      message: "staff_id is required",
                    },
                  })}
                  error={errors?.staff_id?.message}
                />
                <Select
                  options={salary_range}
                  label="Salary Range"
                  bordered
                  {...register("salary_range", {
                    required: {
                      value: true,
                      message: "Salary Range is required",
                    },
                  })}
                  error={errors?.salary_range?.message}
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
                {!enterArea ? (
                  <>
                    <div>
                      <h1 className="mb-2">Area (Select Multiple)</h1>
                      <MultiSelect
                        options={options}
                        value={selected}
                        onChange={setSelected}
                        labelledBy="Select"
                      />
                    </div>
                    <button
                      onClick={() => setEnterArea(true)}
                      className="font-17 mb-3 call-number alt-plan pointer border-0 bg-transparent"
                    >
                      I don't see the area
                      <span id="spin" className="ml-3">
                        <i className="fa-solid fa-spinner"></i>
                      </span>
                    </button>
                  </>
                ) : (
                  <>
                    <FormInput
                      name="location"
                      type="text"
                      value={area}
                      onChange={(e) => setArea(e.target.value)}
                      label="Kindly enter the area"
                      required
                      {...register("area", {
                        required: {
                          value: true,
                          message: "area is required",
                        },
                      })}
                    />
                    <button
                      onClick={() => setEnterArea(false)}
                      className="font-17 mb-3 call-number text-cc pointer border-0 bg-transparent"
                    >
                      Select area
                      <span id="spin" className="ml-3">
                        <i className="fa-solid fa-spinner"></i>
                      </span>
                    </button>
                  </>
                )}
                <TextArea
                  label="Comments"
                  bordered
                  {...register("comments", {})}
                  error={errors?.comments?.message}
                />
              </div>
              <Button type="submit" className="mt-10" color='black' loading={loading}>
                Submit
              </Button>
            </form>
          </>
        )}
        {views === "success" && (
          <>
            {loggedIn ? (
              <div className="flex h-screen">
                <div className="mx-auto text-center my-auto">
                  <IconCircleCheckFilled
                    className="mx-auto text-green-600"
                    color="green"
                    size={100}
                  />
                  <p className="mt-5 font-bold text-xl">Request successful</p>
                  <p> We'll revert in the next 24 - 48 hours.</p>
                  <p>Thank You.</p>
                  <Button
                    className="mt-10"
                    variant="outlined"
                    color="green"
                    onClick={onClose}
                  >
                    Continue
                  </Button>
                </div>
              </div>
            ) : (
              <div className="flex h-screen">
                <div className="mx-auto text-center my-auto">
                  <IconCircleCheckFilled
                    className="mx-auto text-green-600"
                    color="green"
                    size={100}
                  />
                  <p className="mt-5 font-bold text-xl">Request Submitted.</p>
                  <p>
                    {" "}
                    Kindly click on the Signup button to complete the request.
                  </p>
                  <p>Thank You.</p>
                  {/* <Button className='mt-10' variant='outlined' color='green' onClick={ onClose }>Continue</Button> */}
                  <Button
                    className="mt-10"
                    variant="outlined"
                    color="green"
                    onClick={() => router.push("/register")}
                  >
                    Sign Up
                  </Button>
                </div>
              </div>
            )}
          </>
        )}
      </Drawer>
    </>
  );
};

export default PostRequest;
