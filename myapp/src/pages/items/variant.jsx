import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { AiOutlinePlus } from 'react-icons/ai';
import { MdDeleteOutline } from 'react-icons/md';
import { RxCross1, RxCross2 } from 'react-icons/rx';
import TextInput from '../../components/TextInput';
import variantOptions from '../data';
import ReactSelect from '../../components/ReactSelect';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "832px",
    borderRadius: "12px",
    height: "342px",
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

export default function Variant() {
    const [selectedOption, setSelectedOption] = useState("");
    const [defaultVariant, setDefaultVariant] = useState([]);
    const [open, setOpen] = useState(false);
    const [showVariant, setShowVariant] = useState(false)
    const [showDesc, setShowDesc] = useState(true)
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [isAdd, setIsAdd] = useState(false)

    const handleOptionChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedOption(selectedValue);

        const selectedOptionData = variantOptions.find((option) => option.name === selectedValue);
        if (selectedOptionData) {
            setDefaultVariant(selectedOptionData.variants || "");
        } else {
            setDefaultVariant("");
        }
    };
    const handleCreateVariant = () => {
        setOpen(false);
        setShowVariant(true)
        console.log("submitted")
    }
    const handleAddDescription = (id) => {
        setIsAdd(!isAdd)
        if (id == defaultVariant.id) {
            setShowDesc(true);
        }
    }


    return (
        <div>
            <p className='font-bold  text-xl text-primary-300 mt-5'>Variant</p>
            <button onClick={handleOpen} className='cursor-pointer mt-3 w-full border-2 border-primary-400 rounded-xl px-4 py-[6px] text-sm text-primary-400 font-semibold flex items-center pl-[35%]'> <AiOutlinePlus color='#4062FF' size={"24px"} />Add Variant</button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className="flex items-center justify-between">
                        <Typography id="modal-modal-title" variant="h6" component="h2" style={{ fontWeight: 'bold' }}>
                            Create Variants
                        </Typography>
                        <RxCross2 size={"24px"} onClick={handleClose} style={{ cursor: 'pointer' }} />
                    </div>

                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <div className="p-6 border-[1px] border-primary-200 rounded-xl">
                            <div className="flex">
                                <div className='w-1/2 mr-5'>
                                    <p>Option Name</p>
                                    <select
                                        className='focus:border-1  focus:border-primary-200 focus:shadow-none focus:ring-0 focus:outline-none flex items-center w-full  mt-2  border-[1px] border-primary-200  rounded-xl px-2  py-2 h-12'
                                        name="" id=""
                                        value={selectedOption}
                                        onChange={handleOptionChange}
                                    >
                                        {variantOptions.map((option, index) => (
                                            <option key={index} value={option.name} >
                                                {option.name}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                                <div className='w-1/2'>
                                    <p className='font-bold'>Variant Name</p>
                                    <div className="flex focus:border-1  focus:border-primary-200 focus:shadow-none focus:ring-0 focus:outline-none items-center w-full  mt-2  border-[1px] border-primary-200  rounded-xl px-2  py-2 h-12">
                                        {
                                            defaultVariant.map((item) => {
                                                return (
                                                    <>
                                                        <p className="flex  items-center mr-4 bg-primary-400 rounded text-white py-1 px-2">{item} <span className='ml-1 cursor-pointer'><RxCross1 size={"20px"} /></span> </p>
                                                    </>
                                                )

                                            })
                                        }
                                    </div>

                                </div>
                                <div>
                                    <MdDeleteOutline size={"24px"} style={{ color: "#949CC0", cursor: "pointer" }} />
                                </div>
                            </div>
                        </div>
                        <div className='mt-4 w-full flex justify-center items-center cursor-pointer'>
                            <img src="/images/PlusCircle.svg" alt="Add Button" />
                        </div>
                        <div className=' mt-3 flex justify-end'>
                            <button onClick={handleClose} className='cursor-pointer  px-4 py-[6px] text-sm text-primary-400  flex items-center'>Cancel</button>
                            <button onClick={handleCreateVariant} className='cursor-pointer border-2 border-primary-400  rounded-xl py-[12px] px-[27px] text-sm  text-white bg-primary-400'>Create Variant</button>
                        </div>
                    </Typography>
                </Box>
            </Modal>

            {/*  */}
            {
               ( showVariant && !open) &&
                               <div>
                    {
                        defaultVariant.map((item, index) => {
                            return (
                                <>
                                    <div className=' mt-5 focus:border-1  focus:border-primary-200 focus:shadow-none focus:ring-0 focus:outline-none flex items-center w-full   border-[1px] border-primary-200  rounded-xl px-2  py-2 h-fit'>
                                        <div>
                                            <p>{item}</p>
                                            <div className='flex justify-between w-full mr-5 '>
                                                <div className='flex items-center justify-between '>
                                                    <p className='mr-2'>Rs. </p> <TextInput className="w-[70px]" />
                                                </div>
                                                <div className='flex items-center justify-between '>
                                                    <p className='mr-2'>In Stock. </p> <TextInput className="w-[70px]" />
                                                </div>
                                            </div>
                                            {/* desc */}

                                            <div >
                                                {/* {
                                                    (isAdd && showDesc) ?
                                                        <div className='mt-4'>
                                                            <p>Description</p>
                                                            <textarea
                                                                className='border-[1px] border-primary-200  rounded-xl px-1  py-2 focus:border-[1px]  focus:border-primary-200  mt-3 focus:shadow-none focus:ring-0 focus:outline-none'
                                                                type="text"
                                                                name="description-text"
                                                                id="description-text"
                                                                rows="4"
                                                                cols="42" />

                                                        </div>
                                                        : */}
                                                         <p onClick={() => handleAddDescription(item.id)} className='flex  items-center mt-4 text-primary-400 cursor-pointer'><AiOutlinePlus size={"20px"} />Description</p>
                                                {/* } */}
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            }


        </div>
    );
}



