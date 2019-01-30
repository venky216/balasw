import React, { Component } from 'react'
import { Button } from 'react-materialize'

class ButtonComponent extends Component {

    loginClicked = (e) => {
        console.log(this.props.keyValue)
        this.props.clicked(e, this.props.keyValue);
    }

    render() {
        return (
            <div>
                <Button className={this.props.className} type={this.props.type} onClick={this.loginClicked} key={this.props.keyValue}>{this.props.buttonDetails.label}</Button>
            </div>
        )
    }
 


}

export default ButtonComponent