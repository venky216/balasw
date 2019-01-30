import React, { Component } from 'react'
import { LoginCard } from './Wrapper';
import ButtonComponent from '../../components/Button';
import TextInput from '../../components/TextInput/Index';
import * as appActions from '../../actions/LoginActions';
import { connect } from 'react-redux'
import Firebase from '../../config/FirebaseConfig';
import { buttonDetails } from './Constants';
class Login extends Component {

    state = {
        user: null,
        email: '',
        password: '',
        emailVerified: false,
        passwordVerified: false,
    }

    componentDidMount() {

        this.authListener()
    }

    authListener() {
        Firebase.auth().onAuthStateChanged((user) => {
            console.log('I am here: ',user);
            if (user) {
                console.log('called 1');
                this.setState({ user });
                localStorage.setItem('user', user.uid);
                this.props.history.push('/dashboard');
            } else {
                this.setState({ user: null });
                localStorage.removeItem('user');
            }
        })
    }

    emailChanged = (textValue, condition) => {
        
        if (condition) {
            this.setState({
                email: textValue,
                emailVerified: condition
            })
        }
    }

    passwordChanged = (textValue, condition) => {
        if (condition) {
            this.setState({
                password: textValue,
                passwordVerified: condition
            })
        }
    }

    loginClicked = (e, key) => {
        if (this.state.emailVerified && this.state.passwordVerified) {
            this.props.toggleDraw();
            Firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
            }).catch((error) => {
                console.log(error)
            })
        }

    }

    render() {
        console.log('inside login render', this.props.show);

        return (
            <LoginCard >
                <TextInput textValue={this.emailChanged} type="email" />
                <TextInput textValue={this.passwordChanged} type="password" />
                <ButtonComponent type="button" buttonDetails={buttonDetails} clicked={this.loginClicked} keyValue="login button" />
            </LoginCard>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        userName: state.LoginReducer.userName,
        show:state.LoginReducer.show
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleDraw: () =>
            dispatch(appActions.toggleDraw(true)),
        dispatch
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Login)