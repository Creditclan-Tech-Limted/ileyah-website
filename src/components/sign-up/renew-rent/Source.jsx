import FormInput from '@/global/FormInput';
import useSignupStore from '@/store/signup';
import { useState } from 'react'
import { useForm } from 'react-hook-form';

const types = [
  { id: 'Radio', name: 'Radio' },
  { id: 'Facebook', name: 'Facebook' },
  { id: 'Instagram', name: 'Instagram' },
  { id: 'Twitter', name: 'Twitter' },
  { id: 'Friends', name: 'Friends' },
  { id: 'Ileyah Representative', name: 'Ileyah Representative' },
]


const Source = ({ onBack, onNext }) => {
  const { data, updateData } = useSignupStore(state => state);
  const [source, setSource] = useState(data?.renew?.information_source);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { ...data?.renew },
  });

  const setIleyahSource = async (e) => {
    try {
      setSource(e?.target?.value)
    } catch (error) {
      console.log(error);
    }
  }


  const submit = () => {
    updateData({ renew: { ...data?.renew, information_source: source } });
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
          How did u hear about us?
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
                      name="house_type" type="radio" className="checkbox__input" checked={source === t.id} value={t.id} onChange={(e) => setIleyahSource(e)}
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
      { }
      <div className='mt-10'>
        <FormInput
          type="number"
          label="Representative Name"
          {...register("agent_details", {
            required: true,
          })}
        />
      </div>
      <button onClick={submit} type="submit" className="call-number btn btn-blue font-17" disabled={!source}>Continue</button>

      <div className='illustration-image'>
        <img src="/assets/images/Living room-bro.svg" alt="" />
      </div>
    </>
  )
}

export default Source;