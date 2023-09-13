import { useState } from "react"

let salarys = [
  { id: 'yes', name: 'yes' },
  { id: 'no', name: 'no' },
  
]


function StepOneB({ onNext, onBack, noRequest }) {
  const [salary, setSalary] = useState('')
  // const [salary, setSalary] = useState(data?.find_me_house?.budget)

  const handleNext = () =>{
    if(salary === 'yes'){
      onNext()
    }else noRequest()
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
          We would like to know how you recive your income.
          <br />
        </p>
        <br />
        <p className='font-semibold font-17 text-cc-dark'>
          Are you a Salary Earner
        </p>
      </div>
      <div className='mt-4 text-left'>
        {salarys.map((s) => (
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
        ))}

        <button
          // onClick={ onNext}
          onClick={handleNext}
          className='mt-4 font-17 call-number btn btn-blue'
        >
          Proceed
        </button>
      </div>
    </>
  )
}

export default StepOneB
