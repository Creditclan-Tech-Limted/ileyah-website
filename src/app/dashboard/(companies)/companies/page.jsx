"use client";
import Button from "@/components/global/Button";
import { IconChevronRight, IconHome2, IconPlus } from "@tabler/icons-react";
import React, { useState } from "react";
import useSignupStore from "@/store/signup";
import UserInfor from "@/api/UserInfor";
import AddNewStaff from "./staffs/modals/AddNewStaff";
import Link from "next/link";

const Page = () => {
  const { data, updateData } = useSignupStore((state) => state);
  const [openInviteStaff, setOpenInviteStaff] = useState(false);
  let companyName = UserInfor().userName;

  return (
    <>
      <div className="text-4xl font-bold">
        Welcome, {companyName || "Ileyah"} 👋🏿
      </div>
      <div className="grid grid-cols-[1fr] md:grid-cols-[2fr_1fr] gap-10 mt-10">
        <div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6 xl:grid-cols-3 2xl:gap-7.5">
            <div className="bg-red-500 text-white md:text-black md:bg-[#F0F3FA] shadow rounded-xl px-8 py-6 cursor-pointer h-[100px]">
              <div className="flex justify-between">
                <div>
                  <div className="text-3xl font-bold">100</div>
                  <div className="text-sm mt-2">Staffs</div>
                </div>
                <div className="my-auto">
                  <IconChevronRight className="text-white md:text-gray-500" />
                </div>
              </div>
            </div>
            <div className="bg-blue-500 text-white md:text-black md:bg-[#F0F3FA] shadow rounded-xl px-8 py-6 cursor-pointer h-[100px]">
              <div className="flex justify-between">
                <div>
                  <div className="text-3xl font-bold">100</div>
                  <div className="text-sm mt-2">Requests</div>
                </div>
                <div className="my-auto">
                  <IconChevronRight className="text-white md:text-gray-500" />
                </div>
              </div>
            </div>
            <div className=" bg-cyan-500 text-white md:text-black md:bg-[#F0F3FA] shadow rounded-xl px-8 py-6 cursor-pointer h-[100px]">
              <div className="flex justify-between">
                <div>
                  <div className="text-3xl font-bold">100</div>
                  <div className="text-sm mt-2">Loans</div>
                </div>
                <div className="my-auto">
                  <IconChevronRight className="text-white md:text-gray-500" />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white shadow border rounded-[1.2rem] transition-all duration-300 relative overflow-x-auto mt-10">
            <div className="flex justify-between p-5">
              <p className="font-bold">Pending Request</p>
              <div>
                <Button
                  leftIcon={<IconPlus size={15} />}
                  variant="outlined"
                  size="sm"
                  color="black"
                  onClick={() => setOpenInviteStaff(true)}
                >
                  Invite a Staff
                </Button>
              </div>
            </div>
            <table className="w-full text-[.95rem] text-left">
              <thead className="text-gray-500 border-b border-slate-200">
                <tr>
                  <th scope="col" className="px-6 py-4">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Amount
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Department
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Status{" "}
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Date{" "}
                  </th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4, 5].map((item, i) => (
                  <tr
                    className="hover:bg-gray-50 cursor-pointer select-none border-b"
                    key={i}
                  >
                    <td scope="row" className="px-6 py-4 whitespace-nowrap">
                      'item?.name'
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      'item?.email'
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      'item?.salary'
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      'item?.salary'
                    </td>
                    <td className="px-6 py-4">
                      <div className="px-2.5 py-1 leading-none inline-block rounded-full border border-gray-600 text-gray-600 !border-green-500 !text-green-500">
                        Approved
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      12th Jul, 2023
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-white shadow border rounded-[1.2rem] transition-all duration-300 relative overflow-x-auto mt-10">
            <div className="flex justify-between p-5">
              <p className="font-bold">Staffs List</p>
              <div>
                <Link href={"/dashboard/companies/staffs"}>
                  <Button
                    rightIcon={<IconChevronRight size={15} />}
                    variant="outlined"
                    size="sm"
                    color="black"
                  >
                    View All
                  </Button>
                </Link>
              </div>
            </div>
            <table className="w-full text-[.95rem] text-left">
              <thead className="text-gray-500 border-b border-slate-200">
                <tr>
                  <th scope="col" className="px-6 py-4">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Amount
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Department
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Status{" "}
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Date{" "}
                  </th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4, 5].map((item, i) => (
                  <tr
                    className="hover:bg-gray-50 cursor-pointer select-none border-b"
                    key={i}
                  >
                    <td scope="row" className="px-6 py-4 whitespace-nowrap">
                      'item?.name'
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      'item?.email'
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      'item?.salary'
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      'item?.salary'
                    </td>
                    <td className="px-6 py-4">
                      <div className="px-2.5 py-1 leading-none inline-block rounded-full border border-gray-600 text-gray-600 !border-green-500 !text-green-500">
                        Approved
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      12th Jul, 2023
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="bg-blue-600 rounded-xl p-4 inline-flex w-full">
            <IconHome2 color="white" />
            <p className="text-white mx-5">
              Claim Your <span className="font-bold">SIGNUP</span> Bonus{" "}
            </p>
          </div>
          <div className="mt-3 bg-[#F0F3FA] shadow rounded-lg pl-10 pr-10 pt-10 text-xl h-[350px] relative">
            <p className="text-5xl font-medium">
              Your staff can look like a King{" "}
            </p>
            <div className="flex mt-5 font-bold">
              <Button
                className="inline-flex"
                variant="outlined"
                color="black"
                size="sm"
                rightIcon={<IconChevronRight size={15} />}
              >
                View Subscriptions{" "}
              </Button>
            </div>
            <img
              src="/assets/images/house-svg.png"
              alt="Image"
              className="absolute bottom-0 right-0 w-32 h-32"
            />
          </div>
        </div>
      </div>
      <AddNewStaff
        isOpen={openInviteStaff}
        onClose={() => setOpenInviteStaff(false)}
      />
    </>
  );
};

export default Page;
