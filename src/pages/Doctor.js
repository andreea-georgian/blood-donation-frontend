import { useLocation } from "react-router-dom";

import AppointmentList from "../components/appointments/AppointmentList";

function DoctorPage() {
    const location = useLocation();
    const dataRecived = location.state.userData.id;

    function handleButton(event) {
        event.preventDefault();

        fetch('http://localhost:8080/doctors/notifications/' + dataRecived.county,
            { method: 'PUT' }
        ).then((response) => {
            if(response.ok)
                alert("Invitation sent");
        })
    }

    return (
        <div>
            <section>
                <h1>Today's appointments</h1>
                <AppointmentList url={'http://localhost:8080/appointments/doctors/'+dataRecived.id+'/today'} buttonText='Confirm Appointment' />
            </section>
            <section>
                <h1>All appointments</h1>
                <AppointmentList url={'http://localhost:8080/appointments/doctors/'+dataRecived.id} buttonText='Confirm Appointment' />
            </section>
            <section>
                <h1>Is there a need for blood at the center?</h1>
                <button onClick={handleButton}>Invite people to donate!</button>
            </section>
        </div>
    );
}

export default DoctorPage;