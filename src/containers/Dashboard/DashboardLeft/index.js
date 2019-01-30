import React, { Component } from 'react';
import DropdownComponent from '../../../components/dropdown/index';
import { DashboardLeftContainer, DropdownSection, CoordinateListLabel, CoordinateListContainer, CoordinateList, CoordinateListItem, CoodinateListItemHeader } from './Wrapper';
import { connect } from 'react-redux'
class DashboardLeft extends Component {
    state = {
        slectedCity: "Select City",
        dropdownShow: false
    }

    changingItem = (item) => {
        console.log(item, "Hey I'm from hero")
        this.setState({
            slectedCity: item.itemLabel,
            dropdownShow: !this.state.dropdownShow
        })
    }

    dropdownClicked = () => {
        this.setState({
            dropdownShow: !this.state.dropdownShow
        })
    }
    
    render() {
        const dropDownDetails = {
            dropdownName: this.state.slectedCity,
            listItems: [
                {
                    itemLabel: "Bengaluru",
                    key: "Bengaluru"
                },
                {
                    itemLabel: "Tirupati",
                    key: "Tirupati"
                }
            ]
        }
        return (
            <DashboardLeftContainer>
                <DropdownSection>
                    <DropdownComponent dropdownClicked={this.dropdownClicked} dropdownShow={this.state.dropdownShow} itemChanger={this.changingItem} dropdownDetails={dropDownDetails} />
                </DropdownSection>
                <CoordinateListContainer>
                    <CoordinateListLabel> The List Of Coordinates :</CoordinateListLabel>
                </CoordinateListContainer>
                <CoordinateList>
                    {this.props.coordinates.map((polygonData, index) => {
                            return(
                                <div>
                                    <CoodinateListItemHeader>Coordinates of {index + 1} Polygon</CoodinateListItemHeader>
                                {polygonData.map((coordinatesList,index)=>{
                                    return (
                                    <CoordinateListItem key={index}> [{coordinatesList}]</CoordinateListItem>
                                    )
                                    
                                 })}
                                 </div>
                            ) 
                    })}
                </CoordinateList>
            </DashboardLeftContainer>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state, "from state ")
    return {
        coordinates: state.LoginReducer.coordinates,
    };
};

export default connect(mapStateToProps)(DashboardLeft)