'use client'
import React, { useState } from 'react';
import { IconChevronDown, IconLogout } from "@tabler/icons-react";
// import { useAuth } from "@/hooks/use-auth";
import classNames from "classnames";
import SimpleDropdown from './SimpleDropdown';

const UserDropdown = ({ className }) => {
  // const { user, logout } = useAuth();
  const [user, setUser] = useState({firstName: 'Oyegbile', lastName: 'Praise', email: '', password: ''})

  const handleLogout = () => {
    // logout();
    window.location.reload();
  };

  return (
    <SimpleDropdown
      trigger={
        <div className="flex items-center">
          <img
            src={ `https://ui-avatars.com/api/?name=${ user.firstName } ${ user.lastName }` }
            className={ classNames('w-8 h-8 rounded-full', className) }
            alt={ `${ user.firstName } ${ user.lastName }` }
          />
          <p className="ml-2">{ user.firstName }</p>
          <IconChevronDown size="18" className="ml-3"/>
        </div>
      }
      items={ [
        { text: 'Logout', icon: <IconLogout size="18"/>, onClick: handleLogout }
      ] }
    />
  );
};

export default UserDropdown;
