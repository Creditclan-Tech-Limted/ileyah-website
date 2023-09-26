import Button from "@/components/global/Button"
import { IconCash, IconChevronRight, IconCurrencyNaira, IconHomePlus } from "@tabler/icons-react"

function StepOne({ onNext, onBack }) {
  return (
    <>
      <div>
        <button style={{ marginBottom: "0px" }} className="back" type="button" onClick={onBack}>
          <span aria-hidden="true"><i style={{ fontSize: "1rem !important" }} className="fa-solid fa-angle-left"></i></span>
        </button>
      </div>
      <div className="pt-70">
        <p className="font-bold text-3xl text-deep-blue">
          Welcome. Your one-off <br /> registration takes just 5 steps
        </p>
      </div>
      <div className=' text-left mt-10 space-y-5'>
        <div className="rounded-2xl flex items-center border border-gray-300 px-7 py-5 cursor-pointer hover:bg-gray-100" onClick={onNext}>
          <div>
            <div className="w-10 h-10 rounded-full bg-blue-600 text-white grid place-items-center">
              <IconCurrencyNaira size="20" />
            </div>
          </div>
          <div className="px-6">
            <p className="text-lg font-medium text-left">
              Must be a salary Earner
            </p>
            <p className="text-left mt-0.5 opacity-75 text-[.95rem] leading-snug">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit fugiat.
            </p>
          </div>
          <div>
            <IconChevronRight className="text-black" size="20" />
          </div>
        </div>

        <div className="rounded-2xl flex justify-between items-center border border-gray-300 px-7 py-5 cursor-pointer hover:bg-gray-100" onClick={onNext}>
          <div className="flex">
            <div className="flex">
              <div className="w-10 h-10 rounded-full bg-red-600 text-white grid place-items-center my-auto">
                <IconHomePlus size="20" />
              </div>
            </div>
            <div className="px-6">
              <p className="text-lg font-medium text-left">
                Register your house
              </p>
              <p className="text-left mt-0.5 opacity-75 text-[.95rem] leading-snug">
                - We test your eligibility in 10min. <br />
                - We visit your address in 24-48hrs.
              </p>
            </div>
          </div>
          <div>
            <IconChevronRight className="text-black ml-auto" size="20" />
          </div>
        </div>

        <div className="rounded-2xl flex justify-between items-center border border-gray-300 px-7 py-5 cursor-pointer hover:bg-gray-100" onClick={onNext}>
          <div className="flex">
            <div className="flex">
              <div className="w-10 h-10 rounded-full bg-green-600 text-white grid place-items-center my-auto">
                <IconCash size="20" />
              </div>
            </div>
            <div className="px-6">
              <p className="text-lg font-medium text-left">
                You pay security deposit
              </p>
              <p className="text-left mt-0.5 opacity-75 text-[.95rem] leading-snug">
                Landlord Paid Immediately
              </p>
            </div>
          </div>
          <div>
            <IconChevronRight className="text-black ml-auto" size="20" />
          </div>
        </div>

        {/* <Button onClick={onNext}>Renwe my rent</Button> */}
      </div>
    </>
  )
}

export default StepOne
