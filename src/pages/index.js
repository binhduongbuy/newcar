import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

const pic01 = '/img/pic01.png'
const pic02 = '/img/pic02.png'
const pic03 = '/img/pic03.png'
const pic04 = '/img/pic04.png'
const pic05 = '/img/pic05.png'
const devices = '/img/BlueMail_all_devices.png';
const logo01 = '/img/appStore.png';
const logo02 = '/img/googlePlay.png';
const logo03 = '/img/amazon.png';
const logo04 = '/img/euGdpr.png';

class Homepage extends React.Component {
    render() {
        return (
            <div>
                <section id="header">
                    <div className="inner">
                        <span className="icon major fa-envelope"></span>
                        <h1>ALL YOU NEED IS BLUE</h1>
                        <p>Email & Calendar App</p>
                        <ul className="actions">
                            <li><a href="#top" className="button scrolly">Discover</a></li>
                        </ul>
                    </div>
                </section>
                
                <section id="top" style={{marginTop: '30px'}}>
                    <div className='grid-wrapper brand-buttons'>
                        <a href=''><img className='col-3' src={logo01} alt='' /></a>
                        <a href=''><img className='col-3' src={logo02} alt='' /></a>
                        <a href=''><img className='col-3' src={logo03} alt='' /></a>
                        <a href=''><img className='col-3' src={logo04} alt='' /></a>
                    </div>
                </section>

                <section id="one" style={{paddingTop: '30px'}} className="main style1">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <header className="major">
                                <h2>Blue Mail - Email & Calendar App</h2>
                            </header>
                            <p>BlueMail is a free, beautifully designed, universal email app, capable of managing an unlimited number of mail accounts from various providers, allowing for smart push notifications and group emailing while enabling personalization across multiple email accounts. BlueMail is the perfect replacement for your stock email app.</p>
                        </div>
                        <div className="col-6 iframe-container">         
                        <iframe
                            src="https://www.youtube.com/embed/2Kl8WHTjchY?rel=0&amp;showinfo=0" 
                            frameBorder="0" 
                            allowFullScreen>
                            </iframe>
                        </div>
                    </div>
                </section>

                

                <section id="two" className="main style2">
                    <div className='grid-wrapper' style={{textAlign: 'center'}}>
                        <div className='col-12'>
                            <h1>BlueMail. Anywhere. Any Device.</h1>
                        </div>
                        <div className='col-12' style={{textAlign: 'center'}}>
                            <img src={devices} style={{width: '100%', height: 'auto'}} alt='' />
                        </div>
                    </div>
                </section>

                <section id="three" className="main style1 special">
                    <div className="grid-wrapper">
                        <div className="col-12">
                            <header className="major">
                                <h2>Features</h2>
                            </header>
                            <p>Powerful & Intuitive – All you need is Blue!</p>
                        </div>

                        <div className="col-6">
                            <span className="image fit"><img src={pic01} alt="" /></span>
                            <h3>People-Centric Mailbox</h3>
                            <p>
                            With the people-centric mailbox, you can focus your attention on emails from only people at the flip of a switch by using People Mode.
                            BlueMail’s navigation picker helps you access any account: IMAP, Exchange or POP3 in a breeze. Each account can be identified by a service provider avatar.
                            We are all about making mobile email work for people, again.</p>
                        </div>
                        <div className="col-6">
                            <span className="image fit"><img src={pic03} alt="" /></span>
                            <h3>Integrated Calendar</h3>
                            <p>
                            With integrated Calendar, BlueMail automatically syncs your events and updates them on the fly.
                            Plan events, invite your contacts, and set reminders right from within BlueMail.
                            Our Day and Agenda view allow you to find the right balance in planning your daily and weekly schedule. Calendar has never been this easy.
                            </p>
                        </div>
                        <div className="col-6">
                            <span className="image fit"><img src={pic03} alt="" /></span>
                            <h3>Groups Made Easy</h3>
                            <p>
                            BlueMail allows you to quickly send emails to a group of members without inserting all names individually or for a corporate’s IT to define each and every group.
                            And by combining clusters with groups, you simply press the avatar assigned to each email on the left to immediately see emails from a group.
                            </p>
                        </div>
                        <div className="col-6">
                            <span className="image fit"><img src={pic01} alt="" /></span>
                            <h3>Clusters – Productivity Perfected</h3>
                            <p>
                            By smoothly organizing your emails into people, groups, and services, clusters change how you see your email. For each cluster, you can see all emails in a single expanding slot.
                            BlueMail aggregates your emails for you by providing the full context at your fingertips. Clusters refine email productivity.
                            </p>
                        </div>
                    </div>
                </section>

                <section id="four" className="main style2 special">
                    <div className='grid-wrapper'>
                        <div className='col-12'>
                            <h1>Flat or Material. Stylish and Modern.</h1>
                            <p>With a wide range of visual customizations, from flat to material design, swipe actions and menus, action bars and buttons, colors and themes – BlueMail delivers a stunning UI. Whether you go Pink or Blue. Go BlueMail.</p>
                        </div>
                        
                        <div className='col-12' style={{textAlign: 'center'}}>
                            <img src={pic05} style={{width: '100%', height: 'auto'}} alt='' />
                        </div>
                    </div>
                </section>

                <section id="five">
                    <div className='grid-wrapper brand-buttons'>
                        <a href=''><img className='col-3' src={logo01} alt='' /></a>
                        <a href=''><img className='col-3' src={logo02} alt='' /></a>
                        <a href=''><img className='col-3' src={logo03} alt='' /></a>
                        <a href=''><img className='col-3' src={logo04} alt='' /></a>
                    </div>
                </section>
            </div>
        );
    }
}

export default Homepage;

