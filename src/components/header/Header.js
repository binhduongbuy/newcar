import React, {Fragment} from 'react';
import Toolbar from '../Toolbar/Toolbar';
import SideDrawer from '../SideDrawer/SideDrawer';
import BackDrop from '../Backdrop/Backdrop';

export default class Header extends React.Component {
    state = {
        sideDrawerOpen: false
    }

    drawerToggleClickHandler = () => {
        this.setState((prevState) => ({sideDrawerOpen: !prevState.sideDrawerOpen}))
    }

    backdropClickHandler = () => {
        this.setState({sideDrawerOpen: false});
    }

    render(){
        let backdrop;

        if(this.state.sideDrawerOpen){
            backdrop = <BackDrop click={this.backdropClickHandler} />;
        }
        return (
            <div>
                <Toolbar drawerToggleClickHandler={this.drawerToggleClickHandler}/>
                <SideDrawer show={this.state.sideDrawerOpen} />
                {backdrop}
            </div>
        )
    }
}