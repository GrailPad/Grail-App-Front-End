import React from 'react';
import { Twitter, YouTube, HomeOutlined, PermIdentityOutlined, EmailOutlined } from "@material-ui/icons";

import './moreDetails.scss';
import logo from '../../images/LOGO-Final-e1636643001227.png';
import cover from '../../images/grailCover.png';


const MoreDetails = ({ open }) => {
    return (
        <div className='moreDetails' style={{ marginLeft: open ? '17rem' : '5vw' }}>
            <div className='header'>
                <div className='cover'>
                    <img className='coverImg' src={cover} alt='' />
                </div>
                <div className='temp'>
                    <div className='logoContain'>
                        <img src={logo} alt='' className='logo' />
                    </div>
                    <div className='titleContain'>
                        <h2>Project Name</h2>
                        <h4>Ticker</h4>
                    </div>
                    <div className='socialContain'>
                        <div className='tSocial'>
                            <div className='titleContainer'>
                                Twitter
                            </div>
                            <div className='seperate' />
                            <div className='iconContain'>
                                <Twitter className='icon' />
                            </div>
                        </div>
                        <div className='ySocial'>
                            <div className='titleContainer'>
                                Youtube
                            </div>
                            <div className='seperate' />
                            <div className='iconContain'>
                                <YouTube className='icon' />
                            </div>
                        </div>
                        <div className='mSocial'>
                            <div className='titleContainer'>
                                Medium
                            </div>
                            <div className='seperate' />
                            <div className='iconContain'>
                                <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous" />
                                <a target="_blank"><i class="fa fa-medium fa" aria-dden="true"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='main'>
                <div className='innerMainL'>
                    <div className='leftPrt'>
                        <div className='point' />
                        <div className='road' />
                        <div className='point' />
                        <div className='road' />
                        <div className='point' />
                        <div className='road' />
                        <div className='point' />
                    </div>
                    <div className='rightPrt'>
                        <div className='point'>
                            <h1>Pre-Launch</h1>
                            <span>Add your Wallet To whitelist</span>
                        </div>
                        <div className='step' />
                        <div className='point'>
                            <h1>Launch</h1>
                            <span>Buy your token in FCFS</span>
                        </div>
                        <div className='step' />
                        <div className='point'>
                            <h1>Launch Ends</h1>
                        </div>
                        <div className='step' />
                        <div className='point'>
                            <h1>Recieve Your Token</h1>
                        </div>
                    </div>
                </div>
                <div className='innerMainR'>
                    <div className='top'>
                        <h4>Pool Details</h4>
                    </div>
                    <div className='seperator' />
                    <div className='med'>
                        <span>Token Price:</span>
                        <span>$$$$</span>
                    </div>
                    <div className='med'>
                        <span>Pool Size:</span>
                        <span>300.000.000</span>
                    </div>
                    <div className='med'>
                        <span>Hard Cap:</span>
                        <span>2000 BNB</span>
                    </div>
                    <div className='med'>
                        <span>Soft Cap:</span>
                        <span>1000 BNB</span>
                    </div>
                    <div className='med'>
                        <span>Type:</span>
                        <span>Private</span>
                    </div>
                </div>
            </div>
            <div className='end'>
                <div className='top'>
                    <h4>Pool Details</h4>
                </div>
                <div className='seperator' />
                <div className='med'>
                    <div className='section'>
                        <HomeOutlined className='icon' />
                    </div>
                    <div className='section'>
                        <PermIdentityOutlined className='icon' />
                    </div>
                    <div className='section'>
                        <EmailOutlined className='icon' />
                    </div>
                </div>
                <div className='seperator' />
                <div className='below'>
                    <div className='top'>
                        <h4>This is icon title</h4>
                        <span style={{ color: 'var(--txtDark)' }}>
                            Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor.

                            Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MoreDetails;