import React from 'react';
import PropTypes from "prop-types";
import classNames from "classnames";

const Checkbox = ({ id, children, disabled, className, ...props }) => {
  return (
    <div className="flex items-center">
      <input
        className={ classNames(
          "w-4 h-4 text-primary-600 bg-gray-100 rounded-md border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600",
          { 'opacity-60 pointer-events-none': disabled }
        ) }
        id={ id } type="checkbox" { ...props }
      />
      {
        !!children &&
        <label htmlFor={ id } className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-800">
          { children }
        </label>
      }
    </div>
  );
};

Checkbox.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool
}

export default Checkbox;
