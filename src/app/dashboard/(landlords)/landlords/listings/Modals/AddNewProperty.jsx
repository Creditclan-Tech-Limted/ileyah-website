import { ADD_NEW_PROPERTY, UPLOAD_IMAGE } from "@/api/landlord";
import Drawer from "@/components/Drawer";
import Button from "@/components/global/Button";
import Input from "@/global/Input";
import Select from "@/global/Select";
import TextArea from "@/global/TextArea";
import { areas, lgas } from "@/lib/utils";
import {
  IconChevronLeft,
  IconChevronRight,
  IconCircleCheckFilled,
  IconCircleChevronRight,
  IconCopy,
  IconPlus,
  IconTrash,
  IconX,
} from "@tabler/icons-react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useToast } from "@/lib/use-toast";

const AddNewProperty = ({ isOpen, onClose, refferal_code, current }) => {
  const toast = useToast();
  const router = useRouter();
  const file = useRef(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [views, setViews] = useState("form");
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState("form");

  const handleChange = async (e) => {
    try {
      const files = Array.from(e.target.files);
      setSelectedFiles(files);
    } catch (error) {
      console.log(error);
    }
  };

  const handleImageRemove = (src) => {
    const filteredImages = selectedFiles.filter((image) => image !== src);
    setSelectedFiles(filteredImages);
  };

  const imagePromises = Array.from(selectedFiles).map((file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        resolve(event.target.result);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  });

  const copyLink = async (id) => {
    navigator.clipboard.writeText(`localhost:3000/property-found/${id}`);
    toast.success(`Copied`);
  };

  const onSubmit = async (data) => {
    try {
      Promise.all(imagePromises).then(async (base64Images) => {
        setLoading(true);
        const axiosRequests = base64Images.map(async (item) => {
          try {
            const response = await axios.post(
              UPLOAD_IMAGE.UPLOAD(),
              { file: item },
              {
                headers: {
                  "x-api-key":
                    "WE4mwadGYqf0jv1ZkdFv1LNPMpZHuuzoDDiJpQQqaes3PzB7xlYhe8oHbxm6J228",
                },
              }
            );
            return response.data.data.filename;
          } catch (error) {
            console.error("Error with Axios request:", error);
            setLoading(false);
            return null;
          }
        });

        const img = await Promise.all(axiosRequests);
        const response = await axios.post(ADD_NEW_PROPERTY.ADD(), {
          ...data,
          images: img,
          landlordAgentId: "27ebe5f4-05d5-42f8-bff9-e96929ff4ee0",
          staff_phone: "09039719017",
        });
        setLoading(true);

        if (response.data.status === true) {
          setStep("success");
          toast.success(response.data.message);
          onClose();
        }
      });
    } catch (error) {
      console.log({ error });
      setLoading(false);
      toast.error("Error");
    }
  };

  return (
    <>
      <Drawer isOpen={isOpen} onClose={onClose}>
        {step === "form" && (
          <form onSubmit={handleSubmit(onSubmit)}>
            {views === "form" && (
              <div className="">
                <div className="flex items-center justify-between mb-10">
                  <h3 className="text-xl font-semibold">Add new Property</h3>
                  <Button
                    onClick={onClose}
                    rounded-full
                    size="sm"
                    color="red"
                    variant="outlined"
                  >
                    {" "}
                    <IconX />{" "}
                  </Button>
                </div>
                <p>Property Details</p>
                <div className="border border-gray-500 border-dashed rounded p-5 space-y-8 mt-2">
                  <Input
                    label="Property Name"
                    bordered
                    {...register("name", {
                      required: {
                        value: true,
                        message: " Name is required",
                      },
                    })}
                    error={errors?.name?.message}
                  />
                  <TextArea
                    label="House Address"
                    {...register("address", {
                      required: {
                        value: true,
                        message: " Address is required",
                      },
                    })}
                    error={errors?.address?.message}
                  />
                  <Input
                    type="number"
                    label="House Number"
                    bordered
                    {...register("house_no", {
                      required: {
                        value: true,
                        message: "House Number is required",
                      },
                    })}
                    error={errors?.number?.message}
                  />
                  <TextArea
                    label="Descriptions"
                    {...register("description", {
                      required: {
                        value: true,
                        message: " description is required",
                      },
                    })}
                    error={errors?.description?.message}
                  />
                </div>
                <p className="mt-5">Location</p>
                <div className="border border-gray-500 border-dashed rounded p-5 space-y-8 mt-2">
                  <div className="mb-4">
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
                  </div>
                  <div className="mb-4">
                    <Input
                      type="text"
                      label="LGA"
                      bordered
                      {...register("LGA", {
                        required: {
                          value: true,
                          message: "LGA is required",
                        },
                      })}
                      error={errors?.LGA?.message}
                    />
                  </div>
                  <div className="mb-4">
                    <Input
                      type="text"
                      label="No of Beds"
                      bordered
                      {...register("beds", {
                        required: {
                          value: true,
                          message: "beds is required",
                        },
                      })}
                      error={errors?.beds?.message}
                    />
                  </div>
                </div>

                <p className="mt-5">Rent</p>
                <div className="border border-gray-500 border-dashed rounded p-5 space-y-8 mt-2">
                  <Input
                    type="number"
                    label="Rent"
                    bordered
                    {...register("renewal_rent", {
                      required: {
                        value: true,
                        message: "Renewal Rent is required",
                      },
                    })}
                    error={errors?.renewal_rent?.message}
                  />
                  <Input
                    type="number"
                    label="Service Charge"
                    bordered
                    {...register("service_charge", {
                      required: {
                        value: true,
                        message: "Service Charge is required",
                      },
                    })}
                    error={errors?.service_charge?.message}
                  />
                  <Input
                    type="number"
                    label="Caution"
                    bordered
                    {...register("caution", {
                      required: {
                        value: true,
                        message: "Caution is required",
                      },
                    })}
                    error={errors?.caution?.message}
                  />
                  <Input
                    type="number"
                    label="Agreement"
                    bordered
                    {...register("agreeement", {
                      required: {
                        value: true,
                        message: "Agreement is required",
                      },
                    })}
                    error={errors?.agreeement?.message}
                  />
                  <Input
                    type="number"
                    label="Agency"
                    bordered
                    {...register("agency_commision", {
                      required: {
                        value: true,
                        message: "Agency is required",
                      },
                    })}
                    error={errors?.agency_commision?.message}
                  />
                  <Input
                    type="number"
                    label="Total Paid"
                    bordered
                    {...register("total_paid", {
                      required: {
                        value: true,
                        message: "Total Paid is required",
                      },
                    })}
                    error={errors?.total_paid?.message}
                  />
                </div>
                <p className="mt-5">Agent - Landlord Info</p>
                <div className="border border-gray-500 border-dashed rounded p-5 space-y-8 mt-2">
                  <Input
                    label="Agent Phone Number"
                    bordered
                    {...register("agent_no", {
                      required: {
                        value: true,
                        message: "Agent No is required",
                      },
                    })}
                    error={errors?.agent_no?.message}
                  />
                  <Input
                    label="Agent Name"
                    bordered
                    {...register("agent_name", {
                      required: {
                        value: true,
                        message: "Agent Name is required",
                      },
                    })}
                    error={errors?.agent_name?.message}
                  />
                  <Input
                    label="Landlord Name"
                    bordered
                    {...register("landlord_name", {
                      required: {
                        value: true,
                        message: "Landlord Name is required",
                      },
                    })}
                    error={errors?.landlord_name?.message}
                  />
                  <Input
                    label="Landlord Number"
                    bordered
                    {...register("landlord_number", {
                      required: {
                        value: true,
                        message: "Landlord Number is required",
                      },
                    })}
                    error={errors?.landlord_number?.message}
                  />
                </div>

                <Button
                  type="submit"
                  className="mt-10"
                  rightIcon={<IconCircleChevronRight />}
                  onClick={() => setViews("image")}
                >
                  {" "}
                  Continue{" "}
                </Button>
              </div>
            )}
            {views === "image" && (
              <div>
                <div className="flex items-center justify-between mb-10 cursor-pointer">
                  <div
                    onClick={() => setViews("form")}
                    className="border border-black rounded-full p-1"
                  >
                    {" "}
                    <IconChevronLeft />{" "}
                  </div>
                  <Button
                    onClick={onClose}
                    rounded-full
                    size="sm"
                    color="red"
                    variant="outlined"
                  >
                    {" "}
                    <IconX />{" "}
                  </Button>
                </div>
                {!selectedFiles.length && (
                  <div>
                    <h3 className="text-xl">Please upload property image</h3>
                    <div
                      className="border border-black h-52 w-52 rounded-full mt-5 flex items-center justify-center cursor-pointer"
                      onClick={() => file.current.click()}
                    >
                      <IconPlus size={50} />
                      <input
                        ref={file}
                        type="file"
                        multiple
                        accept=".jpg, .jpeg, .png, .gif"
                        className="hidden"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                )}
                <div className="grid grid-cols-2 gap-4">
                  {selectedFiles?.map((file, index) => (
                    <div className="relative inline-block" key={index}>
                      <img
                        className="h-auto max-w-full rounded-lg"
                        key={index}
                        src={URL.createObjectURL(file)}
                        alt={`Image ${index}`}
                      />

                      <IconTrash
                        color="white"
                        onClick={() => handleImageRemove(file)}
                        className="absolute top-0 right-0 p-1 m-1 bg-red-500 rounded-full"
                      />
                    </div>
                  ))}
                </div>
                {selectedFiles.length > 0 ? (
                  <Button
                    type="submit"
                    className="mt-10"
                    rightIcon={<IconCircleChevronRight />}
                  >
                    {" "}
                    {loading ? "Loading..." : "Continue"}
                  </Button>
                ) : null}
              </div>
            )}
          </form>
        )}
        {step === "success" && (
          <>
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
                <div className="space-x-4 mt-10">
                  <Button variant="outlined" color="green" onClick={onClose}>
                    Continue
                  </Button>
                  <Button
                    variant="outlined"
                    color="green"
                    onClick={() => copyLink(current?.id)}
                    leftIcon={<IconCopy size={15} />}
                  >
                    Copy Link
                  </Button>
                </div>
              </div>
            </div>
          </>
        )}
      </Drawer>
    </>
  );
};

export default AddNewProperty;
