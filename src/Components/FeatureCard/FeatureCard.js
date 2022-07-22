import React from 'react';
import PropTypes from "prop-types";

import './FeatureCard.scss';

const Card = React.forwardRef((props, ref) => {
	let { t1, t2, t3, gradient, id } = props;

	return (
		<div
			className="FeatureCard"
			ref={ref}
			id={id}
			style={{ background: gradient }}
		>
			Card
		</div>
	);
});

Card.prototype = {
	t1: PropTypes.string,
	t2: PropTypes.string,
	t3: PropTypes.string,
	gradient: PropTypes.string,
	id: PropTypes.string
}

export default React.memo(Card);
