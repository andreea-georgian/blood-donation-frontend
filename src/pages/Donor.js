import { useLocation, useNavigate } from "react-router-dom";

import EditDonorForm from "../components/EditDonorForm";
import CenterList from "../components/centers/CenterList";
import AppointmentList from "../components/appointments/AppointmentList";

function DonorPage() {
    const location = useLocation();
    const dataRecived = location.state.userData.id;

    const navigate = useNavigate();

    function deleteHandler(event) {
        event.preventDefault();

        const url = 'http://localhost:8080/donors/' + dataRecived.id;

        fetch( url,
            {
                method: 'DELETE',
            }
        ).then(() => {
            navigate('/', {replace: true});
        });
    }

    console.log(dataRecived);

    return (
        <div>
            <section>
                <h1>Your profile</h1>
                <button onClick={deleteHandler}>Delete your account</button>
                <EditDonorForm
                    key={dataRecived.id}
                    id={dataRecived.id}
                    firstName={dataRecived.firstName}
                    lastName={dataRecived.lastName}
                    county={dataRecived.county}
                    age={dataRecived.age}
                    phoneNumber={dataRecived.phoneNumber}
                    bloodType={dataRecived.bloodType} 
                    smsNotification={dataRecived.smsNotification}
                    emailNotification={dataRecived.emailNotification}/>
            </section>
            <section>
                <h1>Donation Centers In Your County</h1>
                <CenterList donorId={dataRecived.id} county={dataRecived.county}/>
            </section>
            <section>
                <h1>Your Appointments</h1>
                <AppointmentList 
                    url={'http://localhost:8080/appointments/donors/' + dataRecived.id}
                    buttonText='Cancel Appointment'
                />
            </section>
        </div>
        
    );
}

export default DonorPage;