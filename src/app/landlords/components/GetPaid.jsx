import Button from '@/components/global/Button'

const GetPaid = () => {
  return (
    <>
      <div class="py-28">
        <div class="container">
          <div class="grid md:grid-cols-2 gap-6 md:gap-4 items-center">
            <div class="flex justify-center">
              <img src="/assets/images/joy.png" alt="landlords" class="w-full md:w-10/12 chat-illustration" />
            </div>
            <div class="relative mt-12 max-w-2xl mx-auto">
              <h2 class="text-3xl md:text-6xl font-bold max-w-4xl leading-tight md:leading-[1.1]">  Ileyah pays Landlords 100% of your rent.</h2>
              <div className='mt-6 text-lg tracking-tight text-slate-500 space-y-6'>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error voluptatibus non mollitia praesentium minima earum consequatur, consectetur quo dolorum cupiditate, officiis labore delectus, iusto soluta magni minus omnis culpa nisi!
                </p>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error voluptatibus non mollitia praesentium minima earum consequatur, consectetur quo dolorum cupiditate, officiis labore delectus, iusto soluta magni minus omnis culpa nisi!
                </p>
              </div>
              <Button className='mt-10 inline-flex' size='lg'>
                Get started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default GetPaid;