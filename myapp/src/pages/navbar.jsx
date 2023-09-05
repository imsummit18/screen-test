import React from 'react'
import { BsChevronDown } from 'react-icons/bs'
import { IoMdNotificationsOutline } from "react-icons/io"

const Navbar = () => {
    return (
        <>
            <div className='h-[62px] min-w-[1125px] border-b-[1px] border-primary-200 flex items-center justify-end'>
                <div className='w-[327px]  my-4 mr-8  flex  justify-between items-center'>
                    <button className='border-2 border-primary-300 rounded-xl px-4 py-[6px] text-sm text-primary-300 font-semibold'>Close Shift</button>
                    <IoMdNotificationsOutline size={'24px'} />
                    <p className='bg-red-500 rounded-[50%] h-[30px] w-[30px]'></p>
                    <p>Jane Austen </p>
                    <BsChevronDown />
                </div>
            </div>
        </>
    )
}

export default Navbar
