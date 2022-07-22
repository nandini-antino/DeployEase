import React from 'react';

import './Title.scss';

const Title = (props) => {
	let { t1, t2, subtitle, isSpan, isCenter, isAnimated, isBreakRule} = props;
	return (
		<h1
			className={`Title ${isCenter ? 'Title--Center' : ''} ${
				isAnimated ? 'Title--Animated' : ''
			}`}
			style={{ ...props.style }}
		>
			{t1}
			{
				isBreakRule ? <br /> : null
			}
			{t2}
			{isSpan ? <span className="Title--Span">{subtitle}</span> : null}
		</h1>
	);
};

export default React.memo(Title);
