function AppointmentItem(props) {

    const dateObject = new Date(props.date);
    const year = dateObject.getFullYear();
    const month = dateObject.getMonth() + 1;
    const day = dateObject.getDate();

    function clickHandler() {
        const url='http://localhost:8080/appointments/'+props.id;

        if (props.buttonText==='Cancel Appointment') {
            fetch(url,
                {
                        method: 'DELETE'
                }).then((response) => {
                    if(response.ok) {
                        alert("The appointments is canceled!");
                        window.location.reload();
                    }
                    else
                        alert("Invalid date!");      
                })
        } else {
            fetch(url,
                {
                    method: 'PUT'
                }).then((response) => {
                    alert("The appointments is confirmed!");
                    window.location.reload();     
                })
        }
    }

    return (
        <li>
            <div>Date: {day}/{month}/{year}</div>
            <div>Donation Center: {props.center.name}</div>
            <div>Doctor: {props.doctor.firstName} {props.doctor.lastName}</div>
            <div>Confirmed: {props.confirmed ? 'Yes' : 'No'}</div>
            <button onClick={clickHandler}>{props.buttonText}</button>
        </li>
    );
}

export default AppointmentItem;