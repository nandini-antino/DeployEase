import React from 'react';

import flaglogo from '../../Assets/flag.png';
import './Input.scss';

const Input = React.forwardRef((props, ref) => {
    let { inputtype, isred } = props;

    return (
        inputtype === 'mobile_county_code' ?
            <div className="InputWrapper">
                <div className='InputWrapper--Flag'>
                    <img src={flaglogo} className='InputWrapper--FlagImg' alt='flag' />
                    +91
                </div>
                <input className={`Input ${isred ? 'Input--Red' : ''}`} {...props} ref={ref} />
            </div> :
            <input className={`Input ${isred ? 'Input--Red' : ''}`} {...props} ref={ref} />
    )
})

export default React.memo(Input);