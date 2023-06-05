import { useRef, useState } from 'react';

import Card from './ui/Card';

function RegisterForm(props) {

    const [isEmailChecked, setIsEmailChecked] = useState(props.emailNotification === false);
    const [isSmsChecked, setIsSmsChecked] = useState(props.smsNotification === false);

    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const firstNameInputRef = useRef();
    const lastNameInputRef = useRef();
    const countyInputRef = useRef();
    const ageInputRef = useRef();
    const phoneInputRef = useRef();
    const bloodInputRef = useRef();
    const emailNotInputRef = useRef();
    const smsNotInputRef = useRef();

    function handleEmailCheckboxChange() {
        setIsEmailChecked(!isEmailChecked);
    }

    function handleSmsCheckboxChange() {
        setIsSmsChecked(!isSmsChecked);
    }

    function submitHendler(event) {
        event.preventDefault();

        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;
        const enteredFirstName = firstNameInputRef.current.value;
        const enteredLastName = lastNameInputRef.current.value;
        const enteredCounty = countyInputRef.current.value;
        const enteredAge = ageInputRef.current.value;
        const enteredPhone = phoneInputRef.current.value;
        const enteredBlood = bloodInputRef.current.value;
        const enteredEmailNot = emailNotInputRef.current.value;
        const enteredSmsNot = smsNotInputRef.current.value;

        const userData = {
            email: enteredEmail,
            password: enteredPassword,
            firstName: enteredFirstName,
            lastName: enteredLastName,
            county: enteredCounty,
            age: enteredAge,
            phoneNumber: enteredPhone,
            bloodType: enteredBlood,
            emailNotification: enteredEmailNot,
            smsNotification: enteredSmsNot,
        }

        props.registerUser(userData);
    }   

    return (
        <Card>
            <div>
                <form onSubmit={submitHendler}>
                    <div>
                        <label htmlFor='email'>Email</label>
                        <input type='email' required id='email' ref={emailInputRef} />
                    </div>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <input type='password' required id='password' ref={passwordInputRef} />
                    </div>
                    <div>
                        <label htmlFor='firstName'>First Name</label>
                        <input type='text' id='firstName' ref={firstNameInputRef} />
                    </div>
                    <div>
                        <label htmlFor='lastName'>Last Name</label>
                        <input type='text' id='lastName' ref={lastNameInputRef} />
                    </div>
                    <div>
                        <label htmlFor='county'>County</label>
                        <input type='text' id='county' ref={countyInputRef} />
                    </div>
                    <div>
                        <label htmlFor='age'>Age</label>
                        <input type='text' id='age' ref={ageInputRef} />
                    </div>
                    <div>
                        <label htmlFor='phone'>Phone Number</label>
                        <input type='text' id='phone' ref={phoneInputRef} />
                    </div>
                    <div>
                        <label htmlFor='bloodType'>Blood Type</label>
                        <input type='text' id='bloodType' ref={bloodInputRef} />
                    </div>
                    <div>
                        <input type='checkbox' id='emailNotification' checked={isEmailChecked} value={isEmailChecked} onChange={handleEmailCheckboxChange} ref={emailNotInputRef}/>
                        <label htmlFor='emailNotification'>Email Notification</label>
                    </div>
                    <div>
                        <input type='checkbox' id='smsNotification' checked={isSmsChecked} value={isSmsChecked} onChange={handleSmsCheckboxChange} ref={smsNotInputRef}/>
                        <label htmlFor='smsNotification'>SMS Notification</label>
                    </div>
                    <button>Register</button>
                </form>
            </div>
        </Card>
    );
}

export default RegisterForm;