import {
  useCreateRentRequestMutation,
  useGetPlansQuery,
  useUploadImageMutation,
} from "@/api/rent";
import { capitalizeFirstLetter, formatCurrency } from "@/lib/utils";
import useSignupStore from "@/store/signup";
import { useRouter } from "next/navigation";

function Summary({ onBack, onNext }) {
  const { data, updateData } = useSignupStore((state) => state);
  const router = useRouter()
  const { data: plans, isLoading: isPlansLoading } = useGetPlansQuery({
    price: data?.foundHouse?.amount,
  });

  const { mutateAsync: uploadImage, isLoading: isUploadImageLoading } =
    useUploadImageMutation();
  const { mutateAsync: send, isLoading } = useCreateRentRequestMutation();

  const submit = async () => {
    try {
      const ileyah_token = JSON.parse(localStorage.getItem("ileyah_token"));
      if (ileyah_token) {
        const res = await uploadImage(data?.houseImage.file);
        const payload = {
          ...data.user,
          ...data.foundHouse,
          picture: res.data.data.filename,
          process_type: "foundHouse",
          source: 1,
        };
        await send(payload);
        onNext();
      } else {
        const payload = {
          ...data.user,
          ...data.foundHouse,
          picture: '',
          process_type: "foundHouse",
          source: 1,
        };
        updateData({ createUserRequest: payload });
        router.push("/register");
      }
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
              <li className="list-group-item flex justify-between items-center mt-5">
                Rent :
                <span className="text-right">
                  {formatCurrency(data?.foundHouse.amount ?? 0)}
                </span>
              </li>
              <li className="list-group-item flex justify-between items-center">
                Type of house:
                <span className="text-right">
                  {capitalizeFirstLetter(data?.foundHouse?.house_type)}
                </span>
              </li>
              <li className="list-group-item flex justify-between items-center">
                Address:
                <span className="text-right">{data?.foundHouse?.address}</span>
              </li>
              <li className="list-group-item flex justify-between items-center">
                Landlord phone number:
                <span className="text-right">
                  {data?.foundHouse?.landlord_phone || "Not provided"}
                </span>
              </li>
              <li className="list-group-item flex justify-between items-center">
                Source:
                <span className="text-right">
                  {data?.foundHouse?.information_source || "N/A"}
                </span>
              </li>
            </ul>
          </div>
          <div className="font-17 mt-10">
            <button
              onClick={submit}
              disabled={isLoading || isUploadImageLoading}
              className="items-center btn btn-blue-full call-number flex justify-sm-center w-100"
            >
              {isLoading || isUploadImageLoading
                ? "Creating request"
                : "Submit request"}

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
