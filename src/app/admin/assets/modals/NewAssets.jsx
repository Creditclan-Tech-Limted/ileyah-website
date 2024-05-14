import Drawer from "@/components/Drawer";
import Button from "@/components/global/Button";
import Input from "@/global/Input";
import Select from "@/global/Select";
import TextArea from "@/global/TextArea";
import { areas, banks, lgas } from "@/lib/utils";
import { IconPlus } from "@tabler/icons-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

const sectors = [
  { text: "Fulfilled", value: "Fulfilled" },
  { text: "Empty", value: "Empty" },
];

const NewAssets = ({ isOpen, onClose }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [data, setdata] = useState();

  const onChange = async (e) => {
    try {
      const files = Array.from(e.target.files);
      setSelectedFiles(files);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = async (formData) => {
    try {
      console.log({ formData });
      // const { data } = await send(formData);
      // toast.success(data.message || 'Request Successfully Created');
      // reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Drawer isOpen={isOpen} onClose={onClose} title="Add New Assets">
        <form onSubmit={handleSubmit(onSubmit)}>
          <p className="font-bold">* Asset Location</p>
          <hr className="bg-gray-100 my-3" />
          <div className="space-y-10">
            <Input
              label="Name"
              bordered
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is required",
                },
              })}
              error={errors?.name?.message}
            />
            <TextArea
              label="House Address"
              {...register("address", {
                required: {
                  value: true,
                  message: "Address is required",
                },
              })}
              error={errors?.address?.message}
            />
            <div className="grid grid-cols-2 gap-10">
              <Input
                label="Aquired Date"
                bordered
                type="date"
                {...register("acq_date", {
                  required: {
                    value: true,
                    message: "Aquired Date is required",
                  },
                })}
                error={errors?.acq_date?.message}
              />

              <Select
                options={sectors}
                label="Status"
                bordered
                {...register("sectors", {
                  required: {
                    value: true,
                    message: "Sector is required",
                  },
                })}
                error={errors?.sectors?.message}
              />
            </div>
            <div className="mb-4">
              <Select
                options={areas}
                label="Area"
                name="Area"
                {...register("Area", {
                  required: {
                    value: true,
                    message: "Area is required",
                  },
                })}
                error={errors?.Area?.message}
              />
            </div>
            <div className="mb-4">
              <Select
                options={lgas}
                label="L.G.A"
                name="LGA"
                {...register("LGA", {
                  required: {
                    value: true,
                    message: "LGA is required",
                  },
                })}
                error={errors?.LGA?.message}
              />
            </div>
          </div>
          <div className="mt-10">
            <p className="font-bold"> * Rent</p>
            <hr className="bg-gray-100 my-3" />
            <div className="space-y-10 mt-5">
              <div className="grid grid-cols-2 gap-10">
                <Input
                  label="Price"
                  bordered
                  type="number"
                  {...register("rent", {
                    required: {
                      value: true,
                      message: "Rent is required",
                    },
                  })}
                  error={errors?.rent?.message}
                />
                <Input
                  label="No of yrs Paid for"
                  bordered
                  type="number"
                  {...register("no_of_years", {
                    required: {
                      value: true,
                      message: "no_of_years is required",
                    },
                  })}
                  error={errors?.no_of_years?.message}
                />
                <Input
                  label="Service Charge"
                  bordered
                  type="number"
                  {...register("service_charge", {
                    required: {
                      value: true,
                      message: "Service Charge is required",
                    },
                  })}
                  error={errors?.service_charge?.message}
                />
                <Input
                  label="Agreement"
                  bordered
                  {...register("agreeement", {
                    required: {
                      value: true,
                      message: "agreeement is required",
                    },
                  })}
                  error={errors?.agreeement?.message}
                />
                <Input
                  label="Agency"
                  bordered
                  type="number"
                  {...register("agency", {
                    required: {
                      value: true,
                      message: "Agency is required",
                    },
                  })}
                  error={errors?.agency?.message}
                />
                <Input
                  label="Caution"
                  bordered
                  type="number"
                  {...register("caution", {
                    required: {
                      value: true,
                      message: "Caution is required",
                    },
                  })}
                  error={errors?.caution?.message}
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <p className="font-bold"> * Landlord / Agent Details...</p>
            <hr className="bg-gray-100 my-3" />
            <div className="grid grid-cols-2 gap-10 mb-10">
              <Input
                label="Name"
                bordered
                {...register("landlord_name", {
                  required: {
                    value: true,
                    message: "landlord_name is required",
                  },
                })}
                error={errors?.landlord_name?.message}
              />
              <Input
                label="Phone Number"
                bordered
                type="number"
                {...register("landlord_phone", {
                  required: {
                    value: true,
                    message: "landlord_phone is required",
                  },
                })}
                error={errors?.landlord_phone?.message}
              />
            </div>
            <TextArea
              label="Address"
              {...register("landlord_address", {
                required: {
                  value: true,
                  message: " landlord_address is required",
                },
              })}
              error={errors?.landlord_address?.message}
            />
            <div className="grid grid-cols-2 gap-10 mt-10 ">
              <Input
                label="Account Number"
                bordered
                {...register("landlord_account_number", {
                  required: {
                    value: true,
                    message: "landlord_account_number is required",
                  },
                })}
                error={errors?.landlord_account_number?.message}
              />
              <Select
                options={banks}
                label="Please select bank"
                bordered
                {...register("bank", {
                  required: {
                    value: true,
                    message: "Bank is required",
                  },
                })}
                error={errors?.bank?.message}
              />
            </div>
          </div>
          <div className="mt-10">
            <p className="font-bold"> * Attahchments...</p>
            <hr className="bg-gray-100 my-3" />

            <div className="flex items-center justify-between border border-gray-300 rounded-3xl px-6 py-6">
              <p className="text-cc-dark max-w-xs">
                Kindly Upload all attachements as regards this property
              </p>
              <div>
                <div className="flex items-center">
                  <label className="border-2 border-gray-300 border-dashed w-[150px] h-[50px] rounded-2xl flex justify-center items-center hover:bg-gray-100 cursor-pointer relative">
                    <input
                      type="file"
                      multiple
                      className="w-[1px] h-[1px] absolute top-0 left-0"
                      onChange={onChange}
                    />
                    {!!data?.houseImage?.picture ? (
                      <img
                        src={data?.houseImage?.picture}
                        alt="user"
                        className="absolute inset-0 w-full h-full bg-cover bg-center rounded-2xl"
                      />
                    ) : (
                      <i className="fa-solid fa-plus fa-2x opacity-75"></i>
                    )}
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <p className="font-bold"> * AVS...</p>
            <hr className="bg-gray-100 my-3" />
            <div className="grid grid-cols-2 gap-10">
              <Input
                label="No of AVS"
                bordered
                type="number"
                {...register("no_of_avs", {
                  required: {
                    value: true,
                    message: "no_of_avs is required",
                  },
                })}
                error={errors?.no_of_avs?.message}
              />
              <Input
                label="How much spent per AVS"
                bordered
                type="number"
                {...register("paid_per_avs", {
                  required: {
                    value: true,
                    message: "paid_per_avs is required",
                  },
                })}
                error={errors?.paid_per_avs?.message}
              />
            </div>
          </div>
          <div className="mt-10">
            <Button leftIcon={<IconPlus />} type="submit">
              Add Property
            </Button>
          </div>
        </form>
      </Drawer>
    </>
  );
};

export default NewAssets;
