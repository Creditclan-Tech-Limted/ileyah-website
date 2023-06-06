import Button from "@/components/global/Button"

const WePay = () => {
  return (
    <>
      <div>
        <div class="py-28 md:pb-40">
          <div class="container">
            <div class="grid md:grid-cols-2 gap-6 md:gap-4 items-center">
              <div class="relative mt-12 max-w-lg mx-auto">
                <h2 class="text-3xl md:text-6xl font-bold max-w-4xl leading-tight md:leading-[1.1]">  Even if your house is empty,we pay. Leave us to find tenants, that is our headache now.</h2>
                <Button className='mt-10 inline-flex' size='lg'>
                  Get started
                </Button>
              </div>
              <div class="flex justify-center">
                <img src="/assets/images/1.jpg" alt="" class="w-full md:w-10/12 chat-illustration" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WePay;