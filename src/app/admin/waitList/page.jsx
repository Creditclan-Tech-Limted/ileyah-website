"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  IconUser,
  IconLoader,
  IconMail,
  IconPhone,
  IconUsers,
  IconCalendar,
} from "@tabler/icons-react";
import { AuthNav } from "../users/page";
import WaitListModal from "./WaitListModal";
import Button from "@/components/global/Button";

const Page = () => {
  const [waitList, setWaitList] = useState([]);
  const [loading, setLoading] = useState(true);

  const [openWaitListModal, setOpenWaitListModal] = useState(false);
  const [openPropertyDetails, setOpenPropertyDetails] = useState({});

  const fetchWaitlist = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://lendnode.creditclan.com/kuda/api/flatshare/get_all_flatshare"
      );
      setWaitList(response.data || []);
    } catch (err) {
      console.log("error", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWaitlist();
  }, []);

  return (
    <>
      <AuthNav />
      <div className="h-full p-3 mb-20 lg:p-6">
        {waitList?.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-center h-96">
            <IconUsers size={48} className="text-gray-400" />
            <h2 className="mt-4 text-xl font-semibold text-gray-600">
              No waitlist members yet
            </h2>
            <p className="text-gray-500">New requests will appear here.</p>
            <button
              onClick={fetchWaitlist}
              className="px-4 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              Refresh List
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {waitList.map((user) => (
              <div
                key={user?.id}
                className="p-4 bg-white border shadow-lg rounded-xl"
              >
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 text-gray-600 bg-gray-200 rounded-full">
                    <IconUser size={24} />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold">{user?.full_name}</h2>
                    <p className="text-sm text-gray-500">{user?.occupation}</p>
                  </div>
                  <Button
                    size="sm"
                    variant="outlined"
                    className="ml-auto"
                    onClick={() => {
                      if (user) {
                        setOpenWaitListModal(true);
                        setOpenPropertyDetails(user);
                      }
                    }}
                  >
                    Details
                  </Button>
                </div>

                <div className="mt-4 space-y-2 text-sm">
                  <p className="flex items-center text-gray-700 line-clamp-1">
                    <IconMail size={16} className="mr-2" />
                    {user?.email}
                  </p>
                  <p className="flex items-center text-gray-700">
                    <IconPhone size={16} className="mr-2" />
                    {user?.phone}
                  </p>
                  <p className="flex items-center text-gray-700">
                    <IconUsers size={16} className="mr-2" />
                    Gender: {user?.gender}
                  </p>
                  <p className="flex items-center text-gray-700">
                    <IconCalendar size={16} className="mr-2" />
                    Date: {user?.createdAt.slice(0, 10)}
                  </p>
                </div>

                {/* <button
                  onClick={() => {
                    if (user) {
                      setOpenWaitListModal(true);
                      setOpenPropertyDetails(user);
                    }
                  }}
                  className="w-full py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                >
                  View Details
                </button> */}
              </div>
            ))}
          </div>
        )}
      </div>

      {loading && (
        <div className="flex items-center justify-center">
          <IconLoader className="w-8 h-8 text-gray-600 animate-spin" />
        </div>
      )}

      <WaitListModal
        isOpen={openWaitListModal}
        onClose={() => setOpenWaitListModal(!openWaitListModal)}
        details={openPropertyDetails}
      />
    </>
  );
};

export default Page;
