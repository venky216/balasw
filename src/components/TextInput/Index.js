import React from 'react'
import { Input } from 'react-materialize';

const TextInput = (props) => {

    const validateEmail = (email) => {
        // eslint-disable-next-line
        const pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
        const result = pattern.test(email)
        console.log("hey i'm entering")
        if (result === true) {
            props.textValue(email, true)
        } else {
            props.textValue(email, false)
        }
    }

    const validatePassword = (password) => {
        if (password.length >= 3) {
            props.textValue(password, true)
        } else {
            props.textValue(password, false)
        }
    }

    const TextChanged = (inputData) => {
        const type = (inputData.target.type)

        if (type === "email") {
            validateEmail(inputData.target.value)
        }

        if (type === "password") {
            validatePassword(inputData.target.value)
        }

    }
    
   const capitalize = function(e) {
        return e[0].toUpperCase() + e.slice(1);
    }

    const label =capitalize(props.type)

    return (

        <Input label={label} type={props.type} s={12} onChange={TextChanged} autoComplete="new-password"/>
    )

}

export default TextInput