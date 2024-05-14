"use client";
import Button from "@/components/global/Button";
import Input from "@/global/Input";
import Select from "@/global/Select";
import { locations, rentType, type } from "@/lib/utils";

const Filters = () => {
  return (
    <div className="w-full flex justify-between">
      <Select options={locations} label="Locations" bordered />
      <Select options={type} label="House Type" bordered />
      <Select options={rentType} label="Rent per month or week" bordered />
      <Input label="Max Rent" bordered />
      <div className="my-auto">
        <Button>Submit</Button>
      </div>
    </div>
  );
};

export default Filters;
