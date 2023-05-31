import Button from "./global/Button";

const Whatsapp = () => {
  return (
    <>
      <div class="" >
        <div class="container pt-5" >
          <div class="flex aos-init aos-animate" data-aos="fade-up" data-aos-easing="ease" data-aos-duration="1000" data-aos-delay="200" >
            <div>
              <div className='text-3xl md:text-6xl max-w-4xl font-bold mb-4'>
                Never ever renew your rent yearly again
              </div>
              <div className="text-lg">
                Connect us with your landlord and we take it from there in monthly installments.
              </div>
              <Button className="mt-8">
                <a href="https://wa.me/+2349155577732?text=Hi" target="_blank" class="" > Get started </a>
              </Button>
            </div>
            <div class="ps-md-5 mt-5 mt-md-0" >
              <img src="/assets/images/artisans/rent-gif.0ce0bd5d.gif" alt="" style={{ width: '300px' }} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Whatsapp;