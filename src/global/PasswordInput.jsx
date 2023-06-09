import React, { forwardRef, useState } from 'react';
import { FiEye, FiEyeOff } from "react-icons/fi";
import PropTypes from "prop-types";
import classNames from "classnames";

const PasswordInput = forwardRef((
  { id, label, error, disabled, ...props }, ref
) => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => setVisible(v => !v)

  return (
    <div className="flex flex-col">
      { !!label && <label htmlFor={ id } className="text-sm mb-1">{ label }</label> }
      <div className="relative">
        <input
          className={ classNames(
            "bg-gray-100 px-4 py-3 pr-12 rounded-md w-full focus:ring-2 ring-offset-2 ring-primary-800 ring-opacity-30 transition duration-300",
            { 'opacity-60 pointer-events-none': disabled }
          ) }
          type={ visible ? 'text' : 'password' } id={ id } { ...props } ref={ ref }
        />
        <button
          onClick={ toggleVisible } type="button"
          className="absolute top-1/2 -translate-y-1/2 right-2 w-8 h-8 rounded-md bg-gray-900 bg-opacity-0 hover:bg-opacity-5 focus:bg-opacity-5 flex items-center justify-center"
        >
          { visible ? <FiEyeOff/> : <FiEye/> }
        </button>
      </div>
      {
        !!error && <div className="text-sm text-red-500 mt-1">{ error }</div>
      }
    </div>
  );
});

PasswordInput.displayName = 'PasswordInput';

PasswordInput.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  error: PropTypes.string,
  disabled: PropTypes.bool
}

export default PasswordInput;
