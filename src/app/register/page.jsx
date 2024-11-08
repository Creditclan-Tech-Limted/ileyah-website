"use client";
import { AUTH_ENDPOINT } from "@/api/landlord";
import { useCreateRentRequestMutation, useSignUpMutation } from "@/api/rent";
import Button from "@/components/global/Button";
import AuthSocialButton from "@/components/sign-up/AuthSocialButton";
import Input from "@/global/Input";
import Select from "@/global/Select";
import { useToast } from "@/lib/use-toast";
import { areas, lgas } from "@/lib/utils";
import useSignupStore from "@/store/signup";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

const Page = () => {
  const router = useRouter();
  const toast = useToast();
  const { mutateAsync: send, isLoading } = useSignUpMutation();
  const { mutateAsync: sendRentRequest, isLoadingRentRequest } =
    useCreateRentRequestMutation();

  const { data, updateData } = useSignupStore((state) => state);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [error, setError] = useState({
    status: false,
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const [isVisiblePassword, setIsVisiblePassword] = useState(false);

  const onSubmit = async (values) => {
    try {
      setLoading(true);
      const res = await axios.post(AUTH_ENDPOINT.REGISTER(), {
        ...values,
        user_type: "users",
      });
      if (data?.signUpAndCreate) {
        await signUpAndCreate(values);
      }
      if (data?.createPostRequest) {
        await axios.post(
          "https://lendnode.creditclan.com/kuda/agents/createFindHouse",
          { ...data?.createPostRequest, landlordAgentId: res?.data?.data?.id }
        );
      }
      if (res.data.status) {
        toast.success(res.data.message);
        router.push("/dashboard");
        setLoading(false);
      }
      updateData({ user: res?.data?.data });
    } catch (error) {
      console.log({ error });
      if (
        !error?.response?.data?.status &&
        error?.response?.data?.message.includes("User already exist")
      ) {
        toast.error(error?.response?.data?.message);
        setError({ status: true, message: error?.response?.data?.message });
        reset();
        setLoading(false);
      } else {
        setError({
          status: true,
          message:
            error?.response?.data?.message || "An error occured, pls try again",
        });
        toast.error(
          error?.response?.data?.message || "An error occured, pls try again"
        );
        reset();
        setLoading(false);
      }
    }
  };

  const signUpAndCreate = async (values) => {
    try {
      const payload = {
        source: 1,
        process_type: "foundHouse",
        picture: "",
        full_name: values?.name,
        phone: values?.phone,
        email: values?.email,
        information_source: "Ileyah Representative",
        amount: data?.signUpAndCreate?.price,
        house_type: "2 Bedroom Flat",
        address: data?.signUpAndCreate?.address,
        landlord_phone: "09055552255",
        picture: data?.signUpAndCreate?.image,
      };
      await sendRentRequest(payload);
    } catch (error) {
      console.log({ error });
    }
  };

  const socialAction = () => {
    // setIsLoading(true)
    // signIn(action, { redirect: false })
    // .then((callback) => {
    //   if (callback?.error) {
    //     toast.error('Invalid credentials!');
    //   }
    //   if (callback?.ok  && !callback?.error) {
    //     toast.success('Logged in!')
    //     router.push('/users')
    //   }
    // })
    // .finally(() => setIsLoading(false));
  };

  return (
    <>
      <div className="g-6 flex flex-wrap justify-center  dark:text-neutral-200 h-screen items-stretch text-black">
        <div className="px-4 md:px-0 md:w-8/12 my-auto text-left mx-auto w-full">
          <div className="md:p-12 px-4 md:px-0 max-w-xl mx-auto ">
            <div className="">
              <img
                className="w-48"
                src="/assets/images/ileyah-logo.png"
                alt="logo"
              />
              {data?.createPostRequest ? (
                <div className="mb-12 mt-2 pb-1 text-2xl">
                  Sign up to submit request
                </div>
              ) : (
                <h4 className="mb-12 mt-1 pb-1">Sign up to continue</h4>
              )}
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="relative mb-2" data-te-input-wrapper-init>
                <Input
                  label="Full Name"
                  bordered
                  name="name"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Full Name is required",
                    },
                  })}
                  error={errors?.fullname?.message}
                />
              </div>
              <div className="relative mb-4" data-te-input-wrapper-init>
                <Input
                  label="Email"
                  name="email"
                  bordered
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is required",
                    },
                  })}
                  error={errors?.email?.message}
                />
              </div>
              <div className="relative mb-4" data-te-input-wrapper-init>
                <Input
                  label="Phone Number"
                  bordered
                  name="phone"
                  {...register("phone", {
                    required: {
                      value: true,
                      message: "Phone number is required",
                    },
                  })}
                  error={errors?.phone?.message}
                />
              </div>
              <div className="relative mb-4" data-te-input-wrapper-init>
                <Input
                  label="Passsword"
                  type={isVisiblePassword ? "text" : "password"}
                  name="passsword"
                  togglePasswordVisibility={() =>
                    setIsVisiblePassword(!isVisiblePassword)
                  }
                  rightIcon={isVisiblePassword ? AiFillEyeInvisible : AiFillEye}
                  bordered
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password is required",
                    },
                  })}
                  error={errors?.password?.message}
                />
              </div>
              {data?.user_type === "agent/landlords" && (
                <div className="relative my-4">
                  <div className="mb-4">
                    <Select
                      options={areas}
                      label="Area"
                      name="Area"
                      {...register("area", {
                        required: {
                          value: true,
                          message: "Area is required",
                        },
                      })}
                      error={errors?.area?.message}
                    />
                  </div>
                  <div className="mb-4">
                    <Select
                      options={lgas}
                      label="L.G.A"
                      name="LGA"
                      {...register("lga", {
                        required: {
                          value: true,
                          message: "LGA is required",
                        },
                      })}
                      error={errors?.lga?.message}
                    />
                  </div>
                </div>
              )}

              <div className="mb-6 pb-1 pt-1 flex justify-between">
                <Button type="submit" loading={loading}>
                  {loading ? "Loading..." : "Sign Up"}{" "}
                </Button>
              </div>
              <div className="mt-1">
                {/* <div className="relative">
                <div 
                  className="
                    absolute 
                    inset-0 
                    flex 
                    items-center
                  "
                >
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-neutral-50 px-2 text-gray-500">
                    Or continue with
                  </span>
                </div>
              </div> */}

                {/* <div className="my-6 flex gap-2 sm:gap-4">

                  <AuthSocialButton
                    icon={FcGoogle} 
                    onClick={socialAction} 
                  />
                  
              </div> */}
              </div>

              <div className="flex items-center pb-6">
                <p className="mb-0 mr-2">Already have an account?</p>
                <Link href="/login">
                  <p>Login</p>
                </Link>
              </div>
            </form>
          </div>
        </div>

        <div
          className="items-center hidden md:block  rounded-b-lg lg:w-4/12 bg-cover bg-[62%]"
          style={{
            backgroundImage: "url(/assets/images/register-new.jpeg)",
          }}
        >
          <div className="px-4 py-6  md:mx-6 md:p-12">
            <h4 className="mb-6 text-xl font-semibold"></h4>
            <p className="text-sm"></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
