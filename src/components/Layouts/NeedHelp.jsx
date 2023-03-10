import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsWhatsapp } from 'react-icons/bs'
import { TfiHeadphoneAlt } from 'react-icons/tfi'
import { useSelector } from 'react-redux'

function NeedHelp() {
    const { home } = useSelector(state => state.general)
    return (
        <div className='hidden lg:block bg-light border rounded-xl py-5 mt-5 mb-10'>
            <div className='p-3 text-text space-y-3'>
                <div className='text-2xl text-darktext'>
                    Need Help?
                </div>
                {(home?.data?.phoneNumber1 || home?.data?.phoneNumber2) && (
                    <div className='flex items-center space-x-3 ml-3'>
                        <div className='text-2xl text-blue'><TfiHeadphoneAlt /> </div>
                        <div className='space-y-2'>
                            <div className='text-main'>Call us on</div>
                            <div className='text-sm'>+91{home?.data?.phoneNumber1} </div>
                            <div className='text-sm'>+91{home?.data?.phoneNumber2}</div>
                        </div>
                    </div>
                )}
                {home?.data?.whatsappNumber && (
                    <div className='flex items-center space-x-3 ml-3'>
                        <div className='text-2xl text-green-600'><BsWhatsapp /> </div>
                        <div className='space-y-2'>
                            <div className='text-main'>Whatsapp us on</div>
                            <div className='text-sm'>+91{home?.data?.whatsappNumber}</div>
                        </div>
                    </div>
                )}
                {home?.email && (
                <div className='flex items-center space-x-3 ml-3'>
                    <div className='text-2xl text-blue'><AiOutlineMail /> </div>
                    <div className='space-y-2'>
                        <div className='text-main'>Email us on</div>
                        <div className='text-sm'>{home?.email}</div>
                    </div>
                </div>
                )}
            </div>
        </div>
    )
}

export default NeedHelp