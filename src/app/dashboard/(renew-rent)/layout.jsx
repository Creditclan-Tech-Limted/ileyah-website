import React from 'react';
import DashNav from '../DashNav';

const DashboardLayout = ({ children }) => {
  return (
    <>
      {/* <DashNav /> */}
      <div className="mb-20">
        {children}
      </div>
    </>
  );
};

export default DashboardLayout;