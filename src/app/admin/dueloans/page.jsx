"use client";
import { useGetIleyahLoans } from "@/api/rent";
import Button from "@/components/global/Button";
import SimpleDropdown from "@/global/SimpleDropdown";
import { formatCurrency } from "@/lib/utils";
import { Select, SelectItem } from "@nextui-org/react";
import { IconChevronDown, IconLogout } from "@tabler/icons-react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import classNames from "classnames";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Page = ({ className }) => {
  const router = useRouter();
  const [properties, setProperties] = useState([]);
  const [category, setCategory] = useState("all");

  const getPorperties = async () => {
    try {
      const res = await axios.post(
        "https://lendnode.creditclan.com/ileya_due",
        { page: 1, start: 0 }
      );
      setProperties(res?.data?.data);
      return res?.data?.data?.data;
    } catch (error) {
      console.log({ error });
    }
  };

  const {
    data,
    isLoading,
  } = useGetIleyahLoans(category);

  console.log({ data, isLoading });

  // const { data, isLoading, error } = useQuery(["due-loans"], getPorperties);
  const handleLogout = () => {
    localStorage.removeItem("ileyah_token");
    router.push("/login");
  };

  return (
    <div>
      <div className="flex">
        <div>
          <p className="text-2xl font-semibold">Due Loans</p>
        </div>
        <div className="ml-auto">
          <SimpleDropdown
            trigger={
              <div className="flex items-center">
                <img
                  src={`https://ui-avatars.com/api/?name=IL`}
                  className={classNames("w-8 h-8 rounded-full", className)}
                  alt={`IL`}
                />
                <IconChevronDown size="18" className="ml-3" />
              </div>
            }
            items={[
              {
                text: "Logout",
                icon: <IconLogout size="18" />,
                onClick: handleLogout,
              },
            ]}
          />
        </div>
      </div>

      <div className="flex w-full items-center justify-end gap-2 mt-5">
        <Select
          aria-label="Category"
          size="md"
          className="max-w-[160px] md:max-w-[200px]"
          classNames={{
            value: "text-base px-2",
            trigger:
              "min-h-[auto] h-auto py-2.5 !bg-gray-200  card-shadow !rounded-full",
          }}
          radius="full"
          placeholder="Select one"
          selectionMode="single"
          dissalowEmptySelection
          selectedKeys={[category]}
          onChange={(e) => setCategory(e.target.value)}
        >
          <SelectItem key="all" value="all" classNames={{ title: "text-base" }}>
            All
          </SelectItem>
          <SelectItem key="due" value="due" classNames={{ title: "text-base" }}>
            Due Loans
          </SelectItem>
          <SelectItem
            key="pending"
            value="pending"
            classNames={{ title: "text-base" }}
          >
            Pending Loans
          </SelectItem>
        </Select>
      </div>

      <div className="bg-white shadow border rounded-[1.2rem] transition-all duration-300 relative overflow-x-auto mt-6">
        <table className="w-full text-[.95rem] text-left">
          <thead className="text-gray-500 border-b border-slate-200">
            <tr>
              <th scope="col" className="px-6 py-4">
                Name
              </th>
              <th scope="col" className="px-6 py-4">
                Phone
              </th>
              <th scope="col" className="px-6 py-4">
                Due Amount
              </th>
              <th scope="col" className="px-6 py-4">
                Action{" "}
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.map((item, i) => (
              <tr
                className="hover:bg-gray-50 cursor-pointer select-none border-b"
                key={i}
              >
                <td scope="row" className="px-6 py-4 whitespace-nowrap">
                  {item?.borrower_name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {item?.borrower_phone || "N/A"}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {item?.Email || "N/A"}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {formatCurrency(item?.due)}
                </td>
                <td>
                  {" "}
                  <Button
                    size="xs"
                    variant="outlined"
                    onClick={() => {
                      setCurrent(item);
                      setOpenLoanDetails(true);
                    }}
                  >
                    {" "}
                    View{" "}
                  </Button>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;
