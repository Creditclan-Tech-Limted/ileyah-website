"use client";

import Drawer from "@/components/Drawer";
import IconButton from "@/global/IconButton";
import Steppers from "./Steppers";
import Input from "@/global/Input";
import { IconX, IconCircleChevronLeft } from "@tabler/icons-react";
import Select from "@/global/Select";
import TextArea from "@/global/TextArea";
import { MultiSelect } from "react-multi-select-component";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Button from "@/components/global/Button";
import { availableAreas, rentType } from "@/lib/utils";
import { useToast } from "@/lib/use-toast";
import axios from "axios";

const houseShareType = [
  { text: "1 bed space", value: "1 bed space" },
  { text: "2 bed space", value: "2 bed space" },
  { text: "3 bed space", value: "3 bed space" },
  { text: "4 bed space", value: "4 bed space" },
];

const FlatShareModal = ({ isOpen, onClose }) => {
  const router = useRouter();
  const toast = useToast();
  const [image, setImage] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const [selectedFilterArea, setSelectedFilterArea] = useState([]);
  const [views, setViews] = useState("personal-information");

  const onSubmit = async (formData) => {
    try {
      if (views === "personal-information") {
        setViews("housing-preferences");
      }
      if (views === "housing-preferences") {
        setViews("flatmate-preferences");
      }
      if (views === "flatmate-preferences") {
        const payload = {
          ...formData,
          image,
        };

        const res = await axios.post(
          "https://lendnode.creditclan.com/kuda/api/flatshare/create_flatshare",
          payload
        );
        if (res.data) {
          toast.success(
            "You're on the list! 🎉 We’ll keep you posted on the next steps. Stay tuned!"
          );

          await axios.post(
            "https://sellbackend.creditclan.com/mail/index.php/email_sender/send_individual",
            {
              email: payload.email,
              customer_name: payload.full_name || "-",
              message_type: "signup",
              vertical: "Ileyah",
            }
          );
        } else {
          toast.error("Failed to submit the request. Please try again.");
        }
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred. Please try again later.");
    }
  };

  const handleBack = () => {
    if (views === "housing-preferences") {
      setViews("personal-information");
    } else if (views === "flatmate-preferences") {
      setViews("housing-preferences");
    } else if (views === "summary") {
      setViews("flatmate-preferences");
    }
  };

  const onChange = (e) => {
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }

    if (files.length === 0) return;

    const file = files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      padding={false}
      longer={true}
      source="flat-share"
    >
      <div className="md:grid md:grid-cols-[0.9fr_1.4fr] gap-0 h-full w-full">
        <div className="relative hidden md:flex">
          <div className="sticky top-0 flex flex-col h-screen px-16 text-white bg-gray-900 pattern-1">
            <div className="mt-auto mb-10 space-y-6">
              <p className="text-6xl font-extrabold">
                Find your perfect co-living space now
              </p>
              <Button>Join waitlist now</Button>
            </div>
          </div>
        </div>

        <div className="w-full px-5 py-5 md:py-10 md:px-14">
          <div className="flex items-center justify-between">
            <h2 className="font-bold">Find a house</h2>
            <div>
              <IconButton
                onClick={onClose}
                rounded
                icon={<IconX size="20" />}
                size="sm"
                color="red"
                variant="outlined"
              />
            </div>
          </div>
          <Steppers
            views={views}
            handleSetViews={(value) => setViews(value)}
            className="mt-4"
          />
          <form className="mt-10 space-y-12" onSubmit={handleSubmit(onSubmit)}>
            {views === "personal-information" && (
              <>
                <Input
                  label="Full Name"
                  bordered
                  {...register("full_name", {
                    required: {
                      value: true,
                      message: "Full name is required",
                    },
                  })}
                  error={errors?.full_name?.message}
                />
                <Input
                  label="Phone"
                  bordered
                  {...register("phone", {
                    required: {
                      value: true,
                      message: "Phone is required",
                    },
                  })}
                  error={errors?.phone?.message}
                />
                <Input
                  label="Email"
                  bordered
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is required",
                    },
                  })}
                  error={errors?.email?.message}
                />
                <Select
                  options={[
                    { text: "Male", value: "male" },
                    { text: "Female", value: "female" },
                  ]}
                  label="Gender"
                  bordered
                  {...register("gender", {
                    required: {
                      value: true,
                      message: "Gender is required",
                    },
                  })}
                  error={errors?.gender?.message}
                />
                <Input
                  label="Occupation"
                  bordered
                  {...register("occupation", {
                    required: {
                      value: true,
                      message: "Occupation is required",
                    },
                  })}
                  error={errors?.occupation?.message}
                />

                <div className="flex items-center justify-between px-6 py-6 border border-gray-300 rounded-3xl">
                  <p className="max-w-xs text-cc-dark">
                    Upload a picture of yourself
                  </p>
                  <div>
                    <div className="flex items-center">
                      <label className="border-2 border-gray-300 border-dashed w-[150px] h-[150px] rounded-2xl flex justify-center items-center hover:bg-gray-100 cursor-pointer relative">
                        <input
                          type="file"
                          className="w-[1px] h-[1px] absolute top-0 left-0"
                          onChange={onChange}
                        />
                        {image ? (
                          <img
                            src={image}
                            alt="Preview"
                            className="absolute inset-0 object-cover w-full h-full rounded-2xl"
                          />
                        ) : (
                          <i className="opacity-75 fa-solid fa-plus fa-2x"></i>
                        )}
                      </label>
                    </div>
                  </div>
                </div>

                {/* <Input
                                    label="Monthly Income Range (₦)"
                                    placeholder="e.g., ₦100,000 - ₦300,000"
                                    bordered
                                    {...register("income_range", {
                                        required: {
                                            value: true,
                                            message: "Income range is required",
                                        },
                                    })}
                                    error={errors?.income_range?.message}
                                />
                                <div className="grid grid-cols-2 space-x-3">
                                    <Input
                                        label="Company Name"
                                        placeholder="Enter company name"
                                        bordered
                                        {...register("company_name", {
                                            required: {
                                                value: true,
                                                message: "Company name is required",
                                            },
                                        })}
                                        error={errors?.company_name?.message}
                                    />
                                    <Input
                                        label="Position/Role"
                                        placeholder="Enter your job title"
                                        bordered
                                        {...register("job_role", {
                                            required: {
                                                value: true,
                                                message: "Job role is required",
                                            },
                                        })}
                                        error={errors?.job_role?.message}
                                    />
                                </div>
                                <div className="grid grid-cols-2 space-x-3">
                                    <Input
                                        label="Guarantor Full Name"
                                        placeholder="Enter guarantor's full name"
                                        bordered
                                        {...register("guarantor_name", {
                                            required: {
                                                value: true,
                                                message: "Guarantor name is required",
                                            },
                                        })}
                                        error={errors?.guarantor_name?.message}
                                    />
                                    <Input
                                        label="Guarantor Contact Number"
                                        placeholder="Enter guarantor's phone number"
                                        bordered
                                        {...register("guarantor_contact", {
                                            required: {
                                                value: true,
                                                message: "Guarantor contact is required",
                                            },
                                            pattern: {
                                                value: /^[0-9]{10,11}$/,
                                                message: "Enter a valid phone number",
                                            },
                                        })}
                                        error={errors?.guarantor_contact?.message}
                                    />
                                </div>
                                <div className="grid grid-cols-2 space-x-3">
                                    <Input
                                        label="Guarantor Relationship"
                                        placeholder="e.g., Parent, Employer, Friend"
                                        bordered
                                        {...register("guarantor_relationship", {
                                            required: {
                                                value: true,
                                                message: "Relationship is required",
                                            },
                                        })}
                                        error={errors?.guarantor_relationship?.message}
                                    />
                                    <Select
                                        options={[
                                            { text: "Yes", value: "yes" },
                                            { text: "No", value: "no" },
                                        ]}
                                        label="Are you ready to pay a security deposit?"
                                        bordered
                                        {...register("security_deposit", {
                                            required: {
                                                value: true,
                                                message: "Security deposit readiness is required",
                                            },
                                        })}
                                        error={errors?.security_deposit?.message}
                                    />
                                </div>




                                <TextArea
                                    label="Tell us about yourself"
                                    placeholder="Write a short paragraph about your personality and what you're looking for in a co-living experience..."
                                    bordered
                                    {...register("bio", {
                                        required: {
                                            value: true,
                                            message: "A short bio is required",
                                        },
                                        minLength: {
                                            value: 20,
                                            message: "Please provide at least 20 characters",
                                        },
                                    })}
                                    error={errors?.bio?.message}
                                />





                                <TextArea
                                    label="Flatmate Preferences / Deal-breakers"
                                    placeholder="Mention any specific preferences or deal-breakers (e.g., 'No smokers', 'Prefer quiet environment')..."
                                    bordered
                                    {...register("flatmate_preferences")}
                                />
                                <TextArea
                                    label="Additional Information or Requests"
                                    placeholder="Write any extra details or requests you have for your ideal living situation..."
                                    bordered
                                    {...register("additional_requests")}
                                /> */}

                <Button color="black" type="submit">
                  Proceed
                </Button>
              </>
            )}
            {views === "housing-preferences" && (
              <div className="mt-10 space-y-8">
                <div>
                  <p className="mb-2">Please select Location</p>
                  <MultiSelect
                    options={availableAreas}
                    value={selectedFilterArea}
                    onChange={setSelectedFilterArea}
                    labelledBy="Please select area"
                  />
                </div>
                <Select
                  options={houseShareType}
                  label="House Type"
                  bordered
                  {...register("house_type", {
                    required: {
                      value: true,
                      message: "house type is required",
                    },
                  })}
                  error={errors?.house_type?.message}
                />
                <Select
                  label="Budget Range for Rent"
                  bordered
                  {...register("budget_range", {
                    required: {
                      value: true,
                      message: "Budget range is required",
                    },
                  })}
                  error={errors?.budget_range?.message}
                  options={[
                    { text: "50k - 100k", value: "200k - 400k" },
                    { text: "100k - 200k", value: "200k - 400k" },
                    { text: "300k - 400k", value: "200k - 400k" },
                    { text: "400k - 600k", value: "400k - 600k" },
                    { text: "600k - 800k", value: "600k - 800k" },
                    { text: "800k - 1M", value: "800k - 1M" },
                    { text: "1M - 1.2M", value: "1M - 1.2M" },
                    { text: "1.2M - 1.5M", value: "1.2M - 1.5M" },
                    { text: "1.5M and above", value: "1.5M and above" },
                  ]}
                />

                {/* <div className="grid grid-cols-2 space-x-3">
                                    <Select
                                        options={[
                                            { text: "Male", value: "male" },
                                            { text: "Female", value: "female" },
                                        ]}
                                        label="Gender Preferences"
                                        bordered
                                        {...register("gender", {
                                            required: {
                                                value: true,
                                                message: "Gender is required",
                                            },
                                        })}
                                        error={errors?.gender?.message}
                                    />
                                </div>
                                <div className="grid grid-cols-2 space-x-3">
                                    <Select
                                        options={rentType}
                                        label="Rent per month or year"
                                        bordered
                                        {...register("rent_type", {
                                            required: {
                                                value: true,
                                                message: "rent type is required",
                                            },
                                        })}
                                        error={errors?.rent_type?.message}
                                    />
                                </div>
                                <div className="grid grid-cols-2 space-x-3">
                                    <Input
                                        label="Preferred Move-in Date"
                                        type="date"
                                        bordered
                                        {...register("move_in_date", {
                                            required: {
                                                value: true,
                                                message: "Move-in date is required",
                                            },
                                        })}
                                        error={errors?.move_in_date?.message}
                                    />
                                </div>
                                <div className="grid grid-cols-2 space-x-3">
                                    <Select
                                        options={[
                                            { text: "Monthly", value: "monthly" },
                                            { text: "Quarterly", value: "quarterly" },
                                            { text: "Annually", value: "annually" },
                                        ]}
                                        label="Preferred Payment Structure"
                                        bordered
                                        {...register("payment_structure", {
                                            required: {
                                                value: true,
                                                message: "Payment structure is required",
                                            },
                                        })}
                                        error={errors?.payment_structure?.message}
                                    />
                                    <Select
                                        options={[
                                            { text: "Short-term", value: "short_term" },
                                            { text: "Long-term", value: "long_term" },
                                            { text: "Flexible", value: "flexible" },
                                        ]}
                                        label="Lease Duration Preference"
                                        bordered
                                        {...register("lease_duration", {
                                            required: {
                                                value: true,
                                                message: "Lease duration preference is required",
                                            },
                                        })}
                                        error={errors?.lease_duration?.message}
                                    />
                                </div>
                                 */}

                <div className="flex gap-3 text">
                  <IconCircleChevronLeft
                    size="40"
                    color="red"
                    onClick={handleBack}
                  />
                  <Button color="black" type="submit">
                    Proceed
                  </Button>
                </div>
              </div>
            )}
            {views === "flatmate-preferences" && (
              <div className="mt-10 space-y-8">
                <Select
                  options={[
                    { text: "Male", value: "male" },
                    { text: "Female", value: "female" },
                  ]}
                  label="Preferred Gender of Room-mate"
                  bordered
                  {...register("flatmate_gender", {
                    required: {
                      value: true,
                      message: "This field is required",
                    },
                  })}
                  error={errors?.flatmate_gender?.message}
                />
                <Select
                  options={[
                    { text: "18-25", value: "18-25" },
                    { text: "26-30", value: "26-30" },
                    { text: "31-35", value: "31-35" },
                    { text: "36-40", value: "36-40" },
                    { text: "41+", value: "41+" },
                  ]}
                  label="Preferred Age Range of Flatmates"
                  bordered
                  {...register("flatmate_age_range", {
                    required: {
                      value: true,
                      message: "Age range is required",
                    },
                  })}
                  error={errors?.flatmate_age_range?.message}
                />
                <Select
                  options={[
                    { text: "Full-Time", value: "full-time" },
                    { text: "Part-Time", value: "part-time" },
                    { text: "Freelance", value: "freelance" },
                    { text: "Contract", value: "contract" },
                    { text: "Remote", value: "remote" },
                    { text: "Intern", value: "intern" },
                    { text: "Self-Employed", value: "self-employed" },
                    { text: "Student", value: "student" },
                    { text: "Retired", value: "retired" },
                    { text: "Unemployed", value: "unemployed" },
                    { text: "Job-Seeker", value: "job-seeker" },
                    { text: "Office-based", value: "office_based" },
                  ]}
                  label="Work Type"
                  bordered
                  {...register("work_type", {
                    required: { value: true, message: "Work type is required" },
                  })}
                  error={errors?.work_type?.message}
                />

                {/*
                                {/* <div className="grid grid-cols-2 space-x-3">
                                    <Select
                                        options={[
                                            { text: "1", value: "1" },
                                            { text: "2", value: "2" },
                                            { text: "3", value: "3" },
                                            { text: "4+", value: "4+" },
                                        ]}
                                        label="Number of Flatmates Comfortable With"
                                        bordered
                                        {...register("flatmate_count", {
                                            required: {
                                                value: true,
                                                message: "This field is required",
                                            },
                                        })}
                                        error={errors?.flatmate_count?.message}
                                    />
                                </div>
                                
                                <div className="grid grid-cols-2 space-x-3">
                                    <Select
                                        options={[
                                            { text: "Open to Visitors", value: "open" },
                                            { text: "Limited Guests", value: "limited" },
                                            { text: "No Guests Allowed", value: "no_guests" },
                                        ]}
                                        label="Guest Policy"
                                        bordered
                                        {...register("guest_policy", {
                                            required: {
                                                value: true,
                                                message: "This field is required",
                                            },
                                        })}
                                        error={errors?.guest_policy?.message}
                                    />
                                    
                                </div>
                                <div className="grid grid-cols-2 space-x-3">
                                <Select
                                options={[
                                            { text: "Owns a Pet", value: "owns_pet" },
                                            {
                                                text: "Comfortable with Pets",
                                                value: "comfortable_with_pets",
                                            },
                                            { text: "No Pets Allowed", value: "no_pets" },
                                        ]}
                                        label="Pet Ownership & Preference"
                                        bordered
                                        {...register("pet_preference", {
                                            required: {
                                                value: true,
                                                message: "This field is required",
                                                },
                                                })}
                                                error={errors?.pet_preference?.message}
                                                />
                                                </div> 
                                                
                                <TextArea
                                    label="Allergies or Special Needs"
                                    bordered
                                    {...register("allergies", {})}
                                    error={errors?.allergies?.message}
                                    placeholder="e.g., Pet Allergies, Dietary Restrictions, etc."
                                />
                                                */}

                <div className="flex gap-3 text">
                  <IconCircleChevronLeft
                    size="40"
                    color="red"
                    onClick={handleBack}
                  />
                  <Button color="black" type="submit">
                    Proceed
                  </Button>
                </div>
              </div>
            )}

            {views === "summary" && (
              <div>
                <div>
                  <p className="mb-5">House Information</p>
                  <div className="px-6 py-4 space-y-4 border border-gray-400 rounded-xl">
                    <div className="flex justify-between">
                      <p>Name</p>
                      <p>{watch("full_name")}</p>
                    </div>
                    <div className="flex justify-between">
                      <p>Phone</p>
                      <p>{watch("phone")}</p>
                    </div>
                    <div className="flex justify-between">
                      <p>Email</p>
                      <p>{watch("email")}</p>
                    </div>
                    <div className="flex justify-between">
                      <p>Occupation</p>
                      <p>{watch("occupation")}</p>
                    </div>
                    <div className="flex justify-between">
                      <p>Monthly Income Range (₦)</p>
                      <p>{watch("income_range")}</p>
                    </div>
                    {/* <div className="flex justify-between">
                                            <p>Occupation</p>
                                            <p>{watch("occupation")}</p>
                                        </div> */}

                    <div className="flex justify-between">
                      <p>Area</p>
                      <p>{selectedFilterArea[0].value}</p>
                    </div>
                    <div className="flex justify-between">
                      <p>Gender Prefences</p>
                      <p>{watch("gender")}</p>
                    </div>
                    <div className="flex justify-between">
                      <p>House Type</p>
                      <p>{watch("house_type")}</p>
                    </div>
                    <div className="flex justify-between">
                      <p>Rent Type</p>
                      <p>{watch("rent_type")}</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3 mt-10 text">
                  <IconCircleChevronLeft
                    size="40"
                    color="red"
                    onClick={handleBack}
                  />
                  <Button color="black" type="submit" className="">
                    Proceed
                  </Button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </Drawer>
  );
};

export default FlatShareModal;
