import React from 'react';
import { motion } from "framer-motion";
import classNames from "classnames";

const Backdrop = ({ children, onClick, className }) => {
  return (
    <motion.div
      onClick={ onClick }
      initial={ { opacity: 0 } }
      animate={ { opacity: 1 } }
      exit={ { opacity: 0 } }
      className={ classNames("fixed inset-0 bg-gray-900/70 flex flex-col items-center z-[999] !m-0 p-0", className) }
    >
      { children }
    </motion.div>
  );
};

export default Backdrop;
