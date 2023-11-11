import { useCreateRentRequestMutation, useGetLoanDetailsQuery } from '@/api/rent';
import Drawer from '@/components/Drawer'
import Button from '@/components/global/Button';
import useSignupStore from '@/store/signup';
import { useState } from 'react';
import { useToast } from '@/lib/use-toast';
import RequestDetails from '@/app/dashboard/find-me-a-house/RequestDetails';
import axios from 'axios';
import ViewPropertyDetails from '@/app/dashboard/modals/ViewPropertyDetails';
import { parseJsonString } from '@/lib/utils';

const WantThis = ({ onClose }) => {
  const toast = useToast();
  const { data, updateData } = useSignupStore((state) => state);
  const { mutateAsync: send, isLoading } = useCreateRentRequestMutation();
  const [views, setViews] = useState('summary');
  const [loading, setLoading] = useState(false);
  const [property, setProperty] = useState();
  const [loan, setLoan] = useState()

  const checkPendingReq = async () => {
    try {
      const res = await axios.post('https://wema.creditclan.com/rent/pending/request', { phone: data?.user?.phone })
      if (res?.data?.status) {
        const request = res?.data?.request ?? null;
        if (request) request.payload = parseJsonString(request.payload) || request.payload;
        setProperty(request);
        if (request?.creditclan_request_id) {
          await gertLoanDetails(request)
        }
        return res?.data
      }
    } catch (error) {
      console.log({ error });
    }
  }

  const gertLoanDetails = async (request) => {
    const { email, phone } = data?.user
    try {
      const { data } = await axios.post('https://mobile.creditclan.com/api/v3/customer/check/details', { email, phone }, {
        headers: { 'x-api-key': 'WE4mwadGYqf0jv1ZkdFv1LNPMpZHuuzoDDiJpQQqaes3PzB7xlYhe8oHbxm6J228' }
      });
      const { token } = data;
      const res = await axios.post('https://mobile.creditclan.com/api/v3/loan/details', { token, request_id: request?.creditclan_request_id }, {
        headers: { 'x-api-key': 'WE4mwadGYqf0jv1ZkdFv1LNPMpZHuuzoDDiJpQQqaes3PzB7xlYhe8oHbxm6J228' }
      });
      setLoan(res.data.data)
      return res.data.data;
    } catch (error) {
      console.log({ error });
    }
  }


  // const {
  //   data: loan,
  //   isLoading: isGetLoanDetailsLoading,
  // } = useGetLoanDetailsQuery({
  //   email: data?.user?.email,
  //   phone: data?.user?.phone,
  //   request_id: pendingRequest?.creditclan_request_id,
  // });

  const Submit = async () => {
    try {
      setLoading(true)
      const res = await checkPendingReq()
      if (res?.status) {
        toast.error(res?.message);
        setViews('request-details')
      } else {
        const payload = {
          source: 1,
          process_type: 'foundHouse',
          picture: '',
          full_name: data?.user?.name,
          phone: data?.user?.phone,
          email: data?.user?.email,
          amount: data?.want_property?.price,
          house_type: data?.want_property?.title,
          address: data?.want_property?.address,
          picture: data?.want_property?.image,
        }
        const res = await send(payload);
        if (res.data.status) {
          await checkPendingReq()
          toast.success(res.data.message || "Request Successfully Created");
          setViews('request-details');
          // updateData({ ...data, user: { ...data?.user, want_this: false } })
        }
      }
      setLoading(false)

    } catch (error) {
      setLoading(false)
      console.log((error));
    }
  }


  return (
    <>
      <Drawer isOpen={true} onClose={onClose} title='Request Summary'>
        {views === 'summary' && (
          <div>
            <p className='font-semibold'>Property Details</p>
            <div className="border rounded-2xl mt-5 divide-y">
              <div className="flex justify-between p-5">
                <p>Property Name:</p>
                <p>{data?.want_property?.title}</p>
              </div>
              <div className="flex justify-between p-5">
                <p>Property Address:</p>
                <p>{data?.want_property?.address}</p>
              </div>
              <div className="flex justify-between p-5">
                <p>Price:</p>
                <p>{data?.want_property?.price}</p>
              </div>
              <div className="flex justify-between p-5">
                <p>Area:</p>
                <p>{data?.want_property?.area}</p>
              </div>
              <div className="flex justify-between p-5">
                <p>Description:</p>
                <p>{data?.want_property?.description}</p>
              </div>
            </div>
            <Button className='mt-10' loading={loading} onClick={Submit} >Proceed</Button>
          </div>
        )}
        {
          views === 'request-details' && (
            <ViewPropertyDetails request={property} loan={loan} onClose={onClose} />
            // <RequestDetails />
          )
        }
      </Drawer>
    </>
  )
}

export default WantThis;