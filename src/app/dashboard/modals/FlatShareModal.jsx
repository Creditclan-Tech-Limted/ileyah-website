import Drawer from "@/components/Drawer";
import IconButton from "@/global/IconButton";
import Steppers from "./Steppers";
import Input from "@/global/Input";
import { IconX } from "@tabler/icons-react";
import Select from "@/global/Select";
import TextArea from "@/global/TextArea";
import { MultiSelect } from "react-multi-select-component";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Button from "@/components/global/Button";

const houseShareType = [
  { text: "1 bed space", value: "1 bed space" },
  { text: "2 bed space", value: "2 bed space" },
  { text: "3 bed space", value: "3 bed space" },
  { text: "4 bed space", value: "4 bed space" },
];

const FlatShareModal = ({ isOpen, onClose }) => {
  const router = useRouter();
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
        setViews("summary");
      }
      if (views === "summary") {
        // router.push("/shared/apartments");
        console.log({ formData });
      }
    } catch (error) {
      console.error(error);
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

  return (
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      padding={false}
      source="flat-share"
    >
      <div className="grid grid-cols-[0.9fr_1.4fr] gap-0 h-full">
        <div className="relative flex">
          <div className="sticky top-0 flex flex-col h-screen px-16 text-white bg-gray-900 pattern-1">
            <div className="space-y-6 mb-10 mt-auto">
              <p className="text-6xl font-extrabold">
                Find your perfect co-living space now
              </p>
              <Button>Join waitlist now</Button>
            </div>
          </div>
        </div>

        <div className="py-10 px-14">
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
                <div className="grid grid-cols-2 space-x-3">
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
                </div>
                <div className="grid grid-cols-2 space-x-3">
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

                  {/* 4. Financial & Background Information */}
                  <Input
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
                </div>
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

                {/* 5. About You (Optional but Helpful): */}

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

                {/* 6. Additional Preferences & Comments */}

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
                />

                {/* 7. Waitlist Management: */}
                <Button color="black" type="submit">
                  Proceed
                </Button>
              </>
            )}
            {views === "housing-preferences" && (
              <div className="mt-10 space-y-8">
                {/* 2. Housing Preferences */}
                <div className="grid grid-cols-2 space-x-3">
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
                    options={[
                      { text: "Male", value: "male" },
                      { text: "Female", value: "female" },
                      { text: "Nil", value: "Nil" },
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
                    options={rentType}
                    label="Rent per month or week"
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
                  <Input
                    label="Budget Range for Rent & Utilities"
                    bordered
                    {...register("budget_range", {
                      required: {
                        value: true,
                        message: "Budget range is required",
                      },
                    })}
                    placeholder="200k - 400k"
                    error={errors?.budget_range?.message}
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
                <Select
                  options={[
                    { text: "Furnished", value: "furnished" },
                    { text: "Unfurnished", value: "unfurnished" },
                    { text: "No Preference", value: "no_preference" },
                  ]}
                  label="Furnished or Unfurnished Preference"
                  bordered
                  {...register("furnishing_preference", {
                    required: {
                      value: true,
                      message: "Furnishing preference is required",
                    },
                  })}
                  error={errors?.furnishing_preference?.message}
                />

                <div className="text flex gap-3">
                  <button
                    className="rounded-full transition duration-100 inline-flex items-center whitespace-nowrap px-6 py-2 bg-gray-400"
                    onClick={handleBack}
                  >
                    Back
                  </button>
                  <Button color="black" type="submit">
                    Proceed
                  </Button>
                </div>
              </div>
            )}
            {views === "flatmate-preferences" && (
              <div className="mt-10 space-y-8">
                {/*3. Flatmate Preferences & Lifestyle */}
                <div className="grid grid-cols-2 space-x-3">
                  <Select
                    options={[
                      { text: "Male", value: "male" },
                      { text: "Female", value: "female" },
                      { text: "No Preference", value: "no_preference" },
                    ]}
                    label="Preferred Gender of Flatmates"
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
                </div>
                <div className="grid grid-cols-2 space-x-3">
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
                  <Select
                    options={[
                      { text: "Work from Home", value: "work_from_home" },
                      { text: "Hybrid", value: "hybrid" },
                      { text: "Office-based", value: "office_based" },
                      { text: "Student", value: "student" },
                      { text: "Freelancer", value: "freelancer" },
                    ]}
                    label="Daily Routine"
                    bordered
                    {...register("daily_routine", {
                      required: {
                        value: true,
                        message: "This field is required",
                      },
                    })}
                    error={errors?.daily_routine?.message}
                  />
                </div>
                <div className="grid grid-cols-2 space-x-3">
                  <Select
                    options={[
                      { text: "Early Riser", value: "early_riser" },
                      { text: "Night Owl", value: "night_owl" },
                      { text: "Flexible", value: "flexible" },
                    ]}
                    label="Sleeping Habits"
                    bordered
                    {...register("sleeping_habits", {
                      required: {
                        value: true,
                        message: "This field is required",
                      },
                    })}
                    error={errors?.sleeping_habits?.message}
                  />
                  <Select
                    options={[
                      { text: "Extrovert", value: "extrovert" },
                      { text: "Introvert", value: "introvert" },
                      { text: "Ambivert", value: "ambivert" },
                    ]}
                    label="Social Habits"
                    bordered
                    {...register("social_habits", {
                      required: {
                        value: true,
                        message: "This field is required",
                      },
                    })}
                    error={errors?.social_habits?.message}
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
                  <Select
                    options={[
                      { text: "Quiet", value: "quiet" },
                      { text: "Moderate", value: "moderate" },
                      { text: "No Preference", value: "no_preference" },
                    ]}
                    label="Noise Tolerance"
                    bordered
                    {...register("noise_tolerance", {
                      required: {
                        value: true,
                        message: "This field is required",
                      },
                    })}
                    error={errors?.noise_tolerance?.message}
                  />
                </div>
                <div className="grid grid-cols-2 space-x-3">
                  <Input
                    label="Allergies or Special Needs"
                    bordered
                    {...register("allergies", {})}
                    error={errors?.allergies?.message}
                    placeholder="e.g., Pet Allergies, Dietary Restrictions, etc."
                  />
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
                <div className="grid grid-cols-2 space-x-3">
                  <Select
                    options={[
                      { text: "Smoker", value: "smoker" },
                      { text: "Non-Smoker", value: "non_smoker" },
                      { text: "No Preference", value: "no_preference" },
                    ]}
                    label="Smoking Preference"
                    bordered
                    {...register("smoking_preference", {
                      required: {
                        value: true,
                        message: "This field is required",
                      },
                    })}
                    error={errors?.smoking_preference?.message}
                  />
                  <Select
                    options={[
                      { text: "Yes", value: "yes" },
                      { text: "No", value: "no" },
                      { text: "Occasionally", value: "occasionally" },
                      { text: "No Preference", value: "no_preference" },
                    ]}
                    label="Alcohol Consumption"
                    bordered
                    {...register("alcohol_consumption", {
                      required: {
                        value: true,
                        message: "This field is required",
                      },
                    })}
                    error={errors?.alcohol_consumption?.message}
                  />
                </div>
                <div className="text flex gap-3">
                  <button
                    className="rounded-full transition duration-100 inline-flex items-center whitespace-nowrap px-6 py-2 bg-gray-400"
                    onClick={handleBack}
                  >
                    Back
                  </button>
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
                      <p>{watch("Phone")}</p>
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
                      <p>Area</p>
                      {/* <p>{selectedFilterArea[0].value}</p> */}
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
                <div className="text flex gap-3 mt-10">
                  <button
                    className="rounded-full transition duration-100 inline-flex items-center whitespace-nowrap px-6 py-2 bg-gray-400 me-5"
                    onClick={handleBack}
                  >
                    Back
                  </button>
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
