import { useCreateRentRequestMutation, useGetPlansQuery, useUploadImageMutation } from "@/api/rent";
import { capitalizeFirstLetter, formatCurrency } from "@/lib/utils";
import useSignupStore from "@/store/signup";

function Summary({ onBack, onNext }) {
  const data = useSignupStore((state) => state.data);
  const { data: plans, isLoading: isPlansLoading } = useGetPlansQuery({
    price: data?.renew?.amount,
  });

  const { mutateAsync: uploadImage, isLoading: isUploadImageLoading } =
    useUploadImageMutation();
  const { mutateAsync: send, isLoading } = useCreateRentRequestMutation();

  const submit = async () => {
    try {
      const res = await uploadImage(data?.houseImage.file);
      const payload = {
        ...data.user,
        ...data.renew,
        picture: res.data.data.filename,
        process_type: "renew",
        source: 1,
      };
      await send(payload);
      onNext();
    } catch (e) {
      console.log({ e });
    }
  };
  return (
    <>
      <div>
        <button
          disabled={isLoading || isUploadImageLoading}
          style={{ marginBottom: "0px" }}
          className="back"
          type="button"
          onClick={onBack}
        >
          <span aria-hidden="true">
            <i
              style={{ fontSize: "1rem !important" }}
              className="fa-solid fa-angle-left"
            ></i>
          </span>
        </button>
      </div>
      {isPlansLoading ? (
        <>
          <br />
          <br />
          <br />
          <br />
          <div className="flex flex-column justify-center items-center text-center py-5">
            <div className="spinner-grow text-dark" role="status">
              <span className="sr-only">Loading...</span>
            </div>
            <div className="font-17 mt-4">Please wait..</div>
          </div>
        </>
      ) : (
        <>
          <div className="pt-70 pb-2">
            <p className="font-30 redirect-text text-deep-blue font-weight-bold">
              Here is a summary of your rent application
            </p>
          </div>
          <div className="font-17">
            <ul className="list-group space-y-5">
              <li className="list-group-item flex justify-between items-center">
                Rent amount:
                <span className="text-right">
                  {formatCurrency(data?.renew.amount ?? 0)}
                </span>
              </li>
              <li className="list-group-item flex justify-between items-center">
                Type of house:
                <span className="text-right">
                  {capitalizeFirstLetter(data?.renew?.house_type)}
                </span>
              </li>
              <li className="list-group-item flex justify-between items-center">
                Address:
                <span className="text-right">
                  {data?.renew?.address}
                </span>
              </li>
              <li className="list-group-item flex justify-between items-center">
                Landlord phone number:
                <span className="text-right">
                  {data?.renew?.landlord_phone || "Not provided"}
                </span>
              </li>
              {/* {plans.slice(0, 1)?.map((plan, i) => (
                <li key={i} className="list-group-item flex justify-between items-center">
                  Repayment schedule:
                  <span className="font-weight-600 text-right">
                    ₦{numberWithCommas(plan.monthly)}
                    <span className="font-17 text-cc-dark">/mo</span>
                    <span className="font-17 text-cc-dark">
                      {" "}
                      for {plan.duration} months
                    </span>
                  </span>
                </li>
              ))} */}
            </ul>
          </div>
          <div className="font-17 mt-4">
            <button
              onClick={submit}
              disabled={isLoading || isUploadImageLoading}
              className="items-center btn btn-blue-full call-number flex justify-sm-center w-100"
            >
              {isLoading || isUploadImageLoading ? "Creating request" : "Submit request"}

              {isLoading || isUploadImageLoading ? (
                <span className="ml-3 spin">
                  <i className="fa-solid fa-spinner"></i>
                </span>
              ) : (
                <></>
              )}
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default Summary;
