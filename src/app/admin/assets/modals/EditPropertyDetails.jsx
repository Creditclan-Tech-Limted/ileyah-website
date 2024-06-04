import Drawer from "@/components/Drawer";
import { Controller, useForm } from "react-hook-form";
import Button from "@/components/global/Button";
import Input from "@/global/Input";
import TextArea from "@/global/TextArea";
import { IconCircleChevronRight, IconX } from "@tabler/icons-react";
import {
  BoldItalicUnderlineToggles,
  CreateLink,
  headingsPlugin,
  imagePlugin,
  InsertThematicBreak,
  linkDialogPlugin,
  listsPlugin,
  ListsToggle,
  markdownShortcutPlugin,
  MDXEditor,
  prop,
  quotePlugin,
  thematicBreakPlugin,
  toolbarPlugin,
  UndoRedo,
} from "@mdxeditor/editor";
import "@mdxeditor/editor/style.css";
import { useUpdateProperty } from "@/api/action";
import { useToast } from "@/lib/use-toast";

const EditPropertyDetails = ({ isOpen, onClose, property }) => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: { ...property, description: property.description || "" },
  });

  const { mutateAsync: updateProperty, isLoading } = useUpdateProperty();
  const toast = useToast();

  const onSubmit = async (values) => {
    try {
      const res = await updateProperty(values);
      toast.success("Successfully Updated");
    } catch (error) {
      console.log({ error });
    }
  };
  return (
    <div>
      <Drawer isOpen={isOpen} onClose={onClose} title="Edit Property Details">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="">
            <p>Description</p>
            <Controller
              name="description"
              control={control}
              render={({ field }) => (
                <MDXEditor
                  markdown={field.value}
                  onChange={(e) => {
                    field.onChange({ target: { value: e } });
                  }}
                  onBlur={field.onBlur}
                  ref={field.ref}
                  disabled={field.disabled}
                  className="markdown min-h-60 w-full rounded-2xl bg-default-100 p-2"
                  plugins={[
                    headingsPlugin(),
                    listsPlugin(),
                    quotePlugin(),
                    thematicBreakPlugin(),
                    markdownShortcutPlugin(),
                    linkDialogPlugin(),
                    imagePlugin(),
                    toolbarPlugin({
                      toolbarContents: () => (
                        <>
                          <UndoRedo />
                          <BoldItalicUnderlineToggles />
                          <CreateLink />
                          <InsertThematicBreak />
                          <ListsToggle />
                        </>
                      ),
                    }),
                  ]}
                />
              )}
            />
            <div className="border border-gray-500 border-dashed rounded p-5 space-y-8 mt-2">
              <Input
                label="Property Name"
                bordered
                {...register("name", {
                  required: {
                    value: true,
                    message: " Name is required",
                  },
                })}
                error={errors?.name?.message}
              />
              <TextArea
                label="House Address"
                {...register("address", {
                  required: {
                    value: true,
                    message: " Address is required",
                  },
                })}
                error={errors?.address?.message}
              />
              <TextArea
                label="Title"
                {...register("title", {
                  required: {
                    value: true,
                    message: "Title is required",
                  },
                })}
                error={errors?.title?.message}
              />
              <Input
                type="number"
                label="House Number"
                bordered
                {...register("house_no", {
                  required: {
                    value: true,
                    message: "House Number is required",
                  },
                })}
                error={errors?.number?.message}
              />
            </div>
            <p className="mt-5">Location</p>
            <div className="border border-gray-500 border-dashed rounded p-5 space-y-8 mt-2">
              <div className="mb-4">
                <Input
                  type="text"
                  label="Area"
                  bordered
                  {...register("Area", {
                    required: {
                      value: true,
                      message: "Area is required",
                    },
                  })}
                  error={errors?.area?.message}
                />
              </div>
              <div className="mb-4">
                <Input
                  type="text"
                  label="LGA"
                  bordered
                  {...register("LGA", {
                    required: {
                      value: true,
                      message: "LGA is required",
                    },
                  })}
                  error={errors?.LGA?.message}
                />
              </div>
              <div className="mb-4">
                <Input
                  type="text"
                  label="No of Beds"
                  bordered
                  {...register("beds", {
                    required: {
                      value: true,
                      message: "beds is required",
                    },
                  })}
                  error={errors?.beds?.message}
                />
              </div>
            </div>

            <p className="mt-5">Rent</p>
            <div className="border border-gray-500 border-dashed rounded p-5 space-y-8 mt-2">
              <Input
                type="number"
                label="Rent"
                bordered
                {...register("renewal_rent", {
                  required: {
                    value: true,
                    message: "Renewal Rent is required",
                  },
                })}
                error={errors?.renewal_rent?.message}
              />
              <Input
                type="number"
                label="Service Charge"
                bordered
                {...register("service_charge", {
                  required: {
                    value: true,
                    message: "Service Charge is required",
                  },
                })}
                error={errors?.service_charge?.message}
              />
              <Input
                type="number"
                label="Caution"
                bordered
                {...register("caution", {
                  required: {
                    value: true,
                    message: "Caution is required",
                  },
                })}
                error={errors?.caution?.message}
              />
              <Input
                type="number"
                label="Agreement"
                bordered
                {...register("agreeement", {
                  required: {
                    value: true,
                    message: "Agreement is required",
                  },
                })}
                error={errors?.agreeement?.message}
              />
              <Input
                type="number"
                label="Agency"
                bordered
                {...register("agency_commision", {
                  required: {
                    value: true,
                    message: "Agency is required",
                  },
                })}
                error={errors?.agency_commision?.message}
              />
              <Input
                type="number"
                label="Total Paid"
                bordered
                {...register("total_paid", {
                  required: {
                    value: true,
                    message: "Total Paid is required",
                  },
                })}
                error={errors?.total_paid?.message}
              />
            </div>
            <p className="mt-5">Agent - Landlord Info</p>
            <div className="border border-gray-500 border-dashed rounded p-5 space-y-8 mt-2">
              <Input
                label="Agent Phone Number"
                bordered
                {...register("agent_no", {
                  required: {
                    value: true,
                    message: "Agent No is required",
                  },
                })}
                error={errors?.agent_no?.message}
              />
              <Input
                label="Agent Name"
                bordered
                {...register("agent_name", {
                  required: {
                    value: true,
                    message: "Agent Name is required",
                  },
                })}
                error={errors?.agent_name?.message}
              />
              <Input
                label="Landlord Name"
                bordered
                {...register("landlord_name", {
                  required: {
                    value: true,
                    message: "Landlord Name is required",
                  },
                })}
                error={errors?.landlord_name?.message}
              />
              <Input
                label="Landlord Number"
                bordered
                {...register("landlord_number", {
                  required: {
                    value: true,
                    message: "Landlord Number is required",
                  },
                })}
                error={errors?.landlord_number?.message}
              />
            </div>

            <Button
              type="submit"
              className="mt-10"
              rightIcon={<IconCircleChevronRight />}
              loading={isLoading}
            >
              {" "}
              Continue{" "}
            </Button>
          </div>
          {/* {views === "image" && (
            <div>
              <div className="flex items-center justify-between mb-10 cursor-pointer">
                <div
                  onClick={() => setViews("form")}
                  className="border border-black rounded-full p-1"
                >
                  {" "}
                  <IconChevronLeft />{" "}
                </div>
                <Button
                  onClick={onClose}
                  rounded-full
                  size="sm"
                  color="red"
                  variant="outlined"
                >
                  {" "}
                  <IconX />{" "}
                </Button>
              </div>
              {!selectedFiles.length && (
                <div>
                  <h3 className="text-xl">Please upload property image</h3>
                  <div
                    className="border border-black h-52 w-52 rounded-full mt-5 flex items-center justify-center cursor-pointer"
                    onClick={() => file.current.click()}
                  >
                    <IconPlus size={50} />
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
                  type="submit"
                  className="mt-10"
                  rightIcon={<IconCircleChevronRight />}
                >
                  {" "}
                  {loading ? "Loading..." : "Continue"}
                </Button>
              ) : null}
            </div>
          )} */}
        </form>
      </Drawer>
    </div>
  );
};

export default EditPropertyDetails;
