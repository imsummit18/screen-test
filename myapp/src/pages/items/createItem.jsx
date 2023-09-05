import React, { useState } from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import TextInput from '../../components/TextInput'
import Select from 'react-select'
import ReactSelect from '../../components/ReactSelect'
import RightItems from './rightItems'
import TrackStock from './trackStock'
import Variant from './variant'

export const categoryOptions = [
    { id: 1, label: 'A' },
    { id: 2, label: 'B' },
    { id: 3, label: 'C' },
]

const CreateItem = () => {
    const [selectedValue, setSelectedValue] = useState('');
    console.log("hello",selectedValue)
    const [isChecked, setIsChecked] = useState(false);

    const handleToggle = () => {
        setIsChecked(!isChecked);
    };

    const [inputs, setInputs] = useState({
        name:"",
        category:"",
        price: "",
        sku: "",
        description: ""
    });

    const handleChange = (e) => {
        setInputs((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = () => {
        console.log(inputs)
        // setInputs([...inputs,])
    }


    return (
        <div className='m-8 mb-20'>
            <div className='flex items-center'>
                <BsArrowLeft size={"24px"} />
                <p className='text-primary-300 text-xl font-semibold ml-2'>Create Item</p>
            </div>
            {/* basic Information */}
            <div className='w-[778px] p-6 border-[1px] mt-4 rounded-lg flex justify-between  h-full '>
                <div className='w-[340px] '>
                    <p className='text-primary-300 text-xl font-semibold'>Basic Information</p>
                    <div>
                        <div className='mt-3'>
                            <label htmlFor="" >Name</label>
                            <TextInput
                                type="text"
                                name="name"
                                id="name"
                                value={inputs.name}
                                onChange={handleChange}
                            />
                        </div>
                        {/*  */}
                        <div className='mt-3'>
                            <label htmlFor="">Category</label>
                            <ReactSelect
                                name="category"
                                id="category"
                                isClearable
                                className="bg-red-500"
                                options={categoryOptions}
                                defaultValue={categoryOptions.find((x) => x.label === inputs.category)}
                                onChange={(e) => {
                                    setInputs((prev) => ({
                                        ...prev,
                                        category: e.label,
                                    }))
                                }
                                }
                            />
                        </div>
                        {/*  */}
                        <div className='mt-4 flex flex-col '>
                            <label htmlFor="">Sold By</label>
                            <div className='mt-3 flex items-center'>
                                <div className='mr-3'>
                                    <input
                                        type="radio"
                                        value={inputs.option1}
                                        checked={selectedValue === 'option1'}
                                        className='focus:shadow-none focus:ring-0 focus:outline-none focus:bg-blue-500'
                                        onChange={(e) => setSelectedValue(e.target.value)}
                                    /><span className='ml-1'>Each</span>
                                </div>
                                <div>
                                    <input
                                        type="radio"
                                        value={inputs.option2}
                                        className='focus:shadow-none focus:ring-0 focus:outline-none focus:bg-blue-500'
                                        checked={selectedValue === 'option2'}
                                        onChange={(e) => setSelectedValue(e.target.value)}
                                    /><span className='ml-1'>Weight/ Volume</span>
                                </div>
                            </div>
                        </div>
                        {/*  */}

                        <div className='flex justify-between mt-4'>
                            <label htmlFor="" className='font-bold'>Mark as Veg</label>
                            <div>
                                <input
                                    type="checkbox"
                                    id="switch"
                                    className="checkbox hidden"
                                    checked={isChecked}
                                    onChange={handleToggle}
                                />
                                <label
                                    htmlFor="switch"
                                    className="toggle inline-block w-12 h-6 bg-gray-100 rounded-full border-2 border-gray-400 relative cursor-pointer"
                                >
                                    <div
                                        className={`absolute w-6 h-6 rounded-[50%] -top-[2px] -left-[2px] bg-gray-400 transition-transform duration-500 ${isChecked ? 'transform translate-x-full bg-primary-400' : ''}`}
                                    ></div>
                                </label>
                            </div>
                        </div>
                        {/*  */}
                        <div className='mt-3'>
                            <label htmlFor="" >Price</label>
                            <TextInput
                                type="number"
                                name="price"
                                id="price"
                                className="w-full"
                                value={inputs.price}
                                onChange={handleChange}
                            />
                        </div>
                        {/*  */}
                        <div className='mt-3'>
                            <label htmlFor="" >SKU</label>
                            <TextInput
                                type="text"
                                name="sku"
                                id="sku"
                                value={inputs.sku}
                                onChange={handleChange}
                            />
                        </div>
                        {/*  */}

                        <div className='mt-3'>
                            <label htmlFor="" >Description</label>
                            <textarea
                                className='border-[1px] border-primary-200  rounded-xl px-1  py-2 focus:border-[1px]  focus:border-primary-200  mt-3 focus:shadow-none focus:ring-0 focus:outline-none'
                                type="text"
                                name="description"
                                id="description"
                                value={inputs.description}
                                onChange={handleChange}
                                rows="4"
                                cols="42" />
                        </div>
                        {/*  */}
                        {/*  */}
                    </div>
                </div>
                <div className='relative'>
                    <div>
                        <RightItems />
                        <TrackStock />
                        <Variant />
                    </div>
                    <di className="absolute bottom-0 right-1 ">
                        <button
                            onClick={handleSubmit}
                            className=' mt-3 border-2 border-primary-400 rounded-xl px-4 py-[6px] text-sm text-primary-400 font-semibold'>Create Items</button>
                    </di>
                </div>

            </div>

        </div>
    )
}

export default CreateItem

