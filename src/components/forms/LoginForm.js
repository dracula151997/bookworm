import React from 'react'
import { Button, Form, FormField } from 'semantic-ui-react'
import validator from 'validator'
import InlineErrorMsg from '../messages/InlineErrorMessage'
import PropTypes from 'prop-types'

class LoginForm extends React.Component {
    state = {
        data: {
            email: '',
            password: '',
        },
        loading: false,
        errors: {},
    }

    onChange = e => {
        this.setState({
            data: { ...this.state.data, [e.target.name]: e.target.value }
        })
    }

    onSubmit = () => {
        const errors = this.validate(this.state.data);

        this.setState({ errors })
        //return the user data(email and password) from that component to Parent component only if
        //the validation is success (No errors)
        if(Object.keys(errors).length === 0){
            this.props.submit(this.state.data);
       
        }
    }

    validate = data => {

        const errors = {};

        if (!data.password) errors.password = "Can't be blank";
        if (!validator.isEmail(data.email)) errors.email = "Invalid email";

        return errors;
    }

    render() {
        const { data, errors } = this.state
        //Note that: !!errors.email return true only if the email error is not empty
        //otherwise return false
        console.log("Hello", errors.password);

        return (
            <Form onSubmit={this.onSubmit}>
                <FormField error={!!errors.email}>
                    <label htmlFor='email'>Email</label>
                    <input placeholder='example@example.com'
                        type='email'
                        id='email'
                        name='email'
                        value={data.email}
                        onChange={this.onChange} />

                    {errors.email && <InlineErrorMsg error={errors.email} />}

                </FormField>


                <FormField error={!!errors.password}>
                    <label htmlFor='password'>Password</label>
                    <input placeholder='Make it secure'
                        type='password'
                        id='password'
                        name='password'
                        value={data.password}
                        onChange={this.onChange} />

                        {errors.password && <InlineErrorMsg error={errors.password}/>}
                </FormField>
                <Button primary>Login</Button>
            </Form>
        )
    }

}

LoginForm.propTypes = {
    submit: PropTypes.func.isRequired
}

export default LoginForm