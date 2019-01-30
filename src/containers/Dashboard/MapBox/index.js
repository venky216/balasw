import React, { Component } from "react";
import ReactMapboxGl from "react-mapbox-gl";
import DrawControl from "react-mapbox-gl-draw";
import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";
import * as appActions from '../../../actions/LoginActions'
import { connect } from 'react-redux';


class MapBoxHolder extends Component {
    
     state ={
        coordinatepolygonList : []
     }
    onDrawCreate = ({ features }) => {
            var coordinatepolygonList = [ ...this.state.coordinatepolygonList];
            coordinatepolygonList.push(features[0].geometry.coordinates[0])
            this.setState({
                coordinatepolygonList
            })
            this.props.setCoordinates(coordinatepolygonList)
    };

    onDrawUpdate = ({ features }) => {
        console.log({ features });
    };

    render() {
        const Map = ReactMapboxGl({
            accessToken:
                "pk.eyJ1IjoiZmFrZXVzZXJnaXRodWIiLCJhIjoiY2pwOGlneGI4MDNnaDN1c2J0eW5zb2ZiNyJ9.mALv0tCpbYUPtzT7YysA2g"
        });
        if (!this.props.show) return null;
        return (
            <div className="App" id="fuck">
                <Map
                    style="mapbox://styles/mapbox/streets-v9" // eslint-disable-line
                    containerStyle={{
                        height: "80vh",
                    }}
                >
                    {this.props.show ? <DrawControl
                        position="top-left"
                        onDrawCreate={this.onDrawCreate}
                        onDrawUpdate={this.onDrawUpdate}
                    /> : null}
                </Map>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state, "from state ")
    return {
        coordinates: state.LoginReducer.coordinates,
        show:state.LoginReducer.show
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      setCoordinates: (data) =>
        dispatch(appActions.setCoordinates(data)),
      dispatch
    };
  };

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(MapBoxHolder);
