import { Component } from 'react';
import './sign-in.styles.scss'
import FormInput from "../../components/form-input/form-input.component";

class SignIn extends Component {
    constructor() {
        super()

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = () => {
        Event.preventDefault()
        this.setState({email: '', password: ''})
    }

    handleChange = event => {
        const { value, name } = event.target

        this.setState({ [name]: value})
    }

    render() {
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='email'
                        type='email' 
                        label='email'
                        value={this.state.email} 
                        handleChange={this.handleChange}
                        required 
                    />
                    <FormInput 
                        name='password' 
                        type='password'
                        label='password' 
                        value={this.state.password}
                        handleChange={this.handleChange}
                        required
                    />

                    <FormInput type='submit' value='Submit Form'/>
                </form>
            </div>
        )
    }
}

export default SignIn