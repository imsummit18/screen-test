import Select from 'react-select'
import React from "react";




const CustomStyles = {
    control: (styles) => ({
        ...styles,
        borderWidth: "1px",
        borderColor: "#CACFE3",
        boxShadow: "none",
        marginTop:"12px",
        borderRadius:"12px",
        height:"40px",
        ':focus': {
            borderColor: "#9ca3af",
        },
        ':hover': {
            borderColor: "#9ca3af",
        },
        ':active': {
            borderColor: "#9ca3af",
        }

    }),
    input: (base) => ({
        ...base,
        'input:focus': {
            boxShadow: 'none',
            border: 'none',
            outline: 'none'
        },
        border: "none"
    })
};
const ReactSelect = (props) => {
    const {id, options, name, value,defaultValue,onChange } = props;
    return (
        <Select
            id = {id}
            name={name}
            value={value}
            options={options}
            defaultValue={options[defaultValue]}
            required= {true}
            isClearable={true}
            styles={CustomStyles}
            onChange={onChange}
        />
    )
}

export default ReactSelect;