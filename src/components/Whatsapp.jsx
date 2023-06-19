import useGlobalStore from "@/store/global";
import Button from "./global/Button";

const Whatsapp = ({ source }) => {
  const toggleIsSignupOpen = useGlobalStore(state => state.toggleIsSignupOpen);

  return (
    <>
      <div className=" py-20 md:py-32">
        <div className="container pt-5">
          <div
            className="flex-row md:flex items-center justify-center space-x-16"
          >
            <div className="ps-md-5 mt-5 mt-md-0">
              <img src="/assets/images/artisans/rent-gif.0ce0bd5d.gif" alt="" style={{ width: '300px' }} />
            </div>
            <div className="text-left flex flex-col items-start">
              <div className='text-5xl md:text-6xl max-w-xl font-bold mb-4'>
                Never ever pay your rent yearly again
              </div>
              <div className="text-lg">
                {source === 'landlord' ? 'Onboard your property and we pay for your houses in bulk. Simple as ABC.' : '                Connect us with your landlord and we take it from there in monthly installments.'
                }
              </div>
              <Button className="mt-8" onClick={toggleIsSignupOpen}>
                Get started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Whatsapp;