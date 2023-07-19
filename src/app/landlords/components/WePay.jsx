import Button from "@/components/global/Button"

const WePay = () => {
  return (
    <>
      <div>
        <div className="py-28 md:pb-40">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-6 md:gap-4 items-center">
              <div className="relative mt-12 max-w-lg mx-auto">
                <h2 className="text-5xl md:text-6xl font-bold max-w-4xl leading-tight md:leading-[1.1]">  Even if your house is empty, we pay.</h2>
                <div className='mt-6 text-lg tracking-tight text-slate-500 space-y-6'>
                  <p>
                    {/* Leave us to find tenants, that is our headache now - */}
                    We provide a hassle-free solution that guarantees consistent income for your property, regardless of occupancy. With our innovative platform, you can enjoy peace of mind knowing that your house will generate revenue, even during periods of vacancy.
                  </p>
                  <p>
                    Leave us to find tenants, that is our headache now -
                  </p>
                </div>
                <Button className='mt-10 inline-flex' size='lg'>
                  Get started
                </Button>
              </div>
              <div className="flex justify-center">
                <img src="/assets/images/ileyah-5.png" alt="" className="w-full md:w-10/12 chat-illustration" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WePay;