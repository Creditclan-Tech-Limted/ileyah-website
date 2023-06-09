import Button from '@/components/global/Button'

const Success = ({ onNext }) => {
  return (
    <>
      <div className='flex h-screen'>
        <div className='mx-auto my-20'>
          <div className='flex'>
            <img src='/assets/images/success-mark.svg' className='mx-auto' width='200px' />
          </div>
          <div className='text-2xl'>
            Congratulations, We are good to go
          </div>
          <Button className='mt-5' onClick={onNext}>Continue</Button>
        </div>
      </div>
    </>
  )
}

export default Success