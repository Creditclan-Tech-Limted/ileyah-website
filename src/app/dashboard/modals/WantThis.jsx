import { useCreateRentRequestMutation } from '@/api/rent';
import Drawer from '@/components/Drawer'
import Button from '@/components/global/Button';
import useSignupStore from '@/store/signup';
import RequestDetails from '../find-me-a-house/RequestDetails';
import { useState } from 'react';
import { useToast } from '@/lib/use-toast';

const WantThis = ({ onClose }) => {
    const toast = useToast();
    const { data, updateData } = useSignupStore((state) => state);
    const { mutateAsync: send, isLoading } = useCreateRentRequestMutation();
    const [views, setViews] = useState('summary')

    const Submit = async () => {
        try {
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
            console.log(res?.data);
            if (res.data.status) {
                toast.success(res.data.message || "Request Successfully Created");
                setViews('request-details');
                // updateData({ ...data, user: { ...data?.user, want_this: false } });

            }
        } catch (error) {
            console.log((error));
        }
    }


    console.log({ data });
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
                        <Button className='mt-10' loading={isLoading} onClick={Submit} >Proceed</Button>
                    </div>
                )}
                {
                    views === 'request-details' && (
                        <RequestDetails />
                    )
                }
            </Drawer>
        </>
    )
}

export default WantThis;
// {
//     "full_name": "Oyegbile Praise",
//     "phone": "09039719017",
//     "email": "oluwadhammieh@gmail.com",
//     "amount": "781000",
//     "house_type": "duplex",
//     "address": "372 Deini Way lorem ipsum way",
//     "information_source": "Ileyah Representative",
//     "picture": "https://dataupload.creditclan.com/pub/attachments/cdb3c963813375b23620675cb5c3abb7.png",
//     "process_type": "foundHouse",
//     "source": 1
// }