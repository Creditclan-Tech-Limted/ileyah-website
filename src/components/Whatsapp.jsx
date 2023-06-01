import Button from "./global/Button";

const Whatsapp = () => {
  return (
    <>
      <div className="bg-gray-900 text-white py-20 md:py-32">
        <div className="container pt-5">
          <div
            className="flex items-center justify-center space-x-16"
          >
            <div className="ps-md-5 mt-5 mt-md-0">
              <img src="/assets/images/artisans/rent-gif.0ce0bd5d.gif" alt="" style={ { width: '300px' } }/>
            </div>
            <div className="text-left flex flex-col items-start">
              <div className='text-3xl md:text-6xl max-w-xl font-bold mb-4'>
                Never ever renew your rent yearly again
              </div>
              <div className="text-lg">
                Connect us with your landlord and we take it from there in monthly installments.
              </div>
              <Button className="mt-8">
                <a href="https://wa.me/+2349055552255?text=Hi" target="_blank" className=""> Get started </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Whatsapp;
