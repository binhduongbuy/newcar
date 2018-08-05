import React from 'react';
import './SideDrawer.css';
import Link from "gatsby-link";
import {isAndroid, isIOS} from 'react-device-detect';
const logo01 = '/img/appStore.png';
const logo02 = '/img/googlePlay.png';
const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if(props.show){
        drawerClasses = 'side-drawer open';
    }

    let logo;
    if(isAndroid){
        logo = logo02;
    }else if(isIOS){
        logo = logo01;
    }

    return (
        <nav className={drawerClasses}>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/'>Features</Link></li>
                <li><Link to='/'>BlueMail Work</Link></li>
                <li><Link to='/'>News</Link></li>
                <li><Link to='/'>Desktop</Link></li>
                <li><Link to='/'>Download</Link></li>
                <li><Link to='/'>Blog</Link></li>
                <li><Link to='/'>Contact Us</Link></li>
                <img src={logo} alt='' style={{ position: 'fixed', bottom: '17px'}}/>
            </ul>
        </nav>
    );
}

export default sideDrawer;