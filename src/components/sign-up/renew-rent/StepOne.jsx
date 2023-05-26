
function StepOne({ onNext, onBack }) {
  return (
    <>
      <div>
        <button style={ { marginBottom: "0px" } } className="back" type="button" onClick={ onBack }>
          <span aria-hidden="true"><i style={ { fontSize: "1rem !important" } } className="fa-solid fa-angle-left"></i></span>
        </button>
      </div>
      <div className="pt-70">
        <p className="font-bold text-3xl text-deep-blue">
          Welcome. Your one-off <br/> registration takes just 5 steps
        </p>
      </div>
      <div className='mt-4 text-left'>
        <ul className='p-0'>
          <li className='list-style-none pb-2 font-17 text-cc-dark'>
            1. Register your house
          </li>
          <li className='list-style-none pb-2 font-17 text-cc-dark'>
            2. Get connected with a bank
          </li>
          <li className='list-style-none pb-2 font-17 text-cc-dark'>
            3. We visit your address in 24-48hrs
          </li>
          <li className='list-style-none pb-2 font-17 text-cc-dark'>
            4. You pay 12% deposit & 1st month
          </li>
          <li className='list-style-none pb-2 font-17 text-cc-dark'>
            5. Bank pays your landlord immediately
          </li>
          <button onClick={ onNext } className="mt-4 font-17 call-number btn btn-blue">Renew my rent</button>
        </ul>
      </div>
    </>
  )
}

export default StepOne
