import useSignupStore from '@/store/signup';
import { useState } from 'react'

let budgets = [
  { id: "150000-300000", name: "150-300k" },
  { id: "300000-600000", name: "300-600K" },
  { id: "600000-1000000", name: "600K-1M" },
  { id: "1000000-1500000", name: "1M-1.5M" },
  { id: "1500000-2000000", name: "1.5M-2M" },
];

function StepOne({ onBack, onNext }) {
  const { data, updateData } = useSignupStore(state => state)
  const [budget, setBudget] = useState(data?.find_me_house?.budget);

  const handleSubmit = () => {
    if (budget) {
      updateData({ find_me_house: { ...data?.find_me_house, budget } });
      onNext();
    }
  }

  return (
    <>
      <div>
        <button style={{ marginBottom: "0px" }} className="back" type="button" onClick={onBack}>
          <span aria-hidden="true"><i style={{ fontSize: "1rem !important" }} className="fa-solid fa-angle-left"></i></span>
        </button>
      </div>
      <div>
        <div className="pt-70 pb-3">
          <p className="font-weight-bold font-30 redirect-text text-deep-blue">
            Let's get started
          </p>
        </div>
        <div>
          <p className="text-cc-dark font-17">Select your budget range?</p>
          <div className='row mb-3'>
            {
              budgets.map(b => (
                <div className="col-md-6" key={b.id}>
                  <label className='flex items-center'>
                    <div className="checkbox">
                      <input
                        name="house_type" type="radio" className="checkbox__input" value={b.id}
                        onChange={e => setBudget(e.target.value)} checked={budget === b.id}
                      />
                      <span className="checkbox__inner"></span>
                    </div>
                    <p className="font-17 mb-2 ml-2 font-17 text-dark">{b.name}</p>
                  </label>
                </div>
              ))
            }
          </div>
        </div>
        <button onClick={handleSubmit} className="call-number btn btn-blue font-17" disabled={!budget}>Continue</button>
        <div className='illustration-image pt-5'>
          <img src="/assets/images/Manage money-bro.svg" alt="" />
        </div>
      </div>
    </>
  )
}

export default StepOne;
