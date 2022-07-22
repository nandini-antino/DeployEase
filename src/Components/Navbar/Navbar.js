import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../Button/Button';
import { Pathname } from '../../Pathname';

import companyLogo from '../../Assets/CmpnyLogo.png';
import crosslogo from '../../Assets/NavbarIcons/close.png';
import homelight from '../../Assets/NavbarIcons/homelight.png';
import homedark from '../../Assets/NavbarIcons/homedark.png';
import featurelight from '../../Assets/NavbarIcons/featurelight.png';
import featuredark from '../../Assets/NavbarIcons/featuredark.png';
import securitylight from '../../Assets/NavbarIcons/securitylight.png';
import securitydark from '../../Assets/NavbarIcons/securitydark.png';
import rewardlight from '../../Assets/NavbarIcons/rewardlight.png';
import rewarddark from '../../Assets/NavbarIcons/rewarddark.png';
import './Navbar.scss';

class Navbar extends React.PureComponent {

    state = {
        expanded: null,
        active: 0
    }

    onExpandHandler = (value) => {
        this.setState({ expanded: value });
    }

    onActiveHandler = (type) => {
        switch (type) {
            case 'home':
                this.setState({ active: 0 })
                break;
            case 'features':
                this.setState({ active: 2 })
                break;
            case 'security':
                this.setState({ active: 3 })
                break;
            case 'rewards':
                this.setState({ active: 4 })
                break;
            default:
                break;
        }
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.active !== this.props.active) {
            this.setState({ active: this.props.active });
        }
    }

    render() {
        let { expanded, active } = this.state;

        return (
            <div className="Navbar">
                <Link to="/" className="Navbar--Logo">
                    <img
                        src={companyLogo}
                        className="Navbar--LogoLink"
                        alt="companyLogo"
                        onClick={() => {
                            if (window.gtag) {
                                window.gtag('event', 'Click', {
                                    event_category: 'Landing Page',
                                    event_label: 'logo_cta',
                                });
                            }
                        }}
                    />
                </Link>
                {
                    window.innerWidth < 820 ?
                        <React.Fragment>
                            {
                                expanded ?
                                    <div className="Navbar--Backdrop" onClick={() => this.onExpandHandler(false)}></div> : null
                            }
                            <div className={`Navbar--Mobile ${expanded === true ? 'Navbar--MobileExpanded' :
                                expanded === false ? 'Navbar--MobileShrinked' : ''}`}>
                                {
                                    !expanded ? null :
                                        <div className="Navbar--MobileContent">
                                            <div className="Navbar--MobileContentRow">
                                                <Link to={Pathname.WAITLIST_SIGNIN} className="Navbar--MobileContentRowLink">
                                                    Login
                                                </Link>
                                                <img src={crosslogo} className="Navbar--MobileCross"
                                                    onClick={() => this.onExpandHandler(false)} alt='cross' />
                                            </div>
                                            <div className="Navbar--MobileContentLinks">
                                                <a href="#home" className={`Navbar--MobileLink ${active === 0 ? "Navbar--MobileActive" : ''}`}
                                                    onClick={() => this.onActiveHandler('home')}>
                                                    <img src={active === 0 ? homedark : homelight} className="Navbar--MobileLinkImg" alt="home" />
                                                    Home
                                                </a>
                                                <a href="#features" className={`Navbar--MobileLink ${active === 2 ? "Navbar--MobileActive" : ''}`}
                                                    onClick={() => this.onActiveHandler('features')}>
                                                    <img src={active === 2 ? featuredark : featurelight} className="Navbar--MobileLinkImg" alt="feature" />
                                                    Features
                                                </a>
                                                <a href="#security" className={`Navbar--MobileLink ${active === 3 ? "Navbar--MobileActive" : ''}`}
                                                    onClick={() => this.onActiveHandler('security')}>
                                                    <img src={active === 3 ? securitydark : securitylight} className="Navbar--MobileLinkImg" alt="security" />
                                                    Security
                                                </a>
                                                <a href="#rewards" className={`Navbar--MobileLink ${active === 4 ? "Navbar--MobileActive" : ''}`}
                                                    onClick={() => this.onActiveHandler('rewards')}>
                                                    <img src={active === 4 ? rewarddark : rewardlight} className="Navbar--MobileLinkImg" alt="rewards" />
                                                    Rewards
                                                </a>
                                            </div>
                                        </div>
                                }
                            </div>
                        </React.Fragment> :
                        <div className="Navbar--Desktop">
                            <a href="#home" className={`Navbar--DesktopLink ${active === 0 ? "Navbar--DesktopActive" : ''}`}
                                onClick={() => this.onActiveHandler('home')}>Home</a>
                            <a href="#features" className={`Navbar--DesktopLink ${active === 2 ? "Navbar--DesktopActive" : ''}`}
                                onClick={() => this.onActiveHandler('features')}>Features</a>
                            <a href="#security" className={`Navbar--DesktopLink ${active === 3 ? "Navbar--DesktopActive" : ''}`}
                                onClick={() => this.onActiveHandler('security')}>Security</a>
                            <a href="#rewards" className={`Navbar--DesktopLink ${active === 4 ? "Navbar--DesktopActive" : ''}`}
                                onClick={() => this.onActiveHandler('rewards')}>Rewards</a>
                        </div>
                }
                {
                    window.innerWidth < 820 ?
                        <div className="Navbar--Action" onClick={() => this.onExpandHandler(true)} >
                            <hr className="Navbar--ActionLine" />
                            <hr className="Navbar--ActionLine" />
                            <hr className="Navbar--ActionLine" />
                        </div> :
                        <div className="Navbar--Action">
                            {
                                active === 0 ?
                                    <Link to={Pathname.WAITLIST_SIGNIN} className="Navbar--ActionLink">
                                        Login
                                    </Link> :
                                    <Button
                                        title="Reserve Now"
                                        type="normal"
                                        style={{
                                            padding: '0.6rem 3rem',
                                            fontSize: window.innerWidth > 1920 ? '1.35rem' :
                                                window.innerWidth > 1600 ? '1.25rem' :
                                                    window.innerWidth > 1440 ? '1.15rem' : '1rem'
                                        }}
                                        onClick={() => this.props.history.push(Pathname.WAITLIST)}
                                    />
                            }
                        </div>
                }
            </div>
        );
    }
}

export default Navbar;
