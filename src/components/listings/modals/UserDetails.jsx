import Button from "@/components/global/Button";
import Input from "@/global/Input";
import useSignupStore from "@/store/signup";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useToast } from "@/lib/use-toast";
import { IconChevronLeft } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

const UserDetails = ({ onBack }) => {
  const { data, updateData } = useSignupStore((state) => state);
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: { ...data?.user },
  });

  const submit = async (values) => {
    try {
      setLoading(true);
      const res = await axios.post(
        "https://kuda-creditclan-api.herokuapp.com/agents/createInspections",
        {
          date: "23-10-2000",
          time: "12:00",
          landlordAgentId: data?.user?.id,
          propertyId: data?.property?.id,
        }
      );
      reset();

      console.log(res?.data);
      updateData({ property: null });
      setLoading(false);
      router.push("dashboard");
      toast.success("Submitted");
    } catch (error) {
      console.log({ error });
    }
  };
  return (
    <>
      <div className="pb-3">
        <p className="text-cc-dark font-17 flex">
          Please provide the following information to proceed
        </p>
      </div>
      <form onSubmit={handleSubmit(submit)} className="mt-10 space-y-10">
        <Input
          label="Date"
          type="date"
          bordered
          {...register("date", {
            required: {
              value: true,
              message: "Date is required",
            },
          })}
          error={errors?.date?.message}
        />

        <Input
          label="Time"
          type="time"
          bordered
          {...register("time", {
            required: {
              value: true,
              message: "Time is required",
            },
          })}
          error={errors?.time?.message}
        />

        <Button type="submit" loading={loading}>
          Submit
        </Button>
      </form>
    </>
  );
};

export default UserDetails;
