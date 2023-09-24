import Button from "@/components/global/Button"
import { IconCheck, IconChevronRight, IconCurrencyNaira, IconHomePlus, IconX } from "@tabler/icons-react"
import { useState } from "react"

let salarys = [
  { id: 'yes', name: 'yes' },
  { id: 'no', name: 'no' },

]


function StepOneB({ onNext, onBack, noRequest }) {
  const [salary, setSalary] = useState('')
  // const [salary, setSalary] = useState(data?.find_me_house?.budget)

  const handleNext = () => {
    if (salary === 'yes') {
      onNext()
    } else noRequest()
  }
  return (
    <>
      <div>
        <button
          style={{ marginBottom: '0px' }}
          className='back'
          type='button'
          onClick={onBack}
        >
          <span aria-hidden='true'>
            <i
              style={{ fontSize: '1rem !important' }}
              className='fa-solid fa-angle-left'
            ></i>
          </span>
        </button>
      </div>
      <div className='pt-70'>
        <p className='font-bold text-3xl text-deep-blue'>
          We would like to know how you receive your income.
          <br />
        </p>
        <br />
        <p className='font-semibold font-17 text-cc-dark'>
          Are you a Salary Earner
        </p>
      </div>

      <div className='mt-4 text-left space-y-5'>
        <div className={salary === 'yes' ? 'border-green-400 rounded-2xl flex justify-between items-center border px-7 py-5 cursor-pointer hover:bg-gray-100' : 'rounded-2xl flex justify-between items-center border border-gray-300 px-7 py-5 cursor-pointer hover:bg-gray-100'} onClick={() => setSalary('yes')}  >
          <div className="flex">
            <div className="flex">
              <div className="w-10 h-10 rounded-full bg-green-600 text-white grid place-items-center my-auto">
                <IconCheck size="20" />
              </div>
            </div>
            <div className="px-6">
              <p className="text-lg font-medium text-left">
                Yes
              </p>
              <p className="text-left mt-0.5 opacity-75 text-[.95rem] leading-snug">
                Yes! I am a Salary Earner.
              </p>
            </div>
          </div>
          <div>
            <IconChevronRight className="text-black ml-auto" size="20" />
          </div>
        </div>

        <div className={salary === 'no' ? 'border-red-400 rounded-2xl flex justify-between items-center border px-7 py-5 cursor-pointer hover:bg-gray-100' : 'rounded-2xl flex justify-between items-center border border-gray-300 px-7 py-5 cursor-pointer hover:bg-gray-100'}onClick={() => setSalary('no')}>
          <div className="flex">
            <div className="flex">
              <div className="w-10 h-10 rounded-full bg-red-600 text-white grid place-items-center my-auto">
                <IconX size="20" />
              </div>
            </div>
            <div className="px-6">
              <p className="text-lg font-medium text-left">
                No
              </p>
              <p className="text-left mt-0.5 opacity-75 text-[.95rem] leading-snug">
                I am a Business Owner.
              </p>
            </div>
          </div>
          <div>
            <IconChevronRight className="text-black ml-auto" size="20" />
          </div>
        </div>

        <Button className='mt-4' onClick={handleNext}>Proceed</Button>

        {/* {salarys.map((s) => (
          <div className='col-md-6' key={s.id}>
            <label className='flex items-center'>
              <div className='checkbox'>
                <input
                  name='house_type'
                  type='radio'
                  className='checkbox__input'
                  value={s.id}
                  onChange={(e) => setSalary(e.target.value)}
                  checked={salary === s.id}
                />
                <span className='checkbox__inner'></span>
              </div>
              <p className='font-13 mb-2 ml-2  text-dark uppercase'>{s.name}</p>
            </label>
          </div>
        ))} */}

        {/* <button
          // onClick={ onNext}
          onClick={handleNext}
          className='mt-4 font-17 call-number btn btn-blue'
        >
          Proceed
        </button> */}
      </div>
    </>
  )
}

export default StepOneB
