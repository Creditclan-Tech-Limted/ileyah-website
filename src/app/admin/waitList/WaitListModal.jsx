import Drawer from '@/components/Drawer';
import { formatCurrency, parseJsonString } from '@/lib/utils';
import axios from 'axios';
import { useEffect, useState } from 'react'
import { IconUser, IconLoader, IconMail, IconPhone, IconUsers } from "@tabler/icons-react";

const WaitListModal = ({ isOpen, onClose, details={} }) => {
    return (
        <>
            <Drawer title='User Details' isOpen={isOpen} onClose={onClose} longer={true}>
                <div className="text">
                    <div className="p-4 bg-white border shadow-lg rounded-xl">
                        <div className="flex items-center space-x-4">
                            <div className="flex items-center justify-center w-12 h-12 text-gray-600 bg-gray-200 rounded-full">
                                <IconUser size={24} />
                            </div>
                            <div>
                                <h2 className="text-lg font-semibold">{details?.full_name}</h2>
                                <p className="text-sm text-gray-500">{details?.occupation || "N/A"}</p>
                            </div>
                        </div>

                        <div className="mt-4 space-y-2 text-sm">
                            <div className="flex justify-between py-2 border-b">
                                <p className="text-gray-700">📧 Email:</p>
                                <p>{details?.email}</p>
                            </div>
                            <div className="flex justify-between py-2 border-b">
                                <p className="text-gray-700">📞 Phone:</p>
                                <p>{details?.phone}</p>
                            </div>
                            <div className="flex justify-between py-2 border-b">
                                <p className="text-gray-700">🏠 House Type:</p>
                                <p>{details?.house_type}</p>
                            </div>
                            <div className="flex justify-between py-2 border-b">
                                <p className="text-gray-700">💰 Budget Range:</p>
                                <p>{details?.budget_range}</p>
                            </div>
                            <div className="flex justify-between py-2 border-b">
                                <p className="text-gray-700">👥 Flatmate Gender:</p>
                                <p>{details?.flatmate_gender} ({details?.flatmate_age_range})</p>
                            </div>
                            <div className="flex justify-between py-2 border-b">
                                <p className="text-gray-700">💼 Work Type:</p>
                                <p>{details?.work_type}</p>
                            </div>
                            <div className="flex justify-between py-2">
                                <p className="text-gray-700">📝 Bio:</p>
                                <p></p>
                            </div>
                            <div className="flex justify-between py-2 border-b">
                                {details?.bio || "N/A"}
                            </div>
                        </div>

                        <button className="w-full py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
                            Fulfill Request
                        </button>
                    </div>

                </div>
            </Drawer>
        </>
    )
}

export default WaitListModal