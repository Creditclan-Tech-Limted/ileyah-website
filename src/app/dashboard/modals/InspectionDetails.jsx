import Drawer from '@/components/Drawer';

const InspectionDetails = ({ isOpen, onClose, inspection }) => {
  console.log(inspection);
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
          <div className='border rounded-xl mt-3 space-y-5 divide-y-2'>
            <div className='flex justify-between pt-3 pl-3 pr-3'>
              <p>Title</p>
              <p className=' w-1/2'>{inspection?.property?.description}</p>
            </div>
            <div className='flex justify-between pt-3 pl-3 pr-3'>
              <p>Price</p>
              <p>{inspection?.property?.price}</p>
            </div>
            <div className='flex justify-between pt-3 pl-3 pr-3'>
              <p>Description</p>
              <p className='w-1/2'>{inspection?.property?.title}</p>
            </div>
            <div className='flex justify-between pt-3 pl-3 pr-3'>
              <p>Area</p>
              <p>{inspection?.property?.source}</p>
            </div>
            <div className='flex justify-between pt-3 pl-3 pr-3'>
              <p>Beds</p>
              <p>{inspection?.property?.beds}</p>
            </div>
            <div className='flex justify-between pt-3 pl-3 pr-3'>
              <p>Baths</p>
              <p>{inspection?.property?.baths}</p>
            </div>
            <div className='flex justify-between pt-3 pl-3 pr-3'>
              <p>Toilets</p>
              <p>{inspection?.property?.toilets || 'N/A'}</p>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  )
}

export default InspectionDetails;