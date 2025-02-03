import {formatCurrency} from "@/lib/utils";
import Button from "@/components/global/Button";

const CreditLimit = ({data}) => {
  return (
    <div>
      <div className="border bg-blue-100 border-blue-200  p-8  rounded-2xl ml-auto">
        <h3 className="text-lg font-medium mb-5 px-1">
          Your Credit Limit
        </h3>
        {data?.user?.credit_score ? (
          <>
            <div className="flex justify-between">
              <p>Monthly Rent Limit</p>
              <p>
                {formatCurrency(data?.user?.credit_score)}
              </p>
            </div>
            <div className="flex justify-between">
              <p>Max Duration</p>
              <p>12 month(s)</p>
            </div>
          </>
        ) : (
          <>
            <div className="flex justify-between">
              <div>
                <p>Please check your credit limit</p>
                <p>Click the button to proceed</p>
              </div>
              <Button
                className="my-auto"
                variant="outlined"
                color="black"
                // onClick={() => setOpenCheckOffers(true)}
              >
                Check
              </Button>
            </div>
          </>
        )}
      </div>
    </div>)
}

export default CreditLimit;