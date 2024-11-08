"use client";
import Button from "@/components/global/Button";
import SimpleDropdown from "@/global/SimpleDropdown";
import { formatCurrency } from "@/lib/utils";
import {
  IconChevronDown,
  IconCopy,
  IconHomeSearch,
  IconLogout,
  IconPlus,
} from "@tabler/icons-react";
import axios from "axios";
import classNames from "classnames";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import AddProperty from "./modals/AddProperty";
import AddNewProperty from "@/app/dashboard/(landlords)/landlords/listings/Modals/AddNewProperty";
import { useToast } from "@/lib/use-toast";

const Page = ({ className }) => {
  const [foundHouse, setFoundHouse] = useState([]);
  const [openComments, setOpenComments] = useState(false);
  const [current, setcurrent] = useState();
  const [loading, setLoading] = useState(true);
  const toast = useToast();

  const copyLink = async (id) => {
    navigator.clipboard.writeText(`localhost:3000/property-found/${id}`);
    toast.success(`Copied`);
  };

  const getAllFoundHouse = async () => {
    const res = await axios.get(
      "https://lendnode.creditclan.com/kuda/agents/getAllfindmeahouse"
    );
    setFoundHouse(res?.data?.data);
    setLoading(false);
  };

  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("ileyah_token");
    router.push("/login");
  };

  useEffect(() => {
    getAllFoundHouse();
  }, []);

  return (
    <>
      <div className="flex">
        <div>
          <p className="text-2xl font-semibold">Find me a House</p>
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

      {loading && <div>loading...</div>}

      <div className="mt-10 space-y-10 w-2/3">
        {!loading &&
          foundHouse?.map((f, i) => (
            <div
              className="bg-white shadow border flex rounded-2xl p-3"
              key={i}
            >
              <div className="my-auto mr-6">
                <IconHomeSearch size={80} />
                {/* <img src="https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg" alt="" width={100} /> */}
              </div>
              <div className="my-auto space-y-1">
                <div className="inline-flex space-x-4">
                  <p className="mr-4"> {f?.landlordAgent?.name} </p> •
                  <p> {f?.landlordAgent?.phone} </p>
                </div>
                <p className="text-2xl font-semibold">
                  {" "}
                  {formatCurrency(f?.amount.replace(",", ""))}{" "}
                </p>
                <div className="flex space-x-4">
                  <p> {f?.house_types} </p>
                  <p>-</p>
                  <p> {f?.area} </p>
                </div>
                <p>{f?.createdAt.slice(0, 10)}</p>
              </div>
              <div className="my-auto ml-auto space-x-3">
                <Button
                  size="sm"
                  leftIcon={<IconPlus />}
                  onClick={() => {
                    setcurrent(f);
                    setOpenComments(true);
                  }}
                >
                  Add Property
                </Button>
                {f.property_found.length > 0 && (
                  <Button
                    size="sm"
                    leftIcon={<IconCopy />}
                    variant="outlined"
                    onClick={() => copyLink(f?.id)}
                  >
                    Copy Link{" "}
                  </Button>
                )}
              </div>
            </div>
          ))}
      </div>

      <AddNewProperty
        isOpen={openComments}
        onClose={() => setOpenComments(false)}
        current={current}
      />
    </>
  );
};

export default Page;
