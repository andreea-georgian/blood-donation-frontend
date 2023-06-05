import { useRef } from "react";

function AddDoctor() {

    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const firstNameInputRef = useRef();
    const lastNameInputRef = useRef();
    const donationCenterIdRef = useRef();

    function submitHandler(event) {
        event.preventDefault();

        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;
        const enteredFirstName = firstNameInputRef.current.value;
        const enteredLastName = lastNameInputRef.current.value;
        const enteredDonationCenterId = donationCenterIdRef.current.value;

        const doctorNewData = {
            email: enteredEmail,
            password: enteredPassword,
            firstName: enteredFirstName,
            lastName: enteredLastName,
            donationCenterId: enteredDonationCenterId,
        }

        fetch(
            'http://localhost:8080/doctors',
            {
                method: 'POST',
                body: JSON.stringify(doctorNewData),
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        ).then((response) => {
            return response.json();
        }).then((data) => {
            const newDoctorData = {
                id: data,
                ...data[data]
            };
            window.location.reload();
            console.log(newDoctorData);
        })
    }

    return(
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor='email'>Email </label>
                    <input type='email' required id='email' ref={emailInputRef}/>
                </div>
                <div>
                    <label htmlFor='password'>Password </label>
                    <input type='password' required id='password' ref={passwordInputRef}/>
                </div>
                <div>
                    <label htmlFor='firstName'>First name </label>
                    <input type='text' required id='firstName' ref={firstNameInputRef}/>
                </div>
                <div>
                    <label htmlFor='lastName'>Last Name </label>
                    <input type='text' required id='lastName' ref={lastNameInputRef}/>
                </div>
                <div>
                    <label htmlFor='centerId'>Donation Center Id </label>
                    <input type='text' required id='centerId' ref={donationCenterIdRef}/>
                </div>
                <button type='submit'>Add doctor</button>
            </form>
        </div>
    );
}

export default AddDoctor;