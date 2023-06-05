import { useState } from "react";

import Card from "../ui/Card";
import EditDoctorForm from "./EditDoctorFrom";

function DoctorItem(props) {
    const [editIsOpen, setEditIsOpen] = useState(false);

    const newUrl = 'http://localhost:8080/doctors/'+props.id;
    function deleteHandler() {
        fetch( newUrl,
            {
                method: 'DELETE',
            }
        ).then((response) => {
            window.location.reload();
            console.log(response);
        })
    }

    function editHandler() {
        setEditIsOpen(true);
    }

    
    function closeEditForm() {
        setEditIsOpen(false);
    }

    return (
        <li>
            <Card>
                <h4>Name: {props.firstName} {props.lastName}</h4>
                <div>id: {props.id}</div>
                <div>Email: {props.email}</div>
                <div>Donation Center Id: {props.donationCenterId}</div>
                <div>Donation Center Name: {props.donationCenterName}</div>
                <button onClick={editHandler}>Edit</button>
                <button onClick={deleteHandler}>Delete</button>
                <h4 />
            </Card>
            { editIsOpen && ( <EditDoctorForm onSave={closeEditForm} 
                    key={props.id}
                    id={props.id}
                    firstName={props.firstName}
                    lastName={props.lastName}
                    email={props.email}
                    donationCenterId={props.donationCenterId}
                    donationCenterName={props.donationCenterName}/> )}
        </li>
    );
}

export default DoctorItem;