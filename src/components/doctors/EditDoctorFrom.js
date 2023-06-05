import { useRef } from "react";

import Card from "../ui/Card";

function EditDoctorForm(props) {

    const newUrl = 'http://localhost:8080/doctors/'+props.id;

    const emailInputRef = useRef();
    const firstNameInputRef = useRef();
    const lastNameInputRef = useRef();
    const donationCenterIdRef = useRef();

    function submitHandler(event) {
        event.preventDefault();

        const enteredEmail = emailInputRef.current.value;
        const enteredFirstName = firstNameInputRef.current.value;
        const enteredLastName = lastNameInputRef.current.value;
        const enteredDonationCenterId = donationCenterIdRef.current.value;

        const doctorNewData = {
            email: enteredEmail,
            firstName: enteredFirstName,
            lastName: enteredLastName,
            donationCenterId: enteredDonationCenterId,
            donationCenterName: 'cv',
        }

        fetch( newUrl,
            {
                method: 'PUT',
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
            props.onSave();
        })
    }

    return (
        <Card>
            <div>
                <form onSubmit={submitHandler}>
                    <div>
                        <label htmlFor='email'>Email </label>
                        <input type='text' required id='email' ref={emailInputRef} defaultValue={props.email} />
                    </div>
                    <div>
                        <label htmlFor='firstName'>First name </label>
                        <input type='text' required id='firstName' ref={firstNameInputRef} defaultValue={props.firstName} />
                    </div>
                    <div>
                        <label htmlFor='lastName'>Last Name </label>
                        <input type='text' required id='lastName' ref={lastNameInputRef} defaultValue={props.lastName} />
                    </div>
                    <div>
                        <label htmlFor='centerId'>Donation Center Id </label>
                        <input type='text' required id='centerId' ref={donationCenterIdRef} defaultValue={props.donationCenterId} />
                    </div>
                    <div>
                        <label>Donation Center Name: {props.donationCenterName}</label>
                    </div>
                    <button type='submit'>Save</button>
                </form>
            </div>
        </Card>
    );
}

export default EditDoctorForm;