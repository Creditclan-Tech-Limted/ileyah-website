import useSignupStore from '@/store/signup';
import { useState } from 'react'

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
    const { data, updateData } = useSignupStore(state => state);
    const [houseType, setHouseType] = useState(data?.foundHouse?.house_type)

    const submit = () => {
        updateData({ foundHouse: { ...data?.foundHouse, house_type:  houseType } });
        onNext();
    };

    return (
        <>
            <div>
                <button style={{ marginBottom: "0px" }} className="back" type="button" onClick={onBack}>
                    <span aria-hidden="true"><i style={{ fontSize: "1rem !important" }} className="fa-solid fa-angle-left"></i></span>
                </button>
            </div>
            <div className="pt-70 pb-2">
                <p className="font-30 redirect-text text-deep-blue font-weight-bold">
                    Kindly provide the house type
                </p>
            </div>
            <div>
                <div className='row mb-3'>
                    {
                        types.map(t => (
                            <div className="col-md-6" key={t.id}>
                                <label className='flex items-center'>
                                    <div className="checkbox">
                                        <input
                                            name="house_type" type="radio" className="checkbox__input" checked={houseType === t.id} value={t.id} onChange={(e) => setHouseType(e.target.value)}
                                        />
                                        <span className="checkbox__inner"></span>
                                    </div>
                                    <p className="font-17 mb-2 ml-2 text-dark cursor-pointer">{t.name}</p>
                                </label>
                            </div>
                        ))
                    }
                </div>
            </div>
            <button onClick={submit} type="submit" className="call-number btn btn-blue font-17" disabled={!houseType}>Continue</button>

            <div className='illustration-image'>
                <img src="/assets/images/Build your home-bro.svg" alt="" />
            </div>
        </>
    )
}

export default StepThree
