'use client'
import Button from '@/components/global/Button';
import useSignupStore from '@/store/signup';
import { IconPlus } from '@tabler/icons-react';

const page = () => {
    const { data, updateData } = useSignupStore((state) => state);
    console.log({ data });
    return (
        <>
            <div className="md:flex justify-between">
                <div className='text-4xl font-bold'>
                    Welcome, {data?.user?.fullname || 'Ileyah hq'} 👋🏿
                </div>
                <Button leftIcon={<IconPlus />} size='xs' className='my-5 md:my-0 ml-auto'  >Add New Staff</Button>
            </div>

            <div>
                <div className="mt-10">
                    <div className="bg-white shadow border rounded-[1.2rem] transition-all duration-300 relative overflow-x-auto">
                        <table className="w-full text-[.95rem] text-left">
                            <thead className="text-gray-500 border-b border-slate-200">
                                <tr>
                                    <th scope="col" className="px-6 py-4">Name</th>
                                    <th scope="col" className="px-6 py-4">Phone</th>
                                    <th scope="col" className="px-6 py-4">Email</th>
                                    <th scope="col" className="px-6 py-4">Amount</th>
                                    <th scope="col" className="px-6 py-4">Department</th>
                                    {/* <th scope="col" className="px-6 py-4">Role</th> */}
                                    <th scope="col" className="px-6 py-4">Status </th>
                                    <th scope="col" className="px-6 py-4">Date </th>
                                    <th scope="col" className="px-6 py-4">Action </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, i) => (
                                        <tr className="hover:bg-gray-50 cursor-pointer select-none border-b">
                                            <td scope="row" className="px-6 py-4 whitespace-nowrap">Oyegbile Praise </td>
                                            <td className="px-6 py-4 whitespace-nowrap">+234 903 9719 017</td>
                                            <td className="px-6 py-4 whitespace-nowrap">praise@ileyah.com</td>
                                            <td className="px-6 py-4 whitespace-nowrap">N1,000,000</td>
                                            <td className="px-6 py-4 whitespace-nowrap">Technology</td>
                                            {/* <td className="px-6 py-4 whitespace-nowrap">Software Engineer</td> */}
                                            <td className="px-6 py-4">
                                                {i !== 1 ? <div className="px-2.5 py-1 leading-none inline-block rounded-full border border-gray-600 text-gray-600 !border-red-500 !text-red-500">Failed Eligibility</div> : <div className="px-2.5 py-1 leading-none inline-block rounded-full border border-gray-600 text-gray-600 !border-green-500 !text-green-500">Approved</div>}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">12th Jul, 2023</td>
                                            <td> <Button size='xs' variant='outlined'> Details </Button> </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page;