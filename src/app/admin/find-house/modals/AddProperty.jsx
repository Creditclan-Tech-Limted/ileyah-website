import Drawer from "@/components/Drawer";
import Button from "@/components/global/Button";
import Input from "@/global/Input";
import Select from "@/global/Select";
import TextArea from "@/global/TextArea";
import { useToast } from "@/lib/use-toast";
import { areas } from "@/lib/utils";
import useSignupStore from "@/store/signup";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const AddProperty = ({ isOpen, onClose, current }) => {
  const toast = useToast();
  const { data, updateData } = useSignupStore((state) => state);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const house_types = [
    { value: "room-only", text: "Room only" },
    { value: "room-parlour", text: "Room and parlour" },
    { value: "two-bedroom", text: "Two bedroom" },
    { value: "three-bedroom", text: "Three bedroom" },
    { value: "four-bedroom", text: "Four bedroom" },
    { value: "bungalow", text: "Bungalow" },
    { value: "duplex", text: "Duplex" },
  ];

  const onSubmit = async (values) => {
    const res = await axios.post(
      "https://lendnode.creditclan.com/kuda/agents/createFindHouse",
      { ...values, landlordAgentId: data?.user.id }
    );
  };

  return (
    <>
      <Drawer isOpen={isOpen} onClose={onClose} title={"Add Property"}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-6">
            <Input
              bordered
              label="Rent "
              block
              {...register("amount", {
                required: {
                  value: true,
                  message: "amount is required",
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
            <Select
              options={areas}
              label="Area"
              name="Area"
              {...register("area", {
                required: {
                  value: true,
                  message: "area is required",
                },
              })}
              error={errors?.area?.message}
            />
            <TextArea
              label="Comments / Descriptions"
              bordered
              {...register("comments", {})}
              error={errors?.comments?.message}
            />
          </div>
          <Button type="submit" className="mt-10" loading={false}>
            Submit
          </Button>
        </form>
      </Drawer>
    </>
  );
};

export default AddProperty;
