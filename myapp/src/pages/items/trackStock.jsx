import React, { useState } from 'react'
import TextInput from '../../components/TextInput';

const TrackStock = () => {
    const [isTrackChecked, setIsTrackChecked] = useState(false);
    // console.log("is track is",isTrackChecked)
    const handleTrackToggle = () => {
        console.log("is track is", isTrackChecked)
        console.log("hello")
        setIsTrackChecked(!isTrackChecked);
    };
    return (
        <>
            <div className='flex justify-between mt-6'>
                <label htmlFor="" className='font-bold  text-xl text-primary-300'>Track Stock</label>
                <div>
                    <input
                        type="checkbox"
                        id="track"
                        name="track"
                        className="hidden"
                        checked={!isTrackChecked}
                        onChange={handleTrackToggle}
                    />
                    <label
                        htmlFor="track"
                        className="toggle inline-block w-12 h-6 bg-gray-100 rounded-full border-2 border-gray-400 relative cursor-pointer"
                    >
                        <div
                            className={`absolute w-6 h-6 rounded-[50%] -top-[2px] -left-[2px] bg-gray-400 transition-transform duration-500 ${isTrackChecked ? 'transform translate-x-full bg-primary-400 ' : ''}`}
                        ></div>
                    </label>
                </div>
            </div>
            {
                isTrackChecked &&
                <div className='mt-4 flex justify-between items-center'>
                    <p>Low Stock Alert</p>
                    <div className='flex items-center w-16 mt-2  border-[1px] border-primary-200  rounded-xl px-1  py-2 h-10'>
                        <input
                            type="text"
                            className="border-0  w-12 p-1 focus:border-0 h-8 focus:shadow-none focus:ring-0 focus:outline-none" />
                    </div>
                </div>
            }
        </>
    )
}

export default TrackStock
