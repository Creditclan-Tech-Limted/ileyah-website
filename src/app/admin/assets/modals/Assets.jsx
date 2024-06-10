import { UPLOAD_IMAGE } from "@/api/landlord";
import Drawer from "@/components/Drawer";
import Button from "@/components/global/Button";
import { useToast } from "@/lib/use-toast";
import { formatCurrency } from "@/lib/utils";
import {
  IconCalendar,
  IconCircleChevronRight,
  IconMoodCry,
  IconPlus,
  IconTrash,
  IconUserCircle,
} from "@tabler/icons-react";
import axios from "axios";
import { useRef, useState } from "react";

const AssetsModal = ({ isOpen, onClose, item }) => {
  const [views, setViews] = useState("bio");
  const [selectedFiles, setSelectedFiles] = useState([]);
  const file = useRef(null);
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const handleChange = async (e) => {
    try {
      const files = Array.from(e.target.files);
      setSelectedFiles(files);
    } catch (error) {
      console.log(error);
    }
  };

  const imagePromises = Array.from(selectedFiles).map((file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        resolve(event.target.result);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  });

  const onSubmit = async (data) => {
    try {
      Promise.all(imagePromises).then(async (base64Images) => {
        setLoading(true);
        const axiosRequests = base64Images.map(async (item) => {
          try {
            const response = await axios.post(
              UPLOAD_IMAGE.UPLOAD(),
              { file: item },
              {
                headers: {
                  "x-api-key":
                    "WE4mwadGYqf0jv1ZkdFv1LNPMpZHuuzoDDiJpQQqaes3PzB7xlYhe8oHbxm6J228",
                },
              }
            );
            return response.data.data.filename;
          } catch (error) {
            console.error("Error with Axios request:", error);
            setLoading(false);
            return null;
          }
        });

        const img = await Promise.all(axiosRequests);
        const response = await axios.post(
          "https://lendnode.creditclan.com/kuda/agents/updatePropertyImage",
          { image: img, id: item.id }
        );

        if (response.data.status === true) {
          setLoading(false);
          toast.success(response.data.message);
        }
      });
    } catch (error) {
      console.log({ error });
      setLoading(false);
      toast.error("Error");
    }
  };

  return (
    <>
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        title="Add New Loan"
        longer={true}
      >
        <div className="grid grid-cols-7 gap-5">
          <div
            className={
              views === "bio"
                ? "rounded-full px-4 py-2 bg-black text-white text-center cursor-pointer"
                : "rounded-full px-4 py-2 text-center cursor-pointer"
            }
            onClick={() => setViews("bio")}
          >
            Details
          </div>
          <div
            className={
              views === "rent"
                ? "rounded-full px-4 py-2 bg-black text-white text-center cursor-pointer"
                : "rounded-full px-4 py-2 text-center cursor-pointer"
            }
            onClick={() => setViews("rent")}
          >
            Rent
          </div>
          <div
            className={
              views === "l/agents"
                ? "rounded-full px-4 py-2 bg-black text-white text-center cursor-pointer"
                : "rounded-full px-4 py-2 text-center cursor-pointer"
            }
            onClick={() => setViews("l/agents")}
          >
            L/Agents
          </div>
          <div
            className={
              views === "attachments"
                ? "rounded-full px-4 py-2 bg-black text-white text-center cursor-pointer"
                : "rounded-full px-4 py-2 text-center cursor-pointer"
            }
            onClick={() => setViews("attachments")}
          >
            Attachments
          </div>
          <div
            className={
              views === "avs"
                ? "rounded-full px-4 py-2 bg-black text-white text-center cursor-pointer"
                : "rounded-full px-4 py-2 text-center cursor-pointer"
            }
            onClick={() => setViews("avs")}
          >
            AVS
          </div>
          <div
            className={
              views === "tenant"
                ? "rounded-full px-4 py-2 bg-black text-white text-center cursor-pointer"
                : "rounded-full px-4 py-2 text-center cursor-pointer"
            }
            onClick={() => setViews("tenant")}
          >
            Tenant
          </div>
          <div
            className={
              views === "comments"
                ? "rounded-full px-4 py-2 bg-black text-white text-center cursor-pointer"
                : "rounded-full px-4 py-2 text-center cursor-pointer"
            }
            onClick={() => setViews("comments")}
          >
            Comments
          </div>
        </div>

        <hr className="mt-5" />

        {views === "bio" && (
          <div className="mt-5">
            <div className="border-gray-200 rounded-2xl border-2 divide-y">
              <p className="flex justify-between p-3">
                <div>Name:</div>
                <div>{item?.name}</div>
              </p>
              <p className="flex justify-between p-3">
                <div>Address:</div>
                <div className="w-2/3">{item?.address}</div>
              </p>
              <p className="flex justify-between p-3">
                <div>Acq Date:</div>
                <div>Ileyah 01</div>
              </p>
              <p className="flex justify-between p-3">
                <div>Status:</div>
                <div>Ileyah 01</div>
              </p>
              <p className="flex justify-between p-3">
                <div>Area:</div>
                <div>{item?.area || item?.Area}</div>
              </p>
              <p className="flex justify-between p-3">
                <div>Lga:</div>
                <div>{item?.lga || item?.LGA}</div>
              </p>
            </div>

            <div className="mt-10">
              {!selectedFiles.length && (
                <div>
                  <h3 className="text-xl">Please upload property image</h3>
                  <div
                    className="border border-black border-dotted w-full rounded-xl mt-5 flex items-center justify-between cursor-pointer p-6"
                    onClick={() => file.current.click()}
                  >
                    <div>Please select Images</div>
                    <IconPlus size={20} />
                    <input
                      ref={file}
                      type="file"
                      multiple
                      accept=".jpg, .jpeg, .png, .gif"
                      className="hidden"
                      onChange={handleChange}
                    />
                  </div>
                </div>
              )}
              <div className="grid grid-cols-2 gap-4">
                {selectedFiles?.map((file, index) => (
                  <div className="relative inline-block" key={index}>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      key={index}
                      src={URL.createObjectURL(file)}
                      alt={`Image ${index}`}
                    />
                    <IconTrash
                      color="white"
                      onClick={() => handleImageRemove(file)}
                      className="absolute top-0 right-0 p-1 m-1 bg-red-500 rounded-full"
                    />
                  </div>
                ))}
              </div>
              {selectedFiles.length > 0 ? (
                <Button
                  className="mt-10"
                  rightIcon={<IconCircleChevronRight />}
                  onClick={onSubmit}
                >
                  {" "}
                  {loading ? "Loading..." : "Continue"}
                </Button>
              ) : null}
            </div>
          </div>
        )}

        {views == "rent" && (
          <div className="mt-5">
            <div className="border-gray-200 rounded-2xl border-2 divide-y">
              <p className="flex justify-between p-3">
                <div>Rent:</div>
                <div>{formatCurrency(item?.renewal_rent)}</div>
              </p>
              <p className="flex justify-between p-3">
                <div>No of Years paid:</div>
                <div>2 year(s)</div>
              </p>
              <p className="flex justify-between p-3">
                <div>Service Charge:</div>
                <div>{formatCurrency(item?.service_charge)}</div>
              </p>
              <p className="flex justify-between p-3">
                <div>Agreement:</div>
                <div>{formatCurrency(item?.agreeement)}</div>
              </p>
              <p className="flex justify-between p-3">
                <div>Agency:</div>
                <div>{formatCurrency(item?.agency_commision)}</div>
              </p>
              <p className="flex justify-between p-3">
                <div>Caution:</div>
                <div>{formatCurrency(item?.caution)}</div>
              </p>
            </div>
          </div>
        )}

        {views === "l/agents" && (
          <div className="mt-5">
            <div className="border-gray-200 rounded-2xl border-2 divide-y">
              <p className="flex justify-between p-3">
                <div>Landlord Name:</div>
                <div>{item?.landlord_name}</div>
              </p>
              <p className="flex justify-between p-3">
                <div>Landlord Phone:</div>
                <div>{item?.landlord_phone || "N/A"}</div>
              </p>

              <p className="flex justify-between p-3">
                <div>Agent Name:</div>
                <div>{item?.agent_name}</div>
              </p>
              <p className="flex justify-between p-3">
                <div>Agent Phone:</div>
                <div>{item?.agent_no}</div>
              </p>
            </div>
          </div>
        )}

        {views === "attachments" && (
          <div className="mt-5">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
              tenetur. Labore aut illum, voluptate nulla odit, hic repudiandae
              tenetur sint, excepturi cupiditate laboriosam aliquid! A debitis
              recusandae quam itaque aut. Attahcnments Here...
            </p>
          </div>
        )}

        {views === "tenant" && (
          <div className="mt-5">
            <p className="text-center flex">
              <div className="mx-auto p-40 border w-full rounded-2xl">
                <IconMoodCry size={100} className="mx-auto" /> Opps! No Tenant
                Attached yet
              </div>
            </p>
            <div className="mt-10">
              <Button>Add Tenant </Button>
            </div>
          </div>
        )}

        {views === "comments" && (
          <div className="border-black rounded-lg border divide-y divide-black mt-5">
            <div className="p-5">
              <div className="flex justify-between">
                <p className="inline-flex font-semibold">
                  {" "}
                  <IconUserCircle size={15} className="mt-[5px] mr-1" /> Ileyah
                  Admin
                </p>
                <p className="inline-flex">
                  {" "}
                  <IconCalendar size={15} className="mt-[5px] mr-2" />{" "}
                  2020-12-12
                </p>
              </div>
              <div className="mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum, ex quo nulla nam, earum velit quas in omnis
                quibusdam culpa suscipit incidunt praesentium illum molestias
                mollitia commodi eaque corporis laborum!
              </div>
            </div>
            <div className="p-5">
              <div className="flex justify-between">
                <p className="inline-flex font-semibold">
                  {" "}
                  <IconUserCircle size={15} className="mt-[5px] mr-1" /> Ileyah
                  Admin
                </p>
                <p className="inline-flex">
                  {" "}
                  <IconCalendar size={15} className="mt-[5px] mr-2" />{" "}
                  2020-12-12
                </p>
              </div>
              <div className="mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum, ex quo nulla nam, earum velit quas in omnis
                quibusdam culpa suscipit incidunt praesentium illum molestias
                mollitia commodi eaque corporis laborum!
              </div>
            </div>
            <div className="p-5">
              <div className="flex justify-between">
                <p className="inline-flex font-semibold">
                  {" "}
                  <IconUserCircle size={15} className="mt-[5px] mr-1" /> Ileyah
                  Admin
                </p>
                <p className="inline-flex">
                  {" "}
                  <IconCalendar size={15} className="mt-[5px] mr-2" />{" "}
                  2020-12-12
                </p>
              </div>
              <div className="mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum, ex quo nulla nam, earum velit quas in omnis
                quibusdam culpa suscipit incidunt praesentium illum molestias
                mollitia commodi eaque corporis laborum!
              </div>
            </div>
            <div className="p-5">
              <div className="flex justify-between">
                <p className="inline-flex font-semibold">
                  {" "}
                  <IconUserCircle size={15} className="mt-[5px] mr-1" /> Ileyah
                  Admin
                </p>
                <p className="inline-flex">
                  {" "}
                  <IconCalendar size={15} className="mt-[5px] mr-2" />{" "}
                  2020-12-12
                </p>
              </div>
              <div className="mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum, ex quo nulla nam, earum velit quas in omnis
                quibusdam culpa suscipit incidunt praesentium illum molestias
                mollitia commodi eaque corporis laborum!
              </div>
            </div>

            {/* <p className="flex justify-between p-3">
                <div>Name:</div>
                <div>Ileyah 01</div>
              </p>
              <p className="flex justify-between p-3">
                <div>Address:</div>
                <div>Ileyah 01</div>
              </p>
              <p className="flex justify-between p-3">
                <div>Acq Date:</div>
                <div>Ileyah 01</div>
              </p>
              <p className="flex justify-between p-3">
                <div>Status:</div>
                <div>Ileyah 01</div>
              </p>
              <p className="flex justify-between p-3">
                <div>Area:</div>
                <div>Ileyah 01</div>
              </p>
              <p className="flex justify-between p-3">
                <div>Lga:</div>
                <div>Ileyah 01</div>
              </p> */}
          </div>
        )}
      </Drawer>
    </>
  );
};

export default AssetsModal;
