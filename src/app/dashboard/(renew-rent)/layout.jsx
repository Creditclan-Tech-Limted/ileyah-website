import React from 'react';
import DashNav from '../DashNav';

const DashboardLayout = ({ children }) => {
  return (
    <>
      <DashNav />
      <div className="max-w-3xl md:mx-auto mb-20 mx-10">
        <div className="py-10">
        </div>
        {children}
      </div>
    </>
  );
};

export default DashboardLayout;