import React, { Component } from 'react';
import Navbar from './Navbar/index';
import DashboardLeft from './DashboardLeft';
import { DashboardContainer } from './Wrapper';
import DashboardRight from './DashboardRight';

class Dashboard extends Component {

  componentWillMount(){
    if (localStorage.getItem("user") === null) {
      this.props.history.push('/login')
    }
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <DashboardContainer>
          <DashboardLeft />
          <DashboardRight />
        </DashboardContainer>
      </div>
    );
  }
}

export default Dashboard;
