import FormInput from '@/global/FormInput';
import useSignupStore from '@/store/signup';
import { LocationData } from '@/utils/locationData';
import React, { useEffect, useState } from 'react'
import { MultiSelect } from "react-multi-select-component";

const options = LocationData;

function StepTwo({ onBack, onNext }) {
  const { data, updateData } = useSignupStore(state => state)
  const [enterArea, setEnterArea] = useState(data?.find_me_house?.area ? typeof data?.find_me_house?.area !== 'object' : false);
  const [area, setArea] = useState(typeof data?.find_me_house?.area === 'string' ? data?.find_me_house?.area : '');
  const [areas, setAreas] = useState(typeof data?.find_me_house?.area === 'object' ? data?.find_me_house?.area : []);

  useEffect(() => {
    if (enterArea && areas.length) setAreas([]);
    if (!enterArea && area.length) setArea('');
    // eslint-disable-next-line
  }, [enterArea, area.length, areas.length]);

  const handleSubmit = () => {
    if ((area.length || areas.length)) {
      updateData({ find_me_house: { ...data?.find_me_house, area: area || areas } });
      onNext();
    }
  }

  return (
    <>
      <div>
        <button style={ { marginBottom: "0px" } } className="back" type="button" onClick={ onBack }>
          <span aria-hidden="true"><i style={ { fontSize: "1rem !important" } } className="fa-solid fa-angle-left"></i></span>
        </button>
      </div>
      <div>
        <div className="pt-70 pb-3">
          <p className="font-weight-bold font-30 redirect-text text-deep-blue">
          What areas would you prefer to live in?
          </p>
        </div>
        {
          !enterArea ? (
            <>
              <div className='mb-3'>
                <MultiSelect
                  options={ options }
                  value={ areas }
                  onChange={ value => setAreas(value) }
                  labelledBy="Select"
                />
              </div>
              <button
                onClick={ () => setEnterArea(true) }
                className="font-17 mb-3 call-number alt-plan pointer border-0 bg-transparent"
              >
                I don't see the area
                <span id="spin" className="ml-3"><i className="fa-solid fa-spinner"></i></span>
              </button>
            </>
          ) : (
            <>
              <FormInput
                name='location'
                type='text'
                value={ area }
                onChange={ e => setArea(e.target.value) }
                label='Kindly enter the area'
                required
              />
              <button
                onClick={ () => setEnterArea(false) }
                className="font-17 mb-3 call-number text-cc pointer border-0 bg-transparent"
              >
                Select area
                <span id="spin" className="ml-3"><i className="fa-solid fa-spinner"></i></span>
              </button>
            </>
          )
        }
        <button onClick={ handleSubmit } className="call-number btn btn-blue font-17" disabled={!areas.length && !area}>Continue</button>
        <div className='illustration-image pt-5'>
          <img src="/assets/images/House searching-bro.svg" alt=""/>
        </div>
      </div>
    </>
  )
}

export default StepTwo;
