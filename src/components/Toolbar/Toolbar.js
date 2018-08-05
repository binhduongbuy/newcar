import React from 'react';
import Link from "gatsby-link";
import './Toolbar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
const logo = '/img/bluemail_logo.png';

const toolbar = props => (
    <header className='toolbar'>
        <nav className='toolbar__navigation'>
            
            <div className='toolbar__logo'><a href='/'><img src={logo} /></a></div>
            <div className='spacer' />
            <div className='toolbar_navigation-items'>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/'>Features</Link></li>
                    <li><Link to='/'>BlueMail Work</Link></li>
                    <li><Link to='/news'>News</Link></li>
                    <li><Link to='/'>Desktop</Link></li>
                    <li><Link to='/'>Download</Link></li>
                    <li><Link to='/blog'>Blog</Link></li>
                    <li><Link to='/contact'>Contact Us</Link></li>
                </ul>
            </div>
            <div className='toolbar__toggle-button'>
                <DrawerToggleButton click={props.drawerToggleClickHandler} />
            </div>
        </nav>
    </header>
);

export default toolbar;