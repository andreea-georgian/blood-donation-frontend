import { useState, useRef } from "react";

function CenterItem(props) {
    const [calendarIsOpen, setCalendarIsOpen] = useState(false);
    const dateInputRef = useRef();

    function makeAppointmentHandler() {
        const url = 'http://localhost:8080/centers/' + props.id + '/valid';

        setCalendarIsOpen(true);

        fetch(url).then((response) => {
            response.json().then((body) => {
                body.forEach((date) => {
                    const sel = document.getElementById("dates")
                    if(sel !== null) {
                        const option = document.createElement("option")
                        option.innerText = date
                        sel.appendChild(option)   
                    }
                })
            })
        })
    }

    function closeMakeAppointmentHandler(event) {
        event.preventDefault();

        const enteredDate = dateInputRef.current.value;

        const appointmentData = {
            donorId: props.donorId,
            centerId: props.id,
            date: enteredDate
        }

        fetch( 
            'http://localhost:8080/appointments',
            {
                method: 'POST',
                body: JSON.stringify(appointmentData),
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        ).then((response) => {
            if(response.ok)
                alert("The appointment is saved!");
                window.location.reload();
        })

        setCalendarIsOpen(false);
    }

    return(
        <li>
            <h4>Name: {props.name}</h4>
            <div>Timetable: {props.timetable}</div>
            <button on onClick={makeAppointmentHandler}>Make an appointment</button>
            <h4 />

            { calendarIsOpen && 
                <div>
                    <select id='dates' ref={dateInputRef}>

                    </select>
                    <button onClick={closeMakeAppointmentHandler}>Save appointment</button>
                </div> }
        </li>
    );
}

export default CenterItem;