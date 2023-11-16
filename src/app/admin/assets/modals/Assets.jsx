import Drawer from "@/components/Drawer";
import Button from "@/components/global/Button";
import { formatCurrency } from "@/lib/utils";
import { IconCalendar, IconExclamationCircle, IconMoodCry, IconUser, IconUserCircle } from "@tabler/icons-react";
import { useState } from "react";

const AssetsModal = ({ isOpen, onClose, item }) => {
  const [views, setViews] = useState('bio');

  return (
    <>
      <Drawer isOpen={isOpen} onClose={onClose} title='Add New Loan' longer={true}>
        <div className="grid grid-cols-7 gap-5">
          <div className={views === 'bio' ? 'rounded-full px-4 py-2 bg-black text-white text-center cursor-pointer' : 'rounded-full px-4 py-2 text-center cursor-pointer'} onClick={() => setViews('bio')}>Details</div>
          <div className={views === 'rent' ? 'rounded-full px-4 py-2 bg-black text-white text-center cursor-pointer' : 'rounded-full px-4 py-2 text-center cursor-pointer'} onClick={() => setViews('rent')} >Rent</div>
          <div className={views === 'l/agents' ? 'rounded-full px-4 py-2 bg-black text-white text-center cursor-pointer' : 'rounded-full px-4 py-2 text-center cursor-pointer'} onClick={() => setViews('l/agents')}  >L/Agents</div>
          <div className={views === 'attachments' ? 'rounded-full px-4 py-2 bg-black text-white text-center cursor-pointer' : 'rounded-full px-4 py-2 text-center cursor-pointer'} onClick={() => setViews('attachments')} >Attachments</div>
          <div className={views === 'avs' ? 'rounded-full px-4 py-2 bg-black text-white text-center cursor-pointer' : 'rounded-full px-4 py-2 text-center cursor-pointer'} onClick={() => setViews('avs')} >AVS</div>
          <div className={views === 'tenant' ? 'rounded-full px-4 py-2 bg-black text-white text-center cursor-pointer' : 'rounded-full px-4 py-2 text-center cursor-pointer'} onClick={() => setViews('tenant')} >Tenant</div>
          <div className={views === 'comments' ? 'rounded-full px-4 py-2 bg-black text-white text-center cursor-pointer' : 'rounded-full px-4 py-2 text-center cursor-pointer'} onClick={() => setViews('comments')} >Comments</div>
        </div>

        <hr className='mt-5' />

        {
          views === 'bio' && (
            <div className="mt-5">
              <div className="border-gray-200 rounded-2xl border-2 divide-y">
                <p className="flex justify-between p-3">
                  <div>Name:</div>
                  <div>Ileyah 01</div>
                </p>
                <p className="flex justify-between p-3">
                  <div>Address:</div>
                  <div>Ileyah 01</div>
                </p>
                <p className="flex justify-between p-3">
                  <div>Acq Date:</div>
                  <div>Ileyah 01</div>
                </p>
                <p className="flex justify-between p-3">
                  <div>Status:</div>
                  <div>Ileyah 01</div>
                </p>
                <p className="flex justify-between p-3">
                  <div>Area:</div>
                  <div>Ileyah 01</div>
                </p>
                <p className="flex justify-between p-3">
                  <div>Lga:</div>
                  <div>Ileyah 01</div>
                </p>
              </div>
            </div>
          )
        }

        {
          views == 'rent' && (
            <div className="mt-5">
              <div className="border-gray-200 rounded-2xl border-2 divide-y">
                <p className="flex justify-between p-3">
                  <div>Rent:</div>
                  <div>3,000,000.00</div>
                </p>
                <p className="flex justify-between p-3">
                  <div>No of Years paid:</div>
                  <div>2 year(s)</div>
                </p>
                <p className="flex justify-between p-3">
                  <div>Service Charge:</div>
                  <div>2,000,000</div>
                </p>
                <p className="flex justify-between p-3">
                  <div>Agreement:</div>
                  <div>2,000,000</div>
                </p>
                <p className="flex justify-between p-3">
                  <div>Agency:</div>
                  <div>2,000,000</div>
                </p>
                <p className="flex justify-between p-3">
                  <div>Caution:</div>
                  <div>2,000,000</div>
                </p>
              </div>
            </div>
          )
        }

        {
          views === 'l/agents' && (
            <div className="mt-5">
              <div className="border-gray-200 rounded-2xl border-2 divide-y">
                <p className="flex justify-between p-3">
                  <div>Name:</div>
                  <div>3,000,000.00</div>
                </p>
                <p className="flex justify-between p-3">
                  <div>Phone:</div>
                  <div>2 year(s)</div>
                </p>
                <p className="flex justify-between p-3">
                  <div>Address:</div>
                  <div>2,000,000</div>
                </p>
                <p className="flex justify-between p-3">
                  <div>Account Number:</div>
                  <div>2,000,000</div>
                </p>
                <p className="flex justify-between p-3">
                  <div>Bank:</div>
                  <div>2,000,000</div>
                </p>
              </div>
            </div>

          )
        }

        {
          views === 'attachments' && (
            <div className="mt-5">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, tenetur. Labore aut illum, voluptate nulla odit, hic repudiandae tenetur sint, excepturi cupiditate laboriosam aliquid! A debitis recusandae quam itaque aut.
                Attahcnments Here...
              </p>
            </div>
          )
        }

        {
          views === 'tenant' && (
            <div className="mt-5">
              <p className="text-center flex">
                <div className="mx-auto p-40 border w-full rounded-2xl">
                  <IconMoodCry size={100} className="mx-auto" /> Opps! No Tenant Attached yet
                </div>
              </p>
              <div className="mt-10">
                <Button>Add Tenant </Button>
              </div>
            </div>
          )
        }

        {
          views === 'comments' && (
            <div className="border-black rounded-lg border divide-y divide-black mt-5">
              <div className="p-5">
                <div className="flex justify-between">
                  <p className="inline-flex font-semibold"> <IconUserCircle size={15} className="mt-[5px] mr-1" /> Ileyah Admin</p>
                  <p className="inline-flex"> <IconCalendar size={15} className="mt-[5px] mr-2" /> 2020-12-12</p>
                </div>
                <div className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, ex quo nulla nam, earum velit quas in omnis quibusdam culpa suscipit incidunt praesentium illum molestias mollitia commodi eaque corporis laborum!</div>
              </div>
              <div className="p-5">
                <div className="flex justify-between">
                  <p className="inline-flex font-semibold"> <IconUserCircle size={15} className="mt-[5px] mr-1" /> Ileyah Admin</p>
                  <p className="inline-flex"> <IconCalendar size={15} className="mt-[5px] mr-2" /> 2020-12-12</p>
                </div>
                <div className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, ex quo nulla nam, earum velit quas in omnis quibusdam culpa suscipit incidunt praesentium illum molestias mollitia commodi eaque corporis laborum!</div>
              </div>
              <div className="p-5">
                <div className="flex justify-between">
                  <p className="inline-flex font-semibold"> <IconUserCircle size={15} className="mt-[5px] mr-1" /> Ileyah Admin</p>
                  <p className="inline-flex"> <IconCalendar size={15} className="mt-[5px] mr-2" /> 2020-12-12</p>
                </div>
                <div className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, ex quo nulla nam, earum velit quas in omnis quibusdam culpa suscipit incidunt praesentium illum molestias mollitia commodi eaque corporis laborum!</div>
              </div>
              <div className="p-5">
                <div className="flex justify-between">
                  <p className="inline-flex font-semibold"> <IconUserCircle size={15} className="mt-[5px] mr-1" /> Ileyah Admin</p>
                  <p className="inline-flex"> <IconCalendar size={15} className="mt-[5px] mr-2" /> 2020-12-12</p>
                </div>
                <div className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, ex quo nulla nam, earum velit quas in omnis quibusdam culpa suscipit incidunt praesentium illum molestias mollitia commodi eaque corporis laborum!</div>
              </div>

              {/* <p className="flex justify-between p-3">
                <div>Name:</div>
                <div>Ileyah 01</div>
              </p>
              <p className="flex justify-between p-3">
                <div>Address:</div>
                <div>Ileyah 01</div>
              </p>
              <p className="flex justify-between p-3">
                <div>Acq Date:</div>
                <div>Ileyah 01</div>
              </p>
              <p className="flex justify-between p-3">
                <div>Status:</div>
                <div>Ileyah 01</div>
              </p>
              <p className="flex justify-between p-3">
                <div>Area:</div>
                <div>Ileyah 01</div>
              </p>
              <p className="flex justify-between p-3">
                <div>Lga:</div>
                <div>Ileyah 01</div>
              </p> */}
            </div>
          )
        }
      </Drawer >
    </>
  )
}

export default AssetsModal;