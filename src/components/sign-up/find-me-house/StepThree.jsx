import { useFindMeHouseMutation } from '@/api/rent';
import useSignupStore from '@/store/signup';
import React, { useState } from 'react'

const types = [
  { id: 'room-only', name: 'Room only' },
  { id: 'room-parlour', name: 'Room and parlour' },
  { id: 'two-bedroom', name: 'Two bedroom' },
  { id: 'three-bedroom', name: 'Three bedroom' },
  { id: 'four-bedroom', name: 'Four bedroom' },
  { id: 'bungalow', name: 'Bungalow' },
  { id: 'duplex', name: 'Duplex' },
]

function StepThree({ onBack, onNext }) {
  const { data } = useSignupStore(state => ({ data: state.data }));
  const [houseType, setHouseType] = useState('');
  const { mutateAsync: send, isLoading } = useFindMeHouseMutation();

  const handleSubmit = async () => {
    if (!houseType) return;
    try {
      const area = typeof data.find_me_house.area === 'object' ? data.find_me_house.area.map(t => t.value).join(', ') : data.find_me_house.area;
      const payload = {
        ...data.user,
        ...data.find_me_house,
        area,
        house_type: houseType,
        process_type: "findMeAHouse",
        source: 1
      };
      await send(payload);
      onNext();
    } catch (e) {
      console.log({ e });
    }
  }

  return (
    <>
      <div>
        <button style={ { marginBottom: "0px" } } className="back" type="button" onClick={ onBack }>
          <span aria-hidden="true"><i style={ { fontSize: "1rem !important" } } className="fa-solid fa-angle-left"></i></span>
        </button>
      </div>
      <div className="pt-70 pb-2">
        <p className="redirect-text text-deep-blue font-30 font-weight-bold">
        What type of house would you prefer?
        </p>
      </div>
      <div>
        <div className='row mb-3'>
          {
            types.map(t => (
              <div className="col-md-6" key={ t.id }>
                <label className='d-flex align-items-center'>
                  <div className="checkbox">
                    <input
                      name="house_type" type="radio" className="checkbox__input" value={ t.id }
                      onChange={ (e) => setHouseType(e.target.value) } checked={ houseType === t.id }
                    />
                    <span className="checkbox__inner"></span>
                  </div>
                  <p className="font-17 mb-2 ml-2 text-dark cursor-pointer">{ t.name }</p>
                </label>
              </div>
            ))
          }
        </div>
      </div>
      <button onClick={handleSubmit} type="submit" className="align-items-center btn btn-blue-full call-number d-flex justify-content-sm-around font-17" disabled={isLoading || !houseType}>
                {
                    isLoading ? 'Submitting request' : 'Submit request'
                }

                {isLoading ? (
                    <span
                        className="ml-3 spin"><i className="fa-solid fa-spinner"></i></span>
                ): <></>
                }
            </button>
            <div className='illustration-image pt-5'>
                <img src="/assets/images/Build your home-amico.svg" alt="" />
            </div>
    </>
  )
}

export default StepThree;
