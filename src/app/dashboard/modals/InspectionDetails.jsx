import Drawer from '@/components/Drawer';

const InspectionDetails = ({ isOpen, onClose, inspection }) => {
  return (
    <>
      <Drawer isOpen={isOpen} onClose={onClose} title='Inspection Detiails'>
        <p className='font-medium'>Inspection Details</p>
        <div className='border rounded-xl mt-3 p-6 space-y-5'>
          <div className='flex justify-between'>
            <p>Date</p>
            <p>{inspection?.date}</p>
          </div>
          <div className='flex justify-between'>
            <p>Time</p>
            <p>{inspection?.time}</p>
          </div>
        </div>

        <div className='mt-10'>
          <p className='font-medium'>Inspection Details</p>
          <div className='border rounded-xl mt-3 p-6 space-y-5'>
            <div className='flex justify-between'>
              <p>Title</p>
              <p>{inspection?.ileyah_property?.description}</p>
            </div>
            <div className='flex justify-between'>
              <p>Price</p>
              <p>{inspection?.ileyah_property?.price}</p>
            </div>
            <div className='flex justify-between'>
              <p>Description</p>
              <p className='w-1/2'>{inspection?.ileyah_property?.title}</p>
            </div>
            <div className='flex justify-between'>
              <p>Area</p>
              <p>{inspection?.ileyah_property?.source}</p>
            </div>
            <div className='flex justify-between'>
              <p>Beds</p>
              <p>{inspection?.ileyah_property?.beds}</p>
            </div>
            <div className='flex justify-between'>
              <p>Baths</p>
              <p>{inspection?.ileyah_property?.baths}</p>
            </div>
            <div className='flex justify-between'>
              <p>Toilets</p>
              <p>{inspection?.ileyah_property?.toilets}</p>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  )
}

export default InspectionDetails;