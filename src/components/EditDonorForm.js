import { useRef, useState } from "react";

function EditDonorForm(props){

    console.log(props.phoneNumber);

    const [isEmailChecked, setIsEmailChecked] = useState(props.emailNotification === true);
    const [isSmsChecked, setIsSmsChecked] = useState(props.smsNotification === true);


    const url = 'http://localhost:8080/donors/'+props.id;

    const firstNameInputRef = useRef();
    const lastNameInputRef = useRef();
    const ageInputRef = useRef();
    const countyInputRef = useRef();
    const bloodTypeInputRef = useRef();
    const phoneInputRef = useRef();
    const emailNotInputRef = useRef();
    const smsNotInputRef = useRef();

    function handleEmailCheckboxChange() {
        setIsEmailChecked(!isEmailChecked);
    }

    function handleSmsCheckboxChange() {
        setIsSmsChecked(!isSmsChecked);
    }

    function submitHandler(event) {
        event.preventDefault();

        const enteredFirstName = firstNameInputRef.current.value;
        const enteredLastName = lastNameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;
        const enteredCounty = countyInputRef.current.value;
        const enteredBloodType = bloodTypeInputRef.current.value;
        const enteredPhone = phoneInputRef.current.value;
        const enteredEmailNot = emailNotInputRef.current.value;
        const enteredSmsNot = smsNotInputRef.current.value;

        const donorNewData = {
            email: 'cv',
            password: 'cv',
            firstName: enteredFirstName,
            lastName: enteredLastName,
            county: enteredCounty,
            age: enteredAge,
            phoneNumber: enteredPhone,
            bloodType: enteredBloodType,
            emailNotification: enteredEmailNot,
            smsNotification: enteredSmsNot,
        }

        fetch( url,
            {
                method: 'PUT',
                body: JSON.stringify(donorNewData),
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        ).then((response) => {
            return response.json();
        }).then((data) => {
            const newDonorData = {
                id: data,
                ...data[data]
            };
            window.location.reload();
        })
    }

    return(
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor='firstName'>First Name </label>
                <input type='text' id='firstName' ref={firstNameInputRef} defaultValue={props.firstName} />
            </div>
            <div>
                <label htmlFor='lastName'>Last Name </label>
                <input type='text' id='lastName' ref={lastNameInputRef} defaultValue={props.lastName} />
            </div>
            <div>
                <label htmlFor='age'>Age </label>
                <input type='text' id='age' ref={ageInputRef} defaultValue={props.age} />
            </div>
            <div>
                <label htmlFor='county'>County </label>
                <input type='text' id='county' ref={countyInputRef} defaultValue={props.county} />
            </div>
            <div>
                <label htmlFor='bloodType'>Blood Type </label>
                <input type='text' id='bloodType' ref={bloodTypeInputRef} defaultValue={props.bloodType} />
            </div>
            <div>
                <label htmlFor='phone'>Phone Number</label>
                <input type='text' id='phone' ref={phoneInputRef} defaultValue={props.phoneNumber}/>
            </div>
            <div>
                <input type='checkbox' id='emailNotification' checked={isEmailChecked} value={isEmailChecked} onChange={handleEmailCheckboxChange} ref={emailNotInputRef}/>
                <label htmlFor='emailNotification'>Email Notification</label>
            </div>
            <div>
                <input type='checkbox' id='smsNotification' checked={isSmsChecked} value={isSmsChecked} onChange={handleSmsCheckboxChange} ref={smsNotInputRef}/>
                <label htmlFor='smsNotification'>SMS Notification</label>
            </div>
            <button type='submit'>Save</button>
        </form>
    );
}

export default EditDonorForm;