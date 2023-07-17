import { IconSettings } from '@tabler/icons-react';
import React from 'react'

const Benefit = () => {
    return (
        <>
        <div className="">
            <div className="max-w-7xl mx-auto py-28">
                <div className='font-bold text-5xl max-w-xl text-center mx-auto'>
                    Your Employee can leave like a King 👑
                </div>
                <div className="grid md:grid-cols-2 gap-10 mt-20 px-4 md:px-0">
                    <div className='bg-slate-200 rounded-xl p-10 space-y-4'>
                        <img src="/assets/images/companies/1.svg" alt="" className='w-16' />
                        {/* <IconSettings /> */}
                        <h4 className='font-bold text-2xl'>Lorem Ipsum item dolor.</h4>
                        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe veritatis dolorum ratione repellat tenetur! </div>
                    </div>
                    <div className='bg-slate-200 shadow rounded-xl p-10 space-y-4'>
                        {/* <IconSettings /> */}
                        <img src="/assets/images/companies/2.svg" alt="" className='w-16' />
                        <h4 className='font-bold text-2xl'>Lorem Ipsum item dolor.</h4>
                        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe veritatis dolorum ratione repellat tenetur! </div>
                    </div>
                    <div className='bg-slate-200 rounded-xl p-10 space-y-4'>
                    <img src="/assets/images/companies/3.svg" alt="" className='w-16' />
                        {/* <IconSettings /> */}
                        <h4 className='font-bold text-2xl'>Lorem Ipsum item dolor.</h4>
                        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe veritatis dolorum ratione repellat tenetur! </div>
                    </div>
                    <div className='bg-slate-200 shadow rounded-xl p-10 space-y-4'>
                    <img src="/assets/images/companies/4.svg" alt="" className='w-16' />
                        {/* <IconSettings /> */}
                        <h4 className='font-bold text-2xl'>Lorem Ipsum item dolor.</h4>
                        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe veritatis dolorum ratione repellat tenetur! </div>
                    </div>
                </div>
        </div>
            </div>
        </>
    )
}

export default Benefit;