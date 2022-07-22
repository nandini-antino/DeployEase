import React from 'react';

import Input from '../Input/Input';
import Button from '../Button/Button';
import Server from '../../Server';

import emaillogo from '../../Assets/email.png';
import locationlogo from '../../Assets/location.png';

class FooterMobile extends React.Component {
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
			if (window.gtag) {
				window.gtag('event', 'Click', {
					event_category: 'Landing Page',
					event_label: 'contact_us_mobile_submit',
					value: {
						name,
						email,
						subject,
						message,
					},
				});
			}

			this.setState({ isLoading: true });
			let data = {
				name,
				email,
				subject,
				message,
			};

			Server.post('/api/v1/waitlist/sendContactDetails', data)
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
			<div>
				<div className="Footer--Desktop">
					<div
						className="Footer--DesktopLeft"
						style={{ width: '100%' }}
					>
						<div
							className="Footer--Info"
							style={{
								textAlign: 'center',
								alignItems: 'center',
							}}
						>
							<h1 className="Footer--Title">ABOUT US</h1>
							<p className="Footer--Para">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Et officiis nesciunt accusantium temporibus, commodi sed. Exercitationem quam earum eveniet dolorum nihil eligendi, illo tempore! Quo est nostrum repellat rem iusto.
							</p>
						</div>
						<div
							className="Footer--DesktopRight"
							style={{
								width: '100%',
								alignItems: 'center',
								marginBottom: '8vh',
							}}
						>
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
										width: '50%',
										opacity: isValid ? 1 : 0.5,
										fontSize: '1.4rem',
									}}
									onClick={this.onSubmitHandler}
								/>
							)}
						</div>
						<div
							className="Footer--Info"
							style={{ alignItems: 'center' }}
						>
							<h1 className="Footer--Title">REACH US</h1>
							<div
								className="Footer--InfoRow"
								style={{
									alignItems: 'center',
									flexDirection: 'column',
									textAlign: 'center',
								}}
							>
								<img
									src={emaillogo}
									className="Footer--InfoRowIcon"
									alt="email"
									style={{ margin: '0 0 1rem 0' }}
								/>
								<p className="Footer--Para">help@antino.app</p>
							</div>
							<div
								className="Footer--InfoRow"
								style={{
									alignItems: 'center',
									flexDirection: 'column',
									textAlign: 'center',
								}}
							>
								<img
									src={locationlogo}
									className="Footer--InfoRowIcon"
									alt="location"
									style={{ margin: '0 0 1rem 0' }}
								/>
								<p className="Footer--Para">
									Antino labs Pvt Ltd, <br /> 6th
									Floor, Spaze IT-Park, <br /> Gurgaon -
									122018
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default FooterMobile;
