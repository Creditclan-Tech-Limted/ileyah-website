// eslint-disable-next-line react/display-name
import React, { forwardRef } from 'react'

const FormInput = forwardRef(({ label, ...otherProps }, ref) => (
  <>
    <div className="group">
      {
        label ? (
          <label className={`${otherProps?.value?.length ? 'shrink' : ''} w-100`}>
            <input ref={ref} className="form-input" placeholder={label} {...otherProps} />
            <div className='form-input-label'>
              {label}
            </div>
          </label>
        ) :
          <input ref={ref} className="form-input" placeholder={label} {...otherProps} />
      }
    </div>
  </>
));

export default FormInput;