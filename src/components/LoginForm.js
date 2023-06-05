import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import Card from './ui/Card';

function LoginForm(props) {

    const navigate = useNavigate();
    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    function submitHendler(event) {
        event.preventDefault();

        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        const userData = {
            email: enteredEmail,
            password: enteredPassword,
        }

        props.loginUser(userData);
    }

    function registerHandler(event) {
        event.preventDefault();

        navigate('/register');
    }

    return (
        <Card>
            <div>
                <form onSubmit={submitHendler}>
                    <div>
                        <label htmlFor='email'>Email </label>
                        <input type='email' required id='email' ref={emailInputRef} />
                    </div>
                    <div>
                        <label htmlFor='password'>Password </label>
                        <input type='password' required id='password' ref={passwordInputRef} />
                    </div>
                    <div>
                        <button type='submit'>Login</button>
                        <button type='button' onClick={registerHandler}>Register</button>
                    </div>
                </form>
            </div>
        </Card>
    );
}

export default LoginForm;