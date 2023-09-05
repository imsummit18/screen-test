import React, { useState } from 'react'
import { BsGrid, BsBarChart, BsPeople, BsTelephone, BsChevronDown, BsChevronUp } from "react-icons/bs"
import { CiClock2 } from "react-icons/ci"
import { BiCake, BiReceipt, BiHelpCircle } from "react-icons/bi"
import { AiOutlineIdcard } from "react-icons/ai"
import { FiSettings } from "react-icons/fi"


const Sidemenu = () => {
    const [showSubMenu, setShowSubMenu] = useState(false)
    return (
        <>
            <div className="min-h-full relative w-[241px] border-r border-primary-200">
                <div className=' mb-8 w-full  flex flex-col justify-center items-center '>
                    <img src="/images/company_logo.svg" alt="" className='mt-6' />
                </div>
                <div className='ml-8 text-primary-100 flex  flex-col '>
                    <div>
                        <div className='flex w-full'>
                            <BsGrid size={"24px"} />
                            <p className='text-base  ml-4'>Sales</p>
                        </div>
                        {/*  */}
                        <div className='flex w-full mt-6'>
                            <BsBarChart size={"24px"} />
                            <p className='text-base  ml-4'>Report</p>
                        </div>
                        {/*  */}
                        <div className='flex w-full mt-6'>
                            <CiClock2 size={"24px"} />
                            <p className='text-base  ml-4'>Shift</p>
                        </div>
                        {/*  */}
                        <div className='flex w-full mt-6'>
                            <BiCake size={"24px"} />
                            <p className='text-base  ml-4'>Restaurant</p>
                        </div>
                        {/*  */}
                        <div className='w-full mt-6 border-r-2 border-primary-400  '>
                            <div className="flex">
                                <BsGrid size={"24px"} />
                                <div className='w-[150px] flex  cursor-pointer items-center justify-between '>
                                    <p className='text-base  ml-4 text-primary-400'>Items</p><span onClick={() => setShowSubMenu(!showSubMenu)}>{showSubMenu ? <BsChevronUp /> : <BsChevronDown />}</span>
                                </div>
                            </div>

                            {
                                showSubMenu &&
                                <ul className="ml-10 mt-3">
                                    <li className="text-primary-400">Items List</li>
                                    <li className='mt-2'>Set Menu</li>
                                    <li className='mt-2'>Combo</li>
                                    <li className='mt-2'>Categories</li>
                                    <li className='mt-2' >Modifiers</li>
                                    <li className='mt-2'>Discount</li>
                                </ul>
                            }
                        </div>
                        {/*  */}
                        <div className='flex w-full mt-6'>
                            <BsPeople size={"24px"} />
                            <p className='text-base ml-4'>Customers</p>
                        </div>
                        {/*  */}
                        <div className='flex w-full mt-6'>
                            <AiOutlineIdcard size={"24px"} />
                            <p className='text-base ml-4'>Employee</p>
                        </div>
                        {/*  */}
                        <div className='flex w-full mt-6'>
                            <BiReceipt size={"24px"} />
                            <p className='text-base ml-4'>Receipt</p>
                        </div>
                        {/*  */}
                        <div className='flex w-full mt-6'>
                            <FiSettings size={"24px"} />
                            <p className='text-base ml-4'>Settings</p>
                        </div>
                        {/*  */}
                        <div className='flex w-full mt-6'>
                            <BiHelpCircle size={"24px"} />
                            <p className='text-base  ml-4'>Help</p>
                        </div>
                        {/*  */}


                    </div>
                    <div className='flex items-center absolute bottom-5'>
                        <BsTelephone size={"24px"} />
                        <div className='ml-4'>
                            <p >Contact Us</p>
                            <p>9863534648</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Sidemenu
