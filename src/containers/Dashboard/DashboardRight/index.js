import React, { Component } from 'react'
import { MapContainer, ButtonContainer, StyledButtonComponent } from './Wrapper';
import MapBoxHolder from '../MapBox/index';


class DashboardRight extends Component {

    buttonDetails = {
        label: 'save',
        key: 'save'
    }
    cancelButtonDetails = {
        label: 'Cancel',
        key: 'Cancel'
    }

    logoutClicked = () => {
        this.props.history.push('/login');
    }

    componentWillUnmount() {
        let el = document.getElementById('conatainer');
        el.remove();
    }

    render() {
        return (

            <MapContainer id="conatainer">
                <MapBoxHolder />
                <ButtonContainer>
                    <StyledButtonComponent className="" type="button" buttonDetails={this.buttonDetails} clicked={this.logoutClicked} keyValue="Save" />
                    <StyledButtonComponent className="" type="button" buttonDetails={this.cancelButtonDetails} clicked={this.logoutClicked} keyValue="Cancel" />
                </ButtonContainer>
            </MapContainer>

        )
    }
}

export default DashboardRight