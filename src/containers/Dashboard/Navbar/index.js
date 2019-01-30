import React, { Component } from 'react'
import { NavbarContainer, NavbarHeader, LogoutButton } from './Wrapper';
import Firebase from '../../../config/FirebaseConfig';
import * as appActions from '../../../actions/LoginActions';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
// import { compose } from 'redux';
import { buttonDetails } from './Constants';
class Navbar extends Component {

    logoutClicked = () => {
        this.props.toggleDraw()
        setTimeout(this.doLogOut, 2000)
    }
    doLogOut = ()=>{
        Firebase.auth().signOut();
        localStorage.removeItem('user');
        if (localStorage.getItem("user") === null) {
            this.props.history.push('/login')
        }
    }
    render() {

        return (
            <NavbarContainer>
                <NavbarHeader>Polygon Maps</NavbarHeader>
                <LogoutButton className="" type="button" buttonDetails={buttonDetails} clicked={this.logoutClicked} keyValue="logout"></LogoutButton>
            </NavbarContainer >
        )
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleDraw: () =>
            dispatch(appActions.toggleDraw(false)),
        dispatch
    };
};
const mapStateToProps = (state) => {
    return {
        show: state.LoginReducer.show
    };
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Navbar)
);