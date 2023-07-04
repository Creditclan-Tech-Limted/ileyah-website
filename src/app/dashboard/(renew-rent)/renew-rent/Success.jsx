import Button from '@/components/global/Button'

const Success = ({ onNext }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center mx-auto my-10 text-center">
        <img src='/assets/images/success-mark.svg' className='mx-auto' width="200px" alt="check"/>
        <div className="text-2xl mt-10">
          Congratulations, <br/> We are good to go
        </div>
        <Button className="mt-8" onClick={ onNext }>Continue</Button>
      </div>
    </>
  )
};

export default Success;
