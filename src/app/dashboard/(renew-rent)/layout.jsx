import React from 'react';

const DashboardLayout = ({ children }) => {
  return (
    <>
      <div className="mb-20">
        {children}
      </div>
    </>
  );
};

export default DashboardLayout;