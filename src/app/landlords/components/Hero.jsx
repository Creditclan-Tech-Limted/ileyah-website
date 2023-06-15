import Button from "@/components/global/Button"

const Hero = () => {
  return (
    <>
      <div class="mt-[100px] pt-32 pb-32 md:pt-36 md:pb-36 bg-gray-900 pattern-2 relative rounded-[0_0_1000px_1000px/2%] flex ">
        <div class="container flex-row md:flex my-auto">
          <div className="my-auto">
            <h1 class="text-left max-w-5xl font-display text-7xl md:text-[6.5rem] font-bold leading-[1.2] sm:tracking-tight text-slate-300">Dear <span className='text-primary-600'>Landlords,</span> <br /> let's pay you. <br />
            </h1>
            <p class="mt-8 max-w-2xl text-lg tracking-tight text-slate-400">No more Tenant Palava... Get Paid Now.</p>
            <Button variant='outlined' className='mt-10' color='white' size='lg'>
              Get started
            </Button>
          </div>
          <div className="my-auto max-w-xl mt-10 md:mt-0">
            <img src="/assets/images/ileyah.gif" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero