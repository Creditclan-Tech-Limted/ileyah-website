'use client'
import Drawer from "@/components/Drawer"
import { register } from 'swiper/element/bundle';
import Details from "./Details";
import { useState } from "react";
import UserDetails from "./UserDetails";

register();

const ProDetails = ({ isOpen, onClose, property }) => {
  const [views, setViews] = useState('details')

  return (
    <>
      {views === 'details' && (
        <Drawer isOpen={isOpen} onClose={onClose} padding={false} longer={true}>
          <Details property={property} onClose={onClose} onNext={() => setViews('user_details')} />
        </Drawer>
      )}
      {views === 'user_details' && (
        <Drawer isOpen={isOpen} onClose={onClose} title='Bio information' >
          <UserDetails onBack={() => setViews('details')} />
        </Drawer>
      )}
    </>
  )
}

export default ProDetails;