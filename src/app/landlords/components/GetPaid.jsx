import Button from '@/components/global/Button'

const GetPaid = () => {
  return (
    <>
      <div class="py-28 md:py-40">
        <div class="container">
          <div class="grid md:grid-cols-2 gap-6 md:gap-4 items-center">
            <div class="flex justify-center">
              <img src="/assets/images/12.jpg" alt="" class="w-full md:w-10/12 chat-illustration" />
            </div>
            <div class="relative mt-12 max-w-2xl mx-auto">
              <h2 class="text-3xl md:text-6xl font-bold max-w-4xl leading-tight md:leading-[1.1]">  Ileyah pays Landlords 100% of your rent in advance yearly forever.</h2>
              <div className='mt-6 text-lg tracking-tight text-slate-500'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius est officia eligendi tenetur, aspernatur quibusdam accusantium sequi fugit nisi sapiente.
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