import React from 'react';
import { isMobile, isMobileOnly } from 'react-device-detect';

import Input from '../Input/Input';
import Button from '../Button/Button';
import FooterMobile from './FooterMobile';
import Server from '../../Server';

import emaillogo from '../../Assets/email.png';
import locationlogo from '../../Assets/location.png';
import companyLogo from '../../Assets/CmpnyLogo.png';
import fblogo from '../../Assets/facebook.png';
import instalogo from '../../Assets/instagram.png';
import linklogo from '../../Assets/linkedin.png';
import './Footer.scss';

class Footer extends React.PureComponent {
	state = {
		name: '',
		email: '',
		subject: '',
		message: '',
		sent: false,
		isLoading: false,
	};

	onInputHandler = (event, type) => {
		event.preventDefault();

		let prevState = { ...this.state };
		prevState[type] = event.target.value;
		this.setState(prevState);
	};

	onSubmitHandler = async (e) => {
		e && e.preventDefault();

		let { name, email, subject, message, isLoading } = this.state;

		if (
			name.length !== 0 &&
			email.length !== 0 &&
			subject.length !== 0 &&
			message.length !== 0 &&
			!isLoading
		) {
			this.setState({ isLoading: true });
			let data = {
				name,
				email,
				subject,
				message,
			};

			Server.post('/', data)
				.then(async (response) => {
					if (response.status === 'success') {
						this.setState({
							sent: true,
							isLoading: false,
							name: '',
							email: '',
							subject: '',
							message: ''
						});

						setTimeout(() => {
							this.setState({ sent: false });
						}, 3000);
					} else {
						this.setState({ isLoading: false });
					}
				})
				.catch((err) => {
					this.setState({ isLoading: false });
				});
		}
	};

