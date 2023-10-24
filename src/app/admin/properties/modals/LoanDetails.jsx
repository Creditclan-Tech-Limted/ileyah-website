import { useCheckRentRequestMutation } from '@/api/rent';
import Drawer from '@/components/Drawer';
import { formatCurrency, parseJsonString } from '@/lib/utils';
import axios from 'axios';
import { useEffect, useState } from 'react'

const LoanDetails = ({ isOpen, onClose, details }) => {
  const [pendingRequest, setPendingRequest] = useState(null);
  const [recovery, setRecovery] = useState([]);
  const [views, setViews] = useState('bio');
  const [loading, setloading] = useState(true);
  const [schedules, setSchedules] = useState()

  const getUser = async () => {
    try {
      setloading(true)
      const res = await axios.post('https://wema.creditclan.com/rent/pending/request', { phone: details?.phone || 'N/A' });
      if (res.data.status) {
        const request = res?.data?.request ?? null;
        if (request) request.payload = parseJsonString(request.payload) || request.payload;
        await getRecoveryInfo(request?.creditclan_request_id);
        await getUpfrontStatus(request?.creditclan_request_id);
        setPendingRequest(res.data.request)
        setloading(false)
      }
    } catch (e) {
      console.log({ e });
    }
  };

  const getRecoveryInfo = async () => {
    try {
      const res = await axios.post('https://mobile.creditclan.com/api/v3/loan/recovery', { creditclan_request_id: '310655' }, { headers: { 'x-api-key': 'WE4mwadGYqf0jv1ZkdFv1LNPMpZHuuzoDDiJpQQqaes3PzB7xlYhe8oHbxm6J228' } });
      setSchedules(res?.data?.data?.currentLoan[0]?.schedules)
      setRecovery(res?.data?.data)
      console.log(recovery);
    } catch (error) {
      console.log({ error });
    }
  };

  const getUpfrontStatus = async creditclan_request_id => {
    try {
      const res = await axios.post('https://wema.creditclan.com/api/v3/wema/getUpfrontStatus', { request_id: creditclan_request_id })
      console.log(res?.data?.data);
    } catch (error) {
      console.log({ error });
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <Drawer title='Loan Details' isOpen={isOpen} onClose={onClose} longer={true}>
        <div>
          <div className="grid grid-cols-5 gap-10">
            <div className={views === 'bio' ? 'rounded-full px-4 py-2 bg-black text-white text-center cursor-pointer' : 'rounded-full px-4 py-2 text-center cursor-pointer'} onClick={() => setViews('bio')}>Details</div>
            <div className={views === 'schedules' ? 'rounded-full px-4 py-2 bg-black text-white text-center cursor-pointer' : 'rounded-full px-4 py-2 text-center cursor-pointer'} onClick={() => setViews('schedules')} >Schedules</div>
            <div className={views === 'payments' ? 'rounded-full px-4 py-2 bg-black text-white text-center cursor-pointer' : 'rounded-full px-4 py-2 text-center cursor-pointer'} onClick={() => setViews('payments')}  >Payments</div>
            <div className={views === 'upfront' ? 'rounded-full px-4 py-2 bg-black text-white text-center cursor-pointer' : 'rounded-full px-4 py-2 text-center cursor-pointer'} onClick={() => setViews('upfront')} >Upfront</div>
            <div className={views === 'comments' ? 'rounded-full px-4 py-2 bg-black text-white text-center cursor-pointer' : 'rounded-full px-4 py-2 text-center cursor-pointer'} onClick={() => setViews('comments')} >Comments</div>
          </div>

          <hr className='mt-5' />

          {loading && (
            <div>
              loading...
            </div>
          )}

          {!loading && (
            <>
              {
                views === 'bio' && (
                  <div className='mt-5 divide-y border rounded-xl'>
                    <div className="flex justify-between p-4">
                      <p>Name</p>
                      <p>{details?.name || 'N/A'}</p>
                    </div>
                    <div className="flex justify-between p-4">
                      <p>Phone</p>
                      <p>{details?.phone || 'N/A'}</p>
                    </div>
                    <div className="flex justify-between p-4">
                      <p>Email</p>
                      <p>{details?.email || 'N/A'}</p>
                    </div>
                    <div className="flex justify-between p-4">
                      <p>Address</p>
                      <p>{pendingRequest?.address}</p>
                    </div>
                    <div className="flex justify-between p-4">
                      <p>Price</p>
                      <p>{formatCurrency(pendingRequest.amount)}</p>
                    </div>
                    <div className="flex justify-between p-4">
                      <p>House Type</p>
                      <p>{pendingRequest.payload?.house_type}</p>
                    </div>
                    <div className="flex justify-between p-4">
                      <p>Landlord Phone</p>
                      <p>{pendingRequest.payload?.landlord_phone}</p>
                    </div>
                  </div>
                )
              }

              {
                views === 'schedules' && (
                  <>
                    <div className='mt-5'>
                      <table className="w-full text-sm text-left text-gray-500 shadow-md">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-200">
                          <tr>
                            <th scope="col" className="px-6 py-3">Date</th>
                            <th scope="col" className="px-6 py-3">Repayment</th>
                            <th scope="col" className="px-6 py-3">Fines</th>
                            <th scope="col" className="px-6 py-3">Paid</th>
                            <th scope="col" className="px-6 py-3">Balance</th>
                          </tr>
                        </thead>
                        {
                          schedules?.map((item, i) => (
                            <tr key={i}>
                              <td className="px-6 py-4">
                                {item.repayment_date}
                              </td>
                              <td className="px-6 py-4">
                                {(+item.term_repayment || 0).toFixed(2)}
                              </td>
                              <td className="px-6 py-4">{(+item.total_fines_so_far || 0).toFixed(2)}</td>
                              <td className="px-6 py-4">
                                {(+item.how_much_paid || 0).toFixed(2)}
                              </td>
                              <td className="px-6 py-4">
                                {(+item.how_much_remaining || 0).toFixed(2)}
                              </td>
                            </tr>

                          ))
                        }
                      </table>
                    </div>

                  </>
                )
              }

              {
                views === 'payments' && (
                  <>
                    <div className="mt-5">
                      <table v-if="response?.payments?.length" className="w-full text-sm text-left text-gray-500 shadow-md">
                        {!recovery?.payments.length && (
                          <>
                            <div className='text-cemter flex justify-center p-10 w-full'>
                              No Payment yet
                            </div>
                          </>
                        )}
                        <thead className="text-xs text-gray-700 uppercase bg-gray-200">
                          <tr className="text-center border">
                            <th scope="col" className="px-6 py-3 text-left">Amount</th>
                            <th scope="col" className="px-6 py-3 text-end">Date</th>
                          </tr>
                        </thead>
                        {
                          recovery?.payments.map((item, i) => (
                            <tr key="item.repayment_date">
                              <td className="px-6 py-4">
                                {formatCurrency(+ item.amount || 0)}
                              </td>
                              <td className="px-6 py-4 text-end">
                                {item.date_added.slice(0, 10)}
                              </td>
                            </tr>
                          )
                          )
                        }
                      </table>
                    </div>
                  </>
                )
              }

            </>
          )}



        </div>
      </Drawer>
    </>
  )
}

export default LoanDetails;