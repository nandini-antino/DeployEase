import React from 'react';
import { Link } from 'react-router-dom';

import './ProfileCard.scss';

const ProfileCard = (props) => {
	let { title, imgurl, subtitle, isInput, changed, onBlur } = props;

	return (
		<div className="ProfileCard">
			<div className="ProfileCard--Left">
				<img src={imgurl} className="ProfileCard--Img" alt="security" />
				<div className="ProfileCard--LeftDiv">
					<h1 className="ProfileCard--SubTitle">{subtitle}</h1>
					{isInput ? (
						<input
							className="ProfileCard--Input"
							onChange={(e) => changed(e)}
							onBlur={onBlur}
							value={title}
							type="text"
						/>
					) : (
						<h1 className="ProfileCard--Title">{title}</h1>
					)}
				</div>
			</div>
			{subtitle !== 'Name' ? (
				<Link
					to={
						subtitle === 'Email Address'
							? '/dashboard/profile/updateEmail'
							: '/dashboard/profile/updatePhoneNumber'
					}
				>
					<h1 className="ProfileCard--Para">Update</h1>
				</Link>
			) : null}
		</div>
	);
};

export default React.memo(ProfileCard);
