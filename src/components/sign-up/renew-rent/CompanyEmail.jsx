import { useCheckRentRequestMutation } from "@/api/rent";
import FormInput from "@/global/FormInput";
import OtpPinInput from "@/global/OtpPinInput";
import domains from "@/lib/domains";
import { useToast } from "@/lib/use-toast";
import useSignupStore from "@/store/signup";
import axios from "axios";
import { useRef } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

const CompanyEmail = ({ onBack, onNext }) => {
  const { data, updateData } = useSignupStore((state) => state);
  const [views, setViews] = useState("email");
  const input = useRef();
  const [otpLoading, setOtpLoading] = useState(false);
  const [verifyOtp, setVerifyOtp] = useState(false);
  const [email, setEmail] = useState("");
  const toast = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { ...data?.user },
  });

  const {
    mutateAsync: checkRentRequest,
    isLoading: ischeckRentRequestLoading,
  } = useCheckRentRequestMutation();

  const submit = async (values) => {
    try {
      const domain = values?.email.split("@")[1];
      const isValidEmail = !domains.some((d) => d === domain);

      if (isValidEmail) {
        setOtpLoading(true);
        setEmail(values?.email);
        const otp = Math.floor(100000 + Math.random() * 900000);
        await axios.post(
          "https://lendnode.creditclan.com/kuda/agents/sendToken",
          { email: values?.email, otp }
        );
        await axios.post(
          "https://sellbackend.creditclan.com/mail/index.php/email_sender/send_individual",
          { vertical: "Ileya", otp, email: values?.email }
        );
        setOtpLoading(false);
        setViews("otp");
      } else {
        toast.error("Invalid Work Email");
        console.log("error");
      }
    } catch (error) {
      console.log({ error });
    }
  };

  const handlePinDone = async (values) => {
    try {
      console.log({ values });
      setVerifyOtp(true);
      const res = await axios.post(
        "https://lendnode.creditclan.com/kuda/agents/verifyToken",
        { email, otp: values }
      );

      if (res?.data?.status) {
        return onNext("request-details");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {views === "email" && (
        <div>
          <div>
            <button
              style={{ marginBottom: "0px" }}
              className="back"
              type="button"
              onClick={onBack}
              disabled={ischeckRentRequestLoading}
            >
              <span aria-hidden="true">
                <i
                  style={{ fontSize: "1rem !important" }}
                  className="fa-solid fa-angle-left"
                ></i>
              </span>
            </button>
          </div>
          <div className="pt-70 pb-3">
            <p className="text-4xl text-deep-blue font-bold mb-1">
              We would like have your offical email address
            </p>
            <p className="text-cc-dark font-17">
              Please provide your work email
            </p>
          </div>
          <form onSubmit={handleSubmit(submit)} className="mt-10">
            <FormInput
              type="email"
              label="Official Email address"
              {...register("email", { required: true })}
            />

            <div className="flex">
              <button
                type="submit"
                className="font-17 flex call-number btn btn-blue"
                disabled={otpLoading}
              >
                {otpLoading ? "Please wait..." : "Proceed"}
                {otpLoading ? (
                  <span className="ml-3 spin">
                    <i className="fa-solid fa-spinner"></i>
                  </span>
                ) : (
                  <></>
                )}
              </button>
            </div>
          </form>
        </div>
      )}
      {views === "otp" && (
        <div>
          <div>
            <button
              style={{ marginBottom: "0px" }}
              className="back"
              type="button"
              onClick={() => setViews("email")}
              disabled={ischeckRentRequestLoading}
            >
              <span aria-hidden="true">
                <i
                  style={{ fontSize: "1rem !important" }}
                  className="fa-solid fa-angle-left"
                ></i>
              </span>
            </button>
          </div>
          <div className="pt-70 pb-3">
            <p className="text-4xl text-deep-blue font-bold mb-1">
              Please enter OTP
            </p>
            <p className="text-cc-dark font-17">
              Please provide the OTP sent to the email provided
            </p>
          </div>
          <form onSubmit={handleSubmit(submit)} className="mt-10">
            <OtpPinInput length={6} ref={input} onDone={handlePinDone} />
            <div className="flex mt-5">
              <button
                type="submit"
                className="font-17 flex call-number btn btn-blue"
                disabled={verifyOtp}
              >
                {verifyOtp ? "Please wait..." : "Submit"}
                {verifyOtp ? (
                  <span className="ml-3 spin">
                    <i className="fa-solid fa-spinner"></i>
                  </span>
                ) : (
                  <></>
                )}
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default CompanyEmail;
