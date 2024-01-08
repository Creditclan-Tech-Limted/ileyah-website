import Drawer from '@/components/Drawer'
import Button from '@/components/global/Button';
import { formatCurrency } from '@/lib/utils';

const ChoosedPlan = ({ isOpen, onClose, plan }) => {
  return (
    <>
      <Drawer isOpen={isOpen} onClose={onClose} title={'Subscription Summary'}>
        <p>Below is the summary of the subscription plan u selected  </p>
        <div className='mt-10'>
          <div class="flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
            <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span class="sr-only">Info</span>
            <div>
              <span class="font-medium">Note!</span> Please note the amount below is subject to increase or decrease.
            </div>
          </div>
          <div className="flex justify-between border border-gray-300 p-5 rounded-2xl">
            <p>Total:</p>
            <p>{formatCurrency(plan)}</p>
          </div>
        </div>

        <div className='mt-10'>
          <p className="mb-3">Please make payment to the account below</p>
          <div className="border border-gray-300 divide-y rounded-xl">
            <div className="flex justify-between p-3">
              <p>Account Name:</p>
              <p>Ileyah Technologies Limited</p>
            </div>
            <div className="flex justify-between p-3">
              <p>Account Number:</p>
              0202020202
            </div>
            <div className="flex justify-between p-3">
              <p>Bank:</p>
              WEMA
            </div>
          </div>
        </div>

        <Button color='black' className='mt-10'>Accept and Make Payment</Button>
      </Drawer>
    </>
  )
}

export default ChoosedPlan;