import { useCheckRentRequestMutation } from "@/api/rent";
import FormInput from "@/global/FormInput";
import OtpPinInput from "@/global/OtpPinInput";
import useSignupStore from "@/store/signup";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRaf } from "react-use";

const CompanyEmail = ({ onBack, onNext }) => {
  const { data, updateData } = useSignupStore((state) => state);
  const [views, setViews] = useState('email');
  const ref = useRaf()
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
      setViews('otp')
      // console.log({ values });
      // const res = await axios.post('https://sellbackend.creditclan.com/mail/index.php/email_sender/send_individual', { vertical, otp });
      // console.log(res?.data);
    } catch (error) {
      console.log({ error });
    }
    // updateData({ user: { ...values } });
    // try {
    //   const res = await checkRentRequest(values.phone);
    //   if (!res.data.status) return onNext("step-two");
    //   updateData({ request: res.data.request });
    //   onNext("mini-summary");
    // } catch (e) {
    //   console.log({ e });
    // }
  };

  return (
    <>
      {views === 'email' && (
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
                disabled={ischeckRentRequestLoading}
              >
                {ischeckRentRequestLoading ? "Please wait" : "Proceed"}
                {ischeckRentRequestLoading ? (
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
      {views === 'otp' && (
        <div>
          <div>
            <button
              style={{ marginBottom: "0px" }}
              className="back"
              type="button"
              onClick={() => setViews('email')}
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
            <OtpPinInput length={6} ref={input} />
            <div className="flex">
              <button
                type="submit"
                className="font-17 flex call-number btn btn-blue"
                disabled={ischeckRentRequestLoading}
              >
                {ischeckRentRequestLoading ? "Please wait" : "Proceed"}
                {ischeckRentRequestLoading ? (
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
