import React from 'react';

const DashboardLayout = ({ children }) => {
  return (
    <div className="max-w-3xl mx-auto mb-20">
      <div className="py-16">
        <img src="/assets/images/ileyah-logo.png" alt="Logo" className="w-36"/>
      </div>
      { children }
    </div>
  );
};

export default DashboardLayout;