	render() {
		let { name, email, subject, message, sent, isLoading } = this.state;
		let isValid =
			name.length !== 0 &&
			email.length !== 0 &&
			subject.length !== 0 &&
			message.length !== 0;

		return (
			<div
				className="Footer"
				style={
					isMobile &&
						window.innerWidth <= 375 &&
						window.innerHeight >= 670
						? {}
						: { margin: '10vh 0', padding: '0 0 0 0' }
				}
			>
				<img
					src={companyLogo}
					className="Footer--Logo"
					alt="companylogo"
				/>
				{isMobileOnly ? (
					<div className="Footer--Mobile">
						<FooterMobile />
					</div>
				) : (
					<div className="Footer--Desktop">
						<div className="Footer--DesktopLeft">
							<div className="Footer--Info">
								<h1 className="Footer--Title">ABOUT US</h1>
								<p className="Footer--Para">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Et officiis nesciunt accusantium temporibus, commodi sed. Exercitationem quam earum eveniet dolorum nihil eligendi, illo tempore! Quo est nostrum repellat rem iusto.
								</p>
							</div>
							<div className="Footer--Info">
								<h1 className="Footer--Title">REACH US</h1>
								<div className="Footer--InfoRow">
									<img
										src={emaillogo}
										className="Footer--InfoRowIcon"
										alt="email"
									/>
									<p className="Footer--Para">
										help@antino.io
									</p>
								</div>
								<div className="Footer--InfoRow">
									<img
										src={locationlogo}
										className="Footer--InfoRowIcon"
										alt="location"
									/>
									<p className="Footer--Para">
										Antino labs Pvt Ltd, <br /> 6th
										Floor, Spaze IT-Park, <br /> Gurgaon -
										122018
									</p>
								</div>
							</div>
						</div>
						<div className="Footer--DesktopRight">
							<h1 className="Footer--Title">CONTACT US</h1>
							<form
								className="Footer--Form"
								onSubmit={this.onSubmitHandler}
							>
								<Input
									inputtype="normal"
									ref={null}
									type="text"
									placeholder="Name"
									value={name}
									onChange={(e) =>
										this.onInputHandler(e, 'name')
									}
									style={{
										marginBottom: '1rem',
										backgroundColor: '#ECECEC',
									}}
								/>
								<Input
									inputtype="normal"
									ref={null}
									type="email"
									placeholder="Email"
									value={email}
									onChange={(e) =>
										this.onInputHandler(e, 'email')
									}
									style={{
										marginBottom: '1rem',
										backgroundColor: '#ECECEC',
									}}
								/>
								<Input
									inputtype="normal"
									ref={null}
									type="text"
									placeholder="Subject"
									value={subject}
									onChange={(e) =>
										this.onInputHandler(e, 'subject')
									}
									style={{
										marginBottom: '1rem',
										backgroundColor: '#ECECEC',
									}}
								/>
								<textarea
									className="Footer--FormTextarea"
									placeholder="Message"
									value={message}
									onChange={(e) =>
										this.onInputHandler(e, 'message')
									}
								/>
							</form>
							{sent ? (
								<p className="Footer--Para">Sent!</p>
							) : (
								<Button
									title="Submit"
									type="action"
									loading={isLoading ? 1 : 0}
									style={{
										width: '30%',
										opacity: isValid ? 1 : 0.5,
										fontSize: '0.9rem',
									}}
									onClick={this.onSubmitHandler}
								/>
							)}
						</div>
					</div>
				)}
				{isMobileOnly < 500 ? (
					<React.Fragment>
						<div
							className="Footer--Social"
							style={isMobile ? { textAlign: 'center' } : {}}
						>
							<div
								className="Footer--SocialRow"
								style={
									isMobile ? { flexDirection: 'column' } : {}
								}
							>
								<h1 className="Footer--Title">FOLLOW US</h1>
								<div className="Footer--SocialRowIcons">
									<a
										href="http://www.facebook.com/antino"
										target="_blank"
										rel="noreferrer"
										onClick={() => {
											if (window.gtag) {
												window.gtag('event', 'Click', {
													event_category:
														'Landing Page',
													event_label:
														'social_facebook',
												});
											}
										}}
									>
										<img
											className="Footer--SocialRowIconsImg"
											src={fblogo}
											alt="fb"
										/>
									</a>
									<a
										href="https://instagram.com/antino"
										target="_blank"
										rel="noreferrer"
										onClick={() => {
											if (window.gtag) {
												window.gtag('event', 'Click', {
													event_category:
														'Landing Page',
													event_label:
														'social_instagram',
												});
											}
										}}
									>
										<img
											className="Footer--SocialRowIconsImg"
											src={instalogo}
											alt="insta"
										/>
									</a>
									<a
										href="https://www.linkedin.com/company/80643563/admin/"
										target="_blank"
										rel="noreferrer"
										onClick={() => {
											if (window.gtag) {
												window.gtag('event', 'Click', {
													event_category:
														'Landing Page',
													event_label:
														'social_linkedin',
												});
											}
										}}
									>
										<img
											className="Footer--SocialRowIconsImg"
											src={linklogo}
											alt="linkedin"
										/>
									</a>
								</div>
							</div>
						</div>
						<div
							className="Footer--Row"
							style={isMobile ? { textAlign: 'center' } : {}}
						>
							<h1 className="Footer--Title">LEGAL</h1>
							<a
								href="#"
								target="_blank"
								rel="noreferrer"
								onClick={() => {
									if (window.gtag) {
										window.gtag('event', 'Click', {
											event_category: 'Landing Page',
											event_label: 'tnc',
										});
									}
								}}
							>
								<p className="Footer--Para">
									Terms & Conditions
								</p>
							</a>
							<a
								href="#"
								target="_blank"
								rel="noreferrer"
								onClick={() => {
									if (window.gtag) {
										window.gtag('event', 'Click', {
											event_category: 'Landing Page',
											event_label: 'privacy_policy',
										});
									}
								}}
							>
								<p className="Footer--Para">Privacy Policy</p>
							</a>
							<a
								href="#"
								target="_blank"
								rel="noreferrer"
								onClick={() => {
									if (window.gtag) {
										window.gtag('event', 'Click', {
											event_category: 'Landing Page',
											event_label: 'return_refund',
										});
									}
								}}
							>
								<p className="Footer--Para">Return & Refund</p>
							</a>
						</div>
					</React.Fragment>
				) : (
					<React.Fragment>
						<div
							className="Footer--Row"
							style={isMobile ? { textAlign: 'center' } : {}}
						>
							<h1 className="Footer--Title">LEGAL</h1>
							<a
								href="#"
								target="_blank"
								rel="noreferrer"
								onClick={() => {
									if (window.gtag) {
										window.gtag('event', 'Click', {
											event_category: 'Landing Page',
											event_label: 'tnc',
										});
									}
								}}
							>
								<p className="Footer--Para">
									Terms & Conditions
								</p>
							</a>
							<a
								href="#"
								target="_blank"
								rel="noreferrer"
								onClick={() => {
									if (window.gtag) {
										window.gtag('event', 'Click', {
											event_category: 'Landing Page',
											event_label: 'privacy_policy',
										});
									}
								}}
							>
								<p className="Footer--Para">Privacy Policy</p>
							</a>
							<a
								href="#"
								target="_blank"
								rel="noreferrer"
								onClick={() => {
									if (window.gtag) {
										window.gtag('event', 'Click', {
											event_category: 'Landing Page',
											event_label: 'return_refund',
										});
									}
								}}
							>
								<p className="Footer--Para">Return & Refund</p>
							</a>
						</div>
						<div
							className="Footer--Social"
							style={isMobile ? { textAlign: 'center' } : {}}
						>
							<div
								className="Footer--SocialRow"
								style={
									isMobile ? { flexDirection: 'column' } : {}
								}
							>
								<h1 className="Footer--Title">FOLLOW US</h1>
								<div className="Footer--SocialRowIcons">
									<a
										href="http://www.facebook.com/antino"
										target="_blank"
										rel="noreferrer"
										onClick={() => {
											if (window.gtag) {
												window.gtag('event', 'Click', {
													event_category:
														'Landing Page',
													event_label:
														'social_facebook',
												});
											}
										}}
									>
										<img
											className="Footer--SocialRowIconsImg"
											src={fblogo}
											alt="fb"
										/>
									</a>
									<a
										href="https://instagram.com/antino"
										target="_blank"
										rel="noreferrer"
										onClick={() => {
											if (window.gtag) {
												window.gtag('event', 'Click', {
													event_category:
														'Landing Page',
													event_label:
														'social_instagram',
												});
											}
										}}
									>
										<img
											className="Footer--SocialRowIconsImg"
											src={instalogo}
											alt="insta"
										/>
									</a>
									<a
										href="https://www.linkedin.com/antino"
										target="_blank"
										rel="noreferrer"
										onClick={() => {
											if (window.gtag) {
												window.gtag('event', 'Click', {
													event_category:
														'Landing Page',
													event_label:
														'social_linkedin',
												});
											}
										}}
									>
										<img
											className="Footer--SocialRowIconsImg"
											src={linklogo}
											alt="linkedin"
										/>
									</a>
								</div>
							</div>
						</div>
					</React.Fragment>
				)}
			</div>
		);
	}
}

export default Footer;
