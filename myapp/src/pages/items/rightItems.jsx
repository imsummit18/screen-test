import React, { useState } from 'react'

const RightItems = () => {
    const [isSpicesChecked, setIsSpicesChecked] = useState(false);
    const [isToppingsChecked, setToppingsChecked] = useState(false);
    const [isExtraChecked, setIsExtraChecked] = useState(false);

    const handleSpicesToggle = () => {
        setIsSpicesChecked(!isSpicesChecked);
    };

    const handleToppingsToggle = () => {
        setToppingsChecked(!isToppingsChecked);
    };
    const handleExtraToggle = () => {
        setIsExtraChecked(!isExtraChecked);
    };
    return (
        <>
            <div className='w-[340px]'>
                <p className='text-primary-300 text-xl font-semibold'>Basic Information</p>
                {/*spicies  */}

                <div className='flex justify-between mt-3'>
                    <label htmlFor="" >Spices</label>
                    <div>
                        <input
                            type="checkbox"
                            id="spices"
                            name='spices'
                            className="checkbox hidden"
                            checked={isSpicesChecked}
                            onChange={handleSpicesToggle}
                        />

                        <label
                            htmlFor="spices"
                            className="toggle inline-block w-12 h-6 bg-gray-100 rounded-full border-2 border-gray-400 relative cursor-pointer"
                        >
                            <div
                                className={`absolute w-6 h-6 rounded-[50%] -top-[2px] -left-[2px] bg-gray-400 transition-transform duration-500 ${isSpicesChecked ? 'transform translate-x-full bg-primary-400' : ''}`}
                            ></div>
                        </label>

                    </div>
                </div>
                {/* Toppings */}
                <div className='flex justify-between mt-3'>
                    <label htmlFor="" >Toppings</label>
                    <div>
                        <input
                            type="checkbox"
                            id="toppings"
                            name='toppings'
                            className="checkbox hidden"
                            checked={isToppingsChecked}
                            onChange={handleToppingsToggle}
                        />
                        <label
                            htmlFor="toppings"
                            className="toggle inline-block w-12 h-6 bg-gray-100 rounded-full border-2 border-gray-400 relative cursor-pointer"
                        >
                            <div
                                className={`absolute w-6 h-6 rounded-[50%] -top-[2px] -left-[2px] bg-gray-400 transition-transform duration-500 ${isToppingsChecked ? 'transform translate-x-full bg-primary-400' : ''}`}
                            ></div>
                        </label>

                    </div>
                </div>
                {/* Extra */}
                <div className='flex justify-between mt-3'>
                    <label htmlFor="" >Extra</label>
                    <div>
                        <input
                            type="checkbox"
                            id="extra"
                            name='extra'
                            className="checkbox hidden"
                            checked={isExtraChecked}
                            onChange={handleExtraToggle}
                        />

                        <label
                            htmlFor="extra"
                            className="toggle inline-block w-12 h-6 bg-gray-100 rounded-full border-2 border-gray-400 relative cursor-pointer"
                        >
                            <div
                                className={`absolute w-6 h-6 rounded-[50%] -top-[2px] -left-[2px] bg-gray-400 transition-transform duration-500 ${isExtraChecked ? 'transform translate-x-full bg-primary-400' : ''}`}
                            ></div>
                        </label>

                    </div>
                </div>
                
            </div>
        </>
    )
}

export default RightItems
