import Drawer from "@/components/Drawer";
import Button from "@/components/global/Button";
import Input from "@/global/Input";
import Select from "@/global/Select";
import TextArea from "@/global/TextArea";
import { rentType, type } from "@/lib/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const LookingForAPlace = ({ isOpen, onClose }) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData) => {
    try {
      router.push("/shared/apartments");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Drawer isOpen={isOpen} onClose={onClose} title="Looking For A Place">
      <form className="space-y-10" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-5">
          <Input
            label="Age"
            bordered
            {...register("age", {
              required: {
                value: true,
                message: "age is required",
              },
            })}
            error={errors?.age?.message}
          />
          <Input
            label="Occupation"
            bordered
            {...register("occupation", {
              required: {
                value: true,
                message: "occupation is required",
              },
            })}
            error={errors?.occupation?.message}
          />
        </div>
        <Input
          label="Location"
          bordered
          {...register("location", {
            required: {
              value: true,
              message: "location is required",
            },
          })}
          error={errors?.location?.message}
        />
        <div className="grid grid-cols-2 gap-5">
          <Select
            options={type}
            label="House Type"
            bordered
            {...register("house_type", {
              required: {
                value: true,
                message: "house_type is required",
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
                message: "rent_type is required",
              },
            })}
            error={errors?.rent_type?.message}
          />
        </div>
        <div className="grid grid-cols-2 gap-5">
          <Input
            label="Preffered move in Date"
            type="date"
            bordered
            {...register("date", {
              required: {
                value: true,
                message: "date is required",
              },
            })}
            error={errors?.date?.message}
          />
          <Input
            label="Preferred Duration of Stay "
            bordered
            {...register("duration", {
              required: {
                value: true,
                message: "duration is required",
              },
            })}
            error={errors?.duration?.message}
          />
        </div>
        <TextArea label="Reason for co-sharing or Note" />
        <Button color="black" type="submit">
          Submit
        </Button>
      </form>
      <div className="absolute bottom-0 right-0">
        <img src="/images/co-living.jpeg" alt="" width="300px" />
      </div>
    </Drawer>
  );
};

export default LookingForAPlace;
