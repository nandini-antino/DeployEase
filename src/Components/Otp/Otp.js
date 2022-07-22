import React from 'react';
import { isIOS } from 'react-device-detect';

import './Otp.scss';

const Otp = React.forwardRef((props, ref) => {
	let { otp, changed, isRed } = props;

	return (
		<input
			type={isIOS ? 'text' : 'number'}
			pattern="\d*"
			value={otp}
			ref={ref}
			className={`Otp ${isRed ? 'Otp--Red' : ''}`}
			onChange={changed}
		/>
	);
});

export default React.memo(Otp);
