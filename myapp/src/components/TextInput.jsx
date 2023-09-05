import cx from 'clsx';
import React from 'react';

const TextInput =((props) => (
    <div className="flex items-center   mt-2  border-[1px] border-primary-200  rounded-xl px-1  py-2 h-10 ">
        <input
            {...props}
            type={props.type || 'text'}
            className={cx(
                'border-0 focus:border-0 h-8 focus:shadow-none focus:ring-0 focus:outline-none',
                props.className
            )}
        />
    </div>
));
export default TextInput;