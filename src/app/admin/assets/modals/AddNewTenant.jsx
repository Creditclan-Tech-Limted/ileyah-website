import Drawer from '@/components/Drawer'
import React from 'react'

const AddNewTenant = ({ isOpen, onClose }) => {
  return (
    <>
      <Drawer isOpen={isOpen} onClose={onClose} title='Add Tenants'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis mollitia in tempore animi velit quod voluptatum eligendi, minus, commodi veniam labore aperiam ea hic praesentium soluta dolorem iste, nesciunt reprehenderit.
      </Drawer>
    </>
  )
}

export default AddNewTenant;